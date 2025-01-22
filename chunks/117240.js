let i, a, o;
var s,
    l = r(772848),
    u = r(442837),
    c = r(433517),
    d = r(846519),
    f = r(570140),
    p = r(899742),
    h = r(598077),
    _ = r(12647),
    m = r(358085),
    g = r(374023);
function E(e, n, r) {
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
let v = 'BrowserHandoffStore',
    y = !1,
    b = new d.V7();
function I() {
    null != i && null != a && (window.open(''.concat(i, '&key=').concat(a)), _.Z.focus(null, !0));
}
function T() {
    (a = null), b.stop(), (y = !1), c.K.set(v, y);
}
function S(e) {
    (i = ''.concat(location.protocol, '//').concat(location.host, '/handoff?rpc=').concat(e.port)), I();
}
function A(e) {
    if (null != a) return !1;
    (a = (0, l.Z)()), b.start(e.timeout, () => (0, p.lx)()), I();
}
function C(e) {
    let { handoffKey: n, handoffToken: r, timeout: i } = e;
    if (null == n || null == r) return !1;
    (y = !0), b.start(i, () => (0, p.lx)());
}
function N(e) {
    o = new h.Z(e.user);
}
function R() {
    T();
}
class O extends (s = u.ZP.Store) {
    initialize() {
        !1 !== c.K.get(v) && (y = m.isPlatformEmbedded && 'stable' === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !g.s.isDisallowPopupsSet() && y;
    }
    get user() {
        return o;
    }
    get key() {
        return a;
    }
}
E(O, 'displayName', 'BrowserHandoffStore'),
    (n.Z = new O(f.Z, {
        RPC_SERVER_READY: S,
        BROWSER_HANDOFF_BEGIN: A,
        BROWSER_HANDOFF_FROM_APP: C,
        BROWSER_HANDOFF_UNAVAILABLE: T,
        BROWSER_HANDOFF_SET_USER: N,
        LOGIN: R,
        LOGIN_SUCCESS: R,
        LOGOUT: R,
        REGISTER: R
    }));
