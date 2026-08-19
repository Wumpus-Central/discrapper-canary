"use strict";
let i, r, a;
n.d(t, { A: () => N });
var s = n(132500),
    l = n(17928),
    o = n(506774),
    d = n(451988),
    c = n(228366),
    u = n(6981),
    _ = n(889227),
    E = n(353835),
    A = n(723702),
    h = n(536194);
let I = "BrowserHandoffStore",
    f = !1,
    p = new d.Ep();
function T() {
    null != i && null != r && (window.open(`${i}&key=${r}`), E.A.focus(null, !0));
}
function m() {
    (r = null), p.stop(), (f = !1), o.w.set(I, f);
}
function g() {
    m();
}
class S extends l.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== o.w.get(I) && (f = A.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !h.P.isDisallowPopupsSet() && f;
    }
    get user() {
        return a;
    }
    get key() {
        return r;
    }
}
let N = new S(c.h, {
    RPC_SERVER_READY: function (e) {
        (i = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), T();
    },
    BROWSER_HANDOFF_BEGIN: function (e) {
        if (null != r) return !1;
        (r = (0, s.A)()), p.start(e.timeout, () => (0, u.mZ)()), T();
    },
    BROWSER_HANDOFF_FROM_APP: function (e) {
        let { handoffKey: t, handoffToken: n, timeout: i } = e;
        if (null == t || null == n) return !1;
        (f = !0), p.start(i, () => (0, u.mZ)());
    },
    BROWSER_HANDOFF_UNAVAILABLE: m,
    BROWSER_HANDOFF_SET_USER: function (e) {
        a = new _.A(e.user);
    },
    LOGIN: g,
    LOGIN_SUCCESS: g,
    LOGOUT: g,
    REGISTER: g,
});
