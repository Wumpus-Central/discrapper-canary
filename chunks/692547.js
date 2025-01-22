var i = r(47120);
var a = r(757143);
var o = r(688619),
    s = r.n(o),
    l = r(595182),
    u = r.n(l),
    c = r(402903),
    d = r.n(c),
    f = r(35782),
    p = r(190558),
    h = r(196548),
    _ = r(387117),
    m = r(949180),
    g = r(777910),
    E = r(897710);
let { Themes: v } = r(15202).V,
    { SemanticColors: y, RawColors: b } = p.V,
    { SemanticColorExperiments: I } = f.V,
    { Shadows: T } = g.V,
    { Spacing: S } = E.V,
    { Modules: A } = _.V,
    { Layout: C } = h.V,
    N = d()(b, (e) => s()(e)),
    R = {
        themes: v,
        modules: A,
        colors: d()(y, (e, n) => {
            let r = n;
            return {
                css: x(r),
                resolve(n) {
                    let i = e[n.theme],
                        a = i.raw,
                        o = i.opacity;
                    if (r in I && null != n.enabledExperiments && n.enabledExperiments.length > 0)
                        for (let e of n.enabledExperiments) {
                            var s, l, u, c;
                            let i = null === (l = I[r]) || void 0 === l ? void 0 : null === (s = l[e]) || void 0 === s ? void 0 : s[n.theme];
                            null != i && ((a = null !== (u = i.raw) && void 0 !== u ? u : a), (o = null !== (c = i.opacity) && void 0 !== c ? c : o));
                        }
                    if (1 === o) return R.unsafe_rawColors[a].resolve(n);
                    {
                        let e = N[a];
                        return 0 !== e.alpha() && 1 !== o && (e = e.alpha(o)), O(e, n.saturation);
                    }
                }
            };
        }),
        unsafe_rawColors: d()(b, (e, n) => {
            let r = n,
                i = N[r];
            return {
                css: x(r),
                resolve: (e) => O(i, e.saturation)
            };
        }),
        shadows: d()(T, (e, n) => ({
            css: x(n),
            resolve: (n) => ({
                boxShadow: e[n.theme].boxShadow,
                filter: e[n.theme].filter,
                nativeStyles: e[n.theme].nativeStyles
            })
        })),
        radii: m.w,
        spacing: d()(S, (e) => ''.concat(e, 'px')),
        layout: d()(C, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e))
    };
function O(e, n) {
    return {
        spring() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D(e, n, r).hex('rgba');
        },
        hsl() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D(e, n, r).css('hsl');
        },
        hex() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D(e, n, r).hex();
        },
        int() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = D(e, n, r),
                a = i.num();
            return 1 !== i.alpha() ? (a << 8) | Math.round(255 * i.alpha()) : a;
        }
    };
}
function D(e, n, r) {
    var i;
    let a = u()(null !== (i = r.opacity) && void 0 !== i ? i : 1, 0, 1),
        o = e;
    return 1 !== n && (o = o.set('hsl.s', o.get('hsl.s') * n)), 1 !== a && (o = o.alpha(o.alpha() * a)), o;
}
function L(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function x(e, n) {
    let r = null != n ? L(n) : null,
        i = L(e);
    return 'var(--'.concat([r, i].filter(Boolean).join('-'), ')');
}
n.Z = R;
