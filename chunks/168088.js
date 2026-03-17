i.d(e, { default: () => _ });
var a = i(627968),
    c = i(64700),
    n = i(397927),
    s = i(793574),
    d = i(688810),
    p = i(532794),
    r = i(976860),
    l = i(668267),
    o = i(652215),
    u = i(788868),
    f = i(665606),
    h = i(985018),
    v = i(988572);
function _(t) {
    let { onClose: e, source: i = "channel_context_menu", ..._ } = t,
        { analyticsLocations: b } = (0, d.Ay)(s.A.FAVORITES_GUILD_UPSELL_MODAL);
    return (
        c.useEffect(() => {
            (0, l.XC)(i);
        }, [i]),
        (0, a.jsx)(n.kpP, {
            ..._,
            onClose: e,
            badge: { type: "beta", variant: "expressive" },
            title: h.intl.string(f.default.aA0vO8),
            subtitle: h.intl.string(f.default["WaP/lz"]),
            graphic: { src: v.A, type: "image", aspectRatio: "16/9" },
            actions: [
                {
                    text: h.intl.string(f.default["+dSwhE"]),
                    variant: "secondary",
                    onClick: () => {
                        e(), (0, l.mv)("upsell_modal"), (0, r.uh)(o.YYv);
                    },
                },
                {
                    text: h.intl.string(h.t.pj0XBN),
                    variant: "expressive",
                    icon: n.tvc,
                    onClick: () => {
                        e(), (0, p.A)({ subscriptionTier: u.pe.TIER_2, analyticsLocations: b });
                    },
                },
            ],
        })
    );
}
