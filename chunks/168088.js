i.d(e, { default: () => g });
var n = i(627968),
    a = i(64700),
    c = i(397927),
    s = i(793574),
    d = i(688810),
    r = i(532794),
    p = i(976860),
    l = i(668267),
    o = i(652215),
    u = i(788868),
    f = i(665606),
    h = i(985018),
    v = i(988572);
function g(t) {
    let { onClose: e, source: i = "channel_context_menu", ...g } = t,
        { analyticsLocations: _ } = (0, d.Ay)(s.A.FAVORITES_GUILD_UPSELL_MODAL);
    return (
        a.useEffect(() => {
            (0, l.XC)(i);
        }, [i]),
        (0, n.jsx)(c.kpP, {
            ...g,
            onClose: e,
            gradientColor: "nitro-pink",
            badge: { type: "beta", variant: "expressive" },
            title: h.intl.string(f.default.aA0vO8),
            subtitle: h.intl.string(f.default["WaP/lz"]),
            graphic: { src: v.A, type: "image", aspectRatio: "16/9" },
            actions: [
                {
                    text: h.intl.string(f.default["+dSwhE"]),
                    variant: "secondary",
                    onClick: () => {
                        e(), (0, l.mv)("upsell_modal"), (0, p.uh)(o.YYv);
                    },
                },
                {
                    text: h.intl.string(h.t.pj0XBN),
                    variant: "expressive",
                    icon: c.tvc,
                    onClick: () => {
                        e(), (0, r.A)({ subscriptionTier: u.pe.TIER_2, analyticsLocations: _ });
                    },
                },
            ],
        })
    );
}
