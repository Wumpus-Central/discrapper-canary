let i, a, r;
n.d(t, { A: () => O });
var s = n(132500),
    l = n(17928),
    o = n(506774),
    d = n(451988),
    c = n(228366),
    _ = n(6981),
    E = n(889227),
    u = n(353835),
    A = n(723702),
    I = n(536194);
let T = "BrowserHandoffStore",
    h = !1,
    S = new d.Ep();
function N() {
    null != i && null != a && (window.open(`${i}&key=${a}`), u.A.focus(null, !0));
}
function f() {
    (a = null), S.stop(), (h = !1), o.w.set(T, h);
}
function p() {
    f();
}
class m extends l.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== o.w.get(T) && (h = A.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !I.P.isDisallowPopupsSet() && h;
    }
    get user() {
        return r;
    }
    get key() {
        return a;
    }
}
let O = new m(c.h, {
    RPC_SERVER_READY: function (e) {
        (i = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), N();
    },
    BROWSER_HANDOFF_BEGIN: function (e) {
        if (null != a) return !1;
        (a = (0, s.A)()), S.start(e.timeout, () => (0, _.mZ)()), N();
    },
    BROWSER_HANDOFF_FROM_APP: function (e) {
        let { handoffKey: t, handoffToken: n, timeout: i } = e;
        if (null == t || null == n) return !1;
        (h = !0), S.start(i, () => (0, _.mZ)());
    },
    BROWSER_HANDOFF_UNAVAILABLE: f,
    BROWSER_HANDOFF_SET_USER: function (e) {
        r = new E.A(e.user);
    },
    LOGIN: p,
    LOGIN_SUCCESS: p,
    LOGOUT: p,
    REGISTER: p,
});
