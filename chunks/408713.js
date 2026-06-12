"use strict";
function i(e) {
    var t;
    if ("u" < typeof window || null == window.navigator) return !1;
    let n = null == (t = window.navigator.userAgentData) ? void 0 : t.brands;
    return (Array.isArray(n) && n.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent);
}
function r(e) {
    var t;
    return (
        "u" > typeof window &&
        null != window.navigator &&
        e.test((null == (t = window.navigator.userAgentData) ? void 0 : t.platform) || window.navigator.platform)
    );
}
function s(e) {
    let t = null;
    return () => (null == t && (t = e()), t);
}
n.d(t, { H8: () => _, Tc: () => d, bh: () => l, cX: () => a, gm: () => f, lg: () => c, m0: () => h, un: () => u });
let a = s(function () {
        return r(/^Mac/i);
    }),
    o = s(function () {
        return r(/^iPhone/i);
    }),
    l = s(function () {
        return r(/^iPad/i) || (a() && navigator.maxTouchPoints > 1);
    }),
    u = s(function () {
        return o() || l();
    }),
    c = s(function () {
        return a() || u();
    }),
    d = s(function () {
        return i(/AppleWebKit/i) && !_();
    }),
    _ = s(function () {
        return i(/Chrome/i);
    }),
    h = s(function () {
        return i(/Android/i);
    }),
    f = s(function () {
        return i(/Firefox/i);
    });
