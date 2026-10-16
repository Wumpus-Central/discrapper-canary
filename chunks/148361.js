(n.r(t), n.d(t, { default: () => I }));
var i = n(477900);
n(582128);
var s = n(793574),
    l = n(688810),
    r = n(151271),
    a = n(609178),
    o = n(690521),
    c = n(158045),
    u = n(732139),
    d = n(652215),
    m = n(307731),
    f = n(202541),
    E = n(105292);
let I = function (e) {
    let t,
        {
            onClose: n,
            onUpsellClicked: I,
            channel: h,
            emojiDescriptor: g,
            pickerIntention: p,
            analyticsLocation: A,
        } = e,
        _ = (0, r.RQ)((e) => e.searchQuery),
        { analyticsLocations: N } = (0, l.Ay)(s.A.EMOJI_PICKER);
    t =
        p === m.EmojiIntention.REACTION
            ? f.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == g
              ? f.e.EMOJI_PICKER_FLOATING_UPSELL
              : g.subCategory === u.tm.TOP_GUILD_EMOJI
                ? f.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : g.subCategory === u.tm.NEWLY_ADDED_EMOJI
                  ? f.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : f.e.EMOJI_PICKER_EMOJI_CLICKED;
    let C = null != g ? g.emoji : void 0,
        S = null != C && C.animated,
        x = null != C && !o.Ay.isInternalEmojiForGuildId(C, h?.getGuildId()),
        O = null != C ? d.ZSU.EMOJI : d.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, i.jsx)(a.A, {
        title: E.intl.string(E.t["0+11FF"]),
        description: E.intl.string(E.t.dURIzS),
        analyticsLocationSection: d.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        onUpsellClicked: I,
        upsellViewedTrackingData: {
            type: t,
            is_external: x,
            location: { ...A, object: O },
            location_stack: N,
            sku_id: (0, c.mH)(c.Ay.getSkuIdForPremiumType(f.PremiumTypes.TIER_2)),
            has_search_query: null != _ && "" !== _,
            is_animated: S,
        },
        isEmojiPickerOverlay: !0,
    });
};
