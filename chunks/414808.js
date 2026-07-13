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
    f = n(313281),
    A = n(49999),
    m = n(202541),
    g = n(335993),
    N = n(375708),
    v = n(988572);
function p(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [p, h] = l.useState("top"),
        I = l.useRef(null),
        R = l.useRef(null),
        { hasAccess: E } = (0, f.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: _ } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        j = (0, r.bG)([d.A], () => d.A.hasStoredFavorites());
    l.useLayoutEffect(() => {
        if (null != t.current)
            return (
                e(),
                window.addEventListener("resize", e),
                window.addEventListener("scroll", e, !0),
                () => {
                    null != R.current && (window.cancelAnimationFrame(R.current), (R.current = null)),
                        window.removeEventListener("resize", e),
                        window.removeEventListener("scroll", e, !0);
                }
            );
        function e() {
            null == R.current &&
                (R.current = window.requestAnimationFrame(() => {
                    (R.current = null),
                        (function () {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = I.current?.getBoundingClientRect().height ?? 0;
                            h(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        }
    }, [t]);
    let T = l.useCallback(() => {
            n?.(A.i.TAKE_ACTION), E || (0, c.A)({ subscriptionTier: m.pe.TIER_2, analyticsLocations: _ });
        }, [n, _, E]),
        x = j ? g.default.TWuDTt : g.default["25YCHl"];
    return (0, i.jsx)(s.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: p,
        caretConfig: { align: "top" === p ? "start" : "end" },
        popoverRef: I,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: v.A, type: "image", aspectRatio: "16/9" },
        title: N.intl.string(E ? x : g.default.A3ZjbM),
        body: N.intl.string(E ? g.default.DFjrWw : g.default.qJUI2v),
        onRequestClose: () => n?.(A.i.USER_DISMISS),
        actions: E
            ? void 0
            : [{ icon: a.t, text: N.intl.string(g.default["avps/2"]), onClick: () => T(), variant: "expressive" }],
    });
}
