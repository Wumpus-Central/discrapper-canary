n.d(t, { A: () => A });
var a = n(627968),
    r = n(64700),
    l = n(17928),
    i = n(43105),
    o = n(403581),
    s = n(793574),
    d = n(688810),
    c = n(532794),
    u = n(181079),
    f = n(313281),
    p = n(49999),
    m = n(788868),
    b = n(335993),
    v = n(985018),
    h = n(988572);
function A(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [A, g] = r.useState("top"),
        E = r.useRef(null),
        N = r.useRef(null),
        { hasAccess: x } = (0, f.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: S } = (0, d.Ay)(s.A.FAVORITES_GUILD_MENU_ITEM),
        _ = (0, l.bG)([u.A], () => u.A.hasStoredFavorites());
    r.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == N.current &&
                (N.current = window.requestAnimationFrame(() => {
                    (N.current = null),
                        (() => {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = E.current?.getBoundingClientRect().height ?? 0;
                            g(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        };
        return (
            e(),
            window.addEventListener("resize", e),
            window.addEventListener("scroll", e, !0),
            () => {
                null != N.current && (window.cancelAnimationFrame(N.current), (N.current = null)),
                    window.removeEventListener("resize", e),
                    window.removeEventListener("scroll", e, !0);
            }
        );
    }, [t]);
    let M = r.useCallback(() => {
            n?.(p.i.TAKE_ACTION), x || (0, c.A)({ subscriptionTier: m.pe.TIER_2, analyticsLocations: S });
        }, [n, S, x]),
        C = _ ? b.default.TWuDTt : b.default["25YCHl"];
    return (0, a.jsx)(i.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: A,
        caretConfig: { align: "top" === A ? "start" : "end" },
        popoverRef: E,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: h.A, type: "image", aspectRatio: "16/9" },
        title: v.intl.string(x ? C : b.default.A3ZjbM),
        body: v.intl.string(x ? b.default.DFjrWw : b.default.qJUI2v),
        onRequestClose: () => n?.(p.i.USER_DISMISS),
        actions: x
            ? void 0
            : [{ icon: o.t, text: v.intl.string(b.default["avps/2"]), onClick: () => M(), variant: "expressive" }],
    });
}
