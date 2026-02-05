"use strict";
n.d(t, { Ay: () => T });
var r = n(310784),
    i = n.n(r),
    a = n(563304),
    s = n.n(a),
    o = n(907211),
    l = n(93132),
    u = n(199222),
    c = n(857526),
    d = n(677370),
    _ = n(680049),
    f = n(669393);
let { Themes: p } = _.zv,
    { SemanticColors: h } = o.z,
    { RawColors: m } = l.z,
    { Shadows: g } = c.z,
    { Spacing: E } = d.z,
    A = Symbol("semanticColor");
function I(e) {
    if ("string" == typeof e) {
        let t = e.toUpperCase();
        if (!(t in p)) throw Error(`Invalid theme: ${e}`);
        e = p[t];
    }
    return e;
}
let T = {
    themes: p,
    colors: s()(h, (e, t) => ({ [A]: t })),
    unsafe_rawColors: m,
    shadows: s()(g, (e) => {
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
    radii: u.T,
    spacing: E,
    internal: {
        isSemanticColor: (e) => "object" == typeof e && null !== e && A in e,
        getSemanticColorName: (e) => e[A],
        resolveSemanticColor(e, t, n) {
            e = I(e);
            let r = h[t[A]],
                { category: a } = r,
                s = r[e],
                o = m[s.raw],
                l = s.opacity;
            if (n?.gradient != null && "gradient" in r) {
                let e = r.gradient[n?.gradient.theme];
                if (null != e) {
                    let t = i()(e.color in m ? m[e.color] : n?.gradient.colors[e.color]);
                    "saturation" in e && (t = t.set("hsl.s", e.saturation)),
                        "lightness" in e && (t = t.set("hsl.l", e.lightness)),
                        (o = t.hex()),
                        (l = "opacity" in e ? e.opacity : 1);
                }
            }
            let u = n?.contrast ?? 1,
                c = n?.saturation ?? 1;
            return (c < 1 && (o = (0, f.d)(o, a, c)), 1 !== u && (o = (0, f.yq)(o, a, e, u)), 1 === l)
                ? o
                : i()(o).alpha(l).hex();
        },
        adjustColorSaturation: (e, t, n) => (0, f.d)(e, n, t),
        adjustColorContrast: (e, t, n, r) => (0, f.yq)(e, n, r, t),
    },
};
