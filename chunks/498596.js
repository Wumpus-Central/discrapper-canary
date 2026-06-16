"use strict";
n.d(t, { OB: () => o, Pf: () => l, Tr: () => s });
var i = n(310784),
    r = n.n(i);
let s = { NonText: 3, Text: 4.5, HighContrastText: 7 };
function a(e) {
    let [t, n, i, r] = e.rgba();
    return `rgba(${t}, ${n}, ${i}, ${r})`;
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.contrastRatio ?? s.NonText,
        i = t.tolerance ?? 3,
        o = r()(t.base ?? e),
        l = r()(e),
        u = o.luminance(),
        c = l,
        d = n + i,
        _ = r().contrast(o, l),
        h = 100;
    for (; h-- > 0; ) {
        let e = _ < n,
            t = _ > d;
        if (!e && !t) break;
        let i = c.luminance() > u;
        (c = (t && i) || (e && !i) ? c.darken() : c.brighten()), (_ = r().contrast(o, c));
    }
    return a(c);
}
function l(e, t) {
    return a(r()(e).brighten(t));
}
