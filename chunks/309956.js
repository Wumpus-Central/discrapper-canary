n.d(t, { B: () => o }), n(47120), n(653041);
var r = n(192379),
    l = n(512969),
    i = n(822857),
    s = n(215023),
    a = n(981631);
let o = (e, t, n) => {
    let { enabled: o } = (0, i.W)({ location: 'useShopViewTransition' }),
        d = r.useMemo(() => (t !== s.AW.ORBS || o ? t : s.AW.HOME), [t, o]),
        [c, u] = r.useState(d),
        [C, h] = r.useState(s.f7.HIDDEN);
    r.useEffect(() => {
        u(d), h(s.f7.VISIBLE);
    }, [d]);
    let p = (e) => new Promise((t) => setTimeout(t, e)),
        m = (0, l.k6)();
    return {
        selectedTab: c,
        transitionState: C,
        transitionToTab: r.useCallback(
            async (t, r) => {
                r ? (h(s.f7.OUT), await p(1.1 * s.lb), u(t), n || m.push(a.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), h(s.f7.IN)) : (u(t), n || m.push(a.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), h(s.f7.VISIBLE);
            },
            [m, n, e]
        )
    };
};
