"use strict";
n.d(t, { OB: () => u, Pf: () => c, Tr: () => o });
var r = n(310784),
    i = n.n(r);
let a = 3,
    s = 100,
    o = { NonText: 3, Text: 4.5, HighContrastText: 7 };
function l(e) {
    let [t, n, r, i] = e.rgba();
    return `rgba(${t}, ${n}, ${r}, ${i})`;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.contrastRatio ?? o.NonText,
        r = t.tolerance ?? a,
        u = i()(t.base ?? e),
        c = i()(e),
        d = u.luminance(),
        _ = c,
        f = n,
        p = n + r,
        h = i().contrast(u, c),
        m = s;
    for (; m-- > 0; ) {
        let e = h < f,
            t = h > p;
        if (!e && !t) break;
        let n = _.luminance() > d;
        (_ = (t && n) || (e && !n) ? _.darken() : _.brighten()), (h = i().contrast(u, _));
    }
    return l(_);
}
function c(e, t) {
    return l(i()(e).brighten(t));
}
