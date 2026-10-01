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
    E = n(375708);
let I = function (e) {
    let t,
        {
            onClose: n,
            onUpsellClicked: I,
            channel: g,
            emojiDescriptor: h,
            pickerIntention: A,
            analyticsLocation: _,
        } = e,
        p = (0, r.RQ)((e) => e.searchQuery),
        { analyticsLocations: N } = (0, l.Ay)(s.A.EMOJI_PICKER);
    t =
        A === m.EmojiIntention.REACTION
            ? f.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == h
              ? f.e.EMOJI_PICKER_FLOATING_UPSELL
              : h.subCategory === u.tm.TOP_GUILD_EMOJI
                ? f.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : h.subCategory === u.tm.NEWLY_ADDED_EMOJI
                  ? f.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : f.e.EMOJI_PICKER_EMOJI_CLICKED;
    let C = null != h ? h.emoji : void 0,
        O = null != C && C.animated,
        S = null != C && !o.Ay.isInternalEmojiForGuildId(C, g?.getGuildId()),
        x = null != C ? d.ZSU.EMOJI : d.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, i.jsx)(a.A, {
        title: E.intl.string(E.t["0+11FF"]),
        description: E.intl.string(E.t.dURIzS),
        analyticsLocationSection: d.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        onUpsellClicked: I,
        upsellViewedTrackingData: {
            type: t,
            is_external: S,
            location: { ..._, object: x },
            location_stack: N,
            sku_id: (0, c.mH)(c.Ay.getSkuIdForPremiumType(f.PremiumTypes.TIER_2)),
            has_search_query: null != p && "" !== p,
            is_animated: O,
        },
        isEmojiPickerOverlay: !0,
    });
};
