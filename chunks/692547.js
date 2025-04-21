n.d(t, { Z: () => w }), n(388685), n(704826), n(35282);
var r = n(688619),
    i = n.n(r),
    a = n(595182),
    o = n.n(a),
    s = n(402903),
    l = n.n(s),
    c = n(35782),
    u = n(190558),
    d = n(196548),
    f = n(387117),
    _ = n(949180),
    p = n(777910),
    h = n(897710);
let { Themes: m } = n(15202).V,
    { SemanticColors: g, RawColors: E } = u.V,
    { SemanticColorExperiments: b } = c.V,
    { Shadows: y } = p.V,
    { Spacing: v } = h.V,
    { Modules: O } = f.V,
    { Layout: I, Space: S } = d.VV,
    T = l()(E, (e) => i()(e)),
    A = {
        themes: m,
        modules: O,
        colors: l()(g, (e, t) => {
            let n = t;
            return {
                css: P(n),
                resolve(t) {
                    let r = e[t.theme],
                        i = r.raw,
                        a = r.opacity;
                    if (n in b && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            var o, s, l, c;
                            let r = null == (s = b[n]) || null == (o = s[e]) ? void 0 : o[t.theme];
                            null != r && ((i = null != (l = r.raw) ? l : i), (a = null != (c = r.opacity) ? c : a));
                        }
                    if (1 === a) return A.unsafe_rawColors[i].resolve(t);
                    {
                        let e = T[i];
                        return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), N(e, t.saturation);
                    }
                }
            };
        }),
        unsafe_rawColors: l()(E, (e, t) => {
            let n = t,
                r = T[n];
            return {
                css: P(n),
                resolve(e) {
                    var t;
                    return N(r, null != (t = null == e ? void 0 : e.saturation) ? t : 1);
                }
            };
        }),
        shadows: l()(y, (e, t) => ({
            css: P(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: _.w,
        spacing: l()(v, (e) => ''.concat(e, 'px')),
        layout: l()(I, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e)),
        space: l()(S, (e) => ({
            css: e.css,
            resolve(t) {
                let { density: n } = t;
                return e.resolve(n);
            }
        }))
    };
function N(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).hex('rgba');
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).css('hsl');
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = C(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        }
    };
}
function C(e, t, n) {
    var r;
    let i = o()(null != (r = n.opacity) ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function R(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function P(e, t) {
    let n = null != t ? R(t) : null,
        r = R(e);
    return 'var(--'.concat([n, r].filter(Boolean).join('-'), ')');
}
let w = A;
