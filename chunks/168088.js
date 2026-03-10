i.d(e, { default: () => h });
var a = i(627968),
    s = i(397927),
    c = i(793574),
    n = i(688810),
    r = i(532794),
    d = i(976860),
    p = i(957300),
    l = i(652215),
    o = i(788868),
    u = i(665606),
    f = i(985018),
    v = i(988572);
function h(t) {
    let { onClose: e, ...i } = t,
        h = (0, p.E)((t) => t.enterPreview),
        { analyticsLocations: b } = (0, n.Ay)(c.A.FAVORITES_GUILD_UPSELL_MODAL);
    return (0, a.jsx)(s.kpP, {
        ...i,
        onClose: e,
        badge: { type: "beta", variant: "expressive" },
        title: f.intl.string(u.default.aA0vO8),
        subtitle: f.intl.string(u.default["WaP/lz"]),
        graphic: { src: v.A, type: "image", aspectRatio: "16/9" },
        actions: [
            {
                text: f.intl.string(u.default["+dSwhE"]),
                variant: "secondary",
                onClick: () => {
                    e(), h(), (0, d.uh)(l.YYv);
                },
            },
            {
                text: f.intl.string(f.t.pj0XBN),
                variant: "expressive",
                icon: s.tvc,
                onClick: () => {
                    e(), (0, r.A)({ subscriptionTier: o.pe.TIER_2, analyticsLocations: b });
                },
            },
        ],
    });
}
