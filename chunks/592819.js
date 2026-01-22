n.d(t, {
    Ay: () => O,
}),
    n(228524),
    n(65821);
var r = n(310784),
    i = n.n(r),
    a = n(563304),
    s = n.n(a),
    o = n(907211),
    l = n(93132),
    c = n(199222),
    u = n(857526),
    d = n(677370),
    f = n(680049),
    p = n(669393);
let { Themes: _ } = f.zv,
    { SemanticColors: h } = o.z,
    { RawColors: m } = l.z,
    { Shadows: g } = u.z,
    { Spacing: E } = d.z,
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
    colors: s()(h, (e, t) => ({
        [b]: t,
    })),
    unsafe_rawColors: m,
    shadows: s()(g, (e) => {
        function t(t) {
            return {
                resolve: (n, r) => t(e[n].nativeStyles, r),
            };
        }
        return {
            shadowOffset: t((e, t) => (t ? void 0 : e.shadowOffset)),
            shadowColor: t((e, t) => (t ? e.shadowColorAndroid : e.shadowColor)),
            shadowOpacity: t((e) => e.shadowOpacity),
            shadowRadius: t((e) => e.shadowRadius),
            elevation: t((e) => e.elevation),
        };
    }),
    radii: c.T,
    spacing: E,
    internal: {
        isSemanticColor: (e) => "object" == typeof e && null !== e && b in e,
        getSemanticColorName: (e) => e[b],
        resolveSemanticColor(e, t, n) {
            var r, a;
            e = y(e);
            let s = h[t[b]],
                { category: o } = s,
                l = s[e],
                c = m[l.raw],
                u = l.opacity;
            if ((null == n ? void 0 : n.gradient) != null && "gradient" in s) {
                let e = s.gradient[null == n ? void 0 : n.gradient.theme];
                if (null != e) {
                    let t = i()(e.color in m ? m[e.color] : null == n ? void 0 : n.gradient.colors[e.color]);
                    "saturation" in e && (t = t.set("hsl.s", e.saturation)),
                        "lightness" in e && (t = t.set("hsl.l", e.lightness)),
                        (c = t.hex()),
                        (u = "opacity" in e ? e.opacity : 1);
                }
            }
            let d = null != (r = null == n ? void 0 : n.contrast) ? r : 1,
                f = null != (a = null == n ? void 0 : n.saturation) ? a : 1;
            return (f < 1 && (c = (0, p.d)(c, o, f)), 1 !== d && (c = (0, p.yq)(c, o, e, d)), 1 === u)
                ? c
                : i()(c).alpha(u).hex();
        },
        adjustColorSaturation: (e, t, n) => (0, p.d)(e, n, t),
        adjustColorContrast: (e, t, n, r) => (0, p.yq)(e, n, r, t),
    },
};
