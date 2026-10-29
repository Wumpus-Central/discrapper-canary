function n(e) {
    if ("u" < typeof window || null == window.navigator) return !1;
    let t = window.navigator.userAgentData?.brands;
    return (Array.isArray(t) && t.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent);
}
function i(e) {
    return (
        "u" > typeof window &&
        null != window.navigator &&
        e.test(window.navigator.userAgentData?.platform || window.navigator.platform)
    );
}
function o(e) {
    let t = null;
    return () => (null == t && (t = e()), t);
}
r.d(t, { H8: () => d, Tc: () => f, bh: () => l, cX: () => a, gm: () => h, lg: () => c, m0: () => p, un: () => u });
let a = o(function () {
        return i(/^Mac/i);
    }),
    s = o(function () {
        return i(/^iPhone/i);
    }),
    l = o(function () {
        return i(/^iPad/i) || (a() && navigator.maxTouchPoints > 1);
    }),
    u = o(function () {
        return s() || l();
    }),
    c = o(function () {
        return a() || u();
    }),
    f = o(function () {
        return n(/AppleWebKit/i) && (u() || !d());
    });
o(function () {
    return f() && !d() && !h();
});
let d = o(function () {
        return n(/Chrome|CriOS|CrMo/i);
    }),
    p = o(function () {
        return n(/Android/i);
    }),
    h = o(function () {
        return n(/(Firefox|FxiOS)/i);
    });
