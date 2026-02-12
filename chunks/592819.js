"use strict";
n.d(t, { Ay: () => v });
var r = n(310784),
    i = n.n(r),
    a = n(563304),
    s = n.n(a),
    o = n(588261),
    l = n(907211),
    u = n(93132),
    c = n(199222),
    d = n(857526),
    _ = n(677370),
    f = n(680049),
    h = n(669393);
let { Themes: p } = f.zv,
    { SemanticColors: g } = l.z,
    { SemanticColorExperiments: E } = o.z,
    { RawColors: A } = u.z,
    { Shadows: I } = d.z,
    { Spacing: T } = _.z,
    y = Symbol("semanticColor");
function S(e) {
    if ("string" == typeof e) {
        let t = e.toUpperCase();
        if (!(t in p)) throw Error(`Invalid theme: ${e}`);
        e = p[t];
    }
    return e;
}
let v = {
    themes: p,
    colors: s()(g, (e, t) => ({ [y]: t })),
    unsafe_rawColors: A,
    shadows: s()(I, (e) => {
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
    radii: c.T,
    spacing: T,
    internal: {
        isSemanticColor: (e) => "object" == typeof e && null !== e && y in e,
        getSemanticColorName: (e) => e[y],
        resolveSemanticColor(e, t, n) {
            e = S(e);
            let r = g[t[y]],
                { category: a } = r,
                s = r[e],
                o = A[s.raw],
                l = s.opacity;
            if (n?.enabledExperiments != null && n.enabledExperiments.length > 0) {
                let r = E[t[y]];
                if (null != r)
                    for (let t of n.enabledExperiments) {
                        let n = r?.[t]?.[e];
                        if (null != n) {
                            (o = A[n.raw]), (l = n.opacity);
                            break;
                        }
                    }
            }
            if (n?.gradient != null && "gradient" in r) {
                let e = r.gradient[n?.gradient.theme];
                if (null != e) {
                    let t = i()(e.color in A ? A[e.color] : n?.gradient.colors[e.color]);
                    "saturation" in e && (t = t.set("hsl.s", e.saturation)),
                        "lightness" in e && (t = t.set("hsl.l", e.lightness)),
                        (o = t.hex()),
                        (l = "opacity" in e ? e.opacity : 1);
                }
            }
            let u = n?.contrast ?? 1,
                c = n?.saturation ?? 1;
            return (c < 1 && (o = (0, h.d)(o, a, c)), 1 !== u && (o = (0, h.yq)(o, a, e, u)), 1 === l)
                ? o
                : i()(o).alpha(l).hex();
        },
        adjustColorSaturation: (e, t, n) => (0, h.d)(e, n, t),
        adjustColorContrast: (e, t, n, r) => (0, h.yq)(e, n, r, t),
    },
};
