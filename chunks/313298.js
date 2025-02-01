n.d(t, { Z: () => N }), n(47120);
var i = n(570140),
    r = n(147913),
    a = n(650774),
    s = n(709054),
    o = n(893966);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = 75000,
    c = 10,
    d = 5000,
    f = 2,
    _ = 2000,
    p = 10000;
function h(e) {
    var t;
    return (null !== (t = a.Z.getMemberCount(e)) && void 0 !== t ? t : 0) >= u ? c : f;
}
function m(e) {
    var t;
    return (null !== (t = a.Z.getMemberCount(e)) && void 0 !== t ? t : 0) >= u ? d : _;
}
let g = {},
    E = {},
    v = null;
function y() {
    null == v &&
        (v = setInterval(() => {
            s.default.forEachKey(g, (e) => {
                b(e) && T(e);
            });
        }, p));
}
async function I(e, t) {
    null == g[e] && (g[e] = new Set()), g[e].add(t), null == E[e] && (E[e] = Date.now()), b(e) && (await T(e));
}
function T(e) {
    if (null == g[e]) return;
    let t = Array.from(g[e]);
    (g[e] = new Set()),
        (E[e] = Date.now()),
        requestAnimationFrame(async () => {
            await i.Z.dispatch({
                type: 'MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH',
                guildId: e,
                userIds: t
            });
        });
}
function b(e) {
    let t = g[e];
    if (null == t) return !1;
    let n = t.size >= h(e),
        i = E[e];
    if (n) return !0;
    if (null == i) return !1;
    let r = Date.now() - i;
    return null != i && r >= m(e);
}
function S(e) {
    (g[e] = new Set()), (E[e] = null);
}
class A extends r.Z {
    handleInitialize() {
        null == v && y();
    }
    handleGuildMemberUpdate(e, t) {
        if (o.Z.isInitialized(e)) return I(e, t);
    }
    handleGuildMemberRemove(e, t) {
        if (o.Z.isInitialized(e)) return I(e, t);
    }
    handleGuildDelete(e) {
        let t = e.guild.id;
        o.Z.isInitialized(t) && S(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        o.Z.isInitialized(t) && S(t);
    }
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
                GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e)
            });
    }
}
let N = new A();
