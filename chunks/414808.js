"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(43105),
    l = n(403581),
    o = n(793574),
    d = n(688810),
    c = n(532794),
    u = n(181079),
    _ = n(313281),
    E = n(49999),
    A = n(202541),
    h = n(335993),
    I = n(375708),
    f = n(988572);
function p(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [p, T] = r.useState("top"),
        m = r.useRef(null),
        g = r.useRef(null),
        { hasAccess: S } = (0, _.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: N } = (0, d.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        C = (0, a.bG)([u.A], () => u.A.hasStoredFavorites());
    r.useLayoutEffect(() => {
        if (null != t.current)
            return (
                e(),
                window.addEventListener("resize", e),
                window.addEventListener("scroll", e, !0),
                () => {
                    null != g.current && (window.cancelAnimationFrame(g.current), (g.current = null)),
                        window.removeEventListener("resize", e),
                        window.removeEventListener("scroll", e, !0);
                }
            );
        function e() {
            null == g.current &&
                (g.current = window.requestAnimationFrame(() => {
                    (g.current = null),
                        (function () {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = m.current?.getBoundingClientRect().height ?? 0;
                            T(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        }
    }, [t]);
    let R = r.useCallback(() => {
            n?.(E.i.TAKE_ACTION), S || (0, c.A)({ subscriptionTier: A.pe.TIER_2, analyticsLocations: N });
        }, [n, N, S]),
        O = C ? h.default.TWuDTt : h.default["25YCHl"];
    return (0, i.jsx)(s.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: p,
        caretConfig: { align: "top" === p ? "start" : "end" },
        popoverRef: m,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: f.A, type: "image", aspectRatio: "16/9" },
        title: I.intl.string(S ? O : h.default.A3ZjbM),
        body: I.intl.string(S ? h.default.DFjrWw : h.default.qJUI2v),
        onRequestClose: () => n?.(E.i.USER_DISMISS),
        actions: S
            ? void 0
            : [{ icon: l.t, text: I.intl.string(h.default["avps/2"]), onClick: () => R(), variant: "expressive" }],
    });
}
