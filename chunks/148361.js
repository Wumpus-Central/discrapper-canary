(n.r(t), n.d(t, { default: () => f }));
var l = n(477900);
n(582128);
var i = n(793574),
    s = n(688810),
    r = n(151271),
    a = n(609178),
    o = n(690521),
    u = n(158045),
    c = n(732139),
    d = n(652215),
    m = n(307731),
    h = n(202541),
    p = n(375708);
let f = function (e) {
    let t,
        {
            onClose: n,
            onUpsellClicked: f,
            channel: g,
            emojiDescriptor: x,
            pickerIntention: A,
            analyticsLocation: C,
        } = e,
        E = (0, r.RQ)((e) => e.searchQuery),
        { analyticsLocations: I } = (0, s.Ay)(i.A.EMOJI_PICKER);
    t =
        A === m.EmojiIntention.REACTION
            ? h.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == x
              ? h.e.EMOJI_PICKER_FLOATING_UPSELL
              : x.subCategory === c.tm.TOP_GUILD_EMOJI
                ? h.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : x.subCategory === c.tm.NEWLY_ADDED_EMOJI
                  ? h.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : h.e.EMOJI_PICKER_EMOJI_CLICKED;
    let y = null != x ? x.emoji : void 0,
        S = null != y && y.animated,
        v = null != y && !o.Ay.isInternalEmojiForGuildId(y, g?.getGuildId()),
        N = null != y ? d.ZSU.EMOJI : d.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, l.jsx)(a.A, {
        title: p.intl.string(p.t["0+11FF"]),
        description: p.intl.string(p.t.dURIzS),
        analyticsLocationSection: d.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        onUpsellClicked: f,
        upsellViewedTrackingData: {
            type: t,
            is_external: v,
            location: { ...C, object: N },
            location_stack: I,
            sku_id: (0, u.mH)(u.Ay.getSkuIdForPremiumType(h.PremiumTypes.TIER_2)),
            has_search_query: null != E && "" !== E,
            is_animated: S,
        },
        isEmojiPickerOverlay: !0,
    });
};
