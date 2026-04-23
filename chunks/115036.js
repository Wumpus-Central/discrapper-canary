"use strict";
let r, i, s;
n.d(t, { A: () => y });
var a = n(835245),
    o = n(311907),
    l = n(506774),
    u = n(451988),
    c = n(73153),
    d = n(6981),
    _ = n(427157),
    f = n(353835),
    p = n(723702),
    h = n(536194);
let E = "BrowserHandoffStore",
    m = !1,
    g = new u.Ep();
function A() {
    null != r && null != i && (window.open(`${r}&key=${i}`), f.A.focus(null, !0));
}
function I() {
    (i = null), g.stop(), (m = !1), l.w.set(E, m);
}
function T() {
    I();
}
class S extends o.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== l.w.get(E) && (m = p.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !h.P.isDisallowPopupsSet() && m;
    }
    get user() {
        return s;
    }
    get key() {
        return i;
    }
}
let y = new S(c.h, {
    RPC_SERVER_READY: function (e) {
        (r = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), A();
    },
    BROWSER_HANDOFF_BEGIN: function (e) {
        if (null != i) return !1;
        (i = (0, a.A)()), g.start(e.timeout, () => (0, d.mZ)()), A();
    },
    BROWSER_HANDOFF_FROM_APP: function (e) {
        let { handoffKey: t, handoffToken: n, timeout: r } = e;
        if (null == t || null == n) return !1;
        (m = !0), g.start(r, () => (0, d.mZ)());
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
