"use strict";
n.d(t, {
    $k: () => c,
    BK: () => u,
    Hl: () => o,
    LX: () => a,
    OK: () => h,
    bJ: () => m,
    gq: () => _,
    qt: () => f,
    tf: () => l,
    xp: () => d,
});
var i = n(310784),
    r = n.n(i);
function s(e) {
    return 1 === e.length ? `0${e}` : e;
}
function a(e) {
    return r()(e).num();
}
function o(e) {
    return e <= 0xffffff
        ? `#${s(((e >> 16) & 255).toString(16))}${s(((e >> 8) & 255).toString(16))}${s((255 & e).toString(16))}`
        : `#${s(((e >> 24) & 255).toString(16))}${s(((e >> 16) & 255).toString(16))}${s(((e >> 8) & 255).toString(16))}`;
}
function l(e) {
    let t = (e >> 16) & 255,
        n = (e >> 8) & 255,
        i = 255 & e,
        r = Math.min((t /= 255), (n /= 255), (i /= 255)),
        s = Math.max(t, n, i),
        a = s - r,
        o = 0,
        l = 0;
    return (
        (o = Math.round(
            60 * (o = 0 === a ? 0 : s === t ? ((n - i) / a) % 6 : s === n ? (i - t) / a + 2 : (t - n) / a + 4),
        )) < 0 && (o += 360),
        (l = (s + r) / 2),
        { h: o, s: +(0 === a ? 0 : a / (1 - Math.abs(2 * l - 1))).toFixed(3), l: +l.toFixed(3) }
    );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        { h: i, s: r, l: s } = l(e),
        a = +(100 * r).toFixed(1),
        o = +(100 * s).toFixed(1);
    return t
        ? `${i} calc(var(--saturation-factor, 1) * ${a}%) ${o}%`
        : null != n
          ? `${i} ${n * a}% ${o}%`
          : `${i} ${a}% ${o}%`;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        { h: r, s, l: a } = l(e),
        o = +(100 * s).toFixed(1),
        u = +(100 * a).toFixed(1);
    return t
        ? `hsla(${r}, calc(var(--saturation-factor, 1) * ${o}%), ${u}%, ${i})`
        : null != n
          ? `hsla(${r}, ${n * o}%, ${u}%, ${i})`
          : `hsla(${r}, ${o}%, ${u}%, ${i})`;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!r().valid(e)) return null;
    let n = r()(e);
    return n.alpha(t ?? n.alpha()).css();
}
function _(e, t) {
    return null == t && (t = ((e >> 24) & 255) / 255), `rgba(${(e >> 16) & 255}, ${(e >> 8) & 255}, ${255 & e}, ${t})`;
}
function h(e) {
    return 1 - (0.299 * ((e >> 16) & 255) + 0.587 * ((e >> 8) & 255) + 0.114 * (255 & e)) / 255;
}
function f(e) {
    return r().valid(e);
}
function p(e) {
    return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
}
function E(e, t, n) {
    var i = [e, t, n].map((e) => ((e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)));
    return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
}
function m(e, t) {
    let n = p(e),
        i = p(t);
    var r = E(n[0], n[1], n[2]),
        s = E(i[0], i[1], i[2]);
    return (Math.max(r, s) + 0.05) / (Math.min(r, s) + 0.05);
}
