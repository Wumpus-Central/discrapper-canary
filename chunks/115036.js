let i, r;
var a = n(115560),
    s = n(855986),
    l = n(506774),
    o = n(451988),
    d = n(73153),
    c = n(6981),
    u = n(353835),
    _ = n(723702),
    E = n(536194);
let A = "BrowserHandoffStore",
    f = !1,
    h = new o.Ep();
function I() {
    null != i && null != r && (window.open(`${i}&key=${r}`), u.A.focus(null, !0));
}
function p() {
    ((r = null), h.stop(), (f = !1), l.w.set(A, f));
}
function m() {
    p();
}
class T extends s.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== l.w.get(A) && (f = _.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !E.P.isDisallowPopupsSet() && f;
    }
    get key() {
        return r;
    }
}
let g = new T(d.h, {
    RPC_SERVER_READY: function (e) {
        ((i = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), I());
    },
    BROWSER_HANDOFF_BEGIN: function (e) {
        if (null != r) return !1;
        ((r = (0, a.A)()), h.start(e.timeout, () => (0, c.mZ)()), I());
    },
    BROWSER_HANDOFF_FROM_APP: function (e) {
        let { handoffKey: t, handoffToken: n, timeout: i } = e;
        if (null == t || null == n) return !1;
        ((f = !0), h.start(i, () => (0, c.mZ)()));
    },
    BROWSER_HANDOFF_UNAVAILABLE: p,
    LOGIN: m,
    LOGIN_SUCCESS: m,
    LOGOUT: m,
    REGISTER: m,
});
n.d(t, {}, { A: g });
