let r, i, o;
n.d(t, { Z: () => R });
var a,
    s = n(772848),
    l = n(442837),
    c = n(433517),
    u = n(846519),
    d = n(570140),
    f = n(899742),
    _ = n(598077),
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
function v() {
    null != r && null != i && (window.open(''.concat(r, '&key=').concat(i)), p.Z.focus(null, !0));
}
function O() {
    (i = null), y.stop(), (b = !1), c.K.set(E, b);
}
function I(e) {
    (r = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), v();
}
function S(e) {
    if (null != i) return !1;
    (i = (0, s.Z)()), y.start(e.timeout, () => (0, f.lx)()), v();
}
function T(e) {
    let { handoffKey: t, handoffToken: n, timeout: r } = e;
    if (null == t || null == n) return !1;
    (b = !0), y.start(r, () => (0, f.lx)());
}
function N(e) {
    o = new _.Z(e.user);
}
function A() {
    O();
}
class C extends (a = l.ZP.Store) {
    initialize() {
        !1 !== c.K.get(E) && (b = h.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !m.s.isDisallowPopupsSet() && b;
    }
    get user() {
        return o;
    }
    get key() {
        return i;
    }
}
g(C, 'displayName', 'BrowserHandoffStore');
let R = new C(d.Z, {
    RPC_SERVER_READY: I,
    BROWSER_HANDOFF_BEGIN: S,
    BROWSER_HANDOFF_FROM_APP: T,
    BROWSER_HANDOFF_UNAVAILABLE: O,
    BROWSER_HANDOFF_SET_USER: N,
    LOGIN: A,
    LOGIN_SUCCESS: A,
    LOGOUT: A,
    REGISTER: A
});
