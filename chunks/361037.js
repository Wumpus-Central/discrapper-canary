"use strict";
function r(e) {
    var t;
    if ("u" < typeof window || null == window.navigator) return !1;
    let n = null == (t = window.navigator.userAgentData) ? void 0 : t.brands;
    return (Array.isArray(n) && n.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent);
}
function i(e) {
    var t;
    return (
        "u" > typeof window &&
        null != window.navigator &&
        e.test((null == (t = window.navigator.userAgentData) ? void 0 : t.platform) || window.navigator.platform)
    );
}
function a(e) {
    let t = null;
    return () => (null == t && (t = e()), t);
}
n.d(t, { H8: () => f, Tc: () => d, bh: () => l, cX: () => o, gm: () => h, lg: () => c, m0: () => p, un: () => u });
let o = a(function () {
        return i(/^Mac/i);
    }),
    s = a(function () {
        return i(/^iPhone/i);
    }),
    l = a(function () {
        return i(/^iPad/i) || (o() && navigator.maxTouchPoints > 1);
    }),
    u = a(function () {
        return s() || l();
    }),
    c = a(function () {
        return o() || u();
    }),
    d = a(function () {
        return r(/AppleWebKit/i) && !f();
    }),
    f = a(function () {
        return r(/Chrome/i);
    }),
    p = a(function () {
        return r(/Android/i);
    }),
    h = a(function () {
        return r(/Firefox/i);
    });
