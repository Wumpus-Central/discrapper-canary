"use strict";
n.d(t, { A: () => Z });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(877624),
    l = n(17928),
    u = n(554146),
    c = n(744682);
let d = { all: { name: "all", start: 0, duration: 66 } };
function _() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        s = r.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        a = r.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        o = r.useCallback(
            (t) => (0, i.jsx)(c.P, { ...t, src: () => n.e("56591").then(n.t.bind(n, 640114, 19)), ref: e, markers: d }),
            [],
        );
    return {
        events: { onMouseEnter: s, onMouseLeave: a },
        play: t,
        getDuration: r.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: o,
    };
}
var h = n(990078),
    f = n(604121),
    p = n(597770),
    E = n(942857),
    m = n(775602),
    g = n(793574),
    A = n(688810),
    I = n(131607),
    T = n(380619),
    S = n(70283),
    y = n(682618),
    C = n(982240),
    N = n(284518),
    v = n(751188),
    R = n(40493),
    O = n(43105),
    b = n(975732),
    D = n(287809),
    L = n(427262),
    w = n(652215),
    M = n(49999),
    P = n(360615),
    x = n(375708);
function k(e) {
    let { currentTier: t, giftCount: n, onComplete: s, markAsDismissed: a, children: o } = e,
        u = r.useRef(null),
        c = (0, l.bG)([D.default], () => D.default.getCurrentUser());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: u, children: o }),
            (0, i.jsx)(O.A, {
                targetElementRef: u,
                shouldShow: !0,
                position: "top",
                title: x.intl.format(P.default["a+jfuy"], { tierName: t.name ?? "" }),
                body: x.intl.formatToPlainString(P.default.QxRA6w, { giftCount: n ?? 0 }),
                graphic: null != t.simple_icon_url ? { type: "image", src: t.simple_icon_url } : void 0,
                actions: [
                    {
                        text: x.intl.string(x.t.RzWDqY),
                        onClick: () => {
                            null != c && (0, b.openUserProfileModal)({ userId: c.id }), s?.(), a(M.i.TAKE_ACTION);
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    s?.(), a(M.i.USER_DISMISS);
                },
            }),
        ],
    });
}
function U(e) {
    let { channel: t, onComplete: n, markAsDismissed: s, children: a } = e,
        o = r.useRef(null),
        { analyticsLocations: l } = (0, A.Ay)(g.A.GIFTING_BADGE_COACHMARK),
        u = (0, L.R1)(t),
        { openGiftModal: c } = (0, v.$)({
            giftRecipient: u,
            analyticsLocations: l,
            analyticsObject: { object: w.ZSU.BUTTON_CTA, objectType: w.AnalyticsObjectTypes.GIFT },
            location: "NewBadgeCoachmark",
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { ref: o, children: a }),
            (0, i.jsx)(O.A, {
                targetElementRef: o,
                shouldShow: !0,
                position: "top",
                title: x.intl.string(P.default.Q2RQka),
                body: x.intl.string(P.default["3EQnkg"]),
                graphic: {
                    type: "image",
                    src: "https://cdn.discordapp.com/assets/content/6c3ba62d914abaf06acb2e664bd0515aaf49ab966e671dcd013678208b3d7d58.png",
                },
                actions: [
                    {
                        text: x.intl.string(P.default.DZnomS),
                        icon: p.o,
                        onClick: () => {
                            c(), n?.(), s(M.i.TAKE_ACTION);
                        },
                    },
                ],
                caretConfig: { align: "center" },
                onRequestClose: function () {
                    n?.(), s(M.i.USER_DISMISS);
                },
            }),
        ],
    });
}
function G(e) {
    let { channel: t, onComplete: n, markAsDismissed: r, children: s } = e,
        { currentTier: a, giftCount: o } = (0, l.cf)([C.Ay], () => ({
            currentTier: C.Ay.getCurrentTier(S.$.GIFTING),
            giftCount: C.Ay.getSingleRequirementProgress(S.$.GIFTING)?.current,
        }));
    return null != a
        ? (0, i.jsx)(k, { currentTier: a, giftCount: o, onComplete: n, markAsDismissed: r, children: s })
        : (0, i.jsx)(U, { channel: t, onComplete: n, markAsDismissed: r, children: s });
}
var F = n(374200),
    V = n(927813),
    B = n(935208),
    j = n(240248),
    H = n(767089),
    Y = n(591838),
    W = n(266599);
