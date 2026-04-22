"use strict";
n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(877624),
    o = n(311907),
    c = n(554146),
    u = n(533781),
    d = n(604121),
    h = n(597770),
    m = n(793574),
    p = n(688810),
    f = n(932001),
    g = n(810498),
    _ = n(233971),
    x = n(40493),
    A = n(412260),
    C = n(186111),
    E = n(287809),
    I = n(927813),
    v = n(661191),
    y = n(240248),
    S = n(427262),
    b = n(743477),
    N = n(545428),
    T = n(652215),
    j = n(49999),
    R = n(985018),
    w = n(849353),
    L = n(266599);
function M(e) {
    let t = l.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, i.jsx)(N.A, {
        className: L.x6,
        "aria-label": R.intl.string(R.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, i.jsx)("div", {
            className: w.zc,
            children: e.hovered ? (0, i.jsx)(d.a, { className: w.Hl, importData: t }) : (0, i.jsx)(h.o, {}),
        }),
    });
}
function k(e) {
    let { Component: t, events: n, play: s } = (0, u.T)(),
        r = l.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        a = l.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]);
    return (0, i.jsx)(N.A, {
        className: L.x6,
        "aria-label": R.intl.string(R.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: () => {
            s(), e.onClick?.();
        },
        ...n,
        children: (0, i.jsxs)("div", {
            className: w.zc,
            children: [
                (0, i.jsx)(t, { className: w.is, color: "currentColor" }),
                e.hovered &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, i.jsx)(d.a, { className: w.rY, importData: r }),
                            null != e.trinketGlowAnimationUrl && (0, i.jsx)(d.a, { className: w.c5, importData: a }),
                        ],
                    }),
            ],
        }),
    });
}
let O = I.A.Millis.DAYS_30,
    P = l.memo(function (e) {
        let { disabled: t, channel: n } = e,
            { analyticsLocations: s } = (0, p.Ay)(m.A.GIFT_BUTTON),
            [u, d] = l.useState(!1),
            h = (0, o.bG)([C.A], () => !C.A?.hasLayers()),
            I = (0, o.bG)([E.default], () => E.default.getCurrentUser()),
            N = null != I ? v.default.age(I.id) : 0,
            R = (0, o.bG)([A.A], () => {
                let e = A.A.getMarketingComponentByType(a.C.GIFT_ICON);
                return null == e || "giftIcon" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIcon;
            }),
            L = (0, o.bG)([A.A], () => {
                let e = A.A.getMarketingComponentByType(a.C.GIFT_ICON_COACHMARK);
                return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIconCoachmark;
            }),
            P = R?.gradient,
            D =
                null != P && null != P.colors && P.colors.length >= 2
                    ? (0, g.K5)({ gradient: P.colors, angle: P.angle ?? void 0 }, { defaultAngle: 180 })
                    : void 0,
            U = l.useMemo(() => {
                if (D?.background != null) return { "--custom-promotion-gradient": D.background };
            }, [D]),
            V = !(0, y.uJ)(R?.boxAnimationUrl),
            G = (!(0, y.uJ)(R?.trinketAnimationUrl) || !(0, y.uJ)(R?.trinketGlowAnimationUrl)) && !V,
            F = (0, o.bG)([A.A], () => A.A.getGiftPromotion()?.id),
            B = null != L && !t && h && N >= O && null != F,
            [H, W] = (0, f.Cc)(B ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, F ?? ""),
            K = null != H,
            z = u || K,
            Z = (0, S.R1)(n),
            { openGiftModal: q } = (0, _.$)({
                giftRecipient: Z,
                analyticsLocations: s,
                analyticsObject: {
                    page: n.isPrivate() ? T.liQ.DM_CHANNEL : T.liQ.GUILD_CHANNEL,
                    section: T.JJy.CHANNEL_TEXT_AREA,
                    object: T.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: T.AnalyticsObjectTypes.GIFT,
                },
                wishlistAnalyticsObject: {
                    page: n.isPrivate() ? T.liQ.DM_CHANNEL : T.liQ.GUILD_CHANNEL,
                    section: T.JJy.CHANNEL_TEXT_AREA,
                    object: T.ZSU.BUTTON_ICON,
                    objectType: T.AnalyticsObjectTypes.GIFT,
                },
                location: "gift-promotion-button",
            });
        if (t) return null;
        let Y = () => {
                d(!1), W(j.i.TAKE_ACTION), q();
            },
            J =
                V && R?.boxAnimationUrl != null
                    ? (0, i.jsx)(M, { boxAnimationUrl: R.boxAnimationUrl, hovered: z, onClick: Y })
                    : G
                      ? (0, i.jsx)(k, {
                            trinketAnimationUrl: R?.trinketAnimationUrl ?? null,
                            trinketGlowAnimationUrl: R?.trinketGlowAnimationUrl ?? null,
                            hovered: z,
                            onClick: Y,
                        })
                      : (0, i.jsx)(b.A, { disabled: t, channel: n });
        return (0, i.jsx)("div", {
            className: r()(w.kL, { [w.DM]: z }),
            style: U,
            onMouseEnter: () => {
                u || d(!0);
            },
            onMouseLeave: () => {
                d(!1);
            },
            children: K
                ? (0, i.jsx)(x.A, {
                      onComplete: () => d(!1),
                      onCheckItOutClick: q,
                      markAsDismissed: W,
                      coachmarkConfig: L,
                      children: J,
                  })
                : J,
        });
    });
