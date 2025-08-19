r.d(t, { B: () => g }), r(388685), r(539854);
var n = r(647438),
    l = r(843611),
    a = r(335818),
    i = r(822857),
    o = r(870289),
    s = r(501431),
    c = r(149705),
    u = r(215023),
    d = r(981631);
let p = {
        [u.AW.AVATAR_DECORATIONS]: a.G.AVATAR_DECORATION,
        [u.AW.PROFILE_EFFECTS]: a.G.PROFILE_EFFECT,
        [u.AW.NAMEPLATES]: a.G.NAMEPLATE,
        [u.AW.BUNDLES]: a.G.BUNDLE,
    },
    g = (e, t) => {
        let { enabled: r } = (0, i.WX)({ location: "useShopViewTransition" }),
            a = (0, o.FF)("CollectiblesBrowse"),
            { setItemTypeFilter: g, reset: f, setCurrentTab: m } = (0, s.S)(),
            b = n.useMemo(() => (e !== u.AW.ORBS || r ? ((0, u.RE)(e) && a ? u.AW.CATALOG : e) : u.AW.HOME), [e, r, a]),
            [h, _] = n.useState(b),
            [v, O] = n.useState(u.f7.VISIBLE);
        n.useEffect(() => {
            m(h);
        }, [h, m]),
            n.useEffect(() => {
                _(b);
            }, [b]);
        let { clearError: C } = (0, c.a)(),
            E = (0, l.k6)(),
            y = n.useCallback(
                async (e, r) => {
                    if ((C(), e === u.AW.CATALOG)) f();
                    else if ((0, u.RE)(e) && e !== h) {
                        let t = p[e];
                        null != t ? g(t) : f();
                    }
                    if (h === e) return;
                    if (r) {
                        let e;
                        O(u.f7.OUT), await ((e = 1.1 * u.lb), new Promise((t) => setTimeout(t, e)));
                    }
                    let n = a && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    _(n),
                        r && O(u.f7.IN),
                        t || E.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n), { shallow: !0 }),
                        O(u.f7.VISIBLE);
                },
                [E, t, a, g, f, h, C],
            );
        return {
            selectedTab: h,
            transitionState: v,
            transitionToTab: y,
        };
    };
