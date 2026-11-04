t.d(n, { A: () => X });
var i = t(477900),
    l = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(877624),
    s = t(855986),
    u = t(554146),
    c = t(744682);
let d = { all: { name: "all", start: 0, duration: 66 } };
function f() {
    let e = l.useRef(null),
        n = l.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        a = l.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        r = l.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        o = l.useCallback(
            (n) => (0, i.jsx)(c.P, { ...n, src: () => t.e(556591).then(t.t.bind(t, 640114, 19)), ref: e, markers: d }),
            [],
        );
    return {
        events: { onMouseEnter: a, onMouseLeave: r },
        play: n,
        getDuration: l.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: l.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: o,
    };
}
var g = t(604121),
    C = t(597770),
    m = t(866665),
    A = t(942857),
    p = t(775602),
    b = t(793574),
    I = t(688810),
    h = t(263775),
    T = t(810498),
    N = t(547902),
    k = t(45052),
    _ = t(620301),
    j = t(40493),
    x = t(43105),
    G = t(652215),
    v = t(49999),
    y = t(50302),
    R = t(792996);
function M(e) {
    let { giftRecipient: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, I.Ay)(b.A.GIFTED_SUBSCRIPTIONS_COACHMARK),
        { openGiftModal: u } = (0, _.$)({
            giftRecipient: n,
            analyticsLocations: s,
            analyticsObject: { object: G.ZSU.BUTTON_CTA, objectType: G.btD.GIFT },
            location: "GiftedSubscriptionsCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(x.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: R.intl.string(y.default["3NxgUL"]),
                body: R.intl.string(y.default.IMRvdN),
                gradientColor: "nitro-pink",
                actions: [
                    {
                        text: R.intl.string(R.t.Ve9Ge6),
                        icon: C.GiftIcon,
                        onClick: function () {
                            (u(), t?.(), a(v.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(v.i.USER_DISMISS));
                },
            }),
        ],
    });
}
var O = t(70283),
    S = t(982240),
    E = t(702476),
    D = t(287809),
    U = t(427262),
    P = t(339514);
