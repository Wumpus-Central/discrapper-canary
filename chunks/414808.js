n.d(t, { A: () => h });
var l = n(627968),
    s = n(64700),
    i = n(311907),
    a = n(342494),
    r = n(397927),
    u = n(793574),
    o = n(688810),
    c = n(532794),
    d = n(181079),
    m = n(93055),
    A = n(49999),
    E = n(788868),
    p = n(665606),
    f = n(985018),
    S = n(988572);
function h(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [h, T] = s.useState("top"),
        x = s.useRef(null),
        _ = s.useRef(null),
        { hasAccess: N } = (0, m.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: g } = (0, o.Ay)(u.A.FAVORITES_GUILD_MENU_ITEM),
        C = (0, i.bG)([d.A], () => d.A.hasStoredFavorites());
    s.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == _.current &&
                (_.current = window.requestAnimationFrame(() => {
                    (_.current = null),
                        (() => {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = x.current?.getBoundingClientRect().height ?? 0;
                            T(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        };
        return (
            e(),
            window.addEventListener("resize", e),
            window.addEventListener("scroll", e, !0),
            () => {
                null != _.current && (window.cancelAnimationFrame(_.current), (_.current = null)),
                    window.removeEventListener("resize", e),
                    window.removeEventListener("scroll", e, !0);
            }
        );
    }, [t]);
    let v = s.useCallback(() => {
            n?.(A.i.TAKE_ACTION), N || (0, c.A)({ subscriptionTier: E.pe.TIER_2, analyticsLocations: g });
        }, [n, g, N]),
        I = C ? p.default.TWuDTt : p.default["25YCHl"];
    return (0, l.jsx)(a.AM, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: h,
        caretConfig: { align: "top" === h ? "start" : "end" },
        popoverRef: x,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: S.A, type: "image", aspectRatio: "16/9" },
        title: f.intl.string(N ? I : p.default.A3ZjbM),
        body: f.intl.string(N ? p.default.DFjrWw : p.default.qJUI2v),
        onRequestClose: () => n?.(A.i.USER_DISMISS),
        actions: N
            ? void 0
            : [{ icon: r.tvc, text: f.intl.string(p.default["avps/2"]), onClick: () => v(), variant: "expressive" }],
    });
}
