t.d(n, { A: () => V });
var i = t(477900),
    l = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(877624),
    s = t(17928),
    c = t(554146),
    u = t(744682);
let d = { all: { name: "all", start: 0, duration: 66 } };
function g() {
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
            (n) =>
                (0, i.jsx)(u.P, { ...n, src: () => t.e("556591").then(t.t.bind(t, 640114, 19)), ref: e, markers: d }),
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
    f = t(597770),
    m = t(866665),
    p = t(942857),
    A = t(775602),
    b = t(793574),
    h = t(688810),
    I = t(131607),
    T = t(810498),
    N = t(859492),
    k = t(5755),
    j = t(40493),
    x = t(70283),
    y = t(43105),
    v = t(982240),
    _ = t(402860),
    R = t(287809),
    O = t(427262),
    G = t(652215),
    M = t(49999),
    E = t(556427),
    S = t(375708);
function D(e) {
    let { currentTier: n, giftCount: t, variant: a, onComplete: r, markAsDismissed: o, children: c } = e,
        u = l.useRef(null),
        d = (0, s.bG)([R.default], () => R.default.getCurrentUser()),
        g = (0, N.b9)("GiftingBadgesCoachmarkPopout"),
        C = (0, N.Se)(n, g);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: u, children: c }),
            (0, i.jsx)(y.A, {
                targetElementRef: u,
                shouldShow: !0,
                position: "top",
                title: S.intl.format(E.default["a+jfuy"], { tierName: n.name ?? "" }),
                body:
                    "noCount" === a
                        ? S.intl.string(E.default["0N8fCf"])
                        : S.intl.formatToPlainString(E.default.QxRA6w, { giftCount: t ?? 0 }),
                graphic: null != C ? { type: "image", src: C } : void 0,
                actions: [
                    {
                        text: S.intl.string(S.t.RzWDqY),
                        onClick: () => {
                            (null != d && (0, _.openUserProfileModal)({ userId: d.id }), r?.(), o(M.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (r?.(), o(M.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function P(e) {
    let { channel: n, onComplete: t, markAsDismissed: a, children: r } = e,
        o = l.useRef(null),
        { analyticsLocations: s } = (0, h.Ay)(b.A.GIFTING_BADGE_COACHMARK),
        c = (0, O.R1)(n),
        { openGiftModal: u } = (0, k.$)({
            giftRecipient: c,
            analyticsLocations: s,
            analyticsObject: { object: G.ZSU.BUTTON_CTA, objectType: G.AnalyticsObjectTypes.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: r }),
            (0, i.jsx)(y.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: S.intl.string(E.default.Q2RQka),
                body: S.intl.string(E.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: S.intl.string(E.default.DZnomS),
                        icon: f.GiftIcon,
                        onClick: () => {
                            (u(), t?.(), a(M.i.TAKE_ACTION));
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    (t?.(), a(M.i.USER_DISMISS));
                },
            }),
        ],
    });
}
function U(e) {
    let { channel: n, variant: t, onComplete: l, markAsDismissed: a, children: r } = e,
        { currentTier: o, giftCount: c } = (0, s.cf)([v.Ay], () => ({
            currentTier: v.Ay.getCurrentTier(x.$.GIFTING),
            giftCount: v.Ay.getSingleRequirementProgress(x.$.GIFTING)?.current,
        }));
    return null != o
        ? (0, i.jsx)(D, { currentTier: o, giftCount: c, variant: t, onComplete: l, markAsDismissed: a, children: r })
        : (0, i.jsx)(P, { channel: n, onComplete: l, markAsDismissed: a, children: r });
}
var F = t(412260),
    H = t(927813),
    L = t(935208),
    K = t(240248),
    B = t(767089),
    w = t(621255),
    $ = t(495088);
let J = H.A.Millis.DAYS_30;
function Z(e) {
    let { boxAnimationUrl: n, hovered: t, onClick: a } = e,
        r = l.useCallback(() => Promise.resolve({ default: n }), [n]);
    return (0, i.jsx)(B.A, {
        className: $.x6,
        "aria-label": S.intl.string(S.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: a,
        children: (0, i.jsx)("div", {
            className: w.zc,
            children: t ? (0, i.jsx)(C.a, { className: w.Hl, importData: r }) : (0, i.jsx)(f.GiftIcon, {}),
        }),
    });
}
function z(e) {
    let { trinketAnimationUrl: n, hovered: t, onClick: l } = e,
        { Component: a, events: r, play: o } = g(),
        c = (0, s.bG)([A.Ay], () => A.Ay.useReducedMotion);
    return (0, i.jsxs)(B.A, {
        className: $.x6,
        "aria-label": S.intl.string(S.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            (o(), l());
        },
        ...r,
        children: [
            (0, i.jsx)("div", { className: w.zc, children: (0, i.jsx)(a, { className: w.is, color: "currentColor" }) }),
            t && !c && (0, i.jsx)("img", { className: w.rY, src: n, alt: "" }),
        ],
    });
}
function Q(e) {
    let { giftIcon: n, hovered: t, isGenericGift: l, onClick: a } = e,
        { Component: r, events: o, play: s } = g(),
        c = n?.boxAnimationUrl;
    if (!(0, K.uJ)(c)) return (0, i.jsx)(Z, { boxAnimationUrl: c, hovered: t, onClick: a });
    let u = n?.trinketAnimationUrl;
    return (0, K.uJ)(u)
        ? (0, i.jsx)(m.m, {
              ariaHidden: l,
              text: S.intl.string(l ? S.t.TW4JV0 : S.t.sWtWDX),
              children: (0, i.jsx)(B.A, {
                  className: $.x6,
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
        : (0, i.jsx)(z, { trinketAnimationUrl: u, hovered: t, onClick: a });
}
let V = l.memo(function (e) {
    let { disabled: n, channel: t } = e,
        { analyticsLocations: a } = (0, h.Ay)(b.A.GIFT_BUTTON),
        [u, d] = l.useState(!1),
        g = (0, p.A)(),
        C = (0, s.bG)([R.default], () => R.default.getCurrentUser()),
        f = null != C ? L.default.age(C.id) : 0,
        m = (0, O.R1)(t),
        A = (0, s.bG)([F.A], () => {
            let e = F.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        x = (0, s.bG)([F.A], () => {
            let e = F.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        y = A?.gradient,
        v =
            null != y && null != y.colors && y.colors.length >= 2
                ? (0, T.K5)({ gradient: y.colors, angle: y.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        _ = l.useMemo(() => {
            if (v?.background != null) return { "--custom-promotion-gradient": v.background };
        }, [v]),
        E = !(0, K.uJ)(A?.boxAnimationUrl) || !(0, K.uJ)(A?.trinketAnimationUrl),
        S = (0, s.bG)([F.A], () => F.A.getGiftPromotion()?.id),
        D = null != x && !n && !g && f >= J && null != S,
        [P, H] = (0, I.Cc)(D ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, S ?? ""),
        B = null != P,
        { giftingBadgeCoachmarkVariant: $, markGiftingBadgeCoachmarkAsDismissed: Z } = (function (e) {
            let { location: n, enabled: t } = e,
                i = (0, p.A)(),
                l = (0, N.Hv)({ platform: "web", location: n, enabled: t }),
                [a, r] = (0, I.kn)(null == l || i ? [] : [c.M.NEW_GIFTING_BADGES_COACHMARK]);
            return { giftingBadgeCoachmarkVariant: null != a ? l : null, markGiftingBadgeCoachmarkAsDismissed: r };
        })({ location: "ChannelPremiumGiftButton", enabled: !n && !B }),
        z = u || B || null != $,
        {
            openGiftModal: V,
            shouldShowWishlistModal: W,
            shouldShowGiftSelectionModal: q,
        } = (0, k.$)({
            giftRecipient: m,
            analyticsLocations: a,
            analyticsObject: {
                page: t.isPrivate() ? G.liQ.DM_CHANNEL : G.liQ.GUILD_CHANNEL,
                section: G.JJy.CHANNEL_TEXT_AREA,
                object: E ? G.ZSU.GIFTING_PROMOTION_BUTTON : G.ZSU.BUTTON_ICON,
                objectType: G.AnalyticsObjectTypes.GIFT,
            },
            wishlistAnalyticsObject: E
                ? {
                      page: t.isPrivate() ? G.liQ.DM_CHANNEL : G.liQ.GUILD_CHANNEL,
                      section: G.JJy.CHANNEL_TEXT_AREA,
                      object: G.ZSU.BUTTON_ICON,
                      objectType: G.AnalyticsObjectTypes.GIFT,
                  }
                : void 0,
            location: E ? "gift-promotion-button" : "gift-button",
        });
    if (n) return null;
    let X = (0, i.jsx)(Q, {
        giftIcon: A,
        hovered: z,
        isGenericGift: W || q,
        onClick: function () {
            (d(!1), H(M.i.TAKE_ACTION), Z(M.i.TAKE_ACTION), V());
        },
    });
    return (0, i.jsx)("div", {
        className: r()(w.kL, { [w.DM]: z }),
        style: _,
        onMouseEnter: () => {
            u || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: B
            ? (0, i.jsx)(j.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: V,
                  markAsDismissed: H,
                  coachmarkConfig: x,
                  children: X,
              })
            : null != $
              ? (0, i.jsx)(U, { channel: t, variant: $, onComplete: () => d(!1), markAsDismissed: Z, children: X })
              : X,
    });
});
