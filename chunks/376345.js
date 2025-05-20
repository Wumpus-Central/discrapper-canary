n.d(t, { ZP: () => y }), n(953529), n(415506);
var r = n(688619),
    i = n.n(r),
    o = n(402903),
    a = n.n(o),
    s = n(190558),
    l = n(949180),
    c = n(777910),
    u = n(897710),
    d = n(15202),
    f = n(211468);
let { Themes: _ } = d.V,
    { SemanticColors: p, RawColors: h } = s.V,
    { Shadows: m } = c.V,
    { Spacing: g } = u.V,
    E = Symbol('semanticColor');
function b(e) {
    if ('string' == typeof e) {
        let t = e.toUpperCase();
        if (!(t in _)) throw Error('Invalid theme: '.concat(e));
        e = _[t];
    }
    return e;
}
let y = {
    themes: _,
    colors: a()(p, (e, t) => ({ [E]: t })),
    unsafe_rawColors: h,
    shadows: a()(m, (e) => {
        function t(t) {
            return { resolve: (n, r) => t(e[n].nativeStyles, r) };
        }
        return {
            shadowOffset: t((e) => e.shadowOffset),
            shadowColor: t((e, t) => (t ? e.shadowColorAndroid : e.shadowColor)),
            shadowOpacity: t((e) => e.shadowOpacity),
            shadowRadius: t((e) => e.shadowRadius),
            elevation: t((e) => e.elevation)
        };
    }),
    radii: l.w,
    spacing: g,
    internal: {
        isSemanticColor: (e) => 'object' == typeof e && null !== e && E in e,
        getSemanticColorName: (e) => e[E],
        resolveSemanticColor(e, t, n) {
            var r, o;
            e = b(e);
            let a = p[t[E]],
                { category: s } = a,
                l = a[e],
                c = h[l.raw],
                u = l.opacity;
            if ((null == n ? void 0 : n.gradient) != null && 'gradient' in a) {
                let e = a.gradient[null == n ? void 0 : n.gradient.theme];
                if (null != e) {
                    let t = i()(e.color in h ? h[e.color] : null == n ? void 0 : n.gradient.colors[e.color]);
                    'saturation' in e && (t = t.set('hsl.s', e.saturation)), 'lightness' in e && (t = t.set('hsl.l', e.lightness)), (c = t.hex()), (u = 'opacity' in e ? e.opacity : 1);
                }
            }
            let d = null != (r = null == n ? void 0 : n.contrast) ? r : 1,
                _ = null != (o = null == n ? void 0 : n.saturation) ? o : 1;
            return (_ < 1 && (c = (0, f.dO)(c, s, _)), 1 !== d && (c = (0, f.pq)(c, s, e, d)), 1 === u) ? c : i()(c).alpha(u).hex();
        },
        adjustColorSaturation: (e, t, n) => (0, f.dO)(e, n, t),
        adjustColorContrast: (e, t, n, r) => (0, f.pq)(e, n, r, t)
    }
};
