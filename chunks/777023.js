a.d(e, { default: () => E });
var i = a(477900),
    n = a(582128);
a(97378);
var r = a(772707),
    s = a(403581),
    l = a(532794),
    c = a(976860),
    u = a(635233),
    o = a(793574),
    d = a(688810),
    p = a(174459),
    _ = a(652215),
    f = a(349828),
    h = a(202541),
    v = a(266361),
    A = a(375708),
    k = a(988572);
function E(t) {
    let { onClose: e, source: a = "channel_context_menu", variant: E = "no_access", limit: g = 3, ...L } = t,
        { analyticsLocations: m } = (function (t) {
            let { analyticsLocations: e } = (0, d.Ay)(o.A.FAVORITES_GUILD_UPSELL_MODAL);
            return (
                n.useEffect(() => {
                    p.default.track(_.HAw.FAVORITES_GUILD_UPSELL_MODAL_OPENED, { source: t });
                }, [t]),
                { analyticsLocations: e }
            );
        })(a),
        x = "limit_reached" === E;
    return (0, i.jsx)(r.k, {
        ...L,
        onClose: e,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        title: A.intl.string(x ? v.default.hINqUs : v.default.aA0vO8),
        subtitle: x
            ? A.intl.format(v.default.D7S0Zo, { count: g, maxCount: f.lj })
            : A.intl.string(v.default["WaP/lz"]),
        graphic: { src: k.A, type: "image", aspectRatio: "16/9" },
        actions: [
            {
                text: A.intl.string(x ? v.default.PprSsy : v.default["+dSwhE"]),
                variant: "secondary",
                onClick: () => {
                    e(), (0, u.mv)("upsell_modal"), (0, c.uh)(_.YYv);
                },
            },
            {
                text: A.intl.string(A.t.pj0XBN),
                variant: "expressive",
                icon: s.t,
                onClick: () => {
                    e(), (0, l.A)({ subscriptionTier: h.pe.TIER_2, analyticsLocations: m });
                },
            },
        ],
    });
}
