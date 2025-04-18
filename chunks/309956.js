n.d(t, { B: () => s }), n(388685), n(539854);
var r = n(192379),
    l = n(512969),
    a = n(822857),
    i = n(215023),
    o = n(981631);
let s = (e, t, n) => {
    let { enabled: s } = (0, a.W)({ location: 'useShopViewTransition' }),
        c = r.useMemo(() => (t !== i.AW.ORBS || s ? t : i.AW.HOME), [t, s]),
        [u, d] = r.useState(c),
        [b, p] = r.useState(i.f7.VISIBLE);
    r.useEffect(() => {
        d(c), b !== i.f7.VISIBLE && p(i.f7.VISIBLE);
    }, [c, b]);
    let f = (e) => new Promise((t) => setTimeout(t, e)),
        g = (0, l.k6)();
    return {
        selectedTab: u,
        transitionState: b,
        transitionToTab: r.useCallback(
            async (t, r) => {
                r ? (p(i.f7.OUT), await f(1.1 * i.lb), d(t), n || g.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), p(i.f7.IN)) : (d(t), n || g.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), p(i.f7.VISIBLE);
            },
            [g, n, e]
        )
    };
};
