"use strict";
n.d(t, { Ay: () => N });
var r = n(310784),
    i = n.n(r),
    s = n(563304),
    a = n.n(s),
    o = n(588261),
    l = n(907211),
    u = n(93132),
    c = n(788894),
    d = n(199222),
    _ = n(857526),
    f = n(677370),
    p = n(680049),
    h = n(669393);
let { Themes: m } = p.zv,
    { SemanticColors: E } = l.z,
    { SemanticColorExperiments: g } = o.z,
    { RawColors: A } = u.z,
    { Modules: I } = c.z,
    { Shadows: T } = _.z,
    { Spacing: S } = f.z,
    y = Symbol("semanticColor");
function v(e) {
    if ("string" == typeof e) {
        let t = e.toUpperCase();
        if (!(t in m)) throw Error(`Invalid theme: ${e}`);
        e = m[t];
    }
    return e;
}
let N = {
    themes: m,
    colors: a()(E, (e, t) => ({ [y]: t })),
    unsafe_rawColors: A,
    shadows: a()(T, (e) => {
        function t(t) {
            return {
                resolve(n) {
                    let { theme: r, isAndroid: i } = n;
                    return t(e[r].nativeStyles, i);
                },
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
    radii: d.T,
    modules: a()(I, (e) =>
        a()(e, (e) => ({
            resolve(t) {
                let { enabledExperiments: n, density: r } = t;
                return e.resolve({ enabledExperiments: n ?? [], density: r ?? "compact" });
            },
        })),
    ),
    spacing: S,
    internal: {
        isSemanticColor: (e) => "object" == typeof e && null !== e && y in e,
        getSemanticColorName: (e) => e[y],
        resolveSemanticColor(e, t, n) {
            e = v(e);
            let r = E[t[y]],
                { category: s } = r,
                a = r[e],
                o = A[a.raw],
                l = a.opacity;
            if (n?.enabledExperiments != null && n.enabledExperiments.length > 0) {
                let r = g[t[y]];
                if (null != r)
                    for (let t of n.enabledExperiments) {
                        let n = r?.[t]?.[e];
                        if (null != n) {
                            (o = A[n.raw]), (l = n.opacity);
                            break;
                        }
                    }
            }
            if (n?.isProfileTheme && "userProfileThemes" in r) {
                let e = r.userProfileThemes,
                    t = n?.gradient?.theme,
                    i = null != t ? e[t] : null;
                null != i && ((o = A[i.raw]), (l = i.opacity));
            } else if (n?.gradient != null && "gradient" in r) {
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
            return (c < 1 && (o = (0, h.d)(o, s, c)), 1 !== u && (o = (0, h.yq)(o, s, e, u)), 1 === l)
                ? o
                : i()(o).alpha(l).hex();
        },
        adjustColorSaturation: (e, t, n) => (0, h.d)(e, n, t),
        adjustColorContrast: (e, t, n, r) => (0, h.yq)(e, n, r, t),
    },
};
