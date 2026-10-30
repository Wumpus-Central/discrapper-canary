i.d(e, { default: () => E });
var a = i(477900),
    n = i(582128);
i(97378);
var r = i(772707),
    s = i(403581),
    l = i(75678),
    o = i(976860),
    c = i(635233),
    u = i(793574),
    p = i(688810),
    d = i(174459),
    _ = i(652215),
    f = i(349828),
    h = i(202541),
    k = i(760658),
    v = i(105292),
    A = i(988572);
function E(t) {
    let { onClose: e, limit: i = 3, ...E } = t,
        { analyticsLocations: L } = (function () {
            let { analyticsLocations: t } = (0, p.Ay)(u.A.FAVORITES_GUILD_UPSELL_MODAL);
            return (
                n.useEffect(() => {
                    d.default.track(_.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: "limit_reached" });
                }, []),
                { analyticsLocations: t }
            );
        })();
    return (0, a.jsx)(r.k, {
        ...E,
        onClose: e,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        title: v.intl.string(k.default.hINqUs),
        subtitle: v.intl.format(k.default.D7S0Zo, { count: i, maxCount: f.lj }),
        graphic: { src: A.A, type: "image", aspectRatio: "16/9" },
        actions: [
            {
                text: v.intl.string(k.default.PprSsy),
                variant: "secondary",
                onClick: () => {
                    (e(), (0, c.mv)("upsell_modal"), (0, o.uh)(_.YYv));
                },
            },
            {
                text: v.intl.string(v.t.pj0XBN),
                variant: "expressive",
                icon: s.t,
                onClick: () => {
                    (e(), (0, l.A)({ subscriptionTier: h.pe.TIER_2, analyticsLocations: L }));
                },
            },
        ],
    });
}
