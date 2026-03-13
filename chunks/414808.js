n.d(t, { A: () => E });
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
    f = n(525736),
    h = n(985018),
    x = n(988572);
function E(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [E, N] = s.useState("top"),
        g = s.useRef(null),
        v = s.useRef(null),
        { hasAccess: S } = (0, m.TW)("FavoritesOnboardingMenuItemPopover"),
        { analyticsLocations: T } = (0, u.Ay)(o.A.FAVORITES_GUILD_MENU_ITEM),
        C = (0, a.bG)([d.A], () => d.A.hasStoredFavorites());
    s.useLayoutEffect(() => {
        if (null == t.current) return;
        let e = () => {
            null == v.current &&
                (v.current = window.requestAnimationFrame(() => {
                    (v.current = null),
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
                null != v.current && (window.cancelAnimationFrame(v.current), (v.current = null)),
                    window.removeEventListener("resize", e),
                    window.removeEventListener("scroll", e, !0);
            }
        );
    }, [t]);
    let _ = s.useCallback(() => {
            n?.(A.i.TAKE_ACTION), S || (0, c.A)({ subscriptionTier: p.pe.TIER_2, analyticsLocations: T });
        }, [n, T, S]),
        j = C ? f.default.TWuDTt : f.default["25YCHl"];
    return (0, l.jsx)(i.AM, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: E,
        caretConfig: { align: "top" === E ? "start" : "end" },
        popoverRef: g,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: x.A, type: "image", aspectRatio: "16/9" },
        title: h.intl.string(S ? j : f.default.A3ZjbM),
        body: h.intl.string(S ? f.default.DFjrWw : f.default.qJUI2v),
        onRequestClose: () => n?.(A.i.USER_DISMISS),
        actions: [
            {
                icon: S ? void 0 : r.tvc,
                text: S ? h.intl.string(f.default["+h9aza"]) : h.intl.string(f.default["avps/2"]),
                onClick: () => _(),
                variant: S ? "secondary" : "expressive",
            },
        ],
    });
}
