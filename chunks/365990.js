"use strict";
n.d(t, { A: () => Z });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(877624),
    o = n(17928),
    d = n(554146),
    c = n(744682);
let u = { all: { name: "all", start: 0, duration: 66 } };
function _() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        a = r.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        s = r.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        l = r.useCallback(
            (t) => (0, i.jsx)(c.P, { ...t, src: () => n.e("56591").then(n.t.bind(n, 640114, 19)), ref: e, markers: u }),
            [],
        );
    return {
        events: { onMouseEnter: a, onMouseLeave: s },
        play: t,
        getDuration: r.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: l,
    };
}
var E = n(990078),
    A = n(604121),
    h = n(597770),
    I = n(942857),
    f = n(775602),
    p = n(793574),
    T = n(688810),
    m = n(131607),
    g = n(380619),
    S = n(70283),
    N = n(682618),
    C = n(982240),
    R = n(611881),
    O = n(751188),
    L = n(40493),
    D = n(43105),
    y = n(975732),
    v = n(287809),
    b = n(427262),
    M = n(652215),
    P = n(49999),
    U = n(360615),
    w = n(375708);
function G(e) {
    let { currentTier: t, giftCount: n, onComplete: a, markAsDismissed: s, children: l } = e,
        d = r.useRef(null),
        c = (0, o.bG)([v.default], () => v.default.getCurrentUser());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: d, children: l }),
            (0, i.jsx)(D.A, {
                targetElementRef: d,
                shouldShow: !0,
                position: "top",
                title: w.intl.format(U.default["a+jfuy"], { tierName: t.name ?? "" }),
                body: w.intl.formatToPlainString(U.default.QxRA6w, { giftCount: n ?? 0 }),
                graphic: null != t.simple_icon_url ? { type: "image", src: t.simple_icon_url } : void 0,
                actions: [
                    {
                        text: w.intl.string(w.t.RzWDqY),
                        onClick: () => {
                            null != c && (0, y.openUserProfileModal)({ userId: c.id }), a?.(), s(P.i.TAKE_ACTION);
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    a?.(), s(P.i.USER_DISMISS);
                },
            }),
        ],
    });
}
function x(e) {
    let { channel: t, onComplete: n, markAsDismissed: a, children: s } = e,
        l = r.useRef(null),
        { analyticsLocations: o } = (0, T.Ay)(p.A.GIFTING_BADGE_COACHMARK),
        d = (0, b.R1)(t),
        { openGiftModal: c } = (0, O.$)({
            giftRecipient: d,
            analyticsLocations: o,
            analyticsObject: { object: M.ZSU.BUTTON_CTA, objectType: M.AnalyticsObjectTypes.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: l, children: s }),
            (0, i.jsx)(D.A, {
                targetElementRef: l,
                shouldShow: !0,
                position: "top",
                title: w.intl.string(U.default.Q2RQka),
                body: w.intl.string(U.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: w.intl.string(U.default.DZnomS),
                        icon: h.o,
                        onClick: () => {
                            c(), n?.(), a(P.i.TAKE_ACTION);
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    n?.(), a(P.i.USER_DISMISS);
                },
            }),
        ],
    });
}
function k(e) {
    let { channel: t, onComplete: n, markAsDismissed: r, children: a } = e,
        { currentTier: s, giftCount: l } = (0, o.cf)([C.Ay], () => ({
            currentTier: C.Ay.getCurrentTier(S.$.GIFTING),
            giftCount: C.Ay.getSingleRequirementProgress(S.$.GIFTING)?.current,
        }));
    return null != s
        ? (0, i.jsx)(G, { currentTier: s, giftCount: l, onComplete: n, markAsDismissed: r, children: a })
        : (0, i.jsx)(x, { channel: t, onComplete: n, markAsDismissed: r, children: a });
}
var F = n(374200),
    V = n(927813),
    B = n(935208),
    H = n(240248),
    j = n(767089),
    W = n(591838),
    Y = n(266599);
