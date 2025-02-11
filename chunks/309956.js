n.d(t, { B: () => o }), n(47120), n(653041);
var r = n(192379),
    l = n(512969),
    a = n(822857),
    i = n(215023),
    s = n(981631);
let o = (e, t, n) => {
    let { enabled: o } = (0, a.W)({ location: 'useShopViewTransition' }),
        d = r.useMemo(() => (t !== i.AW.ORBS || o ? t : i.AW.HOME), [t, o]),
        [c, u] = r.useState(d),
        [C, h] = r.useState(i.f7.HIDDEN);
    r.useEffect(() => {
        u(d), h(i.f7.VISIBLE);
    }, [d]);
    let p = (e) => new Promise((t) => setTimeout(t, e)),
        m = (0, l.k6)();
    return {
        selectedTab: c,
        transitionState: C,
        transitionToTab: r.useCallback(
            async (t, r) => {
                r ? (h(i.f7.OUT), await p(1.1 * i.lb), u(t), n || m.push(s.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), h(i.f7.IN)) : (u(t), n || m.push(s.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), h(i.f7.VISIBLE);
            },
            [m, n, e]
        )
    };
};
