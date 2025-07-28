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
    f = (e, t) => {
        let { enabled: r } = (0, o.WX)({ location: 'useShopViewTransition' }),
            i = (0, a.FF)('CollectiblesBrowse'),
            { setItemTypeFilter: f, reset: g, setCurrentTab: h } = (0, s.S)(),
            b = n.useMemo(() => (e !== u.AW.ORBS || r ? ((0, u.RE)(e) && i ? u.AW.CATALOG : e) : u.AW.HOME), [e, r, i]),
            [m, _] = n.useState(b),
            [O, C] = n.useState(u.f7.VISIBLE);
        (n.useEffect(() => {
            h(m);
        }, [m, h]),
            n.useEffect(() => {
                (_(b), O !== u.f7.VISIBLE && C(u.f7.VISIBLE));
            }, [b, O]));
        let v = (e) => new Promise((t) => setTimeout(t, e)),
            { clearError: E } = (0, c.a)(),
            S = (0, l.k6)(),
            y = n.useCallback(
                async (e, r) => {
                    if ((E(), e === u.AW.CATALOG)) g();
                    else if ((0, u.RE)(e) && e !== m) {
                        let t = p[e];
                        null != t ? f(t) : g();
                    }
                    if (m === e) return;
                    r && (C(u.f7.OUT), await v(1.1 * u.lb));
                    let n = i && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    (_(n), r && C(u.f7.IN), t || S.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n), { shallow: !0 }), C(u.f7.VISIBLE));
                },
                [S, t, i, f, g, m, E]
            );
        return {
            selectedTab: m,
            transitionState: O,
            transitionToTab: y
        };
    };
