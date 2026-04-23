"use strict";
n.d(t, { A: () => k });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(877624),
    l = n(311907),
    u = n(554146),
    c = n(533781),
    d = n(604121),
    _ = n(597770),
    f = n(793574),
    p = n(688810),
    h = n(932001),
    E = n(810498),
    m = n(233971),
    g = n(40493),
    A = n(412260),
    I = n(186111),
    T = n(287809),
    S = n(927813),
    y = n(661191),
    N = n(240248),
    v = n(427262),
    C = n(743477),
    O = n(545428),
    R = n(652215),
    b = n(49999),
    D = n(985018),
    L = n(849353),
    w = n(266599);
function M(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(O.A, {
        className: w.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: L.zc,
            children: e.hovered ? (0, r.jsx)(d.a, { className: L.Hl, importData: t }) : (0, r.jsx)(_.o, {}),
        }),
    });
}
function P(e) {
    let { Component: t, events: n, play: s } = (0, c.T)(),
        a = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        o = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]);
    return (0, r.jsx)(O.A, {
        className: w.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: () => {
            s(), e.onClick?.();
        },
        ...n,
        children: (0, r.jsxs)("div", {
            className: L.zc,
            children: [
                (0, r.jsx)(t, { className: L.is, color: "currentColor" }),
                e.hovered &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, r.jsx)(d.a, { className: L.rY, importData: a }),
                            null != e.trinketGlowAnimationUrl && (0, r.jsx)(d.a, { className: L.c5, importData: o }),
                        ],
                    }),
            ],
        }),
    });
}
let x = S.A.Millis.DAYS_30,
    k = i.memo(function (e) {
        let { disabled: t, channel: n } = e,
            { analyticsLocations: s } = (0, p.Ay)(f.A.GIFT_BUTTON),
            [c, d] = i.useState(!1),
            _ = (0, l.bG)([I.A], () => !I.A?.hasLayers()),
            S = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
            O = null != S ? y.default.age(S.id) : 0,
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
            G = i.useMemo(() => {
                if (U?.background != null) return { "--custom-promotion-gradient": U.background };
            }, [U]),
            F = !(0, N.uJ)(D?.boxAnimationUrl),
            V = (!(0, N.uJ)(D?.trinketAnimationUrl) || !(0, N.uJ)(D?.trinketGlowAnimationUrl)) && !F,
            B = (0, l.bG)([A.A], () => A.A.getGiftPromotion()?.id),
            H = null != w && !t && _ && O >= x && null != B,
            [j, Y] = (0, h.Cc)(H ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, B ?? ""),
            W = null != j,
            K = c || W,
            $ = (0, v.R1)(n),
            { openGiftModal: z } = (0, m.$)({
                giftRecipient: $,
                analyticsLocations: s,
                analyticsObject: {
                    page: n.isPrivate() ? R.liQ.DM_CHANNEL : R.liQ.GUILD_CHANNEL,
                    section: R.JJy.CHANNEL_TEXT_AREA,
                    object: R.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: R.AnalyticsObjectTypes.GIFT,
                },
                wishlistAnalyticsObject: {
                    page: n.isPrivate() ? R.liQ.DM_CHANNEL : R.liQ.GUILD_CHANNEL,
                    section: R.JJy.CHANNEL_TEXT_AREA,
                    object: R.ZSU.BUTTON_ICON,
                    objectType: R.AnalyticsObjectTypes.GIFT,
                },
                location: "gift-promotion-button",
            });
        if (t) return null;
        let q = () => {
                d(!1), Y(b.i.TAKE_ACTION), z();
            },
            X =
                F && D?.boxAnimationUrl != null
                    ? (0, r.jsx)(M, { boxAnimationUrl: D.boxAnimationUrl, hovered: K, onClick: q })
                    : V
                      ? (0, r.jsx)(P, {
                            trinketAnimationUrl: D?.trinketAnimationUrl ?? null,
                            trinketGlowAnimationUrl: D?.trinketGlowAnimationUrl ?? null,
                            hovered: K,
                            onClick: q,
                        })
                      : (0, r.jsx)(C.A, { disabled: t, channel: n });
        return (0, r.jsx)("div", {
            className: a()(L.kL, { [L.DM]: K }),
            style: G,
            onMouseEnter: () => {
                c || d(!0);
            },
            onMouseLeave: () => {
                d(!1);
            },
            children: W
                ? (0, r.jsx)(g.A, {
                      onComplete: () => d(!1),
                      onCheckItOutClick: z,
                      markAsDismissed: Y,
                      coachmarkConfig: w,
                      children: X,
                  })
                : X,
        });
    });
