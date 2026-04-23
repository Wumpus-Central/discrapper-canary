let i, r, a;
n.d(t, { A: () => p });
var s = n(132500),
    _ = n(17928),
    l = n(506774),
    o = n(451988),
    E = n(228366),
    d = n(6981),
    c = n(889227),
    u = n(353835),
    I = n(723702),
    A = n(536194);
let T = "BrowserHandoffStore",
    S = !1,
    N = new o.Ep();
function O() {
    null != i && null != r && (window.open(`${i}&key=${r}`), u.A.focus(null, !0));
}
function R() {
    (r = null), N.stop(), (S = !1), l.w.set(T, S);
}
function f() {
    R();
}
class C extends _.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== l.w.get(T) && (S = I.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !A.P.isDisallowPopupsSet() && S;
    }
    get user() {
        return a;
    }
    get key() {
        return r;
    }
}
let p = new C(E.h, {
    RPC_SERVER_READY: function (e) {
        (i = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), O();
    },
    BROWSER_HANDOFF_BEGIN: function (e) {
        if (null != r) return !1;
        (r = (0, s.A)()), N.start(e.timeout, () => (0, d.mZ)()), O();
    },
    BROWSER_HANDOFF_FROM_APP: function (e) {
        let { handoffKey: t, handoffToken: n, timeout: i } = e;
        if (null == t || null == n) return !1;
        (S = !0), N.start(i, () => (0, d.mZ)());
    },
    BROWSER_HANDOFF_UNAVAILABLE: R,
    BROWSER_HANDOFF_SET_USER: function (e) {
        a = new c.A(e.user);
    },
    LOGIN: f,
    LOGIN_SUCCESS: f,
    LOGOUT: f,
    REGISTER: f,
});
