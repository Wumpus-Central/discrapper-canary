n.d(t, { A: () => E });
var l = n(627968),
    s = n(64700),
    a = n(311907),
    r = n(265486),
    i = n(403581),
    o = n(793574),
    u = n(688810),
    d = n(532794),
    c = n(181079),
    p = n(93055),
    m = n(49999),
    f = n(788868),
    A = n(335993),
    v = n(985018),
    h = n(988572);
function E(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [E, g] = s.useState("top"),
        x = s.useRef(null),
        S = s.useRef(null),
        { hasAccess: T } = (0, p.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: _ } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        b = (0, a.bG)([c.A], () => c.A.hasStoredFavorites());
    s.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == S.current &&
                (S.current = window.requestAnimationFrame(() => {
                    (S.current = null),
                        (() => {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = x.current?.getBoundingClientRect().height ?? 0;
                            g(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        };
        return (
            e(),
            window.addEventListener("resize", e),
            window.addEventListener("scroll", e, !0),
            () => {
                null != S.current && (window.cancelAnimationFrame(S.current), (S.current = null)),
                    window.removeEventListener("resize", e),
                    window.removeEventListener("scroll", e, !0);
            }
        );
    }, [t]);
    let C = s.useCallback(() => {
            n?.(m.i.TAKE_ACTION), T || (0, d.A)({ subscriptionTier: f.pe.TIER_2, analyticsLocations: _ });
        }, [n, _, T]),
        N = b ? A.default.TWuDTt : A.default["25YCHl"];
    return (0, l.jsx)(r.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: E,
        caretConfig: { align: "top" === E ? "start" : "end" },
        popoverRef: x,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: h.A, type: "image", aspectRatio: "16/9" },
        title: v.intl.string(T ? N : A.default.A3ZjbM),
        body: v.intl.string(T ? A.default.DFjrWw : A.default.qJUI2v),
        onRequestClose: () => n?.(m.i.USER_DISMISS),
        actions: T
            ? void 0
            : [{ icon: i.t, text: v.intl.string(A.default["avps/2"]), onClick: () => C(), variant: "expressive" }],
    });
}
