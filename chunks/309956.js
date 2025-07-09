(n.d(t, { B: () => p }), n(388685), n(539854));
var r = n(73800),
    l = n(114858),
    o = n(335818),
    i = n(822857),
    a = n(870289),
    s = n(501431),
    c = n(215023),
    u = n(981631);
let d = {
        [c.AW.AVATAR_DECORATIONS]: o.G.AVATAR_DECORATION,
        [c.AW.PROFILE_EFFECTS]: o.G.PROFILE_EFFECT,
        [c.AW.NAMEPLATES]: o.G.NAMEPLATE,
        [c.AW.BUNDLES]: o.G.BUNDLE
    },
    p = (e, t, n) => {
        let { enabled: o } = (0, i.WX)({ location: 'useShopViewTransition' }),
            p = (0, a.F)('CollectiblesBrowse'),
            { setItemTypeFilter: g, reset: f } = (0, s.S)();
        r.useEffect(() => {
            let e = d[t];
            null != e && (f(), g(e));
        }, [t, g, f]);
        let h = r.useMemo(() => (t !== c.AW.ORBS || o ? ((0, c.RE)(t) && p ? c.AW.CATALOG : t) : c.AW.HOME), [t, o, p]),
            [b, m] = r.useState(h),
            [_, C] = r.useState(c.f7.VISIBLE);
        r.useEffect(() => {
            (m(h), _ !== c.f7.VISIBLE && C(c.f7.VISIBLE));
        }, [h, _]);
        let O = (e) => new Promise((t) => setTimeout(t, e)),
            E = (0, l.k6)(),
            v = r.useCallback(
                async (t, r) => {
                    if (b === t) return;
                    if ((r && (C(c.f7.OUT), await O(1.1 * c.lb)), (0, c.RE)(t))) {
                        let e = d[t];
                        (f(), g(e));
                    }
                    let l = p && ![c.AW.HOME, c.AW.ORBS].includes(t) ? c.AW.CATALOG : t;
                    (l === c.AW.HOME && f(), m(l), r && C(c.f7.IN), n || E.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(l), { shallow: !0 }), null != e.current && e.current.scrollTo({ to: 0 }), C(c.f7.VISIBLE));
                },
                [E, n, e, p, g, f, b]
            );
        return {
            selectedTab: b,
            transitionState: _,
            transitionToTab: v
        };
    };
