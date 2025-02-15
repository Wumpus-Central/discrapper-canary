n.d(t, { B: () => o }), n(47120), n(653041);
var l = n(192379),
    r = n(512969),
    i = n(822857),
    a = n(215023),
    s = n(981631);
let o = (e, t, n) => {
    let { enabled: o } = (0, i.W)({ location: 'useShopViewTransition' }),
        d = l.useMemo(() => (t !== a.AW.ORBS || o ? t : a.AW.HOME), [t, o]),
        [c, u] = l.useState(d),
        [C, h] = l.useState(a.f7.HIDDEN);
    l.useEffect(() => {
        u(d), h(a.f7.VISIBLE);
    }, [d]);
    let m = (e) => new Promise((t) => setTimeout(t, e)),
        p = (0, r.k6)();
    return {
        selectedTab: c,
        transitionState: C,
        transitionToTab: l.useCallback(
            async (t, l) => {
                l ? (h(a.f7.OUT), await m(1.1 * a.lb), u(t), n || p.push(s.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), h(a.f7.IN)) : (u(t), n || p.push(s.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), h(a.f7.VISIBLE);
            },
            [p, n, e]
        )
    };
};
