let r, i, o;
n.d(t, { Z: () => R });
var a,
    s = n(772848),
    l = n(442837),
    c = n(433517),
    u = n(846519),
    d = n(570140),
    f = n(899742),
    p = n(598077),
    _ = n(12647),
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
    v = !1,
    b = new u.V7();
function y() {
    null != r && null != i && (window.open(''.concat(r, '&key=').concat(i)), _.Z.focus(null, !0));
}
function O() {
    (i = null), b.stop(), (v = !1), c.K.set(E, v);
}
function S(e) {
    (r = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), y();
}
function I(e) {
    if (null != i) return !1;
    (i = (0, s.Z)()), b.start(e.timeout, () => (0, f.lx)()), y();
}
function T(e) {
    let { handoffKey: t, handoffToken: n, timeout: r } = e;
    if (null == t || null == n) return !1;
    (v = !0), b.start(r, () => (0, f.lx)());
}
function N(e) {
    o = new p.Z(e.user);
}
function A() {
    O();
}
class C extends (a = l.ZP.Store) {
    initialize() {
        !1 !== c.K.get(E) && (v = h.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !m.s.isDisallowPopupsSet() && v;
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
    RPC_SERVER_READY: S,
    BROWSER_HANDOFF_BEGIN: I,
    BROWSER_HANDOFF_FROM_APP: T,
    BROWSER_HANDOFF_UNAVAILABLE: O,
    BROWSER_HANDOFF_SET_USER: N,
    LOGIN: A,
    LOGIN_SUCCESS: A,
    LOGOUT: A,
    REGISTER: A
});
