"use strict";
n.r(t), n.d(t, { default: () => f });
var l = n(627968);
n(64700);
var i = n(793574),
    s = n(688810),
    a = n(151271),
    r = n(2181),
    o = n(690521),
    c = n(927578),
    u = n(732139),
    d = n(652215),
    h = n(307731),
    m = n(788868),
    p = n(985018);
let f = (e) => {
    let t,
        {
            onClose: n,
            onUpsellClicked: f,
            channel: g,
            emojiDescriptor: _,
            pickerIntention: x,
            analyticsLocation: C,
        } = e,
        A = (0, a.RQ)((e) => e.searchQuery),
        { analyticsLocations: E } = (0, s.Ay)(i.A.EMOJI_PICKER);
    t =
        x === h.EmojiIntention.REACTION
            ? m.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == _
              ? m.e.EMOJI_PICKER_FLOATING_UPSELL
              : _.subCategory === u.tm.TOP_GUILD_EMOJI
                ? m.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : _.subCategory === u.tm.NEWLY_ADDED_EMOJI
                  ? m.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : m.e.EMOJI_PICKER_EMOJI_CLICKED;
    let I = null != _ ? _.emoji : void 0,
        v = null != I && I.animated,
        y = null != I && !o.Ay.isInternalEmojiForGuildId(I, g?.getGuildId()),
        b = null != I ? d.ZSU.EMOJI : d.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, l.jsx)(r.A, {
        title: p.intl.string(p.t["0+11FF"]),
        description: p.intl.string(p.t.dURIzS),
        analyticsLocationSection: d.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        onUpsellClicked: f,
        upsellViewedTrackingData: {
            type: t,
            is_external: y,
            location: { ...C, object: b },
            location_stack: E,
            sku_id: (0, c.mH)(c.Ay.getSkuIdForPremiumType(m.PremiumTypes.TIER_2)),
            has_search_query: null != A && "" !== A,
            is_animated: v,
        },
        isEmojiPickerOverlay: !0,
    });
};
