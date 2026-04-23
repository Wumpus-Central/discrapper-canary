"use strict";
n.d(t, { A: () => f });
var i = n(228366),
    r = n(439372),
    s = n(498642),
    a = n(935208),
    o = n(151781);
let l = {},
    d = {},
    _ = null;
async function u(e, t) {
    null == l[e] && (l[e] = new Set()), l[e].add(t), null == d[e] && (d[e] = Date.now()), E(e) && (await c(e));
}
function c(e) {
    if (null == l[e]) return;
    let t = Array.from(l[e]);
    (l[e] = new Set()),
        (d[e] = Date.now()),
        requestAnimationFrame(async () => {
            await i.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH", guildId: e, userIds: t });
        });
}
function E(e) {
    let t = l[e];
    if (null == t) return !1;
    let n = t.size >= ((s.A.getMemberCount(e) ?? 0) >= 75e3 ? 10 : 2),
        i = d[e];
    if (n) return !0;
    if (null == i) return !1;
    let r = Date.now() - i;
    return null != i && r >= ((s.A.getMemberCount(e) ?? 0) >= 75e3 ? 5e3 : 2e3);
}
function h(e) {
    (l[e] = new Set()), (d[e] = null);
}
class m extends r.A {
    actions = {
        INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
        GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
        GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
        GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
    };
    handleInitialize() {
        null == _ &&
            null == _ &&
            (_ = setInterval(() => {
                a.default.forEachKey(l, (e) => {
                    E(e) && c(e);
                });
            }, 1e4));
    }
    handleGuildMemberUpdate(e, t) {
        if (o.A.isInitialized(e)) return u(e, t);
    }
    handleGuildMemberRemove(e, t) {
        if (o.A.isInitialized(e)) return u(e, t);
    }
    handleGuildDelete(e) {
        let t = e.guild.id;
        o.A.isInitialized(t) && h(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        o.A.isInitialized(t) && h(t);
    }
}
let f = new m();
