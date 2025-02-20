r.d(t, { B: () => s }), r(47120), r(653041);
var n = r(192379),
    l = r(512969),
    i = r(822857),
    a = r(215023),
    o = r(981631);
let s = (e, t, r) => {
    let { enabled: s } = (0, i.W)({ location: 'useShopViewTransition' }),
        c = n.useMemo(() => (t !== a.AW.ORBS || s ? t : a.AW.HOME), [t, s]),
        [d, u] = n.useState(c),
        [p, f] = n.useState(a.f7.HIDDEN);
    n.useEffect(() => {
        u(c), f(a.f7.VISIBLE);
    }, [c]);
    let h = (e) => new Promise((t) => setTimeout(t, e)),
        C = (0, l.k6)();
    return {
        selectedTab: d,
        transitionState: p,
        transitionToTab: n.useCallback(
            async (t, n) => {
                n ? (f(a.f7.OUT), await h(1.1 * a.lb), u(t), r || C.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), f(a.f7.IN)) : (u(t), r || C.push(o.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), f(a.f7.VISIBLE);
            },
            [C, r, e]
        )
    };
};
