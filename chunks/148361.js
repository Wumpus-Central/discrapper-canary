"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(384904),
    o = n(793574),
    l = n(688810),
    u = n(151271),
    c = n(560138),
    d = n(421162),
    _ = n(544028),
    f = n(690521),
    p = n(927578),
    h = n(732139),
    m = n(652215),
    g = n(307731),
    E = n(788868),
    A = n(985018);
let I = (e) => {
    let t,
        {
            onClose: n,
            channel: I,
            emojiDescriptor: T,
            pickerIntention: y,
            analyticsLocation: S,
            containerContext: v,
        } = e,
        C = (0, a.bG)([_.A], () => _.A.theme) === m.NJ8.LIGHT ? "light" : "dark",
        b = `https://cdn.discordapp.com/assets/premium/roadblocks/emoji_${C}.png`,
        N = (0, u.RQ)((e) => e.searchQuery),
        { analyticsLocations: R } = (0, l.Ay)(o.A.EMOJI_PICKER);
    t =
        y === g.b_.REACTION
            ? E.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == T
              ? E.e.EMOJI_PICKER_FLOATING_UPSELL
              : T.subCategory === h.tm.TOP_GUILD_EMOJI
                ? E.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : T.subCategory === h.tm.NEWLY_ADDED_EMOJI
                  ? E.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : E.e.EMOJI_PICKER_EMOJI_CLICKED;
    let O = null != T ? T.emoji : void 0,
        D = null != O && O.animated,
        L = null != O && !f.Ay.isInternalEmojiForGuildId(O, I?.getGuildId()),
        w = null != O ? m.ZSU.EMOJI : m.ZSU.EMOJI_PICKER_FLOATING_UPSELL,
        x = (0, a.bG)([c.A], () => c.A.hasFetched);
    return (
        i.useEffect(() => {
            x || s.xG();
        }, [x]),
        (0, r.jsx)(d.A, {
            containerContext: v,
            image: { url: b, width: 220, height: 132 },
            title: A.intl.string(A.t["0+11FF"]),
            description: A.intl.string(A.t.dURIzS),
            enableSocialProof: !1,
            analyticsLocationSection: m.JJy.EMOJI_UPSELL_POPOUT,
            onClose: n,
            upsellViewedTrackingData: {
                type: t,
                is_external: L,
                location: { ...S, object: w },
                location_stack: R,
                sku_id: (0, p.mH)(p.Ay.getSkuIdForPremiumType(E.PremiumTypes.TIER_2)),
                has_search_query: null != N && "" !== N,
                is_animated: D,
            },
            isEmojiPickerOverlay: !0,
        })
    );
};
