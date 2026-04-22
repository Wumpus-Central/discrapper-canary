"use strict";
let r, i, s;
n.d(t, { A: () => y });
var a = n(835245),
    o = n(311907),
    l = n(506774),
    u = n(451988),
    d = n(73153),
    c = n(6981),
    _ = n(427157),
    f = n(353835),
    E = n(723702),
    h = n(536194);
let p = "BrowserHandoffStore",
    m = !1,
    g = new u.Ep();
function A() {
    null != r && null != i && (window.open(`${r}&key=${i}`), f.A.focus(null, !0));
}
function I() {
    (i = null), g.stop(), (m = !1), l.w.set(p, m);
}
function T() {
    I();
}
class S extends o.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== l.w.get(p) && (m = E.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
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
let y = new S(d.h, {
    RPC_SERVER_READY: function (e) {
        (r = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), A();
    },
    BROWSER_HANDOFF_BEGIN: function (e) {
        if (null != i) return !1;
        (i = (0, a.A)()), g.start(e.timeout, () => (0, c.mZ)()), A();
    },
    BROWSER_HANDOFF_FROM_APP: function (e) {
        let { handoffKey: t, handoffToken: n, timeout: r } = e;
        if (null == t || null == n) return !1;
        (m = !0), g.start(r, () => (0, c.mZ)());
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
