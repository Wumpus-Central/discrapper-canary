a.d(e, { ZP: () => N }), a(266796), a(411104);
var r = a(688619),
    n = a.n(r),
    _ = a(402903),
    o = a.n(_),
    i = a(190558),
    c = a(949180),
    s = a(777910),
    E = a(897710),
    l = a(15202),
    u = a(211468);
let { Themes: I } = l.V,
    { SemanticColors: R, RawColors: d } = i.V,
    { Shadows: A } = s.V,
    { Spacing: f } = E.V,
    p = Symbol('semanticColor'),
    N = {
        themes: I,
        colors: o()(R, (t, e) => ({ [p]: e })),
        unsafe_rawColors: d,
        shadows: o()(A, (t) => {
            function e(e) {
                return { resolve: (a, r) => e(t[a].nativeStyles, r) };
            }
            return {
                shadowOffset: e((t) => t.shadowOffset),
                shadowColor: e((t, e) => (e ? t.shadowColorAndroid : t.shadowColor)),
                shadowOpacity: e((t) => t.shadowOpacity),
                shadowRadius: e((t) => t.shadowRadius),
                elevation: e((t) => t.elevation)
            };
        }),
        radii: c.w,
        spacing: f,
        internal: {
            isSemanticColor: (t) => 'object' == typeof t && null !== t && p in t,
            getSemanticColorName: (t) => t[p],
            resolveSemanticColor(t, e, a) {
                var r, _;
                t = (function (t) {
                    if ('string' == typeof t) {
                        let e = t.toUpperCase();
                        if (!(e in I)) throw Error('Invalid theme: '.concat(t));
                        t = I[e];
                    }
                    return t;
                })(t);
                let o = R[e[p]],
                    { category: i } = o,
                    c = o[t],
                    s = d[c.raw],
                    E = c.opacity;
                if ((null == a ? void 0 : a.gradient) != null && 'gradient' in o) {
                    let t = o.gradient[null == a ? void 0 : a.gradient.theme];
                    if (null != t) {
                        let e = n()(t.color in d ? d[t.color] : null == a ? void 0 : a.gradient.colors[t.color]);
                        'saturation' in t && (e = e.set('hsl.s', t.saturation)), 'lightness' in t && (e = e.set('hsl.l', t.lightness)), (s = e.hex()), (E = 'opacity' in t ? t.opacity : 1);
                    }
                }
                let l = null != (r = null == a ? void 0 : a.contrast) ? r : 1,
                    A = null != (_ = null == a ? void 0 : a.saturation) ? _ : 1;
                return (A < 1 && (s = (0, u.dO)(s, i, A)), 1 !== l && (s = (0, u.pq)(s, i, t, l)), 1 === E) ? s : n()(s).alpha(E).hex();
            },
            adjustColorSaturation: (t, e, a) => (0, u.dO)(t, a, e),
            adjustColorContrast: (t, e, a, r) => (0, u.pq)(t, a, r, e)
        }
    };
