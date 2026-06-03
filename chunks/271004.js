"use strict";
n.d(t, { jA: () => p, As: () => h, XH: () => f });
var i = n(636537),
    r = n(228366),
    s = n(763827),
    a = n(403362);
n(321073);
var o = n(272355),
    l = n(967198),
    u = n(857071),
    c = n(742872);
class d extends o.A {
    timers = new Map();
    viewedLurkingGuildIds = new Set();
    navigatedAwayFromLurkingGuildIds = new Set();
    hasNavigatedAway(e) {
        return this.navigatedAwayFromLurkingGuildIds.has(e);
    }
    _initialize() {
        u.A.addChangeListener(this.handleStoreChange),
            l.A.addChangeListener(this.handleStoreChange),
            s.A.addChangeListener(this.handleStoreChange),
            this.handleStoreChange();
    }
    _terminate() {
        for (let e of (u.A.removeChangeListener(this.handleStoreChange),
        l.A.removeChangeListener(this.handleStoreChange),
        s.A.removeChangeListener(this.handleStoreChange),
        this.timers.values()))
            clearTimeout(e);
        this.timers.clear(), this.viewedLurkingGuildIds.clear(), this.navigatedAwayFromLurkingGuildIds.clear();
    }
    handleStoreChange = () => {
        this.trackViewedLurkingGuilds(),
            this.evictOverflowingLurkers(),
            this.ensureMissingExpiries(),
            this.expireElapsed(),
            this.syncTimers();
    };
    trackViewedLurkingGuilds = () => {
        let e = new Set(u.A.lurkingGuildIds());
        for (let t of Array.from(this.viewedLurkingGuildIds)) e.has(t) || this.viewedLurkingGuildIds.delete(t);
        for (let t of Array.from(this.navigatedAwayFromLurkingGuildIds))
            e.has(t) || this.navigatedAwayFromLurkingGuildIds.delete(t);
        let t = l.A.getGuildId();
        for (let e of this.viewedLurkingGuildIds) e !== t && this.navigatedAwayFromLurkingGuildIds.add(e);
        null != t && e.has(t) && this.viewedLurkingGuildIds.add(t);
    };
    evictOverflowingLurkers = () => {
        let e = u.A.lurkingGuildIds();
        if (e.length <= 3 || !(0, c.Jz)("LurkerPreviewManager.evictOverflowingLurkers").stickyLurk) return;
        let t = e.length - 3,
            n = e.slice(0, t);
        this.expireLurkerPreviews(n);
    };
    ensureMissingExpiries = () => {
        let e = u.A.lurkingGuildIds();
        if (0 === e.length) return;
        let t = u.A.getLurkingPreviewExpirations(),
            n = l.A.getGuildId(),
            i = e.filter((e) => null == t[e] && e !== n && this.viewedLurkingGuildIds.has(e));
        0 === i.length ||
            ((0, c.Jz)("LurkerPreviewManager.ensureMissingExpiries").stickyLurk &&
                r.h.dispatch({ type: "LURKER_PREVIEW_SET_EXPIRY", guildIds: i, expiresAt: Date.now() + 6e4 }));
    };
    expireElapsed = () => {
        let e = u.A.getLurkingPreviewExpirations(),
            t = l.A.getGuildId(),
            n = s.A.getGuildId(),
            i = Date.now(),
            r = [];
        for (let s of Object.keys(e)) s !== t && s !== n && e[s] <= i && r.push(s);
        r.length > 0 && this.expireLurkerPreviews(r);
    };
    syncTimers = () => {
        let e = u.A.getLurkingPreviewExpirations();
        for (let t of Array.from(this.timers.keys()))
            if (null == e[t]) {
                let e = this.timers.get(t);
                null != e && clearTimeout(e), this.timers.delete(t);
            }
        for (let t of Object.keys(e)) {
            if (this.timers.has(t)) continue;
            let n = e[t];
            if (n <= Date.now()) continue;
            let i = setTimeout(() => {
                this.timers.delete(t), this.handleStoreChange();
            }, n - Date.now());
            this.timers.set(t, i);
        }
    };
    expireLurkerPreviews = async (e) => {
        await Promise.all(e.map((e) => f(e)));
    };
}
new d();
var _ = n(652215);
async function h(e) {
    let t = u.A.lurkingGuildIds().filter((t) => !e.includes(t));
    if (0 === t.length) return;
    let n = new Map(t.map((e) => [e, u.A.getLurkingSourceForGuild(e)]));
    r.h.dispatch({ type: "GUILD_STOP_LURKING", ignoredGuildIds: e }),
        await Promise.all(
            t.map(async (e) => {
                let t = n.get(e) ?? null;
                try {
                    await i.Bo.del({
                        url: _.Rsh.GUILD_LEAVE(e),
                        body: { lurking: !0 },
                        oldFormErrors: !0,
                        rejectWithError: !0,
                    });
                } catch (n) {
                    r.h.dispatch({ type: "GUILD_STOP_LURKING_FAILURE", lurkingGuildId: e, lurkingSource: t });
                }
            }),
        );
}
async function f(e) {
    if (!u.A.lurkingGuildIds().includes(e)) return;
    let t = u.A.getLurkingSourceForGuild(e);
    r.h.dispatch({ type: "GUILD_STOP_LURKING_FOR_GUILD", lurkingGuildId: e });
    try {
        await i.Bo.del({ url: _.Rsh.GUILD_LEAVE(e), body: { lurking: !0 }, oldFormErrors: !0, rejectWithError: !0 });
    } catch (n) {
        r.h.dispatch({ type: "GUILD_STOP_LURKING_FAILURE", lurkingGuildId: e, lurkingSource: t });
    }
}
async function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = u.A.lurkingGuildIds();
    if (0 === t.length || !(null == e || !t.includes(e))) return;
    let n = [e, s.A.getGuildId()].filter(a.Vq);
    await h(n);
}
