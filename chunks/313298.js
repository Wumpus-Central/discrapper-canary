n.d(t, { Z: () => N }), n(47120);
var r = n(570140),
    i = n(147913),
    o = n(650774),
    a = n(709054),
    s = n(893966);
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
let c = 75000,
    u = 10,
    d = 5000,
    f = 2,
    _ = 2000,
    p = 10000;
function h(e) {
    var t;
    return (null != (t = o.Z.getMemberCount(e)) ? t : 0) >= c ? u : f;
}
function m(e) {
    var t;
    return (null != (t = o.Z.getMemberCount(e)) ? t : 0) >= c ? d : _;
}
let g = {},
    E = {},
    b = null;
function y() {
    null == b &&
        (b = setInterval(() => {
            a.default.forEachKey(g, (e) => {
                I(e) && O(e);
            });
        }, p));
}
async function v(e, t) {
    null == g[e] && (g[e] = new Set()), g[e].add(t), null == E[e] && (E[e] = Date.now()), I(e) && (await O(e));
}
function O(e) {
    if (null == g[e]) return;
    let t = Array.from(g[e]);
    (g[e] = new Set()),
        (E[e] = Date.now()),
        requestAnimationFrame(async () => {
            await r.Z.dispatch({
                type: 'MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH',
                guildId: e,
                userIds: t
            });
        });
}
function I(e) {
    let t = g[e];
    if (null == t) return !1;
    let n = t.size >= h(e),
        r = E[e];
    if (n) return !0;
    if (null == r) return !1;
    let i = Date.now() - r;
    return null != r && i >= m(e);
}
function S(e) {
    (g[e] = new Set()), (E[e] = null);
}
class T extends i.Z {
    handleInitialize() {
        null == b && y();
    }
    handleGuildMemberUpdate(e, t) {
        if (s.Z.isInitialized(e)) return v(e, t);
    }
    handleGuildMemberRemove(e, t) {
        if (s.Z.isInitialized(e)) return v(e, t);
    }
    handleGuildDelete(e) {
        let t = e.guild.id;
        s.Z.isInitialized(t) && S(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        s.Z.isInitialized(t) && S(t);
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
let N = new T();
