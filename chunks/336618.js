"use strict";
n.d(t, { A: () => U });
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
    p = n(357186),
    h = n(932001),
    m = n(810498),
    E = n(233971),
    g = n(40493),
    A = n(412260),
    I = n(186111),
    T = n(287809),
    S = n(927813),
    y = n(661191),
    v = n(240248),
    N = n(427262),
    C = n(743477),
    R = n(545428),
    O = n(652215),
    b = n(49999),
    D = n(985018),
    L = n(23769),
    w = n(351671);
function M(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(R.A, {
        className: w.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: L.zc,
            children: e.hovered ? (0, r.jsx)(d.akl, { className: L.Hl, importData: t }) : (0, r.jsx)(d.okO, {}),
        }),
    });
}
function P(e) {
    let { Component: t, events: n, play: s } = (0, c.T)(),
        a = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        o = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]),
        l = () => {
            s(), e.onClick?.();
        };
    return (0, r.jsx)(R.A, {
        className: w.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: l,
        ...n,
        children: (0, r.jsxs)("div", {
            className: L.zc,
            children: [
                (0, r.jsx)(t, { className: L.is, color: "currentColor" }),
                e.hovered &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, r.jsx)(d.akl, { className: L.rY, importData: a }),
                            null != e.trinketGlowAnimationUrl && (0, r.jsx)(d.akl, { className: L.c5, importData: o }),
                        ],
                    }),
            ],
        }),
    });
}
let x = S.A.Millis.DAYS_30;
function k(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: s } = (0, f.Ay)(_.A.GIFT_BUTTON),
        [c, d] = i.useState(!1),
        S = (0, l.bG)([I.A], () => !I.A?.hasLayers()),
        R = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
        D = null != R ? y.default.age(R.id) : 0,
        w = (0, l.bG)([A.A], () => {
            let e = A.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        k = (0, l.bG)([A.A], () => {
            let e = A.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        U = w?.gradient,
        G =
            null != U && null != U.colors && U.colors.length >= 2
                ? (0, m.K5)({ gradient: U.colors, angle: U.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        F = i.useMemo(() => {
            if (G?.background != null) return { "--custom-promotion-gradient": G.background };
        }, [G]),
        V = !(0, v.uJ)(w?.boxAnimationUrl),
        B = (!(0, v.uJ)(w?.trinketAnimationUrl) || !(0, v.uJ)(w?.trinketGlowAnimationUrl)) && !V,
        H = null != k && !t && S && D >= x,
        [j, Y] = (0, h.RF)(
            H ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, p.c)(u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        W = null != j,
        K = c || W,
        $ = (0, N.R1)(n),
        { openGiftModal: z } = (0, E.$)({
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
            V && w?.boxAnimationUrl != null
                ? (0, r.jsx)(M, { boxAnimationUrl: w.boxAnimationUrl, hovered: K, onClick: q })
                : B
                  ? (0, r.jsx)(P, {
                        trinketAnimationUrl: w?.trinketAnimationUrl ?? null,
                        trinketGlowAnimationUrl: w?.trinketGlowAnimationUrl ?? null,
                        hovered: K,
                        onClick: q,
                    })
                  : (0, r.jsx)(C.A, { disabled: t, channel: n });
    return (0, r.jsx)("div", {
        className: a()(L.kL, { [L.DM]: K }),
        style: F,
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
                  coachmarkConfig: k,
                  children: Z,
              })
            : Z,
    });
}
let U = i.memo(k);
