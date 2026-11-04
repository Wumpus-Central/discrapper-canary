i.d(e, { default: () => A });
var a = i(477900),
    r = i(582128);
i(97378);
var n = i(772707),
    s = i(403581),
    o = i(778705),
    c = i(976860),
    l = i(635233),
    u = i(793574),
    p = i(688810),
    d = i(129230),
    _ = i(652215);
i(349828);
var f = i(682901),
    v = i(708526),
    h = i(792996),
    k = i(988572);
function A(t) {
    let { onClose: e, limit: i = 3, ...A } = t,
        { analyticsLocations: E } = (function () {
            let { analyticsLocations: t } = (0, p.Ay)(u.A.FAVORITES_GUILD_UPSELL_MODAL);
            return (
                r.useEffect(() => {
                    d.default.track(_.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
                }, []),
                { analyticsLocations: t }
            );
        })();
    return (0, a.jsx)(n.k, {
        ...A,
        onClose: e,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        title: h.intl.string(v.default.hINqUs),
        subtitle: h.intl.format(v.default.D7S0Zo, { count: i, maxCount: 200 }),
        graphic: { src: k.A, type: "image", aspectRatio: "16/9" },
        actions: [
            {
                text: h.intl.string(v.default.PprSsy),
                variant: "secondary",
                onClick: () => {
                    (e(), (0, l.mv)("upsell_modal"), (0, c.uh)(_.YYv));
                },
            },
            {
                text: h.intl.string(h.t.pj0XBN),
                variant: "expressive",
                icon: s.t,
                onClick: () => {
                    (e(), (0, o.A)({ subscriptionTier: f.pe.TIER_2, analyticsLocations: E }));
                },
            },
        ],
    });
}
