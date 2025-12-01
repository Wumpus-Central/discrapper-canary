n.d(t, { ZP: () => O }), n(953529), n(415506);
var r = n(688619),
    i = n.n(r),
    a = n(402903),
    o = n.n(a),
    s = n(707427),
    l = n(8800),
    c = n(949180),
    u = n(868858),
    d = n(897710),
    f = n(15202),
    p = n(211468);
let { Themes: _ } = f.VV,
    { SemanticColors: m } = s.V,
    { RawColors: h } = l.V,
    { Shadows: g } = u.V,
    { Spacing: E } = d.V,
    b = Symbol("semanticColor");
function y(e) {
    if ("string" == typeof e) {
        let t = e.toUpperCase();
        if (!(t in _)) throw Error("Invalid theme: ".concat(e));
        e = _[t];
    }
    return e;
}
let O = {
    themes: _,
    colors: o()(m, (e, t) => ({ [b]: t })),
    unsafe_rawColors: h,
    shadows: o()(g, (e) => {
        function t(t) {
            return { resolve: (n, r) => t(e[n].nativeStyles, r) };
        }
        return {
            shadowOffset: t((e, t) => (t ? void 0 : e.shadowOffset)),
            shadowColor: t((e, t) => (t ? e.shadowColorAndroid : e.shadowColor)),
            shadowOpacity: t((e) => e.shadowOpacity),
            shadowRadius: t((e) => e.shadowRadius),
            elevation: t((e) => e.elevation),
        };
    }),
    radii: c.w,
    spacing: E,
    internal: {
        isSemanticColor: (e) => "object" == typeof e && null !== e && b in e,
        getSemanticColorName: (e) => e[b],
        resolveSemanticColor(e, t, n) {
            var r, a;
            e = y(e);
            let o = m[t[b]],
                { category: s } = o,
                l = o[e],
                c = h[l.raw],
                u = l.opacity;
            if ((null == n ? void 0 : n.gradient) != null && "gradient" in o) {
                let e = o.gradient[null == n ? void 0 : n.gradient.theme];
                if (null != e) {
                    let t = i()(e.color in h ? h[e.color] : null == n ? void 0 : n.gradient.colors[e.color]);
                    "saturation" in e && (t = t.set("hsl.s", e.saturation)),
                        "lightness" in e && (t = t.set("hsl.l", e.lightness)),
                        (c = t.hex()),
                        (u = "opacity" in e ? e.opacity : 1);
                }
            }
            let d = null != (r = null == n ? void 0 : n.contrast) ? r : 1,
                f = null != (a = null == n ? void 0 : n.saturation) ? a : 1;
            return (f < 1 && (c = (0, p.dO)(c, s, f)), 1 !== d && (c = (0, p.pq)(c, s, e, d)), 1 === u)
                ? c
                : i()(c).alpha(u).hex();
        },
        adjustColorSaturation: (e, t, n) => (0, p.dO)(e, n, t),
        adjustColorContrast: (e, t, n, r) => (0, p.pq)(e, n, r, t),
    },
};
