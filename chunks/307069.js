t.d(n, { A: () => en });
var i = t(477900),
    l = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(517352),
    s = t(855986),
    u = t(554146),
    c = t(744682);
let d = { all: { name: "all", start: 0, duration: 66 } };
function A() {
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
var C = t(604121),
    _ = t(597770),
    N = t(799226),
    f = t(653887),
    g = t(866665),
    I = t(942857),
    T = t(775602),
    R = t(793574),
    O = t(688810),
    m = t(263775),
    E = t(810498),
    M = t(547902),
    G = t(45052),
    b = t(620301),
    p = t(40493),
    h = t(43105),
    S = t(652215),
    k = t(49999),
    B = t(50302),
    D = t(792996);
function j(e) {
    let { giftRecipient: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, O.Ay)(R.A.GIFTED_SUBSCRIPTIONS_COACHMARK),
        { openGiftModal: u } = (0, b.$)({
            giftRecipient: n,
            analyticsLocations: s,
            analyticsObject: { object: S.ZSU.BUTTON_CTA, objectType: S.btD.GIFT },
            location: "GiftedSubscriptionsCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(h.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: D.intl.string(B.default["3NxgUL"]),
                body: D.intl.string(B.default.IMRvdN),
                gradientColor: "nitro-pink",
                actions: [
                    {
                        text: D.intl.string(D.t.Ve9Ge6),
                        icon: _.GiftIcon,
                        onClick: function () {
                            (u(), t?.(), a(k.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(k.i.USER_DISMISS));
                },
            }),
        ],
    });
}
var P = t(70283),
    v = t(982240),
    x = t(702476),
    U = t(287809),
    y = t(427262),
    L = t(339514);
function H(e) {
    let { currentTier: n, giftCount: t, variant: a, onComplete: r, markAsDismissed: o, children: u } = e,
        c = l.useRef(null),
        d = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        A = (0, G.Se)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: c, children: u }),
            (0, i.jsx)(h.A, {
                targetElementRef: c,
                shouldShow: !0,
                position: "top",
                title: D.intl.format(L.default["a+jfuy"], { tierName: n.name ?? "" }),
                body:
                    "noCount" === a
                        ? D.intl.string(L.default["0N8fCf"])
                        : D.intl.formatToPlainString(L.default.QxRA6w, { giftCount: t ?? 0 }),
                graphic: null != A ? { type: "image", src: A } : void 0,
                actions: [
                    {
                        text: D.intl.string(D.t.RzWDqY),
                        onClick: () => {
                            (null != d && (0, x.openUserProfileModal)({ userId: d.id }), r?.(), o(k.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (r?.(), o(k.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function F(e) {
    let { channel: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, O.Ay)(R.A.GIFTING_BADGE_COACHMARK),
        u = (0, y.R1)(n),
        { openGiftModal: c } = (0, b.$)({
            giftRecipient: u,
            analyticsLocations: s,
            analyticsObject: { object: S.ZSU.BUTTON_CTA, objectType: S.btD.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(h.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: D.intl.string(L.default.Q2RQka),
                body: D.intl.string(L.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: D.intl.string(L.default.DZnomS),
                        icon: _.GiftIcon,
                        onClick: () => {
                            (c(), t?.(), a(k.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(k.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function K(e) {
    let { channel: n, variant: t, onComplete: l, markAsDismissed: a, children: r } = e,
        { currentTier: o, giftCount: u } = (0, s.cf)([v.Ay], () => ({
            currentTier: v.Ay.getCurrentTier(P.$.GIFTING),
            giftCount: v.Ay.getSingleRequirementProgress(P.$.GIFTING)?.current,
        }));
    return null != o
        ? (0, i.jsx)(H, { currentTier: o, giftCount: u, variant: t, onComplete: l, markAsDismissed: a, children: r })
        : (0, i.jsx)(F, { channel: n, onComplete: l, markAsDismissed: a, children: r });
}
var $ = t(412260),
    w = t(927813),
    J = t(811091),
    W = t(240248),
    Z = t(243185),
    V = t(621255),
    Q = t(495088);
let Y = w.A.Millis.DAYS_30;
function z(e) {
    let { boxAnimationUrl: n, hovered: t, onClick: a } = e,
        r = l.useCallback(() => Promise.resolve({ default: n }), [n]);
    return (0, i.jsx)(Z.A, {
        className: Q.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: a,
        children: (0, i.jsx)("div", {
            className: V.zc,
            children: t ? (0, i.jsx)(C.a, { className: V.Hl, importData: r }) : (0, i.jsx)(_.GiftIcon, {}),
        }),
    });
}
function X(e) {
    let { trinketAnimationUrl: n, trinketRiveAnimationUrl: t, hovered: l } = e,
        a = (0, s.bG)([T.Ay], () => T.Ay.useReducedMotion),
        r = !(0, W.uJ)(t);
    return ((0, N.CE)(r ? t : null), !l || a)
        ? null
        : r
          ? (0, i.jsx)(f._, { className: V.rY, src: t, fit: "contain" })
          : (0, W.uJ)(n)
            ? null
            : (0, i.jsx)("img", { className: V.rY, src: n, alt: "" });
}
function q(e) {
    let { trinketAnimationUrl: n, trinketRiveAnimationUrl: t, hovered: l, onClick: a } = e,
        { Component: r, events: o, play: s } = A();
    return (0, i.jsxs)(Z.A, {
        className: Q.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            (s(), a());
        },
        ...o,
        children: [
            (0, i.jsx)("div", { className: V.zc, children: (0, i.jsx)(r, { className: V.is, color: "currentColor" }) }),
            (0, i.jsx)(X, { trinketAnimationUrl: n, trinketRiveAnimationUrl: t, hovered: l }),
        ],
    });
}
function ee(e) {
    let { giftIcon: n, hovered: t, isGenericGift: l, onClick: a } = e,
        { Component: r, events: o, play: s } = A(),
        u = n?.boxAnimationUrl;
    return (0, W.uJ)(u)
        ? null == n || ((0, W.uJ)(n.trinketRiveAnimationUrl) && (0, W.uJ)(n.trinketAnimationUrl))
            ? (0, i.jsx)(g.m, {
                  ariaHidden: l,
                  text: D.intl.string(l ? D.t.TW4JV0 : D.t.sWtWDX),
                  children: (0, i.jsx)(Z.A, {
                      className: Q.x6,
                      isActive: !1,
                      "aria-label": D.intl.string(l ? D.t.TW4JV0 : D.t.Z1RnTk),
                      "aria-haspopup": "dialog",
                      onClick: () => {
                          (a(), s());
                      },
                      ...o,
                      children: (0, i.jsx)(r, { size: "refresh_sm", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(q, {
                  trinketAnimationUrl: n.trinketAnimationUrl,
                  trinketRiveAnimationUrl: n.trinketRiveAnimationUrl,
                  hovered: t,
                  onClick: a,
              })
        : (0, i.jsx)(z, { boxAnimationUrl: u, hovered: t, onClick: a });
}
let en = l.memo(function (e) {
    let { disabled: n, channel: t } = e,
        { analyticsLocations: a } = (0, O.Ay)(R.A.GIFT_BUTTON),
        [c, d] = l.useState(!1),
        A = (0, I.A)(),
        C = (0, s.bG)([U.default], () => U.default.getCurrentUser()),
        _ = null != C ? J.default.age(C.id) : 0,
        N = (0, y.R1)(t),
        f = (0, s.bG)([$.A], () => {
            let e = $.A.getMarketingComponentBySurface(o.oW.GIFT_ICON);
            return null == e ? null : e.surface;
        }),
        g = (0, s.bG)([$.A], () => {
            let e = $.A.getMarketingComponentBySurface(o.oW.GIFT_ICON_COACHMARK);
            return null == e ? null : e.surface;
        }),
        T = f?.gradient,
        h =
            null != T && null != T.colors && T.colors.length >= 2
                ? (0, E.K5)({ gradient: T.colors, angle: T.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        B = l.useMemo(() => {
            if (h?.background != null) return { "--custom-promotion-gradient": h.background };
        }, [h]),
        D =
            !(0, W.uJ)(f?.boxAnimationUrl) ||
            !(0, W.uJ)(f?.trinketAnimationUrl) ||
            !(0, W.uJ)(f?.trinketRiveAnimationUrl),
        P = (0, s.bG)([$.A], () => $.A.getGiftPromotion()?.id),
        v = null != g && !n && !A && _ >= Y && null != P,
        [x, L] = (0, m.Cc)(v ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, P ?? ""),
        H = null != x,
        { giftingBadgeCoachmarkVariant: F, markGiftingBadgeCoachmarkAsDismissed: w } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, I.A)(),
                l = (0, G.Hv)({ location: n, enabled: t }),
                [a, r] = (0, m.kn)(null == l || i ? [] : [u.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != a ? l : null, markGiftingBadgeCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && !H }),
        { showGiftedSubscriptionsCoachmark: Z, markGiftedSubscriptionsCoachmarkAsDismissed: Q } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, I.A)(),
                l = (0, M.u)({ location: `${n}${t ? "" : "-DISABLED"}` }),
                [a, r] = (0, m.kn)(t && l && !i ? [u.M.GIFTED_SUBSCRIPTIONS_DESKTOP_COACHMARK] : []);
            return { showGiftedSubscriptionsCoachmark: null != a, markGiftedSubscriptionsCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && null != N && !H && null == F }),
        z = !Z && (c || H || null != F),
        {
            openGiftModal: X,
            shouldShowWishlistModal: q,
            shouldShowGiftSelectionModal: en,
        } = (0, b.$)({
            giftRecipient: N,
            analyticsLocations: a,
            analyticsObject: {
                page: t.isPrivate() ? S.liQ.DM_CHANNEL : S.liQ.GUILD_CHANNEL,
                section: S.JJy.CHANNEL_TEXT_AREA,
                object: D ? S.ZSU.GIFTING_PROMOTION_BUTTON : S.ZSU.BUTTON_ICON,
                objectType: S.btD.GIFT,
            },
            wishlistAnalyticsObject: D
                ? {
                      page: t.isPrivate() ? S.liQ.DM_CHANNEL : S.liQ.GUILD_CHANNEL,
                      section: S.JJy.CHANNEL_TEXT_AREA,
                      object: S.ZSU.BUTTON_ICON,
                      objectType: S.btD.GIFT,
                  }
                : void 0,
            location: D ? "gift-promotion-button" : "gift-button",
        });
    if (n) return null;
    let et = (0, i.jsx)(ee, {
        giftIcon: f,
        hovered: z,
        isGenericGift: q || en,
        onClick: function () {
            (d(!1), L(k.i.TAKE_ACTION), w(k.i.TAKE_ACTION), Z && Q(k.i.TAKE_ACTION), X());
        },
    });
    return (0, i.jsx)("div", {
        className: r()(V.kL, { [V.DM]: z }),
        style: B,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: H
            ? (0, i.jsx)(p.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: X,
                  markAsDismissed: L,
                  coachmarkConfig: g,
                  children: et,
              })
            : null != F
              ? (0, i.jsx)(K, { channel: t, variant: F, onComplete: () => d(!1), markAsDismissed: w, children: et })
              : Z
                ? (0, i.jsx)(j, { giftRecipient: N, onComplete: () => d(!1), markAsDismissed: Q, children: et })
                : et,
    });
});
