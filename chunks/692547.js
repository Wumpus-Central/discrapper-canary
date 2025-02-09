n.d(t, { Z: () => D }), n(47120), n(757143);
var i = n(688619),
    r = n.n(i),
    a = n(595182),
    s = n.n(a),
    o = n(402903),
    l = n.n(o),
    u = n(35782),
    c = n(190558),
    d = n(196548),
    f = n(387117),
    _ = n(949180),
    p = n(777910),
    h = n(897710);
let { Themes: m } = n(15202).V,
    { SemanticColors: g, RawColors: E } = c.V,
    { SemanticColorExperiments: v } = u.V,
    { Shadows: y } = p.V,
    { Spacing: I } = h.V,
    { Modules: T } = f.V,
    { Layout: b } = d.V,
    S = l()(E, (e) => r()(e)),
    A = {
        themes: m,
        modules: T,
        colors: l()(g, (e, t) => {
            let n = t;
            return {
                css: O(n),
                resolve(t) {
                    let i = e[t.theme],
                        r = i.raw,
                        a = i.opacity;
                    if (n in v && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            var s, o, l, u;
                            let i = null === (o = v[n]) || void 0 === o ? void 0 : null === (s = o[e]) || void 0 === s ? void 0 : s[t.theme];
                            null != i && ((r = null !== (l = i.raw) && void 0 !== l ? l : r), (a = null !== (u = i.opacity) && void 0 !== u ? u : a));
                        }
                    if (1 === a) return A.unsafe_rawColors[r].resolve(t);
                    {
                        let e = S[r];
                        return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), N(e, t.saturation);
                    }
                }
            };
        }),
        unsafe_rawColors: l()(E, (e, t) => {
            let n = t,
                i = S[n];
            return {
                css: O(n),
                resolve(e) {
                    var t;
                    return N(i, null !== (t = null == e ? void 0 : e.saturation) && void 0 !== t ? t : 1);
                }
            };
        }),
        shadows: l()(y, (e, t) => ({
            css: O(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: _.w,
        spacing: l()(I, (e) => ''.concat(e, 'px')),
        layout: l()(b, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e))
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
                i = C(e, t, n),
                r = i.num();
            return 1 !== i.alpha() ? (r << 8) | Math.round(255 * i.alpha()) : r;
        }
    };
}
function C(e, t, n) {
    var i;
    let r = s()(null !== (i = n.opacity) && void 0 !== i ? i : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== r && (a = a.alpha(a.alpha() * r)), a;
}
function R(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function O(e, t) {
    let n = null != t ? R(t) : null,
        i = R(e);
    return 'var(--'.concat([n, i].filter(Boolean).join('-'), ')');
}
let D = A;
