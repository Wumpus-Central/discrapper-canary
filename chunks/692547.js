n.d(t, { Z: () => L }), n(388685), n(704826), n(35282);
var r = n(688619),
    i = n.n(r),
    a = n(595182),
    o = n.n(a),
    s = n(402903),
    l = n.n(s),
    c = n(8800),
    u = n(240096),
    d = n(521904),
    f = n(915840),
    p = n(196548),
    _ = n(387117),
    m = n(949180),
    h = n(868858),
    g = n(897710);
let { Themes: E } = n(15202).VV,
    { SemanticColors: b } = d.V,
    { RawColors: y } = c.V,
    { SemanticColorExperiments: O } = u.V,
    { SemanticColorHighContrast: v } = f.V,
    { Shadows: S } = h.V,
    { Spacing: I } = g.V,
    { Modules: T } = _.V,
    { Layout: C, Space: A } = p.VV,
    N = l()(y, (e) => i()(e)),
    P = {
        themes: E,
        modules: T,
        colors: l()(b, (e, t) => {
            let n = t;
            return {
                css: x(n),
                resolve(t) {
                    var r, i, a, o, s, l, c;
                    let u = e[t.theme],
                        d = u.raw,
                        f = u.opacity;
                    if (n in O && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            let s = null == (i = O[n]) || null == (r = i[e]) ? void 0 : r[t.theme];
                            null != s && ((d = null != (a = s.raw) ? a : d), (f = null != (o = s.opacity) ? o : f));
                        }
                    if (!0 === t.highContrastModeEnabled) {
                        let e = null == (s = v[n]) ? void 0 : s[t.theme];
                        null != e && ((d = null != (l = e.raw) ? l : d), (f = null != (c = e.opacity) ? c : f));
                    }
                    if (1 === f) return P.unsafe_rawColors[d].resolve(t);
                    {
                        let e = N[d];
                        return 0 !== e.alpha() && 1 !== f && (e = e.alpha(f)), R(e, t.saturation);
                    }
                },
            };
        }),
        unsafe_rawColors: l()(y, (e, t) => {
            let n = t,
                r = N[n];
            return {
                css: x(n),
                resolve(e) {
                    var t;
                    return R(r, null != (t = null == e ? void 0 : e.saturation) ? t : 1);
                },
            };
        }),
        shadows: l()(S, (e, t) => ({
            css: x(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles,
            }),
        })),
        radii: m.w,
        spacing: l()(I, (e) => "".concat(e, "px")),
        layout: l()(C, (e) => ("number" == typeof e ? "".concat(e, "px") : e)),
        space: l()(A, (e) => ({
            css: e.css,
            resolve(t) {
                let { density: n } = t;
                return e.resolve(n);
            },
        })),
    };
function R(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return w(e, t, n).hex("rgba");
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return w(e, t, n).css("hsl");
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return w(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = w(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        },
        rgba() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return w(e, t, n).rgba();
        },
    };
}
function w(e, t, n) {
    var r;
    let i = o()(null != (r = n.opacity) ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set("hsl.s", a.get("hsl.s") * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function D(e) {
    return e.toLowerCase().replace(/_/g, "-");
}
function x(e, t) {
    let n = null != t ? D(t) : null,
        r = D(e);
    return "var(--".concat([n, r].filter(Boolean).join("-"), ")");
}
let L = P;
