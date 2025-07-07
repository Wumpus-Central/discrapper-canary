(n.d(t, { B: () => p }), n(388685), n(539854));
var r = n(73800),
    l = n(114858),
    i = n(335818),
    o = n(822857),
    a = n(870289),
    s = n(501431),
    c = n(215023),
    u = n(981631);
let d = {
        [c.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [c.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [c.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [c.AW.BUNDLES]: i.G.BUNDLE
    },
    p = (e, t, n) => {
        let { enabled: i } = (0, o.WX)({ location: 'useShopViewTransition' }),
            p = (0, a.F)('CollectiblesBrowse'),
            { setItemTypeFilter: f, clearItemTypeFilter: g, reset: h } = (0, s.S)();
        r.useEffect(() => {
            if (p) {
                let e = d[t];
                null != e && f(e);
            } else g();
        }, [p, t, f, g]);
        let b = r.useMemo(() => (t !== c.AW.ORBS || i ? ((0, c.RE)(t) && p ? c.AW.CATALOG : t) : c.AW.HOME), [t, i, p]),
            [m, _] = r.useState(b),
            [C, O] = r.useState(c.f7.VISIBLE);
        r.useEffect(() => {
            (_(b), C !== c.f7.VISIBLE && O(c.f7.VISIBLE));
        }, [b, C]);
        let E = (e) => new Promise((t) => setTimeout(t, e)),
            v = (0, l.k6)();
        return {
            selectedTab: m,
            transitionState: C,
            transitionToTab: r.useCallback(
                async (t, r) => {
                    (t === c.AW.HOME && p && h(), r ? (O(c.f7.OUT), await E(1.1 * c.lb), _(t), n || v.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 }), O(c.f7.IN)) : (p ? ((0, c.RE)(t) ? f(d[t]) : g(), _(c.AW.CATALOG)) : _(t), n || v.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(t), { shallow: !0 })), null != e.current && e.current.scrollTo({ to: 0 }), O(c.f7.VISIBLE));
                },
                [v, n, e, p, f, g, h]
            )
        };
    };
