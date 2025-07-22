let r, i, a;
n.d(t, { Z: () => R });
var o,
    s = n(772848),
    l = n(442837),
    c = n(433517),
    u = n(846519),
    d = n(570140),
    _ = n(899742),
    f = n(598077),
    p = n(12647),
    h = n(358085),
    m = n(374023);
function g(e, t, n) {
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
let E = 'BrowserHandoffStore',
    b = !1,
    y = new u.V7();
function O() {
    null != r && null != i && (window.open(''.concat(r, '&key=').concat(i)), p.Z.focus(null, !0));
}
function v() {
    ((i = null), y.stop(), (b = !1), c.K.set(E, b));
}
function I(e) {
    ((r = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), O());
}
function T(e) {
    if (null != i) return !1;
    ((i = (0, s.Z)()), y.start(e.timeout, () => (0, _.lx)()), O());
}
function S(e) {
    let { handoffKey: t, handoffToken: n, timeout: r } = e;
    if (null == t || null == n) return !1;
    ((b = !0), y.start(r, () => (0, _.lx)()));
}
function A(e) {
    a = new f.Z(e.user);
}
function N() {
    v();
}
class C extends (o = l.ZP.Store) {
    initialize() {
        !1 !== c.K.get(E) && (b = h.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !m.s.isDisallowPopupsSet() && b;
    }
    get user() {
        return a;
    }
    get key() {
        return i;
    }
}
g(C, 'displayName', 'BrowserHandoffStore');
let R = new C(d.Z, {
    RPC_SERVER_READY: I,
    BROWSER_HANDOFF_BEGIN: T,
    BROWSER_HANDOFF_FROM_APP: S,
    BROWSER_HANDOFF_UNAVAILABLE: v,
    BROWSER_HANDOFF_SET_USER: A,
    LOGIN: N,
    LOGIN_SUCCESS: N,
    LOGOUT: N,
    REGISTER: N
});
