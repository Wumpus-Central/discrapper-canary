"use strict";
n.d(t, { OB: () => l, Pf: () => o, Tr: () => a });
var i = n(310784),
    r = n.n(i);
let a = { NonText: 3, Text: 4.5, HighContrastText: 7 };
function s(e) {
    let [t, n, i, r] = e.rgba();
    return `rgba(${t}, ${n}, ${i}, ${r})`;
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.contrastRatio ?? a.NonText,
        i = t.tolerance ?? 3,
        l = r()(t.base ?? e),
        o = r()(e),
        d = l.luminance(),
        c = o,
        u = n + i,
        _ = r().contrast(l, o),
        E = 100;
    for (; E-- > 0; ) {
        let e = _ < n,
            t = _ > u;
        if (!e && !t) break;
        let i = c.luminance() > d;
        (c = (t && i) || (e && !i) ? c.darken() : c.brighten()), (_ = r().contrast(l, c));
    }
    return s(c);
}
function o(e, t) {
    return s(r()(e).brighten(t));
}
