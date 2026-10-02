let i, r;
n.d(t, { A: () => m });
var a = n(132500),
    s = n(17928),
    l = n(506774),
    o = n(451988),
    d = n(73153),
    c = n(6981),
    u = n(353835),
    _ = n(723702),
    E = n(536194);
let A = "BrowserHandoffStore",
    h = !1,
    I = new o.Ep();
function f() {
    null != i && null != r && (window.open(`${i}&key=${r}`), u.A.focus(null, !0));
}
function p() {
    ((r = null), I.stop(), (h = !1), l.w.set(A, h));
}
function T() {
    p();
}
class g extends s.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== l.w.get(A) && (h = _.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !E.P.isDisallowPopupsSet() && h;
    }
    get key() {
        return r;
    }
}
let m = new g(d.h, {
    RPC_SERVER_READY: function (e) {
        ((i = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), f());
    },
    BROWSER_HANDOFF_BEGIN: function (e) {
        if (null != r) return !1;
        ((r = (0, a.A)()), I.start(e.timeout, () => (0, c.mZ)()), f());
    },
    BROWSER_HANDOFF_FROM_APP: function (e) {
        let { handoffKey: t, handoffToken: n, timeout: i } = e;
        if (null == t || null == n) return !1;
        ((h = !0), I.start(i, () => (0, c.mZ)()));
    },
    BROWSER_HANDOFF_UNAVAILABLE: p,
    LOGIN: T,
    LOGIN_SUCCESS: T,
    LOGOUT: T,
    REGISTER: T,
});
