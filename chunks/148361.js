n.d(t, {
    A: () => S,
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(384904),
    o = n(793574),
    l = n(688810),
    c = n(151271),
    u = n(560138),
    d = n(421162),
    f = n(544028),
    p = n(690521),
    _ = n(927578),
    h = n(732139),
    m = n(652215),
    g = n(307731),
    E = n(788868),
    b = n(985018);

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

function A(e, t) {
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

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
    let t,
        {
            onClose: n,
            channel: y,
            emojiDescriptor: A,
            pickerIntention: S,
            analyticsLocation: I,
            containerContext: T,
        } = e,
        C = (0, a.bG)([f.A], () => f.A.theme) === m.NJ8.LIGHT ? "light" : "dark",
        N = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_".concat(C, ".png"),
        R = (0, c.RQ)((e) => e.searchQuery),
        { analyticsLocations: w } = (0, l.Ay)(o.A.EMOJI_PICKER);
    t =
        S === g.b_.REACTION
            ? E.e.EMOJI_PICKER_REACTION_EMOJI_CLICKED
            : null == A
              ? E.e.EMOJI_PICKER_FLOATING_UPSELL
              : A.subCategory === h.tm.TOP_GUILD_EMOJI
                ? E.e.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED
                : A.subCategory === h.tm.NEWLY_ADDED_EMOJI
                  ? E.e.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED
                  : E.e.EMOJI_PICKER_EMOJI_CLICKED;
    let P = null != A ? A.emoji : void 0,
        D = null != P && P.animated,
        x = null != P && !p.Ay.isInternalEmojiForGuildId(P, null == y ? void 0 : y.getGuildId()),
        L = null != P ? m.ZSU.EMOJI : m.ZSU.EMOJI_PICKER_FLOATING_UPSELL,
        j = (0, a.bG)([u.A], () => u.A.hasFetched);
    return (
        i.useEffect(() => {
            j || s.xG();
        }, [j]),
        (0, r.jsx)(d.A, {
            containerContext: T,
            image: {
                url: N,
                width: 220,
                height: 132,
            },
            title: b.intl.string(b.t["0+11FF"]),
            description: b.intl.string(b.t.dURIzS),
            enableSocialProof: !1,
            analyticsLocationSection: m.JJy.EMOJI_UPSELL_POPOUT,
            onClose: n,
            upsellViewedTrackingData: {
                type: t,
                is_external: x,
                location: v(O({}, I), {
                    object: L,
                }),
                location_stack: w,
                sku_id: (0, _.mH)(_.Ay.getSkuIdForPremiumType(E.PremiumTypes.TIER_2)),
                has_search_query: null != R && "" !== R,
                is_animated: D,
            },
            isEmojiPickerOverlay: !0,
        })
    );
};
