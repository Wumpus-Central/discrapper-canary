"use strict";
let i, r, s;
n.d(t, { A: () => y });
var a = n(835245),
    o = n(17928),
    l = n(506774),
    u = n(451988),
    c = n(228366),
    d = n(6981),
    _ = n(889227),
    h = n(353835),
    f = n(723702),
    p = n(536194);
let E = "BrowserHandoffStore",
    m = !1,
    g = new u.Ep();
function A() {
    null != i && null != r && (window.open(`${i}&key=${r}`), h.A.focus(null, !0));
}
function I() {
    (r = null), g.stop(), (m = !1), l.w.set(E, m);
}
function T() {
    I();
}
class S extends o.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== l.w.get(E) && (m = f.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !p.P.isDisallowPopupsSet() && m;
    }
    get user() {
        return s;
    }
    get key() {
        return r;
    }
}
let y = new S(c.h, {
    RPC_SERVER_READY: function (e) {
        (i = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), A();
    },
    BROWSER_HANDOFF_BEGIN: function (e) {
        if (null != r) return !1;
        (r = (0, a.A)()), g.start(e.timeout, () => (0, d.mZ)()), A();
    },
    BROWSER_HANDOFF_FROM_APP: function (e) {
        let { handoffKey: t, handoffToken: n, timeout: i } = e;
        if (null == t || null == n) return !1;
        (m = !0), g.start(i, () => (0, d.mZ)());
    },
    BROWSER_HANDOFF_UNAVAILABLE: I,
    BROWSER_HANDOFF_SET_USER: function (e) {
        s = new _.A(e.user);
    },
    LOGIN: T,
    LOGIN_SUCCESS: T,
    LOGOUT: T,
    REGISTER: T,
});
