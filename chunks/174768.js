"use strict";
let r;
n.d(t, { A: () => eo }), n(321073), n(667532);
var i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(506774),
    l = n(73153),
    u = n(629357),
    c = n(280157),
    d = n(455234),
    _ = n(863005),
    f = n(544028),
    h = n(961350),
    p = n(734057),
    g = n(31717),
    E = n(808728),
    A = n(696451),
    I = n(71393),
    T = n(576705),
    y = n(222823),
    S = n(309010),
    v = n(967198),
    C = n(543465),
    b = n(248465),
    N = n(403362),
    R = n(652215),
    O = n(985018);
let D = "seenQSTutorial",
    L = 5,
    w = 7,
    x = 3,
    P = 100,
    M = [u.rD.USER, u.rD.GROUP_DM, u.rD.TEXT_CHANNEL, u.rD.GUILD, u.rD.APPLICATION, u.rD.LINK, u.rD.IN_APP_NAVIGATION],
    k = 0,
    U = !1,
    G = !1,
    F = null,
    V = [],
    B = null,
    j = 0,
    H = [],
    Y = [],
    W = null;
function K() {
    (G = I.A.getGuildCount() >= 3 || a().size(p.A.getMutablePrivateChannels()) >= 20), (H = []);
}
function $(e) {
    let t = [];
    return (
        g.A.getRecentlyEditedDrafts(g.C.ChannelMessage).forEach((n) => {
            let { channelId: r } = n;
            if (e(r)) return;
            let i = z(r);
            if (null != i) {
                let e = { record: i, channelId: r };
                t.push(e);
            }
        }),
        t
    );
}
function z(e) {
    let t = (0, c.A)(e);
    return null == t || (null != F && F !== t.type) ? null : t;
}
function q() {
    let e = v.A.getGuildId() ?? void 0,
        t = S.A.getChannelId() ?? void 0;
    switch (F) {
        case u.rD.USER: {
            let e = h.default.getId();
            return b.Ay.getRecentlyTalked(t, 100).filter((t) => {
                let { record: n } = t;
                return n.id !== e;
            });
        }
        case u.rD.APPLICATION:
            return b.Ay.queryApplications({ query: "", limit: 100, fuzzy: !0 });
        case u.rD.GUILD:
            return b.Ay.queryGuilds({ query: "", limit: 100, fuzzy: !0 });
        case u.rD.TEXT_CHANNEL:
            return b.Ay.queryChannels({
                query: "",
                guildId: v.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                allowEmptyQueries: !0,
            });
        case u.rD.VOICE_CHANNEL:
            return b.Ay.queryChannels({
                query: "",
                guildId: v.A.getGuildId(),
                limit: 100,
                fuzzy: !0,
                filter: () => !0,
                type: E.vM,
                allowEmptyQueries: !0,
            });
    }
    let n = [],
        r = new Set(),
        i = $((e) => e === t || Y.includes(e) || r.has(e));
    if (i.length > 0)
        for (let e of (n.push((0, u.jF)(O.intl.string(O.t["4B63jZ"]))), i)) r.add(e.channelId), n.push(e.record);
    let a = y.Ay.getMentionChannelIds()
        .filter((e) => e !== t && !Y.includes(e) && !r.has(e))
        .map((e) => z(e))
        .filter(N.Vq)
        .reverse();
    if (a.length > 0) for (let e of (n.push((0, u.jF)(O.intl.string(O.t["61Df13"]))), a)) r.add(e.record.id), n.push(e);
    if (null != e) {
        let i = E.Ay.getSelectableChannelIds(e)
            .filter((e) => {
                let n = p.A.getChannel(e);
                return (
                    !(
                        null == n ||
                        e === t ||
                        Y.includes(e) ||
                        r.has(e) ||
                        C.Ay.isChannelMuted(n.guild_id, e) ||
                        (null != n.parent_id && C.Ay.isChannelMuted(n.guild_id, n.parent_id))
                    ) && (0, d.Y)(n)
                );
            })
            .map((e) => z(e))
            .filter((e) => e);
        Object.values(_.A.getActiveJoinedUnreadThreadsForGuild(e)).forEach((e) => {
            for (let t in e) {
                let e = z(t);
                null == e || r.has(e.record.id) || Y.includes(t) || i.push(e);
            }
        }),
            i.length > 0 && (n.push((0, u.jF)(O.intl.string(O.t.ieCAhD))), (n = n.concat(i)));
    }
    let s = Math.min((n.length > 0 ? x : w) + 1, Y.length),
        o = [];
    for (let e = 1; e < s; e += 1) {
        let t = z(Y[e]);
        null != t &&
            ((t.type !== u.rD.TEXT_CHANNEL && t.type !== u.rD.VOICE_CHANNEL) ||
                T.A.can(R.xBc.VIEW_CHANNEL, t.record)) &&
            (o.push(t), r.add(t.record.id));
    }
    return o.length > 0 && (n = [(0, u.jF)(O.intl.string(O.t["80lOZ1"])), ...o, ...n]), n;
}
function X(e, t) {
    switch (F) {
        case u.rD.USER: {
            let t = I.A.getGuild(v.A.getGuildId());
            e.unshift(
                (0, u.jF)(
                    null != t ? O.intl.formatToPlainString(O.t.FREzQs, { name: t.name }) : O.intl.string(O.t.XFYW1o),
                ),
            ),
                (V = e);
            break;
        }
        case u.rD.TEXT_CHANNEL:
            e.unshift((0, u.jF)(O.intl.string(O.t.W26k4V))), (V = e);
            break;
        case u.rD.VOICE_CHANNEL:
            e.unshift((0, u.jF)(O.intl.string(O.t.zUoI5C))), (V = e);
            break;
        case u.rD.GUILD:
            e.unshift((0, u.jF)(O.intl.string(O.t.olADPs))), (V = e);
            break;
        case u.rD.APPLICATION:
            e.unshift((0, u.jF)(O.intl.string(O.t.VwK1ld))), (V = e);
            break;
        default:
            V = e;
    }
    if (t !== B) (B = t), (j = Math.max(t.length, j)), (k = (0, u.Vv)(u.vB.DOWN, -1, V));
    else {
        let e = V[k];
        null != e && e.type === u.rD.HEADER && (k = (0, u.Vv)(u.vB.DOWN, k, V));
    }
    es.emitChange();
}
function Z(e) {
    let { query: t, queryMode: n } = e,
        i = t.trim(),
        a = v.A.getGuildId() ?? void 0,
        s = new Set([`user:${h.default.getId()}`]);
    null != a && s.add(`guild:${a}`),
        (W = Date.now()),
        (r = r ?? new u.Ay(ee, M, null != n ? P : L, { frecencyBoosters: !0, blacklist: s, allowSnowflake: !0 }, P)),
        (B = null),
        (j = i.length),
        (F = n),
        r.search(i);
}
function Q(e) {
    let { channelId: t } = e;
    if (null == t) return !1;
    (Y = Y.filter((e) => e !== t)).unshift(t), Y.length > w + 1 && (Y.length = w + 1);
}
function J(e, t) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) {
        let r = e[n],
            i = t[n];
        if (r.record.id !== i.record.id) return !1;
    }
    return !0;
}
function ee(e, t) {
    J((e = "" === (t = t.trim()).trim() ? q() : e), H) || ((H = e), X(e, t));
}
function et() {
    (B = null), (j = 0), (H = []), null != r && (r.destroy(), (r = null));
}
function en(e) {
    let { query: t, queryMode: n } = e,
        i = t.trim();
    if (null == r) return !1;
    if (F !== n) {
        r.setResultTypes(null != n ? [n] : M), r.setLimit(null != n ? P : L);
        let e = v.A.getGuildId() ?? void 0;
        n === u.rD.USER && null != e
            ? r.setOptions({ userFilters: { guild: e, friends: !0 } }, !0)
            : n === u.rD.VOICE_CHANNEL
              ? r.setOptions({ voiceChannelGuildFilter: null }, !0)
              : r.setOptions({ userFilters: null, voiceChannelGuildFilter: void 0 }, !0);
    }
    if ((F = n) === u.rD.USER) {
        let e = v.A.getGuildId() ?? null;
        r.search(i, e);
    } else r.search(i, void 0);
}
function er(e) {
    k = e.selectedIndex;
}
function ei() {
    if (U) return !1;
    (U = !0), o.w.set(D, !0);
}
class ea extends s.Ay.PersistedStore {
    static displayName = "QuickSwitcherStore";
    static persistKey = "QuickSwitcherStore";
    initialize(e) {
        this.waitFor(_.A, h.default, p.A, g.A, E.Ay, A.Ay, I.A, T.A, y.Ay, S.A, v.A, f.A, C.Ay),
            this.syncWith([f.A], () => !0),
            (U = o.w.get(D) || !1),
            (Y = e?.channelHistory ?? []);
    }
    getState() {
        return { channelHistory: Y };
    }
    isOpen() {
        return null != r;
    }
    getResultTotals(e) {
        return null == r
            ? 0
            : null == e
              ? r.results.reduce((e, t) => (t.type !== u.rD.HEADER ? e + 1 : e), 0)
              : r.results.reduce((t, n) => (n.type === e ? t + 1 : t), 0);
    }
    channelNoticePredicate(e, t) {
        let n = Date.now() - t >= R.D2K;
        return G && n;
    }
    getFrequentGuilds() {
        return null != r ? r.queryGuilds("", 100) : null;
    }
    getFrequentGuildsLength() {
        return null != r ? r.queryGuilds("", 100).length : 0;
    }
    getChannelHistory() {
        return Y;
    }
    getLastShowTimestamp() {
        return W;
    }
    getProps() {
        return {
            theme: f.A.theme,
            query: null != r ? r.query : "",
            queryMode: F,
            results: V,
            selectedIndex: k,
            seenTutorial: U,
            maxQueryLength: j,
        };
    }
}
let es = new ea(l.h, {
        CONNECTION_OPEN: K,
        CONNECTION_OPEN_SUPPLEMENTAL: K,
        QUICKSWITCHER_SHOW: Z,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: Z,
        QUICKSWITCHER_HIDE: et,
        OVERLAY_SET_INPUT_LOCKED: et,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: et,
        QUICKSWITCHER_SEARCH: en,
        QUICKSWITCHER_SELECT: er,
        QUICKSWITCHER_SWITCH_TO: ei,
        CHANNEL_SELECT: Q,
    }),
    eo = es;
