n.d(t, { $W: () => p, $q: () => h, Vg: () => f, i3: () => g, nj: () => m });
var i = n(582128),
    l = n(131937),
    s = n(793574),
    r = n(688810),
    a = n(139286),
    o = n(174459),
    c = n(24482),
    u = n(652215),
    d = n(202541);
function h(e) {
    o.default.track(u.HAw.DEFAULT_EMOJI_PACK_UPDATE, { pack_id: e, action: "add" });
}
function m(e) {
    o.default.track(u.HAw.DEFAULT_EMOJI_PACK_UPDATE, { pack_id: e, action: "remove" });
}
function g(e) {
    (0, a.A)(
        {
            type: l.ImpressionTypes.VIEW,
            name: l.ImpressionNames.DEFAULT_EMOJI_PACKS,
            properties: { is_premium_tier_2: e },
        },
        { trackOnInitialLoad: !0 },
    );
}
let f = {
    message_emoji_popout: {
        upsellType: d.e.DEFAULT_EMOJI_MESSAGE_POPOUT,
        location: s.A.DEFAULT_EMOJI_MESSAGE_POPOUT_UPSELL,
    },
    reaction_emoji_popout: {
        upsellType: d.e.DEFAULT_EMOJI_REACTION_POPOUT,
        location: s.A.DEFAULT_EMOJI_REACTION_POPOUT_UPSELL,
    },
};
function p(e, t) {
    let { upsellType: n, location: l } = f[e],
        { analyticsLocations: s } = (0, r.Ay)(l);
    i.useEffect(() => {
        t ||
            o.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, {
                type: n,
                location_stack: s,
                sku_id: (0, c.mH)(c.Ay.getSkuIdForPremiumType(d.PremiumTypes.TIER_2)),
            });
    }, [s, t, n]);
}
