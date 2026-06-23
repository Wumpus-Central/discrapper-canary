"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(967198),
    s = n(698441),
    a = n(496092);
let o = {},
    l = new Set(),
    u = new Set();
async function c(e) {
    if (!(0 === s.Ay.getGuildScheduledEventsForGuild(e).length || l.has(e)) && !u.has(e))
        try {
            l.add(e), await a.default.getGuildEventsForCurrentUser(e), u.add(e);
        } catch (t) {
            l.delete(e);
        }
}
class d extends i.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
        INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
    };
    async getGuildEventUserCounts(e, t, n) {
        let i = n.filter((n) => null == o[`${e}-${t}-${n}`] || Date.now() - o[`${e}-${t}-${n}`] > 18e5);
        if (!(Date.now() - o[`${e}-${t}`] < 18e5) || 0 !== i.length) {
            (o[`${e}-${t}`] = Date.now()), i.forEach((n) => (o[`${e}-${t}-${n}`] = Date.now()));
            try {
                await a.default.fetchGuildEventUserCounts(e, t, i);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, t, n) {
        return a.default.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return c(e);
    }
    async handleConnectionOpen() {
        l.clear(), u.clear(), (o = {}), r.A.getLastSelectedGuildId();
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        l.delete(t), u.delete(t), delete o[t];
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        l.delete(n), u.delete(n), delete o[n];
    }
    handleInviteResolveSuccess(e) {
        let { invite: t } = e,
            n = t.guild_scheduled_event,
            i = t.guild?.id;
        null != n && null != i && c(i);
    }
    async handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null != t)
            for (let e of s.Ay.getGuildScheduledEventsForGuild(t))
                try {
                    await this.getGuildEventUserCounts(t, e.id, []);
                } finally {
                    await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
                }
    }
}
let _ = new d();
