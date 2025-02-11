n.d(t, { B: () => o }), n(47120), n(653041);
var l = n(192379),
    r = n(512969),
    i = n(822857),
    s = n(215023),
    a = n(981631);
let o = (e, t, n) => {
    let { enabled: o } = (0, i.W)({ location: 'useShopViewTransition' }),
        d = l.useMemo(() => (t !== s.AW.ORBS || o ? t : s.AW.HOME), [t, o]),
        [c, u] = l.useState(d),
        [C, h] = l.useState(s.f7.HIDDEN);
    l.useEffect(() => {
        u(d), h(s.f7.VISIBLE);
    }, [d]);
    let p = (e) => new Promise((t) => setTimeout(t, e)),
        m = (0, r.k6)();
    return {
        selectedTab: c,
        transitionState: C,
        transitionToTab: l.useCallback(
            async (t, l) => {
                l ? (h(s.f7.OUT), await p(1.1 * s.lb), u(t), n || m.push(a.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), h(s.f7.IN)) : (u(t), n || m.push(a.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), h(s.f7.VISIBLE);
            },
            [m, n, e]
        )
    };
};
