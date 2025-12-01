let r, i, a;
n.d(t, { Z: () => P });
var o,
    s = n(772848),
    l = n(442837),
    c = n(433517),
    u = n(846519),
    d = n(570140),
    f = n(899742),
    p = n(598077),
    _ = n(12647),
    m = n(358085),
    h = n(374023);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = "BrowserHandoffStore",
    b = !1,
    y = new u.V7();
function O() {
    null != r && null != i && (window.open("".concat(r, "&key=").concat(i)), _.Z.focus(null, !0));
}
function v() {
    (i = null), y.stop(), (b = !1), c.K.set(E, b);
}
function S(e) {
    (r = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port)), O();
}
function I(e) {
    if (null != i) return !1;
    (i = (0, s.Z)()), y.start(e.timeout, () => (0, f.lx)()), O();
}
function T(e) {
    let { handoffKey: t, handoffToken: n, timeout: r } = e;
    if (null == t || null == n) return !1;
    (b = !0), y.start(r, () => (0, f.lx)());
}
function A(e) {
    a = new p.Z(e.user);
}
function C() {
    v();
}
class N extends (o = l.ZP.Store) {
    initialize() {
        !1 !== c.K.get(E) && (b = m.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !h.s.isDisallowPopupsSet() && b;
    }
    get user() {
        return a;
    }
    get key() {
        return i;
    }
}
g(N, "displayName", "BrowserHandoffStore");
let P = new N(d.Z, {
    RPC_SERVER_READY: S,
    BROWSER_HANDOFF_BEGIN: I,
    BROWSER_HANDOFF_FROM_APP: T,
    BROWSER_HANDOFF_UNAVAILABLE: v,
    BROWSER_HANDOFF_SET_USER: A,
    LOGIN: C,
    LOGIN_SUCCESS: C,
    LOGOUT: C,
    REGISTER: C,
});
