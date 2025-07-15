(r.d(t, { B: () => f }), r(388685), r(539854));
var n = r(73800),
    l = r(114858),
    i = r(335818),
    o = r(822857),
    a = r(870289),
    s = r(501431),
    c = r(149705),
    u = r(215023),
    d = r(981631);
let p = {
        [u.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [u.AW.BUNDLES]: i.G.BUNDLE
    },
    f = (e, t, r) => {
        let { enabled: i } = (0, o.WX)({ location: 'useShopViewTransition' }),
            f = (0, a.FF)('CollectiblesBrowse'),
            { setItemTypeFilter: g, reset: h, setCurrentTab: b } = (0, s.S)(),
            m = n.useMemo(() => (t !== u.AW.ORBS || i ? ((0, u.RE)(t) && f ? u.AW.CATALOG : t) : u.AW.HOME), [t, i, f]),
            [_, O] = n.useState(m),
            [C, v] = n.useState(u.f7.VISIBLE);
        (n.useEffect(() => {
            b(_);
        }, [_, b]),
            n.useEffect(() => {
                (O(m), C !== u.f7.VISIBLE && v(u.f7.VISIBLE));
            }, [m, C]));
        let E = (e) => new Promise((t) => setTimeout(t, e)),
            { clearError: S } = (0, c.a)(),
            y = (0, l.k6)(),
            x = n.useCallback(
                async (t, n) => {
                    if ((S(), t === u.AW.CATALOG)) h();
                    else if ((0, u.RE)(t) && t !== _) {
                        let e = p[t];
                        null != e ? g(e) : h();
                    }
                    if (_ === t) return;
                    n && (v(u.f7.OUT), await E(1.1 * u.lb));
                    let l = f && ![u.AW.HOME, u.AW.ORBS].includes(t) ? u.AW.CATALOG : t;
                    (O(l), n && v(u.f7.IN), r || y.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(l), { shallow: !0 }), null != e.current && e.current.scrollTo({ to: 0 }), v(u.f7.VISIBLE));
                },
                [y, r, e, f, g, h, _, S]
            );
        return {
            selectedTab: _,
            transitionState: C,
            transitionToTab: x
        };
    };
