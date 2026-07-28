n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    r = n(17928);
if (88245 != n.j) var s = n(43105);
if (88245 != n.j) var a = n(403581);
var o = n(793574),
    u = n(688810),
    c = n(532794),
    d = n(181079),
    A = n(281980),
    f = n(49999),
    m = n(202541),
    N = n(449817),
    v = n(375708),
    g = n(988572);
function p(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [p, _] = l.useState("top"),
        E = l.useRef(null),
        h = l.useRef(null),
        { hasAccess: I } = (0, A.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: R } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        j = (0, r.bG)([d.A], () => d.A.hasStoredFavorites());
    l.useLayoutEffect(() => {
        if (null != t.current)
            return (
                e(),
                window.addEventListener("resize", e),
                window.addEventListener("scroll", e, !0),
                () => {
                    null != h.current && (window.cancelAnimationFrame(h.current), (h.current = null)),
                        window.removeEventListener("resize", e),
                        window.removeEventListener("scroll", e, !0);
                }
            );
        function e() {
            null == h.current &&
                (h.current = window.requestAnimationFrame(() => {
                    (h.current = null),
                        (function () {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = E.current?.getBoundingClientRect().height ?? 0;
                            _(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        }
    }, [t]);
    let T = l.useCallback(() => {
            n?.(f.i.TAKE_ACTION), I || (0, c.A)({ subscriptionTier: m.pe.TIER_2, analyticsLocations: R });
        }, [n, R, I]),
        x = j ? N.default.TWuDTt : N.default["25YCHl"];
    return (0, i.jsx)(s.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: p,
        caretConfig: { align: "top" === p ? "start" : "end" },
        popoverRef: E,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: g.A, type: "image", aspectRatio: "16/9" },
        title: v.intl.string(I ? x : N.default.A3ZjbM),
        body: v.intl.string(I ? N.default.DFjrWw : N.default.qJUI2v),
        onRequestClose: () => n?.(f.i.USER_DISMISS),
        actions: I
            ? void 0
            : [{ icon: a.t, text: v.intl.string(N.default["avps/2"]), onClick: () => T(), variant: "expressive" }],
    });
}
