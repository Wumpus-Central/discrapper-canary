(n.d(t, { B: () => s }), n(388685), n(539854));
var r = n(73800),
    l = n(114858),
    i = n(822857),
    a = n(215023),
    o = n(981631);
let s = (e, t, n) => {
    let { enabled: s } = (0, i.WX)({ location: 'useShopViewTransition' }),
        c = r.useMemo(() => (t !== a.AW.ORBS || s ? t : a.AW.HOME), [t, s]),
        [u, d] = r.useState(c),
        [p, g] = r.useState(a.f7.VISIBLE);
    r.useEffect(() => {
        (d(c), p !== a.f7.VISIBLE && g(a.f7.VISIBLE));
    }, [c, p]);
    let f = (e) => new Promise((t) => setTimeout(t, e)),
        h = (0, l.k6)();
    return {
        selectedTab: u,
        transitionState: p,
        transitionToTab: r.useCallback(
            async (t, r) => {
                (r ? (g(a.f7.OUT), await f(1.1 * a.lb), d(t), n || h.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), g(a.f7.IN)) : (d(t), n || h.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), g(a.f7.VISIBLE));
            },
            [h, n, e]
        )
    };
};
