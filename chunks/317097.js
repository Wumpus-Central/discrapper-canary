"use strict";
n.d(t, {
    $k: () => c,
    BK: () => u,
    Hl: () => o,
    LX: () => a,
    OK: () => f,
    bJ: () => E,
    gq: () => _,
    qt: () => p,
    tf: () => l,
    xp: () => d,
});
var r = n(310784),
    i = n.n(r);
function s(e) {
    return 1 === e.length ? `0${e}` : e;
}
function a(e) {
    return i()(e).num();
}
function o(e) {
    if (e <= 0xffffff) {
        let t = (e >> 16) & 255,
            n = (e >> 8) & 255,
            r = 255 & e;
        return `#${s(t.toString(16))}${s(n.toString(16))}${s(r.toString(16))}`;
    }
    {
        let t = (e >> 24) & 255,
            n = (e >> 16) & 255,
            r = (e >> 8) & 255;
        return `#${s(t.toString(16))}${s(n.toString(16))}${s(r.toString(16))}`;
    }
}
function l(e) {
    let t = (e >> 16) & 255,
        n = (e >> 8) & 255,
        r = 255 & e,
        i = Math.min((t /= 255), (n /= 255), (r /= 255)),
        s = Math.max(t, n, r),
        a = s - i,
        o = 0,
        l = 0,
        u = 0;
    return (
        (o = Math.round(
            60 * (o = 0 === a ? 0 : s === t ? ((n - r) / a) % 6 : s === n ? (r - t) / a + 2 : (t - n) / a + 4),
        )) < 0 && (o += 360),
        (u = (s + i) / 2),
        { h: o, s: +(l = 0 === a ? 0 : a / (1 - Math.abs(2 * u - 1))).toFixed(3), l: +u.toFixed(3) }
    );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        { h: r, s: i, l: s } = l(e),
        a = +(100 * i).toFixed(1),
        o = +(100 * s).toFixed(1);
    return t
        ? `${r} calc(var(--saturation-factor, 1) * ${a}%) ${o}%`
        : null != n
          ? `${r} ${n * a}% ${o}%`
          : `${r} ${a}% ${o}%`;
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        { h: i, s, l: a } = l(e),
        o = +(100 * s).toFixed(1),
        u = +(100 * a).toFixed(1);
    return t
        ? `hsla(${i}, calc(var(--saturation-factor, 1) * ${o}%), ${u}%, ${r})`
        : null != n
          ? `hsla(${i}, ${n * o}%, ${u}%, ${r})`
          : `hsla(${i}, ${o}%, ${u}%, ${r})`;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (!i().valid(e)) return null;
    let n = i()(e);
    return n.alpha(t ?? n.alpha()).css();
}
function _(e, t) {
    null == t && (t = ((e >> 24) & 255) / 255);
    let n = (e >> 16) & 255,
        r = (e >> 8) & 255,
        i = 255 & e;
    return `rgba(${n}, ${r}, ${i}, ${t})`;
}
function f(e) {
    return 1 - (0.299 * ((e >> 16) & 255) + 0.587 * ((e >> 8) & 255) + 0.114 * (255 & e)) / 255;
}
function p(e) {
    return i().valid(e);
}
function h(e) {
    return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
}
function m(e, t, n) {
    var r = [e, t, n].map((e) => ((e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)));
    return 0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2];
}
function E(e, t) {
    let n = h(e),
        r = h(t);
    var i = m(n[0], n[1], n[2]),
        s = m(r[0], r[1], r[2]);
    return (Math.max(i, s) + 0.05) / (Math.min(i, s) + 0.05);
}
