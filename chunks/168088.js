i.d(e, { default: () => k });
var n = i(627968),
    a = i(64700),
    s = i(772707),
    r = i(403581),
    l = i(793574),
    c = i(688810),
    p = i(532794),
    o = i(976860),
    u = i(668267),
    d = i(652215),
    h = i(788868),
    v = i(335993),
    _ = i(375708),
    g = i(988572);
function k(t) {
    let { onClose: e, source: i = "channel_context_menu", ...k } = t,
        { analyticsLocations: f } = (0, c.Ay)(l.A.FAVORITES_GUILD_UPSELL_MODAL);
    return (
        a.useEffect(() => {
            (0, u.XC)(i);
        }, [i]),
        (0, n.jsx)(s.k, {
            ...k,
            onClose: e,
            gradientColor: "nitro-pink",
            badge: { type: "beta", variant: "expressive" },
            title: _.intl.string(v.default.aA0vO8),
            subtitle: _.intl.string(v.default["WaP/lz"]),
            graphic: { src: g.A, type: "image", aspectRatio: "16/9" },
            actions: [
                {
                    text: _.intl.string(v.default["+dSwhE"]),
                    variant: "secondary",
                    onClick: () => {
                        e(), (0, u.mv)("upsell_modal"), (0, o.uh)(d.YYv);
                    },
                },
                {
                    text: _.intl.string(_.t.pj0XBN),
                    variant: "expressive",
                    icon: r.t,
                    onClick: () => {
                        e(), (0, p.A)({ subscriptionTier: h.pe.TIER_2, analyticsLocations: f });
                    },
                },
            ],
        })
    );
}
