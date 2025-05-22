n.d(t, { B: () => s }), n(388685), n(539854);
var r = n(73800),
    l = n(114858),
    a = n(822857),
    i = n(215023),
    o = n(981631);
let s = (e, t, n) => {
    let { enabled: s } = (0, a.WX)({ location: 'useShopViewTransition' }),
        c = r.useMemo(() => (t !== i.AW.ORBS || s ? t : i.AW.HOME), [t, s]),
        [u, d] = r.useState(c),
        [f, b] = r.useState(i.f7.VISIBLE);
    r.useEffect(() => {
        d(c), f !== i.f7.VISIBLE && b(i.f7.VISIBLE);
    }, [c, f]);
    let p = (e) => new Promise((t) => setTimeout(t, e)),
        g = (0, l.k6)();
    return {
        selectedTab: u,
        transitionState: f,
        transitionToTab: r.useCallback(
            async (t, r) => {
                r ? (b(i.f7.OUT), await p(1.1 * i.lb), d(t), n || g.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), b(i.f7.IN)) : (d(t), n || g.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), b(i.f7.VISIBLE);
            },
            [g, n, e]
        )
    };
};
