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
    h = n(379848),
    m = n(979474),
    E = n(810498),
    g = n(40493),
    A = n(412260),
    I = n(186111),
    T = n(287809),
    S = n(927813),
    y = n(661191),
    v = n(240248),
    N = n(427262),
    C = n(743477),
    b = n(545428),
    R = n(652215),
    O = n(49999),
    D = n(985018),
    L = n(455424),
    w = n(111314);
function x(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(b.A, {
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
function M(e) {
    let { Component: t, events: n, play: s } = (0, c.T)(),
        a = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        o = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]),
        l = () => {
            s(), e.onClick?.();
        };
    return (0, r.jsx)(b.A, {
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
let P = S.A.Millis.DAYS_30;
function k(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: s } = (0, f.Ay)(_.A.GIFT_BUTTON),
        [c, d] = i.useState(!1),
        S = (0, l.bG)([I.A], () => !I.A?.hasLayers()),
        b = (0, l.bG)([T.default], () => T.default.getCurrentUser()),
        D = null != b ? y.default.age(b.id) : 0,
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
                ? (0, E.K5)({ gradient: U.colors, angle: U.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        F = i.useMemo(() => {
            if (G?.background != null) return { "--custom-promotion-gradient": G.background };
        }, [G]),
        V = !(0, v.uJ)(w?.boxAnimationUrl),
        B = (!(0, v.uJ)(w?.trinketAnimationUrl) || !(0, v.uJ)(w?.trinketGlowAnimationUrl)) && !V,
        H = null != k && !t && S && D >= P,
        [j, Y] = (0, h.RF)(
            H ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, p.c)(u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        W = null != j,
        K = c || W,
        z = (0, N.R1)(n),
        $ = n.type === R.rbe.DM,
        { openGiftModal: q } = (0, m.$)({
            giftRecipient: z,
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
            isDmChannel: $,
            location: "gift-promotion-button",
        });
    if (t) return null;
    let X = () => {
            d(!1), Y(O.i.TAKE_ACTION), q();
        },
        Z =
            V && w?.boxAnimationUrl != null
                ? (0, r.jsx)(x, { boxAnimationUrl: w.boxAnimationUrl, hovered: K, onClick: X })
                : B
                  ? (0, r.jsx)(M, {
                        trinketAnimationUrl: w?.trinketAnimationUrl ?? null,
                        trinketGlowAnimationUrl: w?.trinketGlowAnimationUrl ?? null,
                        hovered: K,
                        onClick: X,
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
                  onCheckItOutClick: q,
                  markAsDismissed: Y,
                  coachmarkConfig: k,
                  children: Z,
              })
            : Z,
    });
}
let U = i.memo(k);