let K = V.A.Millis.DAYS_30;
function $(e) {
    let { boxAnimationUrl: t, hovered: n, onClick: a } = e,
        s = r.useCallback(() => Promise.resolve({ default: t }), [t]);
    return (0, i.jsx)(j.A, {
        className: Y.x6,
        "aria-label": w.intl.string(w.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: a,
        children: (0, i.jsx)("div", {
            className: W.zc,
            children: n ? (0, i.jsx)(A.a, { className: W.Hl, importData: s }) : (0, i.jsx)(h.o, {}),
        }),
    });
}
function z(e) {
    let { trinketAnimationUrl: t, hovered: n, onClick: r } = e,
        { Component: a, events: s, play: l } = _(),
        d = (0, o.bG)([f.Ay], () => f.Ay.useReducedMotion);
    return (0, i.jsxs)(j.A, {
        className: Y.x6,
        "aria-label": w.intl.string(w.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            l(), r();
        },
        ...s,
        children: [
            (0, i.jsx)("div", { className: W.zc, children: (0, i.jsx)(a, { className: W.is, color: "currentColor" }) }),
            n && !d && (0, i.jsx)("img", { className: W.rY, src: t, alt: "" }),
        ],
    });
}
function q(e) {
    let { giftIcon: t, hovered: n, isGenericGift: r, onClick: a } = e,
        { Component: s, events: l, play: o } = _(),
        d = t?.boxAnimationUrl;
    if (!(0, H.uJ)(d)) return (0, i.jsx)($, { boxAnimationUrl: d, hovered: n, onClick: a });
    let c = t?.trinketAnimationUrl;
    return (0, H.uJ)(c)
        ? (0, i.jsx)(E.m, {
              ariaHidden: r,
              text: w.intl.string(r ? w.t.TW4JV0 : w.t.sWtWDX),
              children: (0, i.jsx)(j.A, {
                  className: Y.x6,
                  isActive: !1,
                  "aria-label": w.intl.string(r ? w.t.TW4JV0 : w.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      a(), o();
                  },
                  ...l,
                  children: (0, i.jsx)(s, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : (0, i.jsx)(z, { trinketAnimationUrl: c, hovered: n, onClick: a });
}
let Z = r.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: a } = (0, T.Ay)(p.A.GIFT_BUTTON),
        [c, u] = r.useState(!1),
        _ = (0, I.A)(),
        E = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        A = null != E ? B.default.age(E.id) : 0,
        h = (0, b.R1)(n),
        f = (0, o.bG)([F.A], () => {
            let e = F.A.getMarketingComponentByType(l.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        D = (0, o.bG)([F.A], () => {
            let e = F.A.getMarketingComponentByType(l.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        y = f?.gradient,
        U =
            null != y && null != y.colors && y.colors.length >= 2
                ? (0, g.K5)({ gradient: y.colors, angle: y.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        w = r.useMemo(() => {
            if (U?.background != null) return { "--custom-promotion-gradient": U.background };
        }, [U]),
        G = !(0, H.uJ)(f?.boxAnimationUrl) || !(0, H.uJ)(f?.trinketAnimationUrl),
        x = (0, o.bG)([F.A], () => F.A.getGiftPromotion()?.id),
        V = null != D && !t && !_ && A >= K && null != x,
        [j, Y] = (0, m.Cc)(V ? d.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, x ?? ""),
        $ = null != j,
        { showGiftingBadgeCoachmark: z, markGiftingBadgeCoachmarkAsDismissed: Z } = (function (e) {
            let { location: t, enabled: n } = e,
                i = (0, I.A)(),
                a = (0, R.Ls)({ platform: "web", location: t }) && n;
            r.useEffect(() => {
                a && (0, N.o)(S.$.GIFTING);
            }, [a]);
            let s = (0, o.bG)([C.Ay], () => null != C.Ay.getBadgeById(S.$.GIFTING)),
                l = a && s && !i,
                [c, u] = (0, m.kn)(l ? [d.M.NEW_GIFTING_BADGES_COACHMARK] : []);
            return { showGiftingBadgeCoachmark: null != c, markGiftingBadgeCoachmarkAsDismissed: u };
        })({ location: "ChannelPremiumGiftButton", enabled: !t && !$ }),
        X = c || $ || z,
        {
            openGiftModal: Q,
            shouldShowWishlistModal: J,
            shouldShowGiftSelectionModal: ee,
        } = (0, O.$)({
            giftRecipient: h,
            analyticsLocations: a,
            analyticsObject: {
                page: n.isPrivate() ? M.liQ.DM_CHANNEL : M.liQ.GUILD_CHANNEL,
                section: M.JJy.CHANNEL_TEXT_AREA,
                object: G ? M.ZSU.GIFTING_PROMOTION_BUTTON : M.ZSU.BUTTON_ICON,
                objectType: M.AnalyticsObjectTypes.GIFT,
            },
            wishlistAnalyticsObject: G
                ? {
                      page: n.isPrivate() ? M.liQ.DM_CHANNEL : M.liQ.GUILD_CHANNEL,
                      section: M.JJy.CHANNEL_TEXT_AREA,
                      object: M.ZSU.BUTTON_ICON,
                      objectType: M.AnalyticsObjectTypes.GIFT,
                  }
                : void 0,
            location: G ? "gift-promotion-button" : "gift-button",
        });
    if (t) return null;
    let et = (0, i.jsx)(q, {
        giftIcon: f,
        hovered: X,
        isGenericGift: J || ee,
        onClick: function () {
            u(!1), Y(P.i.TAKE_ACTION), Z(P.i.TAKE_ACTION), Q();
        },
    });
    return (0, i.jsx)("div", {
        className: s()(W.kL, { [W.DM]: X }),
        style: w,
        onMouseEnter: () => {
            c || u(!0);
        },
        onMouseLeave: () => {
            u(!1);
        },
        children: $
            ? (0, i.jsx)(L.A, {
                  onComplete: () => u(!1),
                  onCheckItOutClick: Q,
                  markAsDismissed: Y,
                  coachmarkConfig: D,
                  children: et,
              })
            : z
              ? (0, i.jsx)(k, { channel: n, onComplete: () => u(!1), markAsDismissed: Z, children: et })
              : et,
    });
});
