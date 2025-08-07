r.d(t, { B: () => f }), r(388685), r(539854);
var n = r(73800),
    l = r(114858),
    a = r(335818),
    i = r(822857),
    o = r(870289),
    s = r(501431),
    c = r(149705),
    u = r(215023),
    d = r(981631);
let p = {
        [u.AW.AVATAR_DECORATIONS]: a.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: a.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: a.G.NAMEPLATE,
        [u.AW.BUNDLES]: a.G.BUNDLE,
    },
    f = (e, t) => {
        let { enabled: r } = (0, i.WX)({ location: "useShopViewTransition" }),
            a = (0, o.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: f, reset: g, setCurrentTab: b } = (0, s.S)(),
            h = n.useMemo(() => (e !== u.AW.ORBS || r ? ((0, u.RE)(e) && a ? u.AW.CATALOG : e) : u.AW.HOME), [e, r, a]),
            [m, _] = n.useState(h),
            [v, C] = n.useState(u.f7.VISIBLE);
        n.useEffect(() => {
            b(m);
        }, [m, b]),
            n.useEffect(() => {
                _(h);
            }, [h]);
        let O = (e) => new Promise((t) => setTimeout(t, e)),
            { clearError: E } = (0, c.a)(),
            S = (0, l.k6)(),
            y = n.useCallback(
                async (e, r) => {
                    if ((E(), e === u.AW.CATALOG)) g();
                    else if ((0, u.RE)(e) && e !== m) {
                        let t = p[e];
                        null != t ? f(t) : g();
                    }
                    if (m === e) return;
                    r && (C(u.f7.OUT), await O(1.1 * u.lb));
                    let n = a && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    _(n),
                        r && C(u.f7.IN),
                        t || S.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n), { shallow: !0 }),
                        C(u.f7.VISIBLE);
                },
                [S, t, a, f, g, m, E],
            );
        return {
            selectedTab: m,
            transitionState: v,
            transitionToTab: y,
        };
    };
