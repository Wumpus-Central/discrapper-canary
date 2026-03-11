"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(793574),
    s = n(688810),
    a = n(151271),
    o = n(421162),
    l = n(690521),
    u = n(927578),
    c = n(732139),
    d = n(652215),
    _ = n(307731),
    f = n(788868),
    p = n(985018);
let h = (e) => {
    let t,
        { onClose: n, channel: h, emojiDescriptor: m, pickerIntention: E, analyticsLocation: g } = e,
        A = (0, a.RQ)((e) => e.searchQuery),
        { analyticsLocations: I } = (0, s.Ay)(i.A.EMOJI_PICKER);
    t =
        E === _.b_.REACTION
            ? f.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == m
              ? f.e.EMOJI_PICKER_FLOATING_UPSELL
              : m.subCategory === c.tm.TOP_GUILD_EMOJI
                ? f.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : m.subCategory === c.tm.NEWLY_ADDED_EMOJI
                  ? f.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : f.e.EMOJI_PICKER_EMOJI_CLICKED;
    let T = null != m ? m.emoji : void 0,
        S = null != T && T.animated,
        y = null != T && !l.Ay.isInternalEmojiForGuildId(T, h?.getGuildId()),
        v = null != T ? d.ZSU.EMOJI : d.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, r.jsx)(o.A, {
        title: p.intl.string(p.t["0+11FF"]),
        description: p.intl.string(p.t.dURIzS),
        analyticsLocationSection: d.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        upsellViewedTrackingData: {
            type: t,
            is_external: y,
            location: { ...g, object: v },
            location_stack: I,
            sku_id: (0, u.mH)(u.Ay.getSkuIdForPremiumType(f.PremiumTypes.TIER_2)),
            has_search_query: null != A && "" !== A,
            is_animated: S,
        },
        isEmojiPickerOverlay: !0,
    });
};
