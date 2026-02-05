"use strict";
n.d(t, { A: () => C });
var r = n(73153),
    i = n(439372),
    a = n(498642),
    s = n(661191),
    o = n(266047);
let l = 75e3,
    u = 10,
    c = 5e3,
    d = 2,
    _ = 2e3,
    f = 1e4;
function p(e) {
    return (a.A.getMemberCount(e) ?? 0) >= l ? u : d;
}
function h(e) {
    return (a.A.getMemberCount(e) ?? 0) >= l ? c : _;
}
let m = {},
    g = {},
    E = null;
function A() {
    null == E &&
        (E = setInterval(() => {
            s.default.forEachKey(m, (e) => {
                y(e) && T(e);
            });
        }, f));
}
async function I(e, t) {
    null == m[e] && (m[e] = new Set()), m[e].add(t), null == g[e] && (g[e] = Date.now()), y(e) && (await T(e));
}
function T(e) {
    if (null == m[e]) return;
    let t = Array.from(m[e]);
    (m[e] = new Set()),
        (g[e] = Date.now()),
        requestAnimationFrame(async () => {
            await r.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH", guildId: e, userIds: t });
        });
}
function y(e) {
    let t = m[e];
    if (null == t) return !1;
    let n = t.size >= p(e),
        r = g[e];
    if (n) return !0;
    if (null == r) return !1;
    let i = Date.now() - r;
    return null != r && i >= h(e);
}
function S(e) {
    (m[e] = new Set()), (g[e] = null);
}
class v extends i.A {
    actions = {
        INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
        GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
        GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
        GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
    };
    handleInitialize() {
        null == E && A();
    }
    handleGuildMemberUpdate(e, t) {
        if (o.A.isInitialized(e)) return I(e, t);
    }
    handleGuildMemberRemove(e, t) {
        if (o.A.isInitialized(e)) return I(e, t);
    }
    handleGuildDelete(e) {
        let t = e.guild.id;
        o.A.isInitialized(t) && S(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        o.A.isInitialized(t) && S(t);
    }
}
let C = new v();
