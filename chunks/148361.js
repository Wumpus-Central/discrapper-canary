"use strict";
n.r(t), n.d(t, { default: () => p });
var i = n(627968);
n(64700);
var r = n(793574),
    s = n(688810),
    a = n(151271),
    o = n(2181),
    l = n(690521),
    u = n(428262),
    c = n(732139),
    d = n(652215),
    _ = n(307731),
    h = n(788868),
    f = n(375708);
let p = function (e) {
    let t,
        {
            onClose: n,
            onUpsellClicked: p,
            channel: E,
            emojiDescriptor: m,
            pickerIntention: g,
            analyticsLocation: A,
        } = e,
        I = (0, a.RQ)((e) => e.searchQuery),
        { analyticsLocations: T } = (0, s.Ay)(r.A.EMOJI_PICKER);
    t =
        g === _.EmojiIntention.REACTION
            ? h.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == m
              ? h.e.EMOJI_PICKER_FLOATING_UPSELL
              : m.subCategory === c.tm.TOP_GUILD_EMOJI
                ? h.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : m.subCategory === c.tm.NEWLY_ADDED_EMOJI
                  ? h.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : h.e.EMOJI_PICKER_EMOJI_CLICKED;
    let S = null != m ? m.emoji : void 0,
        y = null != S && S.animated,
        C = null != S && !l.Ay.isInternalEmojiForGuildId(S, E?.getGuildId()),
        N = null != S ? d.ZSU.EMOJI : d.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, i.jsx)(o.A, {
        title: f.intl.string(f.t["0+11FF"]),
        description: f.intl.string(f.t.dURIzS),
        analyticsLocationSection: d.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        onUpsellClicked: p,
        upsellViewedTrackingData: {
            type: t,
            is_external: C,
            location: { ...A, object: N },
            location_stack: T,
            sku_id: (0, u.mH)(u.Ay.getSkuIdForPremiumType(h.PremiumTypes.TIER_2)),
            has_search_query: null != I && "" !== I,
            is_animated: y,
        },
        isEmojiPickerOverlay: !0,
    });
};
