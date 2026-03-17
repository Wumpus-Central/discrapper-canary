i.d(e, { default: () => h });
var a = i(627968),
    s = i(397927),
    c = i(793574),
    n = i(688810),
    d = i(532794),
    p = i(976860),
    r = i(652215),
    l = i(788868),
    o = i(665606),
    u = i(985018),
    f = i(988572);
function h(t) {
    let { onClose: e, ...i } = t,
        { analyticsLocations: h } = (0, n.Ay)(c.A.FAVORITES_GUILD_UPSELL_MODAL);
    return (0, a.jsx)(s.kpP, {
        ...i,
        onClose: e,
        badge: { type: "beta", variant: "expressive" },
        title: u.intl.string(o.default.aA0vO8),
        subtitle: u.intl.string(o.default["WaP/lz"]),
        graphic: { src: f.A, type: "image", aspectRatio: "16/9" },
        actions: [
            {
                text: u.intl.string(o.default["+dSwhE"]),
                variant: "secondary",
                onClick: () => {
                    e(), (0, p.uh)(r.YYv);
                },
            },
            {
                text: u.intl.string(u.t.pj0XBN),
                variant: "expressive",
                icon: s.tvc,
                onClick: () => {
                    e(), (0, d.A)({ subscriptionTier: l.pe.TIER_2, analyticsLocations: h });
                },
            },
        ],
    });
}
