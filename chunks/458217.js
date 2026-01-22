n.d(t, {
    OB: () => c,
    Pf: () => u,
    Tr: () => o,
}),
    n(896048),
    n(65821);
var r = n(310784),
    i = n.n(r);
let a = 3,
    s = 100,
    o = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7,
    };
function l(e) {
    let [t, n, r, i] = e.rgba();
    return "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(i, ")");
}
function c(e) {
    var t, n, r;
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        u = null != (t = c.contrastRatio) ? t : o.NonText,
        d = null != (n = c.tolerance) ? n : a,
        f = i()(null != (r = c.base) ? r : e),
        p = i()(e),
        _ = f.luminance(),
        h = p,
        m = u,
        g = u + d,
        E = i().contrast(f, p),
        b = s;
    for (; b-- > 0; ) {
        let e = E < m,
            t = E > g;
        if (!e && !t) break;
        let n = h.luminance() > _;
        (h = (t && n) || (e && !n) ? h.darken() : h.brighten()), (E = i().contrast(f, h));
    }
    return l(h);
}
function u(e, t) {
    return l(i()(e).brighten(t));
}
