(n.d(t, { Z: () => x }), n(388685), n(704826), n(35282));
var r = n(688619),
    i = n.n(r),
    a = n(595182),
    o = n.n(a),
    s = n(402903),
    l = n.n(s),
    c = n(8800),
    u = n(240096),
    d = n(521904),
    _ = n(915840),
    f = n(196548),
    p = n(387117),
    h = n(949180),
    m = n(868858),
    g = n(897710);
let { Themes: E } = n(15202).V,
    { SemanticColors: b } = d.V,
    { RawColors: y } = c.V,
    { SemanticColorExperiments: O } = u.V,
    { SemanticColorHighContrast: v } = _.V,
    { Shadows: I } = m.V,
    { Spacing: T } = g.V,
    { Modules: S } = p.V,
    { Layout: A, Space: N } = f.VV,
    C = l()(y, (e) => i()(e)),
    R = {
        themes: E,
        modules: S,
        colors: l()(b, (e, t) => {
            let n = t;
            return {
                css: L(n),
                resolve(t) {
                    var r, i, a, o, s, l, c;
                    let u = e[t.theme],
                        d = u.raw,
                        _ = u.opacity;
                    if (n in O && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            let s = null == (i = O[n]) || null == (r = i[e]) ? void 0 : r[t.theme];
                            null != s && ((d = null != (a = s.raw) ? a : d), (_ = null != (o = s.opacity) ? o : _));
                        }
                    if (!0 === t.highContrastModeEnabled) {
                        let e = null == (s = v[n]) ? void 0 : s[t.theme];
                        null != e && ((d = null != (l = e.raw) ? l : d), (_ = null != (c = e.opacity) ? c : _));
                    }
                    if (1 === _) return R.unsafe_rawColors[d].resolve(t);
                    {
                        let e = C[d];
                        return (0 !== e.alpha() && 1 !== _ && (e = e.alpha(_)), P(e, t.saturation));
                    }
                }
            };
        }),
        unsafe_rawColors: l()(y, (e, t) => {
            let n = t,
                r = C[n];
            return {
                css: L(n),
                resolve(e) {
                    var t;
                    return P(r, null != (t = null == e ? void 0 : e.saturation) ? t : 1);
                }
            };
        }),
        shadows: l()(I, (e, t) => ({
            css: L(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: h.w,
        spacing: l()(T, (e) => ''.concat(e, 'px')),
        layout: l()(A, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e)),
        space: l()(N, (e) => ({
            css: e.css,
            resolve(t) {
                let { density: n } = t;
                return e.resolve(n);
            }
        }))
    };
function P(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return w(e, t, n).hex('rgba');
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return w(e, t, n).css('hsl');
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
        }
    };
}
function w(e, t, n) {
    var r;
    let i = o()(null != (r = n.opacity) ? r : 1, 0, 1),
        a = e;
    return (1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a);
}
function D(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function L(e, t) {
    let n = null != t ? D(t) : null,
        r = D(e);
    return 'var(--'.concat([n, r].filter(Boolean).join('-'), ')');
}
let x = R;
