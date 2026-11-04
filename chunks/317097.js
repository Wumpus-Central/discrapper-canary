var i = n(310784),
    r = n.n(i);
function a(e) {
    return 1 === e.length ? `0${e}` : e;
}
function s(e) {
    let t = (e >> 16) & 255,
        n = (e >> 8) & 255,
        i = 255 & e,
        r = Math.min((t /= 255), (n /= 255), (i /= 255)),
        a = Math.max(t, n, i),
        s = a - r,
        l = 0,
        o = 0;
    return (
        (l = Math.round(
            60 * (l = 0 === s ? 0 : a === t ? ((n - i) / s) % 6 : a === n ? (i - t) / s + 2 : (t - n) / s + 4),
        )) < 0 && (l += 360),
        (o = (a + r) / 2),
        { h: l, s: +(0 === s ? 0 : s / (1 - Math.abs(2 * o - 1))).toFixed(3), l: +o.toFixed(3) }
    );
}
function l(e) {
    return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
}
function o(e, t, n) {
    var i = [e, t, n].map((e) => ((e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)));
    return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
}
n.d(
    t,
    {},
    {
        $k: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                { h: r, s: a, l } = s(e),
                o = +(100 * a).toFixed(1),
                d = +(100 * l).toFixed(1);
            return t
                ? `hsla(${r}, calc(var(--saturation-factor, 1) * ${o}%), ${d}%, ${i})`
                : null != n
                  ? `hsla(${r}, ${n * o}%, ${d}%, ${i})`
                  : `hsla(${r}, ${o}%, ${d}%, ${i})`;
        },
        BK: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                { h: i, s: r, l: a } = s(e),
                l = +(100 * r).toFixed(1),
                o = +(100 * a).toFixed(1);
            return t
                ? `${i} calc(var(--saturation-factor, 1) * ${l}%) ${o}%`
                : null != n
                  ? `${i} ${n * l}% ${o}%`
                  : `${i} ${l}% ${o}%`;
        },
        Hl: function (e) {
            return e <= 0xffffff
                ? `#${a(((e >> 16) & 255).toString(16))}${a(((e >> 8) & 255).toString(16))}${a((255 & e).toString(16))}`
                : `#${a(((e >> 24) & 255).toString(16))}${a(((e >> 16) & 255).toString(16))}${a(((e >> 8) & 255).toString(16))}`;
        },
        LX: function (e) {
            return r()(e).num();
        },
        OK: function (e) {
            return 1 - (0.299 * ((e >> 16) & 255) + 0.587 * ((e >> 8) & 255) + 0.114 * (255 & e)) / 255;
        },
        bJ: function (e, t) {
            let n = l(e),
                i = l(t);
            var r = o(n[0], n[1], n[2]),
                a = o(i[0], i[1], i[2]);
            return (Math.max(r, a) + 0.05) / (Math.min(r, a) + 0.05);
        },
        gq: function (e, t) {
            return (
                null == t && (t = ((e >> 24) & 255) / 255),
                `rgba(${(e >> 16) & 255}, ${(e >> 8) & 255}, ${255 & e}, ${t})`
            );
        },
        qt: function (e) {
            return r().valid(e);
        },
        tf: s,
        xp: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!r().valid(e)) return null;
            let n = r()(e);
            return n.alpha(t ?? n.alpha()).css();
        },
    },
);
