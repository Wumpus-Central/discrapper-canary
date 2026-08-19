"use strict";
n.r(t), n.d(t, { default: () => p });
var l = n(477900);
n(582128);
var i = n(793574),
    s = n(688810),
    r = n(151271),
    a = n(2181),
    o = n(690521),
    u = n(158045),
    c = n(732139),
    d = n(652215),
    h = n(307731),
    m = n(202541),
    f = n(375708);
let p = function (e) {
    let t,
        {
            onClose: n,
            onUpsellClicked: p,
            channel: g,
            emojiDescriptor: x,
            pickerIntention: A,
            analyticsLocation: E,
        } = e,
        C = (0, r.RQ)((e) => e.searchQuery),
        { analyticsLocations: I } = (0, s.Ay)(i.A.EMOJI_PICKER);
    t =
        A === h.EmojiIntention.REACTION
            ? m.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == x
              ? m.e.EMOJI_PICKER_FLOATING_UPSELL
              : x.subCategory === c.tm.TOP_GUILD_EMOJI
                ? m.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : x.subCategory === c.tm.NEWLY_ADDED_EMOJI
                  ? m.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : m.e.EMOJI_PICKER_EMOJI_CLICKED;
    let y = null != x ? x.emoji : void 0,
        S = null != y && y.animated,
        v = null != y && !o.Ay.isInternalEmojiForGuildId(y, g?.getGuildId()),
        _ = null != y ? d.ZSU.EMOJI : d.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, l.jsx)(a.A, {
        title: f.intl.string(f.t["0+11FF"]),
        description: f.intl.string(f.t.dURIzS),
        analyticsLocationSection: d.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        onUpsellClicked: p,
        upsellViewedTrackingData: {
            type: t,
            is_external: v,
            location: { ...E, object: _ },
            location_stack: I,
            sku_id: (0, u.mH)(u.Ay.getSkuIdForPremiumType(m.PremiumTypes.TIER_2)),
            has_search_query: null != C && "" !== C,
            is_animated: S,
        },
        isEmojiPickerOverlay: !0,
    });
};
