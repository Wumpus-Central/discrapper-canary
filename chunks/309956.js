(r.d(t, { B: () => f }), r(388685), r(539854));
var n = r(73800),
    l = r(114858),
    o = r(335818),
    i = r(822857),
    a = r(870289),
    s = r(501431),
    c = r(149705),
    u = r(215023),
    d = r(981631);
let p = {
        [u.AW.AVATAR_DECORATIONS]: o.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: o.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: o.G.NAMEPLATE,
        [u.AW.BUNDLES]: o.G.BUNDLE
    },
    f = (e, t, r) => {
        let { enabled: o } = (0, i.WX)({ location: 'useShopViewTransition' }),
            f = (0, a.F)('CollectiblesBrowse'),
            { setItemTypeFilter: g, reset: h, setCurrentTab: b } = (0, s.S)(),
            { clear: m } = (0, c.a)(),
            _ = n.useMemo(() => (t !== u.AW.ORBS || o ? ((0, u.RE)(t) && f ? u.AW.CATALOG : t) : u.AW.HOME), [t, o, f]),
            [O, C] = n.useState(_),
            [v, E] = n.useState(u.f7.VISIBLE);
        (n.useEffect(() => {
            b(O);
        }, [O, b]),
            n.useEffect(() => {
                (C(_), v !== u.f7.VISIBLE && E(u.f7.VISIBLE));
            }, [_, v]));
        let S = (e) => new Promise((t) => setTimeout(t, e)),
            y = (0, l.k6)(),
            x = n.useCallback(
                async (t, n) => {
                    if ((m(), t === u.AW.CATALOG)) h();
                    else if ((0, u.RE)(t) && t !== O) {
                        h();
                        let e = p[t];
                        null != e && g(e);
                    }
                    if (O === t) return;
                    n && (E(u.f7.OUT), await S(1.1 * u.lb));
                    let l = f && ![u.AW.HOME, u.AW.ORBS].includes(t) ? u.AW.CATALOG : t;
                    (C(l), n && E(u.f7.IN), r || y.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(l), { shallow: !0 }), null != e.current && e.current.scrollTo({ to: 0 }), E(u.f7.VISIBLE));
                },
                [y, r, e, f, g, h, O, m]
            );
        return {
            selectedTab: O,
            transitionState: v,
            transitionToTab: x
        };
    };
