n.d(t, { A: () => q });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(877624),
    o = n(17928),
    u = n(554146),
    c = n(744682);
let d = { all: { name: "all", start: 0, duration: 66 } };
function m() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        s = i.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        r = i.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        a = i.useCallback(
            (t) =>
                (0, l.jsx)(c.P, { ...t, src: () => n.e("556591").then(n.t.bind(n, 640114, 19)), ref: e, markers: d }),
            [],
        );
    return {
        events: { onMouseEnter: s, onMouseLeave: r },
        play: t,
        getDuration: i.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: i.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: a,
    };
}
var h = n(604121),
    p = n(597770),
    f = n(866665),
    g = n(942857),
    x = n(775602),
    A = n(793574),
    C = n(688810),
    E = n(131607),
    I = n(810498),
    y = n(859492),
    S = n(5755),
    v = n(40493),
    N = n(70283),
    _ = n(43105),
    j = n(982240),
    b = n(402860),
    T = n(287809),
    R = n(427262),
    O = n(652215),
    L = n(49999),
    M = n(95769),
    k = n(375708);
function w(e) {
    let { currentTier: t, giftCount: n, variant: s, onComplete: r, markAsDismissed: a, children: u } = e,
        c = i.useRef(null),
        d = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        m = (0, y.b9)("GiftingBadgesCoachmarkPopout"),
        h = (0, y.Se)(t, m);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: c, children: u }),
            (0, l.jsx)(_.A, {
                targetElementRef: c,
                shouldShow: !0,
                position: "top",
                title: k.intl.format(M.default["a+jfuy"], { tierName: t.name ?? "" }),
                body:
                    "noCount" === s
                        ? k.intl.string(M.default["0N8fCf"])
                        : k.intl.formatToPlainString(M.default.QxRA6w, { giftCount: n ?? 0 }),
                graphic: null != h ? { type: "image", src: h } : void 0,
                actions: [
                    {
                        text: k.intl.string(k.t.RzWDqY),
                        onClick: () => {
                            (null != d && (0, b.openUserProfileModal)({ userId: d.id }), r?.(), a(L.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (r?.(), a(L.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function P(e) {
    let { channel: t, onComplete: n, markAsDismissed: s, children: r } = e,
        a = i.useRef(null),
        { analyticsLocations: o } = (0, C.Ay)(A.A.GIFTING_BADGE_COACHMARK),
        u = (0, R.R1)(t),
        { openGiftModal: c } = (0, S.$)({
            giftRecipient: u,
            analyticsLocations: o,
            analyticsObject: { object: O.ZSU.BUTTON_CTA, objectType: O.AnalyticsObjectTypes.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", { ref: a, children: r }),
            (0, l.jsx)(_.A, {
                targetElementRef: a,
                shouldShow: !0,
                position: "top",
                title: k.intl.string(M.default.Q2RQka),
                body: k.intl.string(M.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: k.intl.string(M.default.DZnomS),
                        icon: p.GiftIcon,
                        onClick: () => {
                            (c(), n?.(), s(L.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (n?.(), s(L.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function D(e) {
    let { channel: t, variant: n, onComplete: i, markAsDismissed: s, children: r } = e,
        { currentTier: a, giftCount: u } = (0, o.cf)([j.Ay], () => ({
            currentTier: j.Ay.getCurrentTier(N.$.GIFTING),
            giftCount: j.Ay.getSingleRequirementProgress(N.$.GIFTING)?.current,
        }));
    return null != a
        ? (0, l.jsx)(w, { currentTier: a, giftCount: u, variant: n, onComplete: i, markAsDismissed: s, children: r })
        : (0, l.jsx)(P, { channel: t, onComplete: i, markAsDismissed: s, children: r });
}
var U = n(412260),
    V = n(927813),
    G = n(935208),
    F = n(240248),
    B = n(767089),
    H = n(621255),
    W = n(495088);
let K = V.A.Millis.DAYS_30;
function z(e) {
    let { boxAnimationUrl: t, hovered: n, onClick: s } = e,
        r = i.useCallback(() => Promise.resolve({ default: t }), [t]);
    return (0, l.jsx)(B.A, {
        className: W.x6,
        "aria-label": k.intl.string(k.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: s,
        children: (0, l.jsx)("div", {
            className: H.zc,
            children: n ? (0, l.jsx)(h.a, { className: H.Hl, importData: r }) : (0, l.jsx)(p.GiftIcon, {}),
        }),
    });
}
function Z(e) {
    let { trinketAnimationUrl: t, hovered: n, onClick: i } = e,
        { Component: s, events: r, play: a } = m(),
        u = (0, o.bG)([x.Ay], () => x.Ay.useReducedMotion);
    return (0, l.jsxs)(B.A, {
        className: W.x6,
        "aria-label": k.intl.string(k.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            (a(), i());
        },
        ...r,
        children: [
            (0, l.jsx)("div", { className: H.zc, children: (0, l.jsx)(s, { className: H.is, color: "currentColor" }) }),
            n && !u && (0, l.jsx)("img", { className: H.rY, src: t, alt: "" }),
        ],
    });
}
function Y(e) {
    let { giftIcon: t, hovered: n, isGenericGift: i, onClick: s } = e,
        { Component: r, events: a, play: o } = m(),
        u = t?.boxAnimationUrl;
    if (!(0, F.uJ)(u)) return (0, l.jsx)(z, { boxAnimationUrl: u, hovered: n, onClick: s });
    let c = t?.trinketAnimationUrl;
    return (0, F.uJ)(c)
        ? (0, l.jsx)(f.m, {
              ariaHidden: i,
              text: k.intl.string(i ? k.t.TW4JV0 : k.t.sWtWDX),
              children: (0, l.jsx)(B.A, {
                  className: W.x6,
                  isActive: !1,
                  "aria-label": k.intl.string(i ? k.t.TW4JV0 : k.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      (s(), o());
                  },
                  ...a,
                  children: (0, l.jsx)(r, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : (0, l.jsx)(Z, { trinketAnimationUrl: c, hovered: n, onClick: s });
}
let q = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: s } = (0, C.Ay)(A.A.GIFT_BUTTON),
        [c, d] = i.useState(!1),
        m = (0, g.A)(),
        h = (0, o.bG)([T.default], () => T.default.getCurrentUser()),
        p = null != h ? G.default.age(h.id) : 0,
        f = (0, R.R1)(n),
        x = (0, o.bG)([U.A], () => {
            let e = U.A.getMarketingComponentByType(a.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        N = (0, o.bG)([U.A], () => {
            let e = U.A.getMarketingComponentByType(a.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        _ = x?.gradient,
        j =
            null != _ && null != _.colors && _.colors.length >= 2
                ? (0, I.K5)({ gradient: _.colors, angle: _.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        b = i.useMemo(() => {
            if (j?.background != null) return { "--custom-promotion-gradient": j.background };
        }, [j]),
        M = !(0, F.uJ)(x?.boxAnimationUrl) || !(0, F.uJ)(x?.trinketAnimationUrl),
        k = (0, o.bG)([U.A], () => U.A.getGiftPromotion()?.id),
        w = null != N && !t && !m && p >= K && null != k,
        [P, V] = (0, E.Cc)(w ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, k ?? ""),
        B = null != P,
        { giftingBadgeCoachmarkVariant: W, markGiftingBadgeCoachmarkAsDismissed: z } = (function (e) {
            let { location: t, enabled: n } = e,
                l = (0, g.A)(),
                i = (0, y.Hv)({ platform: "web", location: t, enabled: n }),
                [s, r] = (0, E.kn)(null == i || l ? [] : [u.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != s ? i : null, markGiftingBadgeCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !t && !B }),
        Z = c || B || null != W,
        {
            openGiftModal: q,
            shouldShowWishlistModal: J,
            shouldShowGiftSelectionModal: $,
        } = (0, S.$)({
            giftRecipient: f,
            analyticsLocations: s,
            analyticsObject: {
                page: n.isPrivate() ? O.liQ.DM_CHANNEL : O.liQ.GUILD_CHANNEL,
                section: O.JJy.CHANNEL_TEXT_AREA,
                object: M ? O.ZSU.GIFTING_PROMOTION_BUTTON : O.ZSU.BUTTON_ICON,
                objectType: O.AnalyticsObjectTypes.GIFT,
            },
            wishlistAnalyticsObject: M
                ? {
                      page: n.isPrivate() ? O.liQ.DM_CHANNEL : O.liQ.GUILD_CHANNEL,
                      section: O.JJy.CHANNEL_TEXT_AREA,
                      object: O.ZSU.BUTTON_ICON,
                      objectType: O.AnalyticsObjectTypes.GIFT,
                  }
                : void 0,
            location: M ? "gift-promotion-button" : "gift-button",
        });
    if (t) return null;
    let X = (0, l.jsx)(Y, {
        giftIcon: x,
        hovered: Z,
        isGenericGift: J || $,
        onClick: function () {
            (d(!1), V(L.i.TAKE_ACTION), z(L.i.TAKE_ACTION), q());
        },
    });
    return (0, l.jsx)("div", {
        className: r()(H.kL, { [H.DM]: Z }),
        style: b,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: B
            ? (0, l.jsx)(v.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: q,
                  markAsDismissed: V,
                  coachmarkConfig: N,
                  children: X,
              })
            : null != W
              ? (0, l.jsx)(D, { channel: n, variant: W, onComplete: () => d(!1), markAsDismissed: z, children: X })
              : X,
    });
});
