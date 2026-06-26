"use strict";
n.d(t, { A: () => U });
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
    h = n(942857),
    f = n(775602),
    p = n(793574),
    E = n(688810),
    m = n(131607),
    g = n(380619),
    A = n(751188),
    I = n(40493),
    T = n(374200),
    S = n(287809),
    y = n(927813),
    C = n(935208),
    N = n(240248),
    v = n(427262),
    R = n(743477),
    O = n(767089),
    b = n(652215),
    D = n(49999),
    L = n(375708),
    w = n(767881),
    M = n(871655);
function P(e) {
    let t = r.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, i.jsx)(O.A, {
        className: M.x6,
        "aria-label": L.intl.string(L.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, i.jsx)("div", {
            className: w.zc,
            children: e.hovered ? (0, i.jsx)(d.a, { className: w.Hl, importData: t }) : (0, i.jsx)(_.o, {}),
        }),
    });
}
function x(e) {
    let { Component: t, events: n, play: r } = (0, c.T)(),
        s = (0, l.bG)([f.Ay], () => f.Ay.useReducedMotion);
    return (0, i.jsxs)(O.A, {
        className: M.x6,
        "aria-label": L.intl.string(L.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: function () {
            r(), e.onClick?.();
        },
        ...n,
        children: [
            (0, i.jsx)("div", { className: w.zc, children: (0, i.jsx)(t, { className: w.is, color: "currentColor" }) }),
            e.hovered && !s && (0, i.jsx)("img", { className: w.rY, src: e.trinketAnimationUrl, alt: "" }),
        ],
    });
}
let k = y.A.Millis.DAYS_30,
    U = r.memo(function (e) {
        let { disabled: t, channel: n } = e,
            { analyticsLocations: s } = (0, E.Ay)(p.A.GIFT_BUTTON),
            [c, d] = r.useState(!1),
            _ = (0, h.A)(),
            f = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
            y = null != f ? C.default.age(f.id) : 0,
            O = (0, l.bG)([T.A], () => {
                let e = T.A.getMarketingComponentByType(o.C.GIFT_ICON);
                return null == e || "giftIcon" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIcon;
            }),
            L = (0, l.bG)([T.A], () => {
                let e = T.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
                return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.giftIconCoachmark;
            }),
            M = O?.gradient,
            U =
                null != M && null != M.colors && M.colors.length >= 2
                    ? (0, g.K5)({ gradient: M.colors, angle: M.angle ?? void 0 }, { defaultAngle: 180 })
                    : void 0,
            G = r.useMemo(() => {
                if (U?.background != null) return { "--custom-promotion-gradient": U.background };
            }, [U]),
            F = !(0, N.uJ)(O?.boxAnimationUrl),
            V = !(0, N.uJ)(O?.trinketAnimationUrl) && !F,
            B = (0, l.bG)([T.A], () => T.A.getGiftPromotion()?.id),
            j = null != L && !t && !_ && y >= k && null != B,
            [H, Y] = (0, m.Cc)(j ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, B ?? ""),
            W = null != H,
            K = c || W,
            $ = (0, v.R1)(n),
            { openGiftModal: z } = (0, A.$)({
                giftRecipient: $,
                analyticsLocations: s,
                analyticsObject: {
                    page: n.isPrivate() ? b.liQ.DM_CHANNEL : b.liQ.GUILD_CHANNEL,
                    section: b.JJy.CHANNEL_TEXT_AREA,
                    object: b.ZSU.GIFTING_PROMOTION_BUTTON,
                    objectType: b.AnalyticsObjectTypes.GIFT,
                },
                wishlistAnalyticsObject: {
                    page: n.isPrivate() ? b.liQ.DM_CHANNEL : b.liQ.GUILD_CHANNEL,
                    section: b.JJy.CHANNEL_TEXT_AREA,
                    object: b.ZSU.BUTTON_ICON,
                    objectType: b.AnalyticsObjectTypes.GIFT,
                },
                location: "gift-promotion-button",
            });
        if (t) return null;
        function q() {
            d(!1), Y(D.i.TAKE_ACTION), z();
        }
        let Z =
            F && O?.boxAnimationUrl != null
                ? (0, i.jsx)(P, { boxAnimationUrl: O.boxAnimationUrl, hovered: K, onClick: q })
                : V && O?.trinketAnimationUrl != null
                  ? (0, i.jsx)(x, { trinketAnimationUrl: O.trinketAnimationUrl, hovered: K, onClick: q })
                  : (0, i.jsx)(R.A, { disabled: t, channel: n });
        return (0, i.jsx)("div", {
            className: a()(w.kL, { [w.DM]: K }),
            style: G,
            onMouseEnter: () => {
                c || d(!0);
            },
            onMouseLeave: () => {
                d(!1);
            },
            children: W
                ? (0, i.jsx)(I.A, {
                      onComplete: () => d(!1),
                      onCheckItOutClick: z,
                      markAsDismissed: Y,
                      coachmarkConfig: L,
                      children: Z,
                  })
                : Z,
        });
    });
