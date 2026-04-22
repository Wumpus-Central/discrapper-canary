"use strict";
n.d(t, { A: () => p });
var r = n(73153),
    i = n(439372),
    s = n(498642),
    a = n(661191),
    o = n(266047);
let l = {},
    u = {},
    d = null;
async function c(e, t) {
    null == l[e] && (l[e] = new Set()), l[e].add(t), null == u[e] && (u[e] = Date.now()), f(e) && (await _(e));
}
function _(e) {
    if (null == l[e]) return;
    let t = Array.from(l[e]);
    (l[e] = new Set()),
        (u[e] = Date.now()),
        requestAnimationFrame(async () => {
            await r.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH", guildId: e, userIds: t });
        });
}
function f(e) {
    let t = l[e];
    if (null == t) return !1;
    let n = t.size >= ((s.A.getMemberCount(e) ?? 0) >= 75e3 ? 10 : 2),
        r = u[e];
    if (n) return !0;
    if (null == r) return !1;
    let i = Date.now() - r;
    return null != r && i >= ((s.A.getMemberCount(e) ?? 0) >= 75e3 ? 5e3 : 2e3);
}
function E(e) {
    (l[e] = new Set()), (u[e] = null);
}
class h extends i.A {
    actions = {
        INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
        GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
        GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
        GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
    };
    handleInitialize() {
        null == d &&
            null == d &&
            (d = setInterval(() => {
                a.default.forEachKey(l, (e) => {
                    f(e) && _(e);
                });
            }, 1e4));
    }
    handleGuildMemberUpdate(e, t) {
        if (o.A.isInitialized(e)) return c(e, t);
    }
    handleGuildMemberRemove(e, t) {
        if (o.A.isInitialized(e)) return c(e, t);
    }
    handleGuildDelete(e) {
        let t = e.guild.id;
        o.A.isInitialized(t) && E(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        o.A.isInitialized(t) && E(t);
    }
}
let p = new h();
