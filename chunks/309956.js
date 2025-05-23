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
        [p, g] = r.useState(i.f7.VISIBLE);
    r.useEffect(() => {
        d(c), p !== i.f7.VISIBLE && g(i.f7.VISIBLE);
    }, [c, p]);
    let b = (e) => new Promise((t) => setTimeout(t, e)),
        f = (0, l.k6)();
    return {
        selectedTab: u,
        transitionState: p,
        transitionToTab: r.useCallback(
            async (t, r) => {
                r ? (g(i.f7.OUT), await b(1.1 * i.lb), d(t), n || f.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), g(i.f7.IN)) : (d(t), n || f.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), g(i.f7.VISIBLE);
            },
            [f, n, e]
        )
    };
};
