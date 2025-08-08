n.d(t, { B: () => g }), n(388685), n(539854);
var r = n(73800),
    l = n(114858),
    a = n(335818),
    i = n(822857),
    o = n(870289),
    s = n(501431),
    c = n(149705),
    u = n(215023),
    d = n(981631);
let p = {
        [u.AW.AVATAR_DECORATIONS]: a.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: a.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: a.G.NAMEPLATE,
        [u.AW.BUNDLES]: a.G.BUNDLE,
    },
    g = (e, t) => {
        let { enabled: n } = (0, i.WX)({ location: "useShopViewTransition" }),
            a = (0, o.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: g, reset: f, setCurrentTab: b } = (0, s.S)(),
            h = r.useMemo(() => (e !== u.AW.ORBS || n ? ((0, u.RE)(e) && a ? u.AW.CATALOG : e) : u.AW.HOME), [e, n, a]),
            [m, _] = r.useState(h),
            [v, C] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            b(m);
        }, [m, b]),
            r.useEffect(() => {
                _(h);
            }, [h]);
        let O = (e) => new Promise((t) => setTimeout(t, e)),
            { clearError: E } = (0, c.a)(),
            S = (0, l.k6)(),
            y = r.useCallback(
                async (e, n) => {
                    if ((E(), e === u.AW.CATALOG)) f();
                    else if ((0, u.RE)(e) && e !== m) {
                        let t = p[e];
                        null != t ? g(t) : f();
                    }
                    if (m === e) return;
                    n && (C(u.f7.OUT), await O(1.1 * u.lb));
                    let r = a && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    _(r),
                        n && C(u.f7.IN),
                        t || S.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r), { shallow: !0 }),
                        C(u.f7.VISIBLE);
                },
                [S, t, a, g, f, m, E],
            );
        return {
            selectedTab: m,
            transitionState: v,
            transitionToTab: y,
        };
    };
