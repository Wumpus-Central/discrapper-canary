a.d(e, { ZP: () => T }), a(266796), a(411104);
var r = a(688619),
    n = a.n(r),
    o = a(402903),
    _ = a.n(o),
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
    T = {
        themes: I,
        colors: _()(R, (t, e) => ({ [p]: e })),
        unsafe_rawColors: d,
        shadows: _()(A, (t) => {
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
                var r, o;
                t = (function (t) {
                    if ('string' == typeof t) {
                        let e = t.toUpperCase();
                        if (!(e in I)) throw Error('Invalid theme: '.concat(t));
                        t = I[e];
                    }
                    return t;
                })(t);
                let _ = R[e[p]],
                    { category: i } = _,
                    c = _[t],
                    s = d[c.raw],
                    E = c.opacity;
                if ((null == a ? void 0 : a.gradient) != null && 'gradient' in _) {
                    let t = _.gradient[null == a ? void 0 : a.gradient.theme];
                    if (null != t) {
                        let e = n()(t.color in d ? d[t.color] : null == a ? void 0 : a.gradient.colors[t.color]);
                        'saturation' in t && (e = e.set('hsl.s', t.saturation)), 'lightness' in t && (e = e.set('hsl.l', t.lightness)), (s = e.hex()), (E = 'opacity' in t ? t.opacity : 1);
                    }
                }
                let l = null !== (r = null == a ? void 0 : a.contrast) && void 0 !== r ? r : 1,
                    A = null !== (o = null == a ? void 0 : a.saturation) && void 0 !== o ? o : 1;
                return (A < 1 && (s = (0, u.dO)(s, i, A)), 1 !== l && (s = (0, u.pq)(s, i, t, l)), 1 === E) ? s : n()(s).alpha(E).hex();
            },
            adjustColorSaturation: (t, e, a) => (0, u.dO)(t, a, e),
            adjustColorContrast: (t, e, a, r) => (0, u.pq)(t, a, r, e)
        }
    };
