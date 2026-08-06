i.d(e, { default: () => k });
var a = i(477900),
    n = i(582128);
i(97378);
var s = i(772707),
    l = i(403581),
    r = i(793574),
    c = i(688810),
    o = i(532794),
    u = i(976860),
    p = i(668267),
    d = i(349828),
    f = i(652215),
    h = i(202541),
    _ = i(449817),
    v = i(375708),
    g = i(988572);
function k(t) {
    let { onClose: e, source: i = "channel_context_menu", variant: k = "no_access", limit: C = 3, ...m } = t,
        { analyticsLocations: x } = (0, c.Ay)(r.A.FAVORITES_GUILD_UPSELL_MODAL);
    n.useEffect(() => {
        (0, p.XC)(i);
    }, [i]);
    let A = "limit_reached" === k;
    return (0, a.jsx)(s.k, {
        ...m,
        onClose: e,
        gradientColor: "nitro-pink",
        badge: { type: "beta", variant: "expressive" },
        title: v.intl.string(A ? _.default.hINqUs : _.default.aA0vO8),
        subtitle: A
            ? v.intl.format(_.default.D7S0Zo, { count: C, maxCount: d.lj })
            : v.intl.string(_.default["WaP/lz"]),
        graphic: { src: g.A, type: "image", aspectRatio: "16/9" },
        actions: [
            {
                text: v.intl.string(A ? _.default.PprSsy : _.default["+dSwhE"]),
                variant: "secondary",
                onClick: () => {
                    e(), (0, p.mv)("upsell_modal"), (0, u.uh)(f.YYv);
                },
            },
            {
                text: v.intl.string(v.t.pj0XBN),
                variant: "expressive",
                icon: l.t,
                onClick: () => {
                    e(), (0, o.A)({ subscriptionTier: h.pe.TIER_2, analyticsLocations: x });
                },
            },
        ],
    });
}
