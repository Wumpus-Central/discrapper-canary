(r.d(t, { B: () => g }), r(388685), r(539854));
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
    g = (e, t, r) => {
        let { enabled: o } = (0, i.WX)({ location: 'useShopViewTransition' }),
            g = (0, a.F)('CollectiblesBrowse'),
            { setItemTypeFilter: f, reset: h } = (0, s.S)(),
            { clear: b } = (0, c.a)();
        n.useEffect(() => {
            let e = p[t];
            null != e && (h(), f(e));
        }, [t, f, h]);
        let m = n.useMemo(() => (t !== u.AW.ORBS || o ? ((0, u.RE)(t) && g ? u.AW.CATALOG : t) : u.AW.HOME), [t, o, g]),
            [_, C] = n.useState(m),
            [O, v] = n.useState(u.f7.VISIBLE);
        n.useEffect(() => {
            (C(m), O !== u.f7.VISIBLE && v(u.f7.VISIBLE));
        }, [m, O]);
        let E = (e) => new Promise((t) => setTimeout(t, e)),
            S = (0, l.k6)(),
            y = n.useCallback(
                async (t, n) => {
                    if ((b(), h(), _ === t)) return;
                    (n && (v(u.f7.OUT), await E(1.1 * u.lb)), (0, u.RE)(t) && f(p[t]));
                    let l = g && ![u.AW.HOME, u.AW.ORBS].includes(t) ? u.AW.CATALOG : t;
                    (C(l), n && v(u.f7.IN), r || S.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(l), { shallow: !0 }), null != e.current && e.current.scrollTo({ to: 0 }), v(u.f7.VISIBLE));
                },
                [S, r, e, g, f, h, _, b]
            );
        return {
            selectedTab: _,
            transitionState: O,
            transitionToTab: y
        };
    };
