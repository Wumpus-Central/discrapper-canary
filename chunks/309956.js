(r.d(t, { B: () => p }), r(388685), r(539854));
var n = r(73800),
    l = r(114858),
    i = r(335818),
    o = r(822857),
    a = r(870289),
    s = r(501431),
    c = r(215023),
    u = r(981631);
let d = {
        [c.AW.AVATAR_DECORATIONS]: i.G.AVATAR_DECORATION,
        [c.AW.PROFILE_EFFECTS]: i.G.PROFILE_EFFECT,
        [c.AW.NAMEPLATES]: i.G.NAMEPLATE,
        [c.AW.BUNDLES]: i.G.BUNDLE
    },
    p = (e, t, r) => {
        let { enabled: i } = (0, o.WX)({ location: 'useShopViewTransition' }),
            p = (0, a.F)('CollectiblesBrowse'),
            { setItemTypeFilter: f, reset: g, setCurrentTab: h } = (0, s.S)(),
            b = n.useMemo(() => (t !== c.AW.ORBS || i ? ((0, c.RE)(t) && p ? c.AW.CATALOG : t) : c.AW.HOME), [t, i, p]),
            [m, _] = n.useState(b),
            [O, C] = n.useState(c.f7.VISIBLE);
        (n.useEffect(() => {
            h(m);
        }, [m, h]),
            n.useEffect(() => {
                (_(b), O !== c.f7.VISIBLE && C(c.f7.VISIBLE));
            }, [b, O]));
        let v = (e) => new Promise((t) => setTimeout(t, e)),
            E = (0, l.k6)(),
            S = n.useCallback(
                async (t, n) => {
                    if (t === c.AW.CATALOG) g();
                    else if ((0, c.RE)(t) && t !== m) {
                        let e = d[t];
                        null != e ? f(e) : g();
                    }
                    if (m === t) return;
                    n && (C(c.f7.OUT), await v(1.1 * c.lb));
                    let l = p && ![c.AW.HOME, c.AW.ORBS].includes(t) ? c.AW.CATALOG : t;
                    (_(l), n && C(c.f7.IN), r || E.push(u.Z5c.COLLECTIBLES_SHOP_WITH_TAB(l), { shallow: !0 }), null != e.current && e.current.scrollTo({ to: 0 }), C(c.f7.VISIBLE));
                },
                [E, r, e, p, f, g, m]
            );
        return {
            selectedTab: m,
            transitionState: O,
            transitionToTab: S
        };
    };
