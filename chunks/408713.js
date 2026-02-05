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
n.d(t, { H8: () => _, Tc: () => d, bh: () => l, cX: () => s, gm: () => p, lg: () => c, m0: () => f, un: () => u });
let s = a(function () {
        return i(/^Mac/i);
    }),
    o = a(function () {
        return i(/^iPhone/i);
    }),
    l = a(function () {
        return i(/^iPad/i) || (s() && navigator.maxTouchPoints > 1);
    }),
    u = a(function () {
        return o() || l();
    }),
    c = a(function () {
        return s() || u();
    }),
    d = a(function () {
        return r(/AppleWebKit/i) && !_();
    }),
    _ = a(function () {
        return r(/Chrome/i);
    }),
    f = a(function () {
        return r(/Android/i);
    }),
    p = a(function () {
        return r(/Firefox/i);
    });
