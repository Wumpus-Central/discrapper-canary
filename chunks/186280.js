var l = n(582128),
    i = n(613412),
    s = n(793574),
    r = n(688810),
    a = n(139286),
    o = n(129230),
    c = n(448645),
    u = n(652215),
    d = n(682901);
let h = {
    emoji_picker: { upsellType: d.e.DEFAULT_EMOJI_PICKER, location: s.A.DEFAULT_EMOJI_PICKER_UPSELL },
    message_emoji_popout: {
        upsellType: d.e.DEFAULT_EMOJI_MESSAGE_POPOUT,
        location: s.A.DEFAULT_EMOJI_MESSAGE_POPOUT_UPSELL,
    },
    reaction_emoji_popout: {
        upsellType: d.e.DEFAULT_EMOJI_REACTION_POPOUT,
        location: s.A.DEFAULT_EMOJI_REACTION_POPOUT_UPSELL,
    },
};
n.d(
    t,
    {},
    {
        $W: function (e, t) {
            let { upsellType: n, location: i } = h[e],
                { analyticsLocations: s } = (0, r.Ay)(i);
            l.useEffect(() => {
                t ||
                    o.default.track(u.HAw.PREMIUM_UPSELL_VIEWED, {
                        type: n,
                        location_stack: s,
                        sku_id: (0, c.mH)(c.Ay.getSkuIdForPremiumType(d.PremiumTypes.TIER_2)),
                    });
            }, [s, t, n]);
        },
        $q: function (e) {
            o.default.track(u.HAw.DEFAULT_EMOJI_PACK_UPDATE, { pack_id: e, action: "add" });
        },
        Vg: h,
        i3: function (e) {
            (0, a.A)(
                {
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.DEFAULT_EMOJI_PACKS,
                    properties: { is_premium_tier_2: e },
                },
                { trackOnInitialLoad: !0 },
            );
        },
        nj: function (e) {
            o.default.track(u.HAw.DEFAULT_EMOJI_PACK_UPDATE, { pack_id: e, action: "remove" });
        },
    },
);
