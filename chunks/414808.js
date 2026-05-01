n.d(t, { A: () => x });
var l = n(627968),
    s = n(64700),
    i = n(17928),
    a = n(43105),
    r = n(403581),
    o = n(793574),
    c = n(688810),
    u = n(532794),
    d = n(181079),
    h = n(313281),
    m = n(49999),
    p = n(788868),
    f = n(335993),
    g = n(985018),
    A = n(988572);
function x(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [x, C] = s.useState("top"),
        E = s.useRef(null),
        v = s.useRef(null),
        { hasAccess: T } = (0, h.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: j } = (0, c.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        N = (0, i.bG)([d.A], () => d.A.hasStoredFavorites());
    s.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == v.current &&
                (v.current = window.requestAnimationFrame(() => {
                    (v.current = null),
                        (() => {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = E.current?.getBoundingClientRect().height ?? 0;
                            C(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        };
        return (
            e(),
            window.addEventListener("resize", e),
            window.addEventListener("scroll", e, !0),
            () => {
                null != v.current && (window.cancelAnimationFrame(v.current), (v.current = null)),
                    window.removeEventListener("resize", e),
                    window.removeEventListener("scroll", e, !0);
            }
        );
    }, [t]);
    let _ = s.useCallback(() => {
            n?.(m.i.TAKE_ACTION), T || (0, u.A)({ subscriptionTier: p.pe.TIER_2, analyticsLocations: j });
        }, [n, j, T]),
        S = N ? f.default.TWuDTt : f.default["25YCHl"];
    return (0, l.jsx)(a.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: x,
        caretConfig: { align: "top" === x ? "start" : "end" },
        popoverRef: E,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: A.A, type: "image", aspectRatio: "16/9" },
        title: g.intl.string(T ? S : f.default.A3ZjbM),
        body: g.intl.string(T ? f.default.DFjrWw : f.default.qJUI2v),
        onRequestClose: () => n?.(m.i.USER_DISMISS),
        actions: T
            ? void 0
            : [{ icon: r.t, text: g.intl.string(f.default["avps/2"]), onClick: () => _(), variant: "expressive" }],
    });
}
