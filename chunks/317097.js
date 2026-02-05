"use strict";
n.d(t, {
    $k: () => u,
    Hl: () => o,
    LX: () => s,
    OK: () => _,
    bJ: () => m,
    gq: () => d,
    qt: () => f,
    tf: () => l,
    xp: () => c,
});
var r = n(310784),
    i = n.n(r);
function a(e) {
    return 1 === e.length ? `0${e}` : e;
}
function s(e) {
    return i()(e).num();
}
function o(e) {
    if (e <= 0xffffff) {
        let t = (e >> 16) & 255,
            n = (e >> 8) & 255,
            r = 255 & e;
        return `#${a(t.toString(16))}${a(n.toString(16))}${a(r.toString(16))}`;
    }
    {
        let t = (e >> 24) & 255,
            n = (e >> 16) & 255,
            r = (e >> 8) & 255;
        return `#${a(t.toString(16))}${a(n.toString(16))}${a(r.toString(16))}`;
    }
}
function l(e) {
    let t = (e >> 16) & 255,
        n = (e >> 8) & 255,
        r = 255 & e,
        i = Math.min((t /= 255), (n /= 255), (r /= 255)),
        a = Math.max(t, n, r),
        s = a - i,
        o = 0,
        l = 0,
        u = 0;
    return (
        (o = Math.round(
            60 * (o = 0 === s ? 0 : a === t ? ((n - r) / s) % 6 : a === n ? (r - t) / s + 2 : (t - n) / s + 4),
        )) < 0 && (o += 360),
        (u = (a + i) / 2),
        { h: o, s: +(l = 0 === s ? 0 : s / (1 - Math.abs(2 * u - 1))).toFixed(3), l: +u.toFixed(3) }
    );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        { h: i, s: a, l: s } = l(e),
        o = +(100 * a).toFixed(1),
        u = +(100 * s).toFixed(1);
    return t
        ? `hsla(${i}, calc(var(--saturation-factor, 1) * ${o}%), ${u}%, ${r})`
        : null != n
          ? `hsla(${i}, ${n * o}%, ${u}%, ${r})`
          : `hsla(${i}, ${o}%, ${u}%, ${r})`;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!i().valid(e)) return null;
    let n = i()(e);
    return n.alpha(t ?? n.alpha()).css();
}
function d(e, t) {
    null == t && (t = ((e >> 24) & 255) / 255);
    let n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        i = 255 & e;
    return `rgba(${n}, ${r}, ${i}, ${t})`;
}
function _(e) {
    return 1 - (0.299 * ((e >> 16) & 255) + 0.587 * ((e >> 8) & 255) + 0.114 * (255 & e)) / 255;
}
function f(e) {
    return i().valid(e);
}
function p(e) {
    return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
}
function h(e, t, n) {
    var r = [e, t, n].map((e) => ((e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)));
    return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function m(e, t) {
    let n = p(e),
        r = p(t);
    var i = h(n[0], n[1], n[2]),
        a = h(r[0], r[1], r[2]);
    return (Math.max(i, a) + 0.05) / (Math.min(i, a) + 0.05);
}
