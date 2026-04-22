i.d(e, { default: () => _ });
var n = i(627968),
    a = i(64700),
    s = i(772707),
    c = i(403581),
    d = i(793574),
    r = i(688810),
    p = i(532794),
    l = i(976860),
    o = i(668267),
    u = i(652215),
    f = i(788868),
    h = i(335993),
    g = i(985018),
    v = i(988572);
function _(t) {
    let { onClose: e, source: i = "channel_context_menu", ..._ } = t,
        { analyticsLocations: b } = (0, r.Ay)(d.A.FAVORITES_GUILD_UPSELL_MODAL);
    return (
        a.useEffect(() => {
            (0, o.XC)(i);
        }, [i]),
        (0, n.jsx)(s.k, {
            ..._,
            onClose: e,
            gradientColor: "nitro-pink",
            badge: { type: "beta", variant: "expressive" },
            title: g.intl.string(h.default.aA0vO8),
            subtitle: g.intl.string(h.default["WaP/lz"]),
            graphic: { src: v.A, type: "image", aspectRatio: "16/9" },
            actions: [
                {
                    text: g.intl.string(h.default["+dSwhE"]),
                    variant: "secondary",
                    onClick: () => {
                        e(), (0, o.mv)("upsell_modal"), (0, l.uh)(u.YYv);
                    },
                },
                {
                    text: g.intl.string(g.t.pj0XBN),
                    variant: "expressive",
                    icon: c.t,
                    onClick: () => {
                        e(), (0, p.A)({ subscriptionTier: f.pe.TIER_2, analyticsLocations: b });
                    },
                },
            ],
        })
    );
}
