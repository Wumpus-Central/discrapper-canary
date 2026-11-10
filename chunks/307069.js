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
    m = t(799226),
    A = t(653887),
    b = t(866665),
    p = t(942857),
    I = t(775602),
    h = t(793574),
    T = t(688810),
    k = t(263775),
    N = t(810498),
    j = t(547902),
    _ = t(45052),
    x = t(620301),
    v = t(40493),
    R = t(43105),
    y = t(652215),
    G = t(49999),
    M = t(50302),
    S = t(792996);
function O(e) {
    let { giftRecipient: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, T.Ay)(h.A.GIFTED_SUBSCRIPTIONS_COACHMARK),
        { openGiftModal: u } = (0, x.$)({
            giftRecipient: n,
            analyticsLocations: s,
            analyticsObject: { object: y.ZSU.BUTTON_CTA, objectType: y.btD.GIFT },
            location: "GiftedSubscriptionsCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(R.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: S.intl.string(M.default["3NxgUL"]),
                body: S.intl.string(M.default.IMRvdN),
                gradientColor: "nitro-pink",
                actions: [
                    {
                        text: S.intl.string(S.t.Ve9Ge6),
                        icon: C.GiftIcon,
                        onClick: function () {
                            (u(), t?.(), a(G.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(G.i.USER_DISMISS));
                },
            }),
        ],
    });
}
var E = t(70283),
    D = t(982240),
    U = t(702476),
    P = t(287809),
    F = t(427262),
    H = t(339514);
