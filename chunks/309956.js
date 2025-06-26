n.d(t, { B: () => s }), n(388685), n(539854);
var r = n(73800),
    l = n(114858),
    a = n(822857),
    o = n(215023),
    i = n(981631);
let s = (e, t, n) => {
    let { enabled: s } = (0, a.WX)({ location: 'useShopViewTransition' }),
        c = r.useMemo(() => (t !== o.AW.ORBS || s ? t : o.AW.HOME), [t, s]),
        [u, d] = r.useState(c),
        [p, f] = r.useState(o.f7.VISIBLE);
    r.useEffect(() => {
        d(c), p !== o.f7.VISIBLE && f(o.f7.VISIBLE);
    }, [c, p]);
    let b = (e) => new Promise((t) => setTimeout(t, e)),
        g = (0, l.k6)();
    return {
        selectedTab: u,
        transitionState: p,
        transitionToTab: r.useCallback(
            async (t, r) => {
                r ? (f(o.f7.OUT), await b(1.1 * o.lb), d(t), n || g.push(i.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), f(o.f7.IN)) : (d(t), n || g.push(i.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), f(o.f7.VISIBLE);
            },
            [g, n, e]
        )
    };
};
