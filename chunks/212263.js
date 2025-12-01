n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(355467),
    s = n(100527),
    l = n(906732),
    c = n(28546),
    u = n(357355),
    d = n(609218),
    f = n(210887),
    p = n(176354),
    _ = n(74538),
    m = n(149203),
    h = n(981631),
    g = n(185923),
    E = n(474936),
    b = n(388032);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
    let t,
        {
            onClose: n,
            channel: y,
            emojiDescriptor: v,
            pickerIntention: I,
            analyticsLocation: T,
            containerContext: A,
        } = e,
        C = (0, a.e7)([f.Z], () => f.Z.theme) === h.BRd.LIGHT ? "light" : "dark",
        N = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_".concat(C, ".png"),
        P = (0, c.Iu)((e) => e.searchQuery),
        { analyticsLocations: R } = (0, l.ZP)(s.Z.EMOJI_PICKER);
    t =
        I === g.Hz.REACTION
            ? E.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == v
              ? E.cd.EMOJI_PICKER_FLOATING_UPSELL
              : v.subCategory === m.t0.TOP_GUILD_EMOJI
                ? E.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : v.subCategory === m.t0.NEWLY_ADDED_EMOJI
                  ? E.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : E.cd.EMOJI_PICKER_EMOJI_CLICKED;
    let w = null != v ? v.emoji : void 0,
        D = null != w && w.animated,
        x = null != w && !p.ZP.isInternalEmojiForGuildId(w, null == y ? void 0 : y.getGuildId()),
        L = null != w ? h.qAy.EMOJI : h.qAy.EMOJI_PICKER_FLOATING_UPSELL,
        j = (0, a.e7)([u.Z], () => u.Z.hasFetched);
    return (
        i.useEffect(() => {
            j || o.MH();
        }, [j]),
        (0, r.jsx)(d.Z, {
            containerContext: A,
            image: {
                url: N,
                width: 220,
                height: 132,
            },
            title: b.intl.string(b.t["0+11FF"]),
            description: b.intl.string(b.t.dURIzS),
            enableSocialProof: !1,
            analyticsLocationSection: h.jXE.EMOJI_UPSELL_POPOUT,
            onClose: n,
            upsellViewedTrackingData: {
                type: t,
                is_external: x,
                location: S(O({}, T), { object: L }),
                location_stack: R,
                sku_id: (0, _.Wz)(_.ZP.getSkuIdForPremiumType(E.PremiumTypes.TIER_2)),
                has_search_query: null != P && "" !== P,
                is_animated: D,
            },
            isEmojiPickerOverlay: !0,
        })
    );
};
