"use strict";
n.r(t), n.d(t, { default: () => m });
var i = n(627968);
n(64700);
var r = n(793574),
    s = n(688810),
    a = n(151271),
    o = n(2181),
    l = n(690521),
    d = n(927578),
    _ = n(732139),
    u = n(652215),
    c = n(307731),
    E = n(788868),
    h = n(985018);
let m = (e) => {
    let t,
        { onClose: n, channel: m, emojiDescriptor: f, pickerIntention: g, analyticsLocation: p } = e,
        A = (0, a.RQ)((e) => e.searchQuery),
        { analyticsLocations: I } = (0, s.Ay)(r.A.EMOJI_PICKER);
    t =
        g === c.EmojiIntention.REACTION
            ? E.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == f
              ? E.e.EMOJI_PICKER_FLOATING_UPSELL
              : f.subCategory === _.tm.TOP_GUILD_EMOJI
                ? E.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : f.subCategory === _.tm.NEWLY_ADDED_EMOJI
                  ? E.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : E.e.EMOJI_PICKER_EMOJI_CLICKED;
    let T = null != f ? f.emoji : void 0,
        S = null != T && T.animated,
        N = null != T && !l.Ay.isInternalEmojiForGuildId(T, m?.getGuildId()),
        C = null != T ? u.ZSU.EMOJI : u.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, i.jsx)(o.A, {
        title: h.intl.string(h.t["0+11FF"]),
        description: h.intl.string(h.t.dURIzS),
        analyticsLocationSection: u.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        upsellViewedTrackingData: {
            type: t,
            is_external: N,
            location: { ...p, object: C },
            location_stack: I,
            sku_id: (0, d.mH)(d.Ay.getSkuIdForPremiumType(E.PremiumTypes.TIER_2)),
            has_search_query: null != A && "" !== A,
            is_animated: S,
        },
        isEmojiPickerOverlay: !0,
    });
};
