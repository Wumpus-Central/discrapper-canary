n.d(t, {
    GL: () => w,
    Hz: () => y,
    M8: () => x,
    T: () => s,
    Xu: () => h,
    _R: () => u,
    k6: () => M,
    py: () => g,
    qR: () => p,
    xf: () => C,
    xm: () => l,
});
let r = [
        { offset: 0, span: 0.66, ease: 1.6 },
        { offset: 0.08, span: 0.78, ease: 1.6 },
        { offset: 0.08, span: 0.9, ease: 7.5 },
        { offset: 0.08, span: 0.92, ease: 9 },
    ],
    o = [0.5, 0.5, 0.45, 0.9];
function a(e, t, n) {
    let r = 1 - e;
    return 3 * r * r * e * t + 3 * r * e * e * n + e * e * e;
}
function l(e) {
    if (e <= 0) return 0;
    if (e >= 1) return 1;
    let [t, n, r, l] = o,
        i = 0,
        u = 1;
    for (let n = 0; n < 20; n++) {
        let n = (i + u) / 2;
        a(n, t, r) < e ? (i = n) : (u = n);
    }
    return a((i + u) / 2, n, l);
}
function i(e, t) {
    if (t <= 0) return 0;
    let n = 0,
        r = 1;
    for (let o = 0; o < 24; o++) {
        let o = (n + r) / 2;
        m(e, l(o)) < t ? (n = o) : (r = o);
    }
    return (n + r) / 2;
}
function u(e) {
    return i(1, e);
}
function s(e) {
    return i(2, e);
}
let c = "123456",
    d = "789ABC";
function f(e, t) {
    let n = e.charCodeAt(0);
    return n >= 65 && n <= 90
        ? String.fromCharCode(65 + ((n - 65 + t) % 26))
        : n >= 97 && n <= 122
          ? String.fromCharCode(97 + ((n - 97 + t) % 26))
          : n >= 48 && n <= 57
            ? String.fromCharCode(48 + ((n - 48 + t) % 10))
            : e;
}
function m(e, t) {
    let { offset: n, span: o, ease: a } = r[e],
        l = (t - n) / o;
    return l <= 0 ? 0 : l >= 1 ? 1 : l ** a;
}
function h(e, t, n) {
    let o = 0;
    for (let a = 0; a < r.length; a++) m(a, t) * n > e + 0.5 && (o = a + 1);
    return o;
}
function p(e) {
    return e >= 3;
}
function y(e, t, n, r) {
    switch (r) {
        case 0:
            return e[n] ?? "";
        case 1:
        case 2:
            return f(e[n] ?? "", 6);
        case 3:
            return f(t[n] ?? "", 6);
        default:
            return t[n] ?? "";
    }
}
function g(e, t) {
    return { start: Math.max(0, Math.floor(m(r.length - 1, e) * t)), end: Math.min(t, Math.ceil(m(0, e) * t)) };
}
function x(e) {
    let t = m(1, e),
        n = t - m(2, e);
    if (n <= 0) return 0;
    let r = Math.min(1, n / (t < 1 ? 0.15 : 0.5));
    return r * r * (3 - 2 * r);
}
function w(e, t, n) {
    let r = m(1, t) * n,
        o = m(2, t) * n,
        a = e + 0.5;
    return a >= r || a < o ? -1 : Math.max(0, Math.min(Math.floor((Math.min(a - o, r - a) / 4) * c.length), c.length));
}
function C(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    return 0 === e || 0 === t ? Math.max(1, n) : Math.max(1, Math.ceil((e + r) / t));
}
function M(e, t) {
    let n = Array(e);
    for (let r = 0; r < e; r++) n[r] = d.charAt((t() * d.length) | 0);
    return n;
}
