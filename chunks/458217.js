"use strict";
n.d(t, { OB: () => o, Pf: () => l, Tr: () => s });
var r = n(310784),
    i = n.n(r);
let s = { NonText: 3, Text: 4.5, HighContrastText: 7 };
function a(e) {
    let [t, n, r, i] = e.rgba();
    return `rgba(${t}, ${n}, ${r}, ${i})`;
}
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.contrastRatio ?? s.NonText,
        r = t.tolerance ?? 3,
        o = i()(t.base ?? e),
        l = i()(e),
        u = o.luminance(),
        d = l,
        c = n + r,
        _ = i().contrast(o, l),
        f = 100;
    for (; f-- > 0; ) {
        let e = _ < n,
            t = _ > c;
        if (!e && !t) break;
        let r = d.luminance() > u;
        (d = (t && r) || (e && !r) ? d.darken() : d.brighten()), (_ = i().contrast(o, d));
    }
    return a(d);
}
function l(e, t) {
    return a(i()(e).brighten(t));
}
