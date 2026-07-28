"use strict";
n.r(t), n.d(t, { default: () => h });
var i = n(477900);
n(582128);
var r = n(793574),
    a = n(688810),
    s = n(151271),
    l = n(2181),
    o = n(690521),
    d = n(428262),
    c = n(732139),
    u = n(652215),
    _ = n(307731),
    E = n(202541),
    A = n(375708);
let h = function (e) {
    let t,
        {
            onClose: n,
            onUpsellClicked: h,
            channel: I,
            emojiDescriptor: f,
            pickerIntention: p,
            analyticsLocation: T,
        } = e,
        m = (0, s.RQ)((e) => e.searchQuery),
        { analyticsLocations: g } = (0, a.Ay)(r.A.EMOJI_PICKER);
    t =
        p === _.EmojiIntention.REACTION
            ? E.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == f
              ? E.e.EMOJI_PICKER_FLOATING_UPSELL
              : f.subCategory === c.tm.TOP_GUILD_EMOJI
                ? E.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : f.subCategory === c.tm.NEWLY_ADDED_EMOJI
                  ? E.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : E.e.EMOJI_PICKER_EMOJI_CLICKED;
    let S = null != f ? f.emoji : void 0,
        N = null != S && S.animated,
        C = null != S && !o.Ay.isInternalEmojiForGuildId(S, I?.getGuildId()),
        O = null != S ? u.ZSU.EMOJI : u.ZSU.EMOJI_PICKER_FLOATING_UPSELL;
    return (0, i.jsx)(l.A, {
        title: A.intl.string(A.t["0+11FF"]),
        description: A.intl.string(A.t.dURIzS),
        analyticsLocationSection: u.JJy.EMOJI_UPSELL_POPOUT,
        onClose: n,
        onUpsellClicked: h,
        upsellViewedTrackingData: {
            type: t,
            is_external: C,
            location: { ...T, object: O },
            location_stack: g,
            sku_id: (0, d.mH)(d.Ay.getSkuIdForPremiumType(E.PremiumTypes.TIER_2)),
            has_search_query: null != m && "" !== m,
            is_animated: N,
        },
        isEmojiPickerOverlay: !0,
    });
};
