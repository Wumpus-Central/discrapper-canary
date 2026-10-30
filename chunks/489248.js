t.d(n, { A: () => X });
var i = t(477900),
    l = t(582128),
    a = t(503698),
    o = t.n(a),
    r = t(877624),
    s = t(17928),
    c = t(554146),
    u = t(744682);
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
                (0, i.jsx)(u.P, { ...n, src: () => t.e("556591").then(t.t.bind(t, 640114, 19)), ref: e, markers: d }),
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
    p = t(775602),
    b = t(793574),
    I = t(688810),
    T = t(131607),
    h = t(810498),
    N = t(547902),
    k = t(139486),
    j = t(948518),
    _ = t(40493),
    y = t(43105),
    x = t(652215),
    G = t(49999),
    v = t(843170),
    R = t(105292);
function O(e) {
    let { giftRecipient: n, onComplete: t, markAsDismissed: a, children: o } = e,
        r = l.useRef(null),
        { analyticsLocations: s } = (0, I.Ay)(b.A.GIFTED_SUBSCRIPTIONS_COACHMARK),
        { openGiftModal: c } = (0, j.$)({
            giftRecipient: n,
            analyticsLocations: s,
            analyticsObject: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.GIFT },
            location: "GiftedSubscriptionsCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: r, children: o }),
            (0, i.jsx)(y.A, {
                targetElementRef: r,
                shouldShow: !0,
                position: "top",
                title: R.intl.string(v.default["3NxgUL"]),
                body: R.intl.string(v.default.IMRvdN),
                gradientColor: "nitro-pink",
                actions: [
                    {
                        text: R.intl.string(R.t.Ve9Ge6),
                        icon: C.GiftIcon,
                        onClick: function () {
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
var M = t(70283),
    S = t(982240),
    E = t(402860),
    D = t(287809),
    U = t(427262),
    P = t(889158);
function F(e) {
    let { currentTier: n, giftCount: t, variant: a, onComplete: o, markAsDismissed: r, children: c } = e,
        u = l.useRef(null),
        d = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        f = (0, k.Se)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: u, children: c }),
            (0, i.jsx)(y.A, {
                targetElementRef: u,
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
                            (null != d && (0, E.openUserProfileModal)({ userId: d.id }), o?.(), r(G.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (o?.(), r(G.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function H(e) {
    let { channel: n, onComplete: t, markAsDismissed: a, children: o } = e,
        r = l.useRef(null),
        { analyticsLocations: s } = (0, I.Ay)(b.A.GIFTING_BADGE_COACHMARK),
        c = (0, U.R1)(n),
        { openGiftModal: u } = (0, j.$)({
            giftRecipient: c,
            analyticsLocations: s,
            analyticsObject: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: r, children: o }),
            (0, i.jsx)(y.A, {
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
function L(e) {
    let { channel: n, variant: t, onComplete: l, markAsDismissed: a, children: o } = e,
        { currentTier: r, giftCount: c } = (0, s.cf)([S.Ay], () => ({
            currentTier: S.Ay.getCurrentTier(M.$.GIFTING),
            giftCount: S.Ay.getSingleRequirementProgress(M.$.GIFTING)?.current,
        }));
    return null != r
        ? (0, i.jsx)(F, { currentTier: r, giftCount: c, variant: t, onComplete: l, markAsDismissed: a, children: o })
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
        c = (0, s.bG)([p.Ay], () => p.Ay.useReducedMotion);
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
            t && !c && (0, i.jsx)("img", { className: Z.rY, src: n, alt: "" }),
        ],
    });
}
function q(e) {
    let { giftIcon: n, hovered: t, isGenericGift: l, onClick: a } = e,
        { Component: o, events: r, play: s } = f(),
        c = n?.boxAnimationUrl;
    if (!(0, w.uJ)(c)) return (0, i.jsx)(z, { boxAnimationUrl: c, hovered: t, onClick: a });
    let u = n?.trinketAnimationUrl;
    return (0, w.uJ)(u)
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
        : (0, i.jsx)(Q, { trinketAnimationUrl: u, hovered: t, onClick: a });
}
let X = l.memo(function (e) {
    let { disabled: n, channel: t } = e,
        { analyticsLocations: a } = (0, I.Ay)(b.A.GIFT_BUTTON),
        [u, d] = l.useState(!1),
        f = (0, A.A)(),
        g = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        C = null != g ? K.default.age(g.id) : 0,
        m = (0, U.R1)(t),
        p = (0, s.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(r.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        y = (0, s.bG)([B.A], () => {
            let e = B.A.getMarketingComponentByType(r.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        v = p?.gradient,
        R =
            null != v && null != v.colors && v.colors.length >= 2
                ? (0, h.K5)({ gradient: v.colors, angle: v.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        M = l.useMemo(() => {
            if (R?.background != null) return { "--custom-promotion-gradient": R.background };
        }, [R]),
        S = !(0, w.uJ)(p?.boxAnimationUrl) || !(0, w.uJ)(p?.trinketAnimationUrl),
        E = (0, s.bG)([B.A], () => B.A.getGiftPromotion()?.id),
        P = null != y && !n && !f && C >= W && null != E,
        [F, H] = (0, T.Cc)(P ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, E ?? ""),
        $ = null != F,
        { giftingBadgeCoachmarkVariant: J, markGiftingBadgeCoachmarkAsDismissed: V } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, A.A)(),
                l = (0, k.Hv)({ platform: "web", location: n, enabled: t }),
                [a, o] = (0, T.kn)(null == l || i ? [] : [c.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != a ? l : null, markGiftingBadgeCoachmarkAsDismissed: o };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && !$ }),
        { showGiftedSubscriptionsCoachmark: z, markGiftedSubscriptionsCoachmarkAsDismissed: Q } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, A.A)(),
                l = (0, N.u)({ location: `${n}${t ? "" : "-DISABLED"}` }),
                [a, o] = (0, T.kn)(t && l && !i ? [c.M.GIFTED_SUBSCRIPTIONS_DESKTOP_COACHMARK] : []);
            return { showGiftedSubscriptionsCoachmark: null != a, markGiftedSubscriptionsCoachmarkAsDismissed: o };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && null != m && !$ && null == J }),
        X = !z && (u || $ || null != J),
        {
            openGiftModal: Y,
            shouldShowWishlistModal: ee,
            shouldShowGiftSelectionModal: en,
        } = (0, j.$)({
            giftRecipient: m,
            analyticsLocations: a,
            analyticsObject: {
                page: t.isPrivate() ? x.liQ.DM_CHANNEL : x.liQ.GUILD_CHANNEL,
                section: x.JJy.CHANNEL_TEXT_AREA,
                object: S ? x.ZSU.GIFTING_PROMOTION_BUTTON : x.ZSU.BUTTON_ICON,
                objectType: x.AnalyticsObjectTypes.GIFT,
            },
            wishlistAnalyticsObject: S
                ? {
                      page: t.isPrivate() ? x.liQ.DM_CHANNEL : x.liQ.GUILD_CHANNEL,
                      section: x.JJy.CHANNEL_TEXT_AREA,
                      object: x.ZSU.BUTTON_ICON,
                      objectType: x.AnalyticsObjectTypes.GIFT,
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
            (d(!1), H(G.i.TAKE_ACTION), V(G.i.TAKE_ACTION), z && Q(G.i.TAKE_ACTION), Y());
        },
    });
    return (0, i.jsx)("div", {
        className: o()(Z.kL, { [Z.DM]: X }),
        style: M,
        onMouseEnter: () => {
            u || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: $
            ? (0, i.jsx)(_.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: Y,
                  markAsDismissed: H,
                  coachmarkConfig: y,
                  children: et,
              })
            : null != J
              ? (0, i.jsx)(L, { channel: t, variant: J, onComplete: () => d(!1), markAsDismissed: V, children: et })
              : z
                ? (0, i.jsx)(O, { giftRecipient: m, onComplete: () => d(!1), markAsDismissed: Q, children: et })
                : et,
    });
});
