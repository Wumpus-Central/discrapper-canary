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
var C = t(604121),
    g = t(597770),
    m = t(799226),
    A = t(653887),
    b = t(866665),
    h = t(942857),
    p = t(775602),
    I = t(793574),
    k = t(688810),
    T = t(263775),
    N = t(810498),
    j = t(547902),
    x = t(45052),
    v = t(620301),
    _ = t(40493),
    G = t(43105),
    y = t(652215),
    R = t(49999),
    S = t(50302),
    M = t(792996);
function O(e) {
    let { giftRecipient: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, k.Ay)(I.A.GIFTED_SUBSCRIPTIONS_COACHMARK),
        { openGiftModal: u } = (0, v.$)({
            giftRecipient: n,
            analyticsLocations: s,
            analyticsObject: { object: y.ZSU.BUTTON_CTA, objectType: y.btD.GIFT },
            location: "GiftedSubscriptionsCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(G.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: M.intl.string(S.default["3NxgUL"]),
                body: M.intl.string(S.default.IMRvdN),
                gradientColor: "nitro-pink",
                actions: [
                    {
                        text: M.intl.string(M.t.Ve9Ge6),
                        icon: g.GiftIcon,
                        onClick: function () {
                            (u(), t?.(), a(R.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(R.i.USER_DISMISS));
                },
            }),
        ],
    });
}
var E = t(70283),
    D = t(982240),
    U = t(100663),
    P = t(287809),
    F = t(427262),
    H = t(339514);
