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
    d = n(397927),
    _ = n(793574),
    f = n(688810),
    p = n(932001),
    h = n(810498),
    m = n(233971),
    E = n(40493),
    g = n(412260),
    A = n(186111),
    I = n(287809),
    T = n(927813),
    S = n(661191),
    y = n(240248),
    v = n(427262),
    N = n(743477),
    C = n(545428),
    R = n(652215),
    O = n(49999),
    b = n(985018),
    D = n(849353),
    L = n(266599);
function w(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(C.A, {
        className: L.x6,
        "aria-label": b.intl.string(b.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: D.zc,
            children: e.hovered ? (0, r.jsx)(d.akl, { className: D.Hl, importData: t }) : (0, r.jsx)(d.okO, {}),
        }),
    });
}
function M(e) {
    let { Component: t, events: n, play: s } = (0, c.T)(),
        a = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        o = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]),
        l = () => {
            s(), e.onClick?.();
        };
    return (0, r.jsx)(C.A, {
        className: L.x6,
        "aria-label": b.intl.string(b.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: l,
        ...n,
        children: (0, r.jsxs)("div", {
            className: D.zc,
            children: [
                (0, r.jsx)(t, { className: D.is, color: "currentColor" }),
                e.hovered &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, r.jsx)(d.akl, { className: D.rY, importData: a }),
                            null != e.trinketGlowAnimationUrl && (0, r.jsx)(d.akl, { className: D.c5, importData: o }),
                        ],
                    }),
            ],
        }),
    });
}
let P = T.A.Millis.DAYS_30;
function x(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: s } = (0, f.Ay)(_.A.GIFT_BUTTON),
        [c, d] = i.useState(!1),
        T = (0, l.bG)([A.A], () => !A.A?.hasLayers()),
        C = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        b = null != C ? S.default.age(C.id) : 0,
        L = (0, l.bG)([g.A], () => {
            let e = g.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        x = (0, l.bG)([g.A], () => {
            let e = g.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        k = L?.gradient,
        U =
            null != k && null != k.colors && k.colors.length >= 2
                ? (0, h.K5)({ gradient: k.colors, angle: k.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        G = i.useMemo(() => {
            if (U?.background != null) return { "--custom-promotion-gradient": U.background };
        }, [U]),
        F = !(0, y.uJ)(L?.boxAnimationUrl),
        V = (!(0, y.uJ)(L?.trinketAnimationUrl) || !(0, y.uJ)(L?.trinketGlowAnimationUrl)) && !F,
        B = (0, l.bG)([g.A], () => g.A.getGiftPromotion()?.id),
        H = null != x && !t && T && b >= P && null != B,
        [j, Y] = (0, p.Cc)(H ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, B ?? ""),
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
            d(!1), Y(O.i.TAKE_ACTION), z();
        },
        Z =
            F && L?.boxAnimationUrl != null
                ? (0, r.jsx)(w, { boxAnimationUrl: L.boxAnimationUrl, hovered: K, onClick: q })
                : V
                  ? (0, r.jsx)(M, {
                        trinketAnimationUrl: L?.trinketAnimationUrl ?? null,
                        trinketGlowAnimationUrl: L?.trinketGlowAnimationUrl ?? null,
                        hovered: K,
                        onClick: q,
                    })
                  : (0, r.jsx)(N.A, { disabled: t, channel: n });
    return (0, r.jsx)("div", {
        className: a()(D.kL, { [D.DM]: K }),
        style: G,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: W
            ? (0, r.jsx)(E.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: z,
                  markAsDismissed: Y,
                  coachmarkConfig: x,
                  children: Z,
              })
            : Z,
    });
}
let k = i.memo(x);
