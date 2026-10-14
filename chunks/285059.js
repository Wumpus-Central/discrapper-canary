n.d(t, { A: () => h });
var i = n(439372),
    r = n(967198),
    a = n(698441),
    s = n(496092),
    l = n(955817),
    o = n(444092);
let d = {},
    c = new Set(),
    u = new Set(),
    _ = new Map();
async function E(e) {
    if (!(0 === a.Ay.getGuildScheduledEventsForGuild(e).length || c.has(e)) && !u.has(e))
        try {
            (c.add(e), await s.default.getGuildEventsForCurrentUser(e), u.add(e));
        } catch (t) {
            c.delete(e);
        }
}
class A extends i.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
        INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
    };
    getGuildEventUserCounts(e, t, n) {
        return this.fetchGuildEventUserCounts(e, t, n, !1);
    }
    getGuildEventUserCountsForEmbed(e, t, n) {
        if (null == a.Ay.getGuildScheduledEvent(t)) return Promise.resolve();
        let i = `${e}-${t}`,
            r = _.get(i),
            s = null == r || Date.now() - r.startedAt >= 18e5 ? { startedAt: Date.now(), ids: new Set() } : r,
            l = n.filter((e) => !!s.ids.has(e) || (!(s.ids.size >= 8) && (s.ids.add(e), !0)));
        for (_.delete(i), _.set(i, s); _.size > 1024;) {
            let e = _.keys().next().value;
            if (null == e) break;
            _.delete(e);
        }
        return n.length > 0 && 0 === l.length ? Promise.resolve() : this.fetchGuildEventUserCounts(e, t, l, !0);
    }
    async fetchGuildEventUserCounts(e, t, n, i) {
        let r = `${e}-${t}`;
        function c() {
            return n.filter((e) => null == d[`${r}-${e}`] || Date.now() - d[`${r}-${e}`] >= 18e5);
        }
        try {
            for (; null == d[r] || Date.now() - d[r] >= 18e5 || c().length > 0;)
                await (0, o.FU)(e, t, async () => {
                    let n = c();
                    async function o() {
                        if (i && null == a.Ay.getGuildScheduledEvent(t)) throw Error("guild event not found");
                        for (let i of (await s.default.fetchGuildEventUserCounts(e, t, n), (d[r] = Date.now()), n))
                            d[`${r}-${i}`] = Date.now();
                    }
                    await (0, l.CF)(o);
                });
        } catch {}
    }
    getGuildEventUsers(e, t, n) {
        return s.default.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return E(e);
    }
    async handleConnectionOpen() {
        (c.clear(), u.clear(), (d = {}), _.clear(), (0, o.G9)(), r.A.getLastSelectedGuildId());
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        (c.delete(t), u.delete(t), delete d[t]);
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        (c.delete(n), u.delete(n), delete d[n]);
    }
    handleInviteResolveSuccess(e) {
        let { invite: t } = e,
            n = t.guild_scheduled_event,
            i = t.guild?.id;
        null != n && null != i && E(i);
    }
    async handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null != t)
            for (let e of a.Ay.getGuildScheduledEventsForGuild(t))
                try {
                    await this.getGuildEventUserCounts(t, e.id, []);
                } finally {
                    await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
                }
    }
}
let h = new A();
