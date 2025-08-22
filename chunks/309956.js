n.d(t, { B: () => p }), n(388685), n(539854);
var r = n(647438),
    l = n(843611),
    a = n(335818),
    s = n(822857),
    i = n(870289),
    o = n(501431),
    c = n(149705),
    u = n(215023),
    d = n(981631);
let g = {
        [u.AW.AVATAR_DECORATIONS]: a.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: a.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: a.G.NAMEPLATE,
        [u.AW.BUNDLES]: a.G.BUNDLE,
    },
    p = (e, t) => {
        let { enabled: n } = (0, s.WX)({ location: "useShopViewTransition" }),
            a = (0, i.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: p, reset: f, setCurrentTab: m } = (0, o.S)(),
            _ = r.useMemo(() => (e !== u.AW.ORBS || n ? ((0, u.RE)(e) && a ? u.AW.CATALOG : e) : u.AW.HOME), [e, n, a]),
            [h, b] = r.useState(_),
            [C, E] = r.useState(u.f7.VISIBLE);
        r.useEffect(() => {
            m(h);
        }, [h, m]),
            r.useEffect(() => {
                b(_);
            }, [_]);
        let { clearError: S } = (0, c.a)(),
            O = (0, l.k6)(),
            v = r.useCallback(
                async (e, n) => {
                    if ((S(), e === u.AW.CATALOG)) f();
                    else if ((0, u.RE)(e) && e !== h) {
                        let t = g[e];
                        null != t ? p(t) : f();
                    }
                    if (h === e) return;
                    if (n) {
                        let e;
                        E(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                    }
                    let r = a && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    b(r),
                        n && E(u.f7.IN),
                        t || O.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(r), { shallow: !0 }),
                        E(u.f7.VISIBLE);
                },
                [O, t, a, p, f, h, S],
            );
        return {
            selectedTab: h,
            transitionState: C,
            transitionToTab: v,
        };
    };
