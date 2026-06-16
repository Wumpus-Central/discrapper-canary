"use strict";
n.d(t, { A: () => k });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(877624),
    l = n(17928),
    u = n(554146),
    c = n(533781),
    d = n(604121),
    _ = n(597770),
    h = n(793574),
    f = n(688810),
    p = n(131607),
    E = n(380619),
    m = n(751188),
    g = n(40493),
    A = n(374200),
    I = n(186111),
    T = n(287809),
    S = n(927813),
    y = n(935208),
    C = n(240248),
    N = n(427262),
    v = n(743477),
    R = n(767089),
    O = n(652215),
    b = n(49999),
    D = n(375708),
    L = n(849353),
    w = n(266599);
function M(e) {
    let t = r.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, i.jsx)(R.A, {
        className: w.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, i.jsx)("div", {
            className: L.zc,
            children: e.hovered ? (0, i.jsx)(d.a, { className: L.Hl, importData: t }) : (0, i.jsx)(_.o, {}),
        }),
    });
}
function P(e) {
    let { Component: t, events: n, play: r } = (0, c.T)();
    return (0, i.jsxs)(R.A, {
        className: w.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: () => {
            r(), e.onClick?.();
        },
        ...n,
        children: [
            (0, i.jsx)("div", { className: L.zc, children: (0, i.jsx)(t, { className: L.is, color: "currentColor" }) }),
            e.hovered && (0, i.jsx)("img", { className: L.rY, src: e.trinketAnimationUrl, alt: "" }),
        ],
    });
}
let x = S.A.Millis.DAYS_30,
    k = r.memo(function (e) {
        let { disabled: t, channel: n } = e,
            { analyticsLocations: s } = (0, f.Ay)(h.A.GIFT_BUTTON),
            [c, d] = r.useState(!1),
            _ = (0, l.bG)([I.A], () => !I.A?.hasLayers()),
            S = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
            R = null != S ? y.default.age(S.id) : 0,
            D = (0, l.bG)([A.A], () => {
                let e = A.A.getMarketingComponentByType(o.C.GIFT_ICON);
                return null == e || "giftIcon" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIcon;
            }),
            w = (0, l.bG)([A.A], () => {
                let e = A.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
                return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIconCoachmark;
            }),
            k = D?.gradient,
            U =
                null != k && null != k.colors && k.colors.length >= 2
                    ? (0, E.K5)({ gradient: k.colors, angle: k.angle ?? void 0 }, { defaultAngle: 180 })
                    : void 0,
            G = r.useMemo(() => {
                if (U?.background != null) return { "--custom-promotion-gradient": U.background };
            }, [U]),
            F = !(0, C.uJ)(D?.boxAnimationUrl),
            V = !(0, C.uJ)(D?.trinketAnimationUrl) && !F,
            B = (0, l.bG)([A.A], () => A.A.getGiftPromotion()?.id),
            j = null != w && !t && _ && R >= x && null != B,
            [H, Y] = (0, p.Cc)(j ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, B ?? ""),
            W = null != H,
            K = c || W,
            $ = (0, N.R1)(n),
            { openGiftModal: z } = (0, m.$)({
                giftRecipient: $,
                analyticsLocations: s,
                analyticsObject: {
                    page: n.isPrivate() ? O.liQ.DM_CHANNEL : O.liQ.GUILD_CHANNEL,
                    section: O.JJy.CHANNEL_TEXT_AREA,
                    object: O.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: O.AnalyticsObjectTypes.GIFT,
                },
                wishlistAnalyticsObject: {
                    page: n.isPrivate() ? O.liQ.DM_CHANNEL : O.liQ.GUILD_CHANNEL,
                    section: O.JJy.CHANNEL_TEXT_AREA,
                    object: O.ZSU.BUTTON_ICON,
                    objectType: O.AnalyticsObjectTypes.GIFT,
                },
                location: "gift-promotion-button",
            });
        if (t) return null;
        let q = () => {
                d(!1), Y(b.i.TAKE_ACTION), z();
            },
            Z =
                F && D?.boxAnimationUrl != null
                    ? (0, i.jsx)(M, { boxAnimationUrl: D.boxAnimationUrl, hovered: K, onClick: q })
                    : V && D?.trinketAnimationUrl != null
                      ? (0, i.jsx)(P, { trinketAnimationUrl: D.trinketAnimationUrl, hovered: K, onClick: q })
                      : (0, i.jsx)(v.A, { disabled: t, channel: n });
        return (0, i.jsx)("div", {
            className: a()(L.kL, { [L.DM]: K }),
            style: G,
            onMouseEnter: () => {
                c || d(!0);
            },
            onMouseLeave: () => {
                d(!1);
            },
            children: W
                ? (0, i.jsx)(g.A, {
                      onComplete: () => d(!1),
                      onCheckItOutClick: z,
                      markAsDismissed: Y,
                      coachmarkConfig: w,
                      children: Z,
                  })
                : Z,
        });
    });