function L(e) {
    let { currentTier: n, giftCount: t, variant: a, onComplete: r, markAsDismissed: o, children: u } = e,
        c = l.useRef(null),
        d = (0, s.bG)([P.default], () => P.default.getCurrentUser()),
        f = (0, _.Se)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: c, children: u }),
            (0, i.jsx)(R.A, {
                targetElementRef: c,
                shouldShow: !0,
                position: "top",
                title: S.intl.format(H.default["a+jfuy"], { tierName: n.name ?? "" }),
                body:
                    "noCount" === a
                        ? S.intl.string(H.default["0N8fCf"])
                        : S.intl.formatToPlainString(H.default.QxRA6w, { giftCount: t ?? 0 }),
                graphic: null != f ? { type: "image", src: f } : void 0,
                actions: [
                    {
                        text: S.intl.string(S.t.RzWDqY),
                        onClick: () => {
                            (null != d && (0, U.openUserProfileModal)({ userId: d.id }), r?.(), o(G.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (r?.(), o(G.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function B(e) {
    let { channel: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, T.Ay)(h.A.GIFTING_BADGE_COACHMARK),
        u = (0, F.R1)(n),
        { openGiftModal: c } = (0, x.$)({
            giftRecipient: u,
            analyticsLocations: s,
            analyticsObject: { object: y.ZSU.BUTTON_CTA, objectType: y.btD.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(R.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: S.intl.string(H.default.Q2RQka),
                body: S.intl.string(H.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: S.intl.string(H.default.DZnomS),
                        icon: C.GiftIcon,
                        onClick: () => {
                            (c(), t?.(), a(G.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(G.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function K(e) {
    let { channel: n, variant: t, onComplete: l, markAsDismissed: a, children: r } = e,
        { currentTier: o, giftCount: u } = (0, s.cf)([D.Ay], () => ({
            currentTier: D.Ay.getCurrentTier(E.$.GIFTING),
            giftCount: D.Ay.getSingleRequirementProgress(E.$.GIFTING)?.current,
        }));
    return null != o
        ? (0, i.jsx)(L, { currentTier: o, giftCount: u, variant: t, onComplete: l, markAsDismissed: a, children: r })
        : (0, i.jsx)(B, { channel: n, onComplete: l, markAsDismissed: a, children: r });
}
var $ = t(412260),
    w = t(927813),
    J = t(811091),
    Z = t(240248),
    W = t(243185),
    V = t(621255),
    Q = t(495088);
let z = w.A.Millis.DAYS_30;
function q(e) {
    let { boxAnimationUrl: n, hovered: t, onClick: a } = e,
        r = l.useCallback(() => Promise.resolve({ default: n }), [n]);
    return (0, i.jsx)(W.A, {
        className: Q.x6,
        "aria-label": S.intl.string(S.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: a,
        children: (0, i.jsx)("div", {
            className: V.zc,
            children: t ? (0, i.jsx)(g.a, { className: V.Hl, importData: r }) : (0, i.jsx)(C.GiftIcon, {}),
        }),
    });
}
function Y(e) {
    let { trinketAnimationUrl: n, trinketRiveAnimationUrl: t, hovered: l } = e,
        a = (0, s.bG)([I.Ay], () => I.Ay.useReducedMotion),
        r = !(0, Z.uJ)(t);
    return ((0, m.CE)(r ? t : null), !l || a)
        ? null
        : r
          ? (0, i.jsx)(A._, { className: V.rY, src: t, fit: "contain" })
          : (0, Z.uJ)(n)
            ? null
            : (0, i.jsx)("img", { className: V.rY, src: n, alt: "" });
}
function X(e) {
    let { trinketAnimationUrl: n, trinketRiveAnimationUrl: t, hovered: l, onClick: a } = e,
        { Component: r, events: o, play: s } = f();
    return (0, i.jsxs)(W.A, {
        className: Q.x6,
        "aria-label": S.intl.string(S.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            (s(), a());
        },
        ...o,
        children: [
            (0, i.jsx)("div", { className: V.zc, children: (0, i.jsx)(r, { className: V.is, color: "currentColor" }) }),
            (0, i.jsx)(Y, { trinketAnimationUrl: n, trinketRiveAnimationUrl: t, hovered: l }),
        ],
    });
}
function ee(e) {
    let { giftIcon: n, hovered: t, isGenericGift: l, onClick: a } = e,
        { Component: r, events: o, play: s } = f(),
        u = n?.boxAnimationUrl;
    return (0, Z.uJ)(u)
        ? null == n || ((0, Z.uJ)(n.trinketRiveAnimationUrl) && (0, Z.uJ)(n.trinketAnimationUrl))
            ? (0, i.jsx)(b.m, {
                  ariaHidden: l,
                  text: S.intl.string(l ? S.t.TW4JV0 : S.t.sWtWDX),
                  children: (0, i.jsx)(W.A, {
                      className: Q.x6,
                      isActive: !1,
                      "aria-label": S.intl.string(l ? S.t.TW4JV0 : S.t.Z1RnTk),
                      "aria-haspopup": "dialog",
                      onClick: () => {
                          (a(), s());
                      },
                      ...o,
                      children: (0, i.jsx)(r, { size: "refresh_sm", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(X, {
                  trinketAnimationUrl: n.trinketAnimationUrl,
                  trinketRiveAnimationUrl: n.trinketRiveAnimationUrl,
                  hovered: t,
                  onClick: a,
              })
        : (0, i.jsx)(q, { boxAnimationUrl: u, hovered: t, onClick: a });
}
let en = l.memo(function (e) {
    let { disabled: n, channel: t } = e,
        { analyticsLocations: a } = (0, T.Ay)(h.A.GIFT_BUTTON),
        [c, d] = l.useState(!1),
        f = (0, p.A)(),
        g = (0, s.bG)([P.default], () => P.default.getCurrentUser()),
        C = null != g ? J.default.age(g.id) : 0,
        m = (0, F.R1)(t),
        A = (0, s.bG)([$.A], () => {
            let e = $.A.getMarketingComponentBySurface(o.oW.GIFT_ICON);
            return null == e ? null : e.surface;
        }),
        b = (0, s.bG)([$.A], () => {
            let e = $.A.getMarketingComponentBySurface(o.oW.GIFT_ICON_COACHMARK);
            return null == e ? null : e.surface;
        }),
        I = A?.gradient,
        R =
            null != I && null != I.colors && I.colors.length >= 2
                ? (0, N.K5)({ gradient: I.colors, angle: I.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        M = l.useMemo(() => {
            if (R?.background != null) return { "--custom-promotion-gradient": R.background };
        }, [R]),
        S =
            !(0, Z.uJ)(A?.boxAnimationUrl) ||
            !(0, Z.uJ)(A?.trinketAnimationUrl) ||
            !(0, Z.uJ)(A?.trinketRiveAnimationUrl),
        E = (0, s.bG)([$.A], () => $.A.getGiftPromotion()?.id),
        D = null != b && !n && !f && C >= z && null != E,
        [U, H] = (0, k.Cc)(D ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, E ?? ""),
        L = null != U,
        { giftingBadgeCoachmarkVariant: B, markGiftingBadgeCoachmarkAsDismissed: w } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, p.A)(),
                l = (0, _.Hv)({ location: n, enabled: t }),
                [a, r] = (0, k.kn)(null == l || i ? [] : [u.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != a ? l : null, markGiftingBadgeCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && !L }),
        { showGiftedSubscriptionsCoachmark: W, markGiftedSubscriptionsCoachmarkAsDismissed: Q } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, p.A)(),
                l = (0, j.u)({ location: `${n}${t ? "" : "-DISABLED"}` }),
                [a, r] = (0, k.kn)(t && l && !i ? [u.M.GIFTED_SUBSCRIPTIONS_DESKTOP_COACHMARK] : []);
            return { showGiftedSubscriptionsCoachmark: null != a, markGiftedSubscriptionsCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && null != m && !L && null == B }),
        q = !W && (c || L || null != B),
        {
            openGiftModal: Y,
            shouldShowWishlistModal: X,
            shouldShowGiftSelectionModal: en,
        } = (0, x.$)({
            giftRecipient: m,
            analyticsLocations: a,
            analyticsObject: {
                page: t.isPrivate() ? y.liQ.DM_CHANNEL : y.liQ.GUILD_CHANNEL,
                section: y.JJy.CHANNEL_TEXT_AREA,
                object: S ? y.ZSU.GIFTING_PROMOTION_BUTTON : y.ZSU.BUTTON_ICON,
                objectType: y.btD.GIFT,
            },
            wishlistAnalyticsObject: S
                ? {
                      page: t.isPrivate() ? y.liQ.DM_CHANNEL : y.liQ.GUILD_CHANNEL,
                      section: y.JJy.CHANNEL_TEXT_AREA,
                      object: y.ZSU.BUTTON_ICON,
                      objectType: y.btD.GIFT,
                  }
                : void 0,
            location: S ? "gift-promotion-button" : "gift-button",
        });
    if (n) return null;
    let et = (0, i.jsx)(ee, {
        giftIcon: A,
        hovered: q,
        isGenericGift: X || en,
        onClick: function () {
            (d(!1), H(G.i.TAKE_ACTION), w(G.i.TAKE_ACTION), W && Q(G.i.TAKE_ACTION), Y());
        },
    });
    return (0, i.jsx)("div", {
        className: r()(V.kL, { [V.DM]: q }),
        style: M,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: L
            ? (0, i.jsx)(v.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: Y,
                  markAsDismissed: H,
                  coachmarkConfig: b,
                  children: et,
              })
            : null != B
              ? (0, i.jsx)(K, { channel: t, variant: B, onComplete: () => d(!1), markAsDismissed: w, children: et })
              : W
                ? (0, i.jsx)(O, { giftRecipient: m, onComplete: () => d(!1), markAsDismissed: Q, children: et })
                : et,
    });
});
