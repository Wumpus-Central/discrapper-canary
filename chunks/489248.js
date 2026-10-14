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
var C = t(604121),
    g = t(597770),
    m = t(866665),
    A = t(942857),
    p = t(775602),
    b = t(793574),
    T = t(688810),
    I = t(131607),
    h = t(810498),
    N = t(547902),
    j = t(859492),
    k = t(5755),
    y = t(40493),
    _ = t(43105),
    x = t(652215),
    R = t(49999),
    v = t(398948),
    O = t(660183);
function G(e) {
    let { giftRecipient: n, onComplete: t, markAsDismissed: a, children: o } = e,
        r = l.useRef(null),
        { analyticsLocations: s } = (0, T.Ay)(b.A.GIFTED_SUBSCRIPTIONS_COACHMARK),
        { openGiftModal: c } = (0, k.$)({
            giftRecipient: n,
            analyticsLocations: s,
            analyticsObject: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.GIFT },
            location: "GiftedSubscriptionsCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: r, children: o }),
            (0, i.jsx)(_.A, {
                targetElementRef: r,
                shouldShow: !0,
                position: "top",
                title: O.intl.string(v.default.u0brrv),
                body: O.intl.string(v.default["5smZHx"]),
                gradientColor: "nitro-pink",
                actions: [
                    {
                        text: O.intl.string(v.default["9XpK+g"]),
                        icon: g.GiftIcon,
                        onClick: function () {
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
var M = t(70283),
    S = t(982240),
    E = t(402860),
    D = t(287809),
    P = t(427262),
    U = t(556427);
function F(e) {
    let { currentTier: n, giftCount: t, variant: a, onComplete: o, markAsDismissed: r, children: c } = e,
        u = l.useRef(null),
        d = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        f = (0, j.b9)("GiftingBadgesCoachmarkPopout"),
        C = (0, j.Se)(n, f);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: u, children: c }),
            (0, i.jsx)(_.A, {
                targetElementRef: u,
                shouldShow: !0,
                position: "top",
                title: O.intl.format(U.default["a+jfuy"], { tierName: n.name ?? "" }),
                body:
                    "noCount" === a
                        ? O.intl.string(U.default["0N8fCf"])
                        : O.intl.formatToPlainString(U.default.QxRA6w, { giftCount: t ?? 0 }),
                graphic: null != C ? { type: "image", src: C } : void 0,
                actions: [
                    {
                        text: O.intl.string(O.t.RzWDqY),
                        onClick: () => {
                            (null != d && (0, E.openUserProfileModal)({ userId: d.id }), o?.(), r(R.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (o?.(), r(R.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function H(e) {
    let { channel: n, onComplete: t, markAsDismissed: a, children: o } = e,
        r = l.useRef(null),
        { analyticsLocations: s } = (0, T.Ay)(b.A.GIFTING_BADGE_COACHMARK),
        c = (0, P.R1)(n),
        { openGiftModal: u } = (0, k.$)({
            giftRecipient: c,
            analyticsLocations: s,
            analyticsObject: { object: x.ZSU.BUTTON_CTA, objectType: x.AnalyticsObjectTypes.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: r, children: o }),
            (0, i.jsx)(_.A, {
                targetElementRef: r,
                shouldShow: !0,
                position: "top",
                title: O.intl.string(U.default.Q2RQka),
                body: O.intl.string(U.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: O.intl.string(U.default.DZnomS),
                        icon: g.GiftIcon,
                        onClick: () => {
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
function K(e) {
    let { channel: n, variant: t, onComplete: l, markAsDismissed: a, children: o } = e,
        { currentTier: r, giftCount: c } = (0, s.cf)([S.Ay], () => ({
            currentTier: S.Ay.getCurrentTier(M.$.GIFTING),
            giftCount: S.Ay.getSingleRequirementProgress(M.$.GIFTING)?.current,
        }));
    return null != r
        ? (0, i.jsx)(F, { currentTier: r, giftCount: c, variant: t, onComplete: l, markAsDismissed: a, children: o })
        : (0, i.jsx)(H, { channel: n, onComplete: l, markAsDismissed: a, children: o });
}
var L = t(412260),
    B = t(927813),
    w = t(935208),
    $ = t(240248),
    Z = t(767089),
    J = t(621255),
    z = t(495088);
let Q = B.A.Millis.DAYS_30;
function V(e) {
    let { boxAnimationUrl: n, hovered: t, onClick: a } = e,
        o = l.useCallback(() => Promise.resolve({ default: n }), [n]);
    return (0, i.jsx)(Z.A, {
        className: z.x6,
        "aria-label": O.intl.string(O.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: a,
        children: (0, i.jsx)("div", {
            className: J.zc,
            children: t ? (0, i.jsx)(C.a, { className: J.Hl, importData: o }) : (0, i.jsx)(g.GiftIcon, {}),
        }),
    });
}
function W(e) {
    let { trinketAnimationUrl: n, hovered: t, onClick: l } = e,
        { Component: a, events: o, play: r } = f(),
        c = (0, s.bG)([p.Ay], () => p.Ay.useReducedMotion);
    return (0, i.jsxs)(Z.A, {
        className: z.x6,
        "aria-label": O.intl.string(O.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            (r(), l());
        },
        ...o,
        children: [
            (0, i.jsx)("div", { className: J.zc, children: (0, i.jsx)(a, { className: J.is, color: "currentColor" }) }),
            t && !c && (0, i.jsx)("img", { className: J.rY, src: n, alt: "" }),
        ],
    });
}
function q(e) {
    let { giftIcon: n, hovered: t, isGenericGift: l, onClick: a } = e,
        { Component: o, events: r, play: s } = f(),
        c = n?.boxAnimationUrl;
    if (!(0, $.uJ)(c)) return (0, i.jsx)(V, { boxAnimationUrl: c, hovered: t, onClick: a });
    let u = n?.trinketAnimationUrl;
    return (0, $.uJ)(u)
        ? (0, i.jsx)(m.m, {
              ariaHidden: l,
              text: O.intl.string(l ? O.t.TW4JV0 : O.t.sWtWDX),
              children: (0, i.jsx)(Z.A, {
                  className: z.x6,
                  isActive: !1,
                  "aria-label": O.intl.string(l ? O.t.TW4JV0 : O.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      (a(), s());
                  },
                  ...r,
                  children: (0, i.jsx)(o, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : (0, i.jsx)(W, { trinketAnimationUrl: u, hovered: t, onClick: a });
}
let X = l.memo(function (e) {
    let { disabled: n, channel: t } = e,
        { analyticsLocations: a } = (0, T.Ay)(b.A.GIFT_BUTTON),
        [u, d] = l.useState(!1),
        f = (0, A.A)(),
        C = (0, s.bG)([D.default], () => D.default.getCurrentUser()),
        g = null != C ? w.default.age(C.id) : 0,
        m = (0, P.R1)(t),
        p = (0, s.bG)([L.A], () => {
            let e = L.A.getMarketingComponentByType(r.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        _ = (0, s.bG)([L.A], () => {
            let e = L.A.getMarketingComponentByType(r.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        v = p?.gradient,
        O =
            null != v && null != v.colors && v.colors.length >= 2
                ? (0, h.K5)({ gradient: v.colors, angle: v.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        M = l.useMemo(() => {
            if (O?.background != null) return { "--custom-promotion-gradient": O.background };
        }, [O]),
        S = !(0, $.uJ)(p?.boxAnimationUrl) || !(0, $.uJ)(p?.trinketAnimationUrl),
        E = (0, s.bG)([L.A], () => L.A.getGiftPromotion()?.id),
        U = null != _ && !n && !f && g >= Q && null != E,
        [F, H] = (0, I.Cc)(U ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, E ?? ""),
        B = null != F,
        { giftingBadgeCoachmarkVariant: Z, markGiftingBadgeCoachmarkAsDismissed: z } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, A.A)(),
                l = (0, j.Hv)({ platform: "web", location: n, enabled: t }),
                [a, o] = (0, I.kn)(null == l || i ? [] : [c.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != a ? l : null, markGiftingBadgeCoachmarkAsDismissed: o };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && !B }),
        { showGiftedSubscriptionsCoachmark: V, markGiftedSubscriptionsCoachmarkAsDismissed: W } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, A.A)(),
                l = (0, N.u)({ location: `${n}${t ? "" : "-DISABLED"}` }),
                [a, o] = (0, I.kn)(t && l && !i ? [c.M.GIFTED_SUBSCRIPTIONS_DESKTOP_COACHMARK] : []);
            return { showGiftedSubscriptionsCoachmark: null != a, markGiftedSubscriptionsCoachmarkAsDismissed: o };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && null != m && !B && null == Z }),
        X = !V && (u || B || null != Z),
        {
            openGiftModal: Y,
            shouldShowWishlistModal: ee,
            shouldShowGiftSelectionModal: en,
        } = (0, k.$)({
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
            (d(!1), H(R.i.TAKE_ACTION), z(R.i.TAKE_ACTION), V && W(R.i.TAKE_ACTION), Y());
        },
    });
    return (0, i.jsx)("div", {
        className: o()(J.kL, { [J.DM]: X }),
        style: M,
        onMouseEnter: () => {
            u || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: B
            ? (0, i.jsx)(y.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: Y,
                  markAsDismissed: H,
                  coachmarkConfig: _,
                  children: et,
              })
            : null != Z
              ? (0, i.jsx)(K, { channel: t, variant: Z, onComplete: () => d(!1), markAsDismissed: z, children: et })
              : V
                ? (0, i.jsx)(G, { giftRecipient: m, onComplete: () => d(!1), markAsDismissed: W, children: et })
                : et,
    });
});
