(n.d(t, { B: () => p }), n(388685), n(539854));
var r = n(73800),
    l = n(114858),
    i = n(335818),
    o = n(822857),
    a = n(870289),
    s = n(501431),
    c = n(215023),
    u = n(981631);
let d = {
        [c.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [c.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [c.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [c.AW.BUNDLES]: i.G.BUNDLE
    },
    p = (e, t, n) => {
        let { enabled: i } = (0, o.WX)({ location: 'useShopViewTransition' }),
            p = (0, a.F)('CollectiblesBrowse'),
            { setItemTypeFilter: g, clearItemTypeFilter: f } = (0, s.S0)();
        r.useEffect(() => {
            if (p) {
                let e = d[t];
                null != e && g(e);
            } else f();
        }, [p, t, g, f]);
        let h = r.useMemo(() => (t !== c.AW.ORBS || i ? ((0, c.RE)(t) && p ? c.AW.CATALOG : t) : c.AW.HOME), [t, i, p]),
            [b, m] = r.useState(h),
            [_, C] = r.useState(c.f7.VISIBLE);
        r.useEffect(() => {
            (m(h), _ !== c.f7.VISIBLE && C(c.f7.VISIBLE));
        }, [h, _]);
        let O = (e) => new Promise((t) => setTimeout(t, e)),
            v = (0, l.k6)();
        return {
            selectedTab: b,
            transitionState: _,
            transitionToTab: r.useCallback(
                async (t, r) => {
                    (r ? (C(c.f7.OUT), await O(1.1 * c.lb), m(t), n || v.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), C(c.f7.IN)) : (p ? ((0, c.RE)(t) ? g(d[t]) : f(), m(c.AW.CATALOG)) : m(t), n || v.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), C(c.f7.VISIBLE));
                },
                [v, n, e, p, g, f]
            )
        };
    };
