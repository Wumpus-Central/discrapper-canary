n.d(t, { A: () => x });
var l = n(627968),
    s = n(64700),
    a = n(311907),
    i = n(342494),
    r = n(397927),
    o = n(793574),
    u = n(688810),
    c = n(532794),
    d = n(181079),
    m = n(93055),
    A = n(49999),
    p = n(788868),
    f = n(665606),
    h = n(985018),
    E = n(988572);
function x(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [x, N] = s.useState("top"),
        g = s.useRef(null),
        T = s.useRef(null),
        { hasAccess: v } = (0, m.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: S } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        C = (0, a.bG)([d.A], () => d.A.hasStoredFavorites());
    s.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == T.current &&
                (T.current = window.requestAnimationFrame(() => {
                    (T.current = null),
                        (() => {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = g.current?.getBoundingClientRect().height ?? 0;
                            N(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        };
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
    }, [t]);
    let _ = s.useCallback(() => {
            n?.(A.i.TAKE_ACTION), v || (0, c.A)({ subscriptionTier: p.pe.TIER_2, analyticsLocations: S });
        }, [n, S, v]),
        j = C ? f.default.TWuDTt : f.default["25YCHl"];
    return (0, l.jsx)(i.AM, {
        targetElementRef: t,
        gradientColor: "purple",
        position: "right",
        alignmentStrategy: "edge",
        align: x,
        caretConfig: { align: "top" === x ? "start" : "end" },
        popoverRef: g,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: E.A, type: "image", aspectRatio: "16/9" },
        title: h.intl.string(v ? j : f.default.A3ZjbM),
        body: h.intl.string(v ? f.default.DFjrWw : f.default.qJUI2v),
        onRequestClose: () => n?.(A.i.USER_DISMISS),
        actions: [
            {
                icon: v ? void 0 : r.tvc,
                text: v ? h.intl.string(f.default["+h9aza"]) : h.intl.string(f.default["avps/2"]),
                onClick: () => _(),
                variant: v ? "secondary" : "expressive",
            },
        ],
    });
}
