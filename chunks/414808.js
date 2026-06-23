"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(43105),
    o = n(403581),
    l = n(793574),
    u = n(688810),
    c = n(532794),
    d = n(181079),
    _ = n(313281),
    h = n(49999),
    f = n(788868),
    p = n(335993),
    E = n(375708),
    m = n(988572);
function g(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [g, A] = r.useState("top"),
        I = r.useRef(null),
        T = r.useRef(null),
        { hasAccess: S } = (0, _.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: y } = (0, u.Ay)(l.A.FAVORITES_GUILD_MENU_ITEM),
        C = (0, s.bG)([d.A], () => d.A.hasStoredFavorites());
    r.useLayoutEffect(() => {
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
                            let n = I.current?.getBoundingClientRect().height ?? 0;
                            A(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        }
    }, [t]);
    let N = r.useCallback(() => {
            n?.(h.i.TAKE_ACTION), S || (0, c.A)({ subscriptionTier: f.pe.TIER_2, analyticsLocations: y });
        }, [n, y, S]),
        v = C ? p.default.TWuDTt : p.default["25YCHl"];
    return (0, i.jsx)(a.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: g,
        caretConfig: { align: "top" === g ? "start" : "end" },
        popoverRef: I,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: m.A, type: "image", aspectRatio: "16/9" },
        title: E.intl.string(S ? v : p.default.A3ZjbM),
        body: E.intl.string(S ? p.default.DFjrWw : p.default.qJUI2v),
        onRequestClose: () => n?.(h.i.USER_DISMISS),
        actions: S
            ? void 0
            : [{ icon: o.t, text: E.intl.string(p.default["avps/2"]), onClick: () => N(), variant: "expressive" }],
    });
}
