n.d(t, { A: () => h });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(43105),
    a = n(403581),
    o = n(793574),
    u = n(688810),
    c = n(532794),
    d = n(181079),
    A = n(313281),
    m = n(49999),
    g = n(202541),
    N = n(335993),
    f = n(375708),
    p = n(988572);
function h(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [h, I] = l.useState("top"),
        R = l.useRef(null),
        _ = l.useRef(null),
        { hasAccess: E } = (0, A.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: v } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        T = (0, s.bG)([d.A], () => d.A.hasStoredFavorites());
    l.useLayoutEffect(() => {
        if (null != t.current)
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
        function e() {
            null == _.current &&
                (_.current = window.requestAnimationFrame(() => {
                    (_.current = null),
                        (function () {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = R.current?.getBoundingClientRect().height ?? 0;
                            I(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        }
    }, [t]);
    let S = l.useCallback(() => {
            n?.(m.i.TAKE_ACTION), E || (0, c.A)({ subscriptionTier: g.pe.TIER_2, analyticsLocations: v });
        }, [n, v, E]),
        C = T ? N.default.TWuDTt : N.default["25YCHl"];
    return (0, i.jsx)(r.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: h,
        caretConfig: { align: "top" === h ? "start" : "end" },
        popoverRef: R,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: p.A, type: "image", aspectRatio: "16/9" },
        title: f.intl.string(E ? C : N.default.A3ZjbM),
        body: f.intl.string(E ? N.default.DFjrWw : N.default.qJUI2v),
        onRequestClose: () => n?.(m.i.USER_DISMISS),
        actions: E
            ? void 0
            : [{ icon: a.t, text: f.intl.string(N.default["avps/2"]), onClick: () => S(), variant: "expressive" }],
    });
}