let K = V.A.Millis.DAYS_30;
function $(e) {
    let { boxAnimationUrl: t, hovered: n, onClick: s } = e,
        a = r.useCallback(() => Promise.resolve({ default: t }), [t]);
    return (0, i.jsx)(H.A, {
        className: W.x6,
        "aria-label": x.intl.string(x.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: s,
        children: (0, i.jsx)("div", {
            className: Y.zc,
            children: n ? (0, i.jsx)(f.a, { className: Y.Hl, importData: a }) : (0, i.jsx)(p.o, {}),
        }),
    });
}
function z(e) {
    let { trinketAnimationUrl: t, hovered: n, onClick: r } = e,
        { Component: s, events: a, play: o } = _(),
        u = (0, l.bG)([m.Ay], () => m.Ay.useReducedMotion);
    return (0, i.jsxs)(H.A, {
        className: W.x6,
        "aria-label": x.intl.string(x.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            o(), r();
        },
        ...a,
        children: [
            (0, i.jsx)("div", { className: Y.zc, children: (0, i.jsx)(s, { className: Y.is, color: "currentColor" }) }),
            n && !u && (0, i.jsx)("img", { className: Y.rY, src: t, alt: "" }),
        ],
    });
}
function q(e) {
    let { giftIcon: t, hovered: n, isGenericGift: r, onClick: s } = e,
        { Component: a, events: o, play: l } = _(),
        u = t?.boxAnimationUrl;
    if (!(0, j.uJ)(u)) return (0, i.jsx)($, { boxAnimationUrl: u, hovered: n, onClick: s });
    let c = t?.trinketAnimationUrl;
    return (0, j.uJ)(c)
        ? (0, i.jsx)(h.m, {
              ariaHidden: r,
              text: x.intl.string(r ? x.t.TW4JV0 : x.t.sWtWDX),
              children: (0, i.jsx)(H.A, {
                  className: W.x6,
                  isActive: !1,
                  "aria-label": x.intl.string(r ? x.t.TW4JV0 : x.t.Z1RnTk),
                  "aria-haspopup": "dialog",
                  onClick: () => {
                      s(), l();
                  },
                  ...o,
                  children: (0, i.jsx)(a, { size: "refresh_sm", color: "currentColor" }),
              }),
          })
        : (0, i.jsx)(z, { trinketAnimationUrl: c, hovered: n, onClick: s });
}
let Z = r.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: s } = (0, A.Ay)(g.A.GIFT_BUTTON),
        [c, d] = r.useState(!1),
        _ = (0, E.A)(),
        h = (0, l.bG)([D.default], () => D.default.getCurrentUser()),
        f = null != h ? B.default.age(h.id) : 0,
        p = (0, L.R1)(n),
        m = (0, l.bG)([F.A], () => {
            let e = F.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        O = (0, l.bG)([F.A], () => {
            let e = F.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        b = m?.gradient,
        P =
            null != b && null != b.colors && b.colors.length >= 2
                ? (0, T.K5)({ gradient: b.colors, angle: b.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        x = r.useMemo(() => {
            if (P?.background != null) return { "--custom-promotion-gradient": P.background };
        }, [P]),
        k = !(0, j.uJ)(m?.boxAnimationUrl) || !(0, j.uJ)(m?.trinketAnimationUrl),
        U = (0, l.bG)([F.A], () => F.A.getGiftPromotion()?.id),
        V = null != O && !t && !_ && f >= K && null != U,
        [H, W] = (0, I.Cc)(V ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, U ?? ""),
        $ = null != H,
        { showGiftingBadgeCoachmark: z, markGiftingBadgeCoachmarkAsDismissed: Z } = (function (e) {
            let { location: t, enabled: n } = e,
                i = (0, E.A)(),
                s = (0, N.L)({ platform: "web", location: t }) && n;
            r.useEffect(() => {
                s && (0, y.o)(S.$.GIFTING);
            }, [s]);
            let a = (0, l.bG)([C.Ay], () => null != C.Ay.getBadgeById(S.$.GIFTING)),
                o = s && a && !i,
                [c, d] = (0, I.kn)(o ? [u.M.NEW_GIFTING_BADGES_COACHMARK] : []);
            return { showGiftingBadgeCoachmark: null != c, markGiftingBadgeCoachmarkAsDismissed: d };
        })({ location: "ChannelPremiumGiftButton", enabled: !t && !$ }),
        X = c || $ || z,
        {
            openGiftModal: Q,
            shouldShowWishlistModal: J,
            shouldShowGiftSelectionModal: ee,
        } = (0, v.$)({
            giftRecipient: p,
            analyticsLocations: s,
            analyticsObject: {
                page: n.isPrivate() ? w.liQ.DM_CHANNEL : w.liQ.GUILD_CHANNEL,
                section: w.JJy.CHANNEL_TEXT_AREA,
                object: k ? w.ZSU.GIFTING_PROMOTION_BUTTON : w.ZSU.BUTTON_ICON,
                objectType: w.AnalyticsObjectTypes.GIFT,
            },
            wishlistAnalyticsObject: k
                ? {
                      page: n.isPrivate() ? w.liQ.DM_CHANNEL : w.liQ.GUILD_CHANNEL,
                      section: w.JJy.CHANNEL_TEXT_AREA,
                      object: w.ZSU.BUTTON_ICON,
                      objectType: w.AnalyticsObjectTypes.GIFT,
                  }
                : void 0,
            location: k ? "gift-promotion-button" : "gift-button",
        });
    if (t) return null;
    let et = (0, i.jsx)(q, {
        giftIcon: m,
        hovered: X,
        isGenericGift: J || ee,
        onClick: function () {
            d(!1), W(M.i.TAKE_ACTION), Z(M.i.TAKE_ACTION), Q();
        },
    });
    return (0, i.jsx)("div", {
        className: a()(Y.kL, { [Y.DM]: X }),
        style: x,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: $
            ? (0, i.jsx)(R.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: Q,
                  markAsDismissed: W,
                  coachmarkConfig: O,
                  children: et,
              })
            : z
              ? (0, i.jsx)(G, { channel: n, onComplete: () => d(!1), markAsDismissed: Z, children: et })
              : et,
    });
});
