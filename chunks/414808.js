n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(17928),
    a = n(43105),
    r = n(403581),
    o = n(793574),
    d = n(688810),
    c = n(532794),
    u = n(181079),
    h = n(313281),
    p = n(49999),
    m = n(202541),
    f = n(335993),
    g = n(375708),
    A = n(988572);
function x(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [x, v] = l.useState("top"),
        E = l.useRef(null),
        T = l.useRef(null),
        { hasAccess: C } = (0, h.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: _ } = (0, d.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        N = (0, s.bG)([u.A], () => u.A.hasStoredFavorites());
    l.useLayoutEffect(() => {
        if (null != t.current)
            return (
                e(),
                window.addEventListener("resize", e),
                window.addEventListener("scroll", e, !0),
                () => {
                    null != T.current && (window.cancelAnimationFrame(T.current), (T.current = null)),
                        window.removeEventListener("resize", e),
                        window.removeEventListener("scroll", e, !0);
                }
            );
        function e() {
            null == T.current &&
                (T.current = window.requestAnimationFrame(() => {
                    (T.current = null),
                        (function () {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = E.current?.getBoundingClientRect().height ?? 0;
                            v(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        }
    }, [t]);
    let I = l.useCallback(() => {
            n?.(p.i.TAKE_ACTION), C || (0, c.A)({ subscriptionTier: m.pe.TIER_2, analyticsLocations: _ });
        }, [n, _, C]),
        j = N ? f.default.TWuDTt : f.default["25YCHl"];
    return (0, i.jsx)(a.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: x,
        caretConfig: { align: "top" === x ? "start" : "end" },
        popoverRef: E,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: A.A, type: "image", aspectRatio: "16/9" },
        title: g.intl.string(C ? j : f.default.A3ZjbM),
        body: g.intl.string(C ? f.default.DFjrWw : f.default.qJUI2v),
        onRequestClose: () => n?.(p.i.USER_DISMISS),
        actions: C
            ? void 0
            : [{ icon: r.t, text: g.intl.string(f.default["avps/2"]), onClick: () => I(), variant: "expressive" }],
    });
}
