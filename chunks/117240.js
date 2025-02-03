let i, r, a;
n.d(t, { Z: () => O });
var s,
    o = n(772848),
    l = n(442837),
    u = n(433517),
    c = n(846519),
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
    v = !1,
    y = new c.V7();
function I() {
    null != i && null != r && (window.open(''.concat(i, '&key=').concat(r)), p.Z.focus(null, !0));
}
function b() {
    (r = null), y.stop(), (v = !1), u.K.set(E, v);
}
function T(e) {
    (i = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), I();
}
function S(e) {
    if (null != r) return !1;
    (r = (0, o.Z)()), y.start(e.timeout, () => (0, f.lx)()), I();
}
function A(e) {
    let { handoffKey: t, handoffToken: n, timeout: i } = e;
    if (null == t || null == n) return !1;
    (v = !0), y.start(i, () => (0, f.lx)());
}
function N(e) {
    a = new _.Z(e.user);
}
function C() {
    b();
}
class R extends (s = l.ZP.Store) {
    initialize() {
        !1 !== u.K.get(E) && (v = h.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !m.s.isDisallowPopupsSet() && v;
    }
    get user() {
        return a;
    }
    get key() {
        return r;
    }
}
g(R, 'displayName', 'BrowserHandoffStore');
let O = new R(d.Z, {
    RPC_SERVER_READY: T,
    BROWSER_HANDOFF_BEGIN: S,
    BROWSER_HANDOFF_FROM_APP: A,
    BROWSER_HANDOFF_UNAVAILABLE: b,
    BROWSER_HANDOFF_SET_USER: N,
    LOGIN: C,
    LOGIN_SUCCESS: C,
    LOGOUT: C,
    REGISTER: C
});
