r.d(t, { B: () => g }), r(388685), r(539854);
var n = r(73800),
    l = r(114858),
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
            { setItemTypeFilter: g, reset: f, setCurrentTab: h } = (0, s.S)(),
            b = n.useMemo(() => (e !== u.AW.ORBS || r ? ((0, u.RE)(e) && a ? u.AW.CATALOG : e) : u.AW.HOME), [e, r, a]),
            [_, m] = n.useState(b),
            [v, O] = n.useState(u.f7.VISIBLE);
        n.useEffect(() => {
            h(_);
        }, [_, h]),
            n.useEffect(() => {
                m(b);
            }, [b]);
        let C = (e) => new Promise((t) => setTimeout(t, e)),
            { clearError: E } = (0, c.a)(),
            S = (0, l.k6)(),
            y = n.useCallback(
                async (e, r) => {
                    if ((E(), e === u.AW.CATALOG)) f();
                    else if ((0, u.RE)(e) && e !== _) {
                        let t = p[e];
                        null != t ? g(t) : f();
                    }
                    if (_ === e) return;
                    r && (O(u.f7.OUT), await C(1.1 * u.lb));
                    let n = a && ![u.AW.HOME, u.AW.ORBS].includes(e) ? u.AW.CATALOG : e;
                    m(n),
                        r && O(u.f7.IN),
                        t || S.push(d.Z5c.COLLECTIBLES_SHOP_WITH_TAB(n), { shallow: !0 }),
                        O(u.f7.VISIBLE);
                },
                [S, t, a, g, f, _, E],
            );
        return {
            selectedTab: _,
            transitionState: v,
            transitionToTab: y,
        };
    };
