n.d(t, { Z: () => D }), n(388685), n(704826), n(35282);
var r = n(688619),
    i = n.n(r),
    a = n(595182),
    o = n.n(a),
    s = n(402903),
    l = n.n(s),
    c = n(8800),
    u = n(240096),
    d = n(521904),
    f = n(196548),
    _ = n(387117),
    p = n(949180),
    h = n(868858),
    m = n(897710);
let { Themes: g } = n(15202).V,
    { SemanticColors: E } = d.V,
    { RawColors: b } = c.V,
    { SemanticColorExperiments: y } = u.V,
    { Shadows: O } = h.V,
    { Spacing: v } = m.V,
    { Modules: I } = _.V,
    { Layout: T, Space: S } = f.VV,
    A = l()(b, (e) => i()(e)),
    N = {
        themes: g,
        modules: I,
        colors: l()(E, (e, t) => {
            let n = t;
            return {
                css: w(n),
                resolve(t) {
                    let r = e[t.theme],
                        i = r.raw,
                        a = r.opacity;
                    if (n in y && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            var o, s, l, c;
                            let r = null == (s = y[n]) || null == (o = s[e]) ? void 0 : o[t.theme];
                            null != r && ((i = null != (l = r.raw) ? l : i), (a = null != (c = r.opacity) ? c : a));
                        }
                    if (1 === a) return N.unsafe_rawColors[i].resolve(t);
                    {
                        let e = A[i];
                        return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), C(e, t.saturation);
                    }
                }
            };
        }),
        unsafe_rawColors: l()(b, (e, t) => {
            let n = t,
                r = A[n];
            return {
                css: w(n),
                resolve(e) {
                    var t;
                    return C(r, null != (t = null == e ? void 0 : e.saturation) ? t : 1);
                }
            };
        }),
        shadows: l()(O, (e, t) => ({
            css: w(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: p.w,
        spacing: l()(v, (e) => ''.concat(e, 'px')),
        layout: l()(T, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e)),
        space: l()(S, (e) => ({
            css: e.css,
            resolve(t) {
                let { density: n } = t;
                return e.resolve(n);
            }
        }))
    };
function C(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return R(e, t, n).hex('rgba');
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return R(e, t, n).css('hsl');
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return R(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = R(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        }
    };
}
function R(e, t, n) {
    var r;
    let i = o()(null != (r = n.opacity) ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function P(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function w(e, t) {
    let n = null != t ? P(t) : null,
        r = P(e);
    return 'var(--'.concat([n, r].filter(Boolean).join('-'), ')');
}
let D = N;
