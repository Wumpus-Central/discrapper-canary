t.d(n, { A: () => X });
var i = t(477900),
    l = t(582128),
    a = t(503698),
    o = t.n(a),
    r = t(877624),
    s = t(17928),
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
        o = l.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        r = l.useCallback(
            (n) =>
                (0, i.jsx)(c.P, { ...n, src: () => t.e("556591").then(t.t.bind(t, 640114, 19)), ref: e, markers: d }),
            [],
        );
    return {
        events: { onMouseEnter: a, onMouseLeave: o },
        play: n,
        getDuration: l.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: l.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: r,
    };
}
var g = t(604121),
    C = t(597770),
    m = t(866665),
    A = t(942857),
    b = t(775602),
    p = t(793574),
    I = t(688810),
    h = t(131607),
    T = t(810498),
    N = t(547902),
    k = t(139486),
    _ = t(948518),
    j = t(40493),
    x = t(43105),
    G = t(652215),
    v = t(49999),
    y = t(843170),
    R = t(105292);
function M(e) {
    let { giftRecipient: n, onComplete: t, markAsDismissed: a, children: o } = e,
        r = l.useRef(null),
        { analyticsLocations: s } = (0, I.Ay)(p.A.GIFTED_SUBSCRIPTIONS_COACHMARK),
        { openGiftModal: u } = (0, _.$)({
            giftRecipient: n,
            analyticsLocations: s,
            analyticsObject: { object: G.ZSU.BUTTON_CTA, objectType: G.btD.GIFT },
            location: "GiftedSubscriptionsCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: r, children: o }),
            (0, i.jsx)(x.A, {
                targetElementRef: r,
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
    E = t(402860),
    D = t(287809),
    U = t(427262),
    P = t(889158);
function F(e) {
    let { currentTier: n, giftCount: t, variant: a, onComplete: o, markAsDismissed: r, children: u } = e,
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
                            (null != d && (0, E.openUserProfileModal)({ userId: d.id }), o?.(), r(v.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (o?.(), r(v.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function H(e) {
    let { channel: n, onComplete: t, markAsDismissed: a, children: o } = e,
        r = l.useRef(null),
        { analyticsLocations: s } = (0, I.Ay)(p.A.GIFTING_BADGE_COACHMARK),
        u = (0, U.R1)(n),
        { openGiftModal: c } = (0, _.$)({
            giftRecipient: u,
            analyticsLocations: s,
            analyticsObject: { object: G.ZSU.BUTTON_CTA, objectType: G.btD.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: r, children: o }),
            (0, i.jsx)(x.A, {
                targetElementRef: r,
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
    let { channel: n, variant: t, onComplete: l, markAsDismissed: a, children: o } = e,
        { currentTier: r, giftCount: u } = (0, s.cf)([S.Ay], () => ({
            currentTier: S.Ay.getCurrentTier(O.$.GIFTING),
            giftCount: S.Ay.getSingleRequirementProgress(O.$.GIFTING)?.current,
        }));
    return null != r
        ? (0, i.jsx)(F, { currentTier: r, giftCount: u, variant: t, onComplete: l, markAsDismissed: a, children: o })
        : (0, i.jsx)(H, { channel: n, onComplete: l, markAsDismissed: a, children: o });
}
var B = t(412260),
    $ = t(927813),
    K = t(935208),
    w = t(240248),
    J = t(767089),
    Z = t(621255),
    V = t(495088);
let W = $.A.Millis.DAYS_30;
function z(e) {
    let { boxAnimationUrl: n, hovered: t, onClick: a } = e,
        o = l.useCallback(() => Promise.resolve({ default: n }), [n]);
    return (0, i.jsx)(J.A, {
        className: V.x6,
        "aria-label": R.intl.string(R.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: a,
        children: (0, i.jsx)("div", {
            className: Z.zc,
            children: t ? (0, i.jsx)(g.a, { className: Z.Hl, importData: o }) : (0, i.jsx)(C.GiftIcon, {}),
        }),
    });
}
function Q(e) {
    let { trinketAnimationUrl: n, hovered: t, onClick: l } = e,
        { Component: a, events: o, play: r } = f(),
        u = (0, s.bG)([b.Ay], () => b.Ay.useReducedMotion);
    return (0, i.jsxs)(J.A, {
        className: V.x6,
        "aria-label": R.intl.string(R.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            (r(), l());
        },
        ...o,
        children: [
            (0, i.jsx)("div", { className: Z.zc, children: (0, i.jsx)(a, { className: Z.is, color: "currentColor" }) }),
            t && !u && (0, i.jsx)("img", { className: Z.rY, src: n, alt: "" }),
        ],
    });
}
function q(e) {
    let { giftIcon: n, hovered: t, isGenericGift: l, onClick: a } = e,
        { Component: o, events: r, play: s } = f(),
        u = n?.boxAnimationUrl;
    if (!(0, w.uJ)(u)) return (0, i.jsx)(z, { boxAnimationUrl: u, hovered: t, onClick: a });
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
                  ...r,
                  children: (0, i.jsx)(o, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : (0, i.jsx)(Q, { trinketAnimationUrl: c, hovered: t, onClick: a });
}
let X = l.memo(function (e) {
    let { disabled: n, channel: t } = e,
        { analyticsLocations: a } = (0, I.Ay)(p.A.GIFT_BUTTON),
        [c, d] = l.useState(!1),
        f = (0, A.A)(),
        g = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        C = null != g ? K.default.age(g.id) : 0,
        m = (0, U.R1)(t),
        b = (0, s.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(r.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        x = (0, s.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(r.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        y = b?.gradient,
        R =
            null != y && null != y.colors && y.colors.length >= 2
                ? (0, T.K5)({ gradient: y.colors, angle: y.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        O = l.useMemo(() => {
            if (R?.background != null) return { "--custom-promotion-gradient": R.background };
        }, [R]),
        S = !(0, w.uJ)(b?.boxAnimationUrl) || !(0, w.uJ)(b?.trinketAnimationUrl),
        E = (0, s.bG)([B.A], () => B.A.getGiftPromotion()?.id),
        P = null != x && !n && !f && C >= W && null != E,
        [F, H] = (0, h.Cc)(P ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, E ?? ""),
        $ = null != F,
        { giftingBadgeCoachmarkVariant: J, markGiftingBadgeCoachmarkAsDismissed: V } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, A.A)(),
                l = (0, k.Hv)({ platform: "web", location: n, enabled: t }),
                [a, o] = (0, h.kn)(null == l || i ? [] : [u.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != a ? l : null, markGiftingBadgeCoachmarkAsDismissed: o };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && !$ }),
        { showGiftedSubscriptionsCoachmark: z, markGiftedSubscriptionsCoachmarkAsDismissed: Q } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, A.A)(),
                l = (0, N.u)({ location: `${n}${t ? "" : "-DISABLED"}` }),
                [a, o] = (0, h.kn)(t && l && !i ? [u.M.GIFTED_SUBSCRIPTIONS_DESKTOP_COACHMARK] : []);
            return { showGiftedSubscriptionsCoachmark: null != a, markGiftedSubscriptionsCoachmarkAsDismissed: o };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && null != m && !$ && null == J }),
        X = !z && (c || $ || null != J),
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
        giftIcon: b,
        hovered: X,
        isGenericGift: ee || en,
        onClick: function () {
            (d(!1), H(v.i.TAKE_ACTION), V(v.i.TAKE_ACTION), z && Q(v.i.TAKE_ACTION), Y());
        },
    });
    return (0, i.jsx)("div", {
        className: o()(Z.kL, { [Z.DM]: X }),
        style: O,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: $
            ? (0, i.jsx)(j.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: Y,
                  markAsDismissed: H,
                  coachmarkConfig: x,
                  children: et,
              })
            : null != J
              ? (0, i.jsx)(L, { channel: t, variant: J, onComplete: () => d(!1), markAsDismissed: V, children: et })
              : z
                ? (0, i.jsx)(M, { giftRecipient: m, onComplete: () => d(!1), markAsDismissed: Q, children: et })
                : et,
    });
});
