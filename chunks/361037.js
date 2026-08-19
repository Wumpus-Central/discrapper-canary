"use strict";
function n(e) {
    var t;
    if ("u" < typeof window || null == window.navigator) return !1;
    let r = null == (t = window.navigator.userAgentData) ? void 0 : t.brands;
    return (Array.isArray(r) && r.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent);
}
function o(e) {
    var t;
    return (
        "u" > typeof window &&
        null != window.navigator &&
        e.test((null == (t = window.navigator.userAgentData) ? void 0 : t.platform) || window.navigator.platform)
    );
}
function i(e) {
    let t = null;
    return () => (null == t && (t = e()), t);
}
r.d(t, { H8: () => p, Tc: () => f, bh: () => l, cX: () => a, gm: () => h, lg: () => c, m0: () => d, un: () => u });
let a = i(function () {
        return o(/^Mac/i);
    }),
    s = i(function () {
        return o(/^iPhone/i);
    }),
    l = i(function () {
        return o(/^iPad/i) || (a() && navigator.maxTouchPoints > 1);
    }),
    u = i(function () {
        return s() || l();
    }),
    c = i(function () {
        return a() || u();
    }),
    f = i(function () {
        return n(/AppleWebKit/i) && !p();
    }),
    p = i(function () {
        return n(/Chrome/i);
    }),
    d = i(function () {
        return n(/Android/i);
    }),
    h = i(function () {
        return n(/Firefox/i);
    });