function B(e) {
    let { currentTier: n, giftCount: t, variant: a, onComplete: r, markAsDismissed: o, children: u } = e,
        c = l.useRef(null),
        d = (0, s.bG)([P.default], () => P.default.getCurrentUser()),
        f = (0, x.Se)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: c, children: u }),
            (0, i.jsx)(G.A, {
                targetElementRef: c,
                shouldShow: !0,
                position: "top",
                title: M.intl.format(H.default["a+jfuy"], { tierName: n.name ?? "" }),
                body:
                    "noCount" === a
                        ? M.intl.string(H.default["0N8fCf"])
                        : M.intl.formatToPlainString(H.default.QxRA6w, { giftCount: t ?? 0 }),
                graphic: null != f ? { type: "image", src: f } : void 0,
                actions: [
                    {
                        text: M.intl.string(M.t.RzWDqY),
                        onClick: () => {
                            (null != d && (0, U.openUserProfileModal)({ userId: d.id }), r?.(), o(R.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (r?.(), o(R.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function L(e) {
    let { channel: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, k.Ay)(I.A.GIFTING_BADGE_COACHMARK),
        u = (0, F.R1)(n),
        { openGiftModal: c } = (0, v.$)({
            giftRecipient: u,
            analyticsLocations: s,
            analyticsObject: { object: y.ZSU.BUTTON_CTA, objectType: y.btD.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(G.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: M.intl.string(H.default.Q2RQka),
                body: M.intl.string(H.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: M.intl.string(H.default.DZnomS),
                        icon: g.GiftIcon,
                        onClick: () => {
                            (c(), t?.(), a(R.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(R.i.USER_DISMISS));
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
        ? (0, i.jsx)(B, { currentTier: o, giftCount: u, variant: t, onComplete: l, markAsDismissed: a, children: r })
        : (0, i.jsx)(L, { channel: n, onComplete: l, markAsDismissed: a, children: r });
}
var w = t(412260),
    $ = t(927813),
    J = t(661191),
    Z = t(240248),
    W = t(243185),
    V = t(621255),
    z = t(495088);
let Q = $.A.Millis.DAYS_30;
function q(e) {
    let { boxAnimationUrl: n, hovered: t, onClick: a } = e,
        r = l.useCallback(() => Promise.resolve({ default: n }), [n]);
    return (0, i.jsx)(W.A, {
        className: z.x6,
        "aria-label": M.intl.string(M.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: a,
        children: (0, i.jsx)("div", {
            className: V.zc,
            children: t ? (0, i.jsx)(C.a, { className: V.Hl, importData: r }) : (0, i.jsx)(g.GiftIcon, {}),
        }),
    });
}
function X(e) {
    let { trinketAnimationUrl: n, trinketRiveAnimationUrl: t, hovered: l } = e,
        a = (0, s.bG)([p.Ay], () => p.Ay.useReducedMotion),
        r = !(0, Z.uJ)(t);
    return ((0, m.CE)(r ? t : null), !l || a)
        ? null
        : r
          ? (0, i.jsx)(A._, { className: V.rY, src: t, fit: "contain" })
          : (0, Z.uJ)(n)
            ? null
            : (0, i.jsx)("img", { className: V.rY, src: n, alt: "" });
}
function Y(e) {
    let { trinketAnimationUrl: n, trinketRiveAnimationUrl: t, hovered: l, onClick: a } = e,
        { Component: r, events: o, play: s } = f();
    return (0, i.jsxs)(W.A, {
        className: z.x6,
        "aria-label": M.intl.string(M.t.Z1RnTk),
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
        { Component: r, events: o, play: s } = f(),
        u = n?.boxAnimationUrl;
    return (0, Z.uJ)(u)
        ? null == n || ((0, Z.uJ)(n.trinketRiveAnimationUrl) && (0, Z.uJ)(n.trinketAnimationUrl))
            ? (0, i.jsx)(b.m, {
                  ariaHidden: l,
                  text: M.intl.string(l ? M.t.TW4JV0 : M.t.sWtWDX),
                  children: (0, i.jsx)(W.A, {
                      className: z.x6,
                      isActive: !1,
                      "aria-label": M.intl.string(l ? M.t.TW4JV0 : M.t.Z1RnTk),
                      "aria-haspopup": "dialog",
                      onClick: () => {
                          (a(), s());
                      },
                      ...o,
                      children: (0, i.jsx)(r, { size: "refresh_sm", color: "currentColor" }),
                  }),
              })
            : (0, i.jsx)(Y, {
                  trinketAnimationUrl: n.trinketAnimationUrl,
                  trinketRiveAnimationUrl: n.trinketRiveAnimationUrl,
                  hovered: t,
                  onClick: a,
              })
        : (0, i.jsx)(q, { boxAnimationUrl: u, hovered: t, onClick: a });
}
let en = l.memo(function (e) {
    let { disabled: n, channel: t } = e,
        { analyticsLocations: a } = (0, k.Ay)(I.A.GIFT_BUTTON),
        [c, d] = l.useState(!1),
        f = (0, h.A)(),
        C = (0, s.bG)([P.default], () => P.default.getCurrentUser()),
        g = null != C ? J.default.age(C.id) : 0,
        m = (0, F.R1)(t),
        A = (0, s.bG)([w.A], () => {
            let e = w.A.getMarketingComponentBySurface(o.oW.GIFT_ICON);
            return null == e ? null : e.surface;
        }),
        b = (0, s.bG)([w.A], () => {
            let e = w.A.getMarketingComponentBySurface(o.oW.GIFT_ICON_COACHMARK);
            return null == e ? null : e.surface;
        }),
        p = A?.gradient,
        G =
            null != p && null != p.colors && p.colors.length >= 2
                ? (0, N.K5)({ gradient: p.colors, angle: p.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        S = l.useMemo(() => {
            if (G?.background != null) return { "--custom-promotion-gradient": G.background };
        }, [G]),
        M =
            !(0, Z.uJ)(A?.boxAnimationUrl) ||
            !(0, Z.uJ)(A?.trinketAnimationUrl) ||
            !(0, Z.uJ)(A?.trinketRiveAnimationUrl),
        E = (0, s.bG)([w.A], () => w.A.getGiftPromotion()?.id),
        D = null != b && !n && !f && g >= Q && null != E,
        [U, H] = (0, T.Cc)(D ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, E ?? ""),
        B = null != U,
        { giftingBadgeCoachmarkVariant: L, markGiftingBadgeCoachmarkAsDismissed: $ } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, h.A)(),
                l = (0, x.Hv)({ location: n, enabled: t }),
                [a, r] = (0, T.kn)(null == l || i ? [] : [u.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != a ? l : null, markGiftingBadgeCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && !B }),
        { showGiftedSubscriptionsCoachmark: W, markGiftedSubscriptionsCoachmarkAsDismissed: z } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, h.A)(),
                l = (0, j.u)({ location: `${n}${t ? "" : "-DISABLED"}` }),
                [a, r] = (0, T.kn)(t && l && !i ? [u.M.GIFTED_SUBSCRIPTIONS_DESKTOP_COACHMARK] : []);
            return { showGiftedSubscriptionsCoachmark: null != a, markGiftedSubscriptionsCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && null != m && !B && null == L }),
        q = !W && (c || B || null != L),
        {
            openGiftModal: X,
            shouldShowWishlistModal: Y,
            shouldShowGiftSelectionModal: en,
        } = (0, v.$)({
            giftRecipient: m,
            analyticsLocations: a,
            analyticsObject: {
                page: t.isPrivate() ? y.liQ.DM_CHANNEL : y.liQ.GUILD_CHANNEL,
                section: y.JJy.CHANNEL_TEXT_AREA,
                object: M ? y.ZSU.GIFTING_PROMOTION_BUTTON : y.ZSU.BUTTON_ICON,
                objectType: y.btD.GIFT,
            },
            wishlistAnalyticsObject: M
                ? {
                      page: t.isPrivate() ? y.liQ.DM_CHANNEL : y.liQ.GUILD_CHANNEL,
                      section: y.JJy.CHANNEL_TEXT_AREA,
                      object: y.ZSU.BUTTON_ICON,
                      objectType: y.btD.GIFT,
                  }
                : void 0,
            location: M ? "gift-promotion-button" : "gift-button",
        });
    if (n) return null;
    let et = (0, i.jsx)(ee, {
        giftIcon: A,
        hovered: q,
        isGenericGift: Y || en,
        onClick: function () {
            (d(!1), H(R.i.TAKE_ACTION), $(R.i.TAKE_ACTION), W && z(R.i.TAKE_ACTION), X());
        },
    });
    return (0, i.jsx)("div", {
        className: r()(V.kL, { [V.DM]: q }),
        style: S,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: B
            ? (0, i.jsx)(_.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: X,
                  markAsDismissed: H,
                  coachmarkConfig: b,
                  children: et,
              })
            : null != L
              ? (0, i.jsx)(K, { channel: t, variant: L, onComplete: () => d(!1), markAsDismissed: $, children: et })
              : W
                ? (0, i.jsx)(O, { giftRecipient: m, onComplete: () => d(!1), markAsDismissed: z, children: et })
                : et,
    });
});