function F(e) {
    let { currentTier: n, giftCount: t, variant: a, onComplete: r, markAsDismissed: o, children: u } = e,
        c = l.useRef(null),
        d = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        f = (0, k.Se)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: c, children: u }),
            (0, i.jsx)(x.A, {
                targetElementRef: c,
                shouldShow: !0,
                position: "top",
                title: R.intl.format(P.default["a+jfuy"], { tierName: n.name ?? "" }),
                body:
                    "noCount" === a
                        ? R.intl.string(P.default["0N8fCf"])
                        : R.intl.formatToPlainString(P.default.QxRA6w, { giftCount: t ?? 0 }),
                graphic: null != f ? { type: "image", src: f } : void 0,
                actions: [
                    {
                        text: R.intl.string(R.t.RzWDqY),
                        onClick: () => {
                            (null != d && (0, E.openUserProfileModal)({ userId: d.id }), r?.(), o(v.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (r?.(), o(v.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function H(e) {
    let { channel: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, I.Ay)(b.A.GIFTING_BADGE_COACHMARK),
        u = (0, U.R1)(n),
        { openGiftModal: c } = (0, _.$)({
            giftRecipient: u,
            analyticsLocations: s,
            analyticsObject: { object: G.ZSU.BUTTON_CTA, objectType: G.btD.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(x.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: R.intl.string(P.default.Q2RQka),
                body: R.intl.string(P.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: R.intl.string(P.default.DZnomS),
                        icon: C.GiftIcon,
                        onClick: () => {
                            (c(), t?.(), a(v.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(v.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function L(e) {
    let { channel: n, variant: t, onComplete: l, markAsDismissed: a, children: r } = e,
        { currentTier: o, giftCount: u } = (0, s.cf)([S.Ay], () => ({
            currentTier: S.Ay.getCurrentTier(O.$.GIFTING),
            giftCount: S.Ay.getSingleRequirementProgress(O.$.GIFTING)?.current,
        }));
    return null != o
        ? (0, i.jsx)(F, { currentTier: o, giftCount: u, variant: t, onComplete: l, markAsDismissed: a, children: r })
        : (0, i.jsx)(H, { channel: n, onComplete: l, markAsDismissed: a, children: r });
}
var B = t(412260),
    K = t(927813),
    $ = t(811091),
    w = t(240248),
    J = t(243185),
    Z = t(621255),
    V = t(495088);
let W = K.A.Millis.DAYS_30;
function Q(e) {
    let { boxAnimationUrl: n, hovered: t, onClick: a } = e,
        r = l.useCallback(() => Promise.resolve({ default: n }), [n]);
    return (0, i.jsx)(J.A, {
        className: V.x6,
        "aria-label": R.intl.string(R.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: a,
        children: (0, i.jsx)("div", {
            className: Z.zc,
            children: t ? (0, i.jsx)(g.a, { className: Z.Hl, importData: r }) : (0, i.jsx)(C.GiftIcon, {}),
        }),
    });
}
function z(e) {
    let { trinketAnimationUrl: n, hovered: t, onClick: l } = e,
        { Component: a, events: r, play: o } = f(),
        u = (0, s.bG)([p.Ay], () => p.Ay.useReducedMotion);
    return (0, i.jsxs)(J.A, {
        className: V.x6,
        "aria-label": R.intl.string(R.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            (o(), l());
        },
        ...r,
        children: [
            (0, i.jsx)("div", { className: Z.zc, children: (0, i.jsx)(a, { className: Z.is, color: "currentColor" }) }),
            t && !u && (0, i.jsx)("img", { className: Z.rY, src: n, alt: "" }),
        ],
    });
}
function q(e) {
    let { giftIcon: n, hovered: t, isGenericGift: l, onClick: a } = e,
        { Component: r, events: o, play: s } = f(),
        u = n?.boxAnimationUrl;
    if (!(0, w.uJ)(u)) return (0, i.jsx)(Q, { boxAnimationUrl: u, hovered: t, onClick: a });
    let c = n?.trinketAnimationUrl;
    return (0, w.uJ)(c)
        ? (0, i.jsx)(m.m, {
              ariaHidden: l,
              text: R.intl.string(l ? R.t.TW4JV0 : R.t.sWtWDX),
              children: (0, i.jsx)(J.A, {
                  className: V.x6,
                  isActive: !1,
                  "aria-label": R.intl.string(l ? R.t.TW4JV0 : R.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      (a(), s());
                  },
                  ...o,
                  children: (0, i.jsx)(r, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : (0, i.jsx)(z, { trinketAnimationUrl: c, hovered: t, onClick: a });
}
let X = l.memo(function (e) {
    let { disabled: n, channel: t } = e,
        { analyticsLocations: a } = (0, I.Ay)(b.A.GIFT_BUTTON),
        [c, d] = l.useState(!1),
        f = (0, A.A)(),
        g = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        C = null != g ? $.default.age(g.id) : 0,
        m = (0, U.R1)(t),
        p = (0, s.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        x = (0, s.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        y = p?.gradient,
        R =
            null != y && null != y.colors && y.colors.length >= 2
                ? (0, T.K5)({ gradient: y.colors, angle: y.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        O = l.useMemo(() => {
            if (R?.background != null) return { "--custom-promotion-gradient": R.background };
        }, [R]),
        S = !(0, w.uJ)(p?.boxAnimationUrl) || !(0, w.uJ)(p?.trinketAnimationUrl),
        E = (0, s.bG)([B.A], () => B.A.getGiftPromotion()?.id),
        P = null != x && !n && !f && C >= W && null != E,
        [F, H] = (0, h.Cc)(P ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, E ?? ""),
        K = null != F,
        { giftingBadgeCoachmarkVariant: J, markGiftingBadgeCoachmarkAsDismissed: V } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, A.A)(),
                l = (0, k.Hv)({ location: n, enabled: t }),
                [a, r] = (0, h.kn)(null == l || i ? [] : [u.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != a ? l : null, markGiftingBadgeCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && !K }),
        { showGiftedSubscriptionsCoachmark: Q, markGiftedSubscriptionsCoachmarkAsDismissed: z } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, A.A)(),
                l = (0, N.u)({ location: `${n}${t ? "" : "-DISABLED"}` }),
                [a, r] = (0, h.kn)(t && l && !i ? [u.M.GIFTED_SUBSCRIPTIONS_DESKTOP_COACHMARK] : []);
            return { showGiftedSubscriptionsCoachmark: null != a, markGiftedSubscriptionsCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && null != m && !K && null == J }),
        X = !Q && (c || K || null != J),
        {
            openGiftModal: Y,
            shouldShowWishlistModal: ee,
            shouldShowGiftSelectionModal: en,
        } = (0, _.$)({
            giftRecipient: m,
            analyticsLocations: a,
            analyticsObject: {
                page: t.isPrivate() ? G.liQ.DM_CHANNEL : G.liQ.GUILD_CHANNEL,
                section: G.JJy.CHANNEL_TEXT_AREA,
                object: S ? G.ZSU.GIFTING_PROMOTION_BUTTON : G.ZSU.BUTTON_ICON,
                objectType: G.btD.GIFT,
            },
            wishlistAnalyticsObject: S
                ? {
                      page: t.isPrivate() ? G.liQ.DM_CHANNEL : G.liQ.GUILD_CHANNEL,
                      section: G.JJy.CHANNEL_TEXT_AREA,
                      object: G.ZSU.BUTTON_ICON,
                      objectType: G.btD.GIFT,
                  }
                : void 0,
            location: S ? "gift-promotion-button" : "gift-button",
        });
    if (n) return null;
    let et = (0, i.jsx)(q, {
        giftIcon: p,
        hovered: X,
        isGenericGift: ee || en,
        onClick: function () {
            (d(!1), H(v.i.TAKE_ACTION), V(v.i.TAKE_ACTION), Q && z(v.i.TAKE_ACTION), Y());
        },
    });
    return (0, i.jsx)("div", {
        className: r()(Z.kL, { [Z.DM]: X }),
        style: O,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: K
            ? (0, i.jsx)(j.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: Y,
                  markAsDismissed: H,
                  coachmarkConfig: x,
                  children: et,
              })
            : null != J
              ? (0, i.jsx)(L, { channel: t, variant: J, onComplete: () => d(!1), markAsDismissed: V, children: et })
              : Q
                ? (0, i.jsx)(M, { giftRecipient: m, onComplete: () => d(!1), markAsDismissed: z, children: et })
                : et,
    });
});
