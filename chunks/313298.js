var i = r(47120);
var a = r(570140),
    o = r(147913),
    s = r(650774),
    l = r(709054),
    u = r(893966);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = 75000,
    f = 10,
    p = 5000,
    h = 2,
    _ = 2000,
    m = 10000;
function g(e) {
    var n;
    return (null !== (n = s.Z.getMemberCount(e)) && void 0 !== n ? n : 0) >= d ? f : h;
}
function E(e) {
    var n;
    return (null !== (n = s.Z.getMemberCount(e)) && void 0 !== n ? n : 0) >= d ? p : _;
}
let v = {},
    y = {},
    b = null;
function I() {
    if (null == b)
        b = setInterval(() => {
            l.default.forEachKey(v, (e) => {
                A(e) && S(e);
            });
        }, m);
}
async function T(e, n) {
    null == v[e] && (v[e] = new Set()), v[e].add(n), null == y[e] && (y[e] = Date.now()), A(e) && (await S(e));
}
function S(e) {
    if (null == v[e]) return;
    let n = Array.from(v[e]);
    (v[e] = new Set()),
        (y[e] = Date.now()),
        requestAnimationFrame(async () => {
            await a.Z.dispatch({
                type: 'MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH',
                guildId: e,
                userIds: n
            });
        });
}
function A(e) {
    let n = v[e];
    if (null == n) return !1;
    let r = n.size >= g(e),
        i = y[e];
    if (r) return !0;
    if (null == i) return !1;
    let a = Date.now() - i;
    return null != i && a >= E(e);
}
function C(e) {
    (v[e] = new Set()), (y[e] = null);
}
class N extends o.Z {
    handleInitialize() {
        null == b && I();
    }
    handleGuildMemberUpdate(e, n) {
        if (!!u.Z.isInitialized(e)) return T(e, n);
    }
    handleGuildMemberRemove(e, n) {
        if (!!u.Z.isInitialized(e)) return T(e, n);
    }
    handleGuildDelete(e) {
        let n = e.guild.id;
        if (!!u.Z.isInitialized(n)) C(n);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: n } = e;
        if (!!u.Z.isInitialized(n)) C(n);
    }
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
                GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e)
            });
    }
}
n.Z = new N();
