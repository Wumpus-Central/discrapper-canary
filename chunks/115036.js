"use strict";
let r, i, a;
n.d(t, { A: () => N });
var s = n(835245),
    o = n(311907),
    l = n(506774),
    u = n(451988),
    c = n(73153),
    d = n(6981),
    _ = n(427157),
    f = n(353835),
    p = n(723702),
    h = n(536194);
let m = "BrowserHandoffStore",
    g = !1,
    E = new u.Ep();
function A() {
    null != r && null != i && (window.open(`${r}&key=${i}`), f.A.focus(null, !0));
}
function I() {
    (i = null), E.stop(), (g = !1), l.w.set(m, g);
}
function T(e) {
    (r = `${location.protocol}//${location.host}/handoff?rpc=${e.port}`), A();
}
function y(e) {
    if (null != i) return !1;
    (i = (0, s.A)()), E.start(e.timeout, () => (0, d.mZ)()), A();
}
function S(e) {
    let { handoffKey: t, handoffToken: n, timeout: r } = e;
    if (null == t || null == n) return !1;
    (g = !0), E.start(r, () => (0, d.mZ)());
}
function v(e) {
    a = new _.A(e.user);
}
function C() {
    I();
}
class b extends o.Ay.Store {
    static displayName = "BrowserHandoffStore";
    initialize() {
        !1 !== l.w.get(m) && (g = p.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL);
    }
    isHandoffAvailable() {
        return !h.P.isDisallowPopupsSet() && g;
    }
    get user() {
        return a;
    }
    get key() {
        return i;
    }
}
let N = new b(c.h, {
    RPC_SERVER_READY: T,
    BROWSER_HANDOFF_BEGIN: y,
    BROWSER_HANDOFF_FROM_APP: S,
    BROWSER_HANDOFF_UNAVAILABLE: I,
    BROWSER_HANDOFF_SET_USER: v,
    LOGIN: C,
    LOGIN_SUCCESS: C,
    LOGOUT: C,
    REGISTER: C,
});
