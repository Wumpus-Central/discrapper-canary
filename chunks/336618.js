"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(877624),
    l = n(311907),
    u = n(554146),
    c = n(397927),
    d = n(793574),
    _ = n(688810),
    f = n(932001),
    p = n(810498),
    h = n(233971),
    m = n(40493),
    E = n(412260),
    g = n(186111),
    A = n(287809),
    I = n(927813),
    T = n(661191),
    S = n(240248),
    y = n(427262),
    v = n(743477),
    N = n(545428),
    C = n(652215),
    R = n(49999),
    O = n(985018),
    b = n(849353),
    D = n(266599);
function L(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(N.A, {
        className: D.x6,
        "aria-label": O.intl.string(O.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: b.zc,
            children: e.hovered ? (0, r.jsx)(c.akl, { className: b.Hl, importData: t }) : (0, r.jsx)(c.okO, {}),
        }),
    });
}
function w(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        n = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]),
        s = () => {
            e.onClick?.();
        },
        o = i.useRef(null);
    return (0, r.jsx)(N.A, {
        className: D.x6,
        "aria-label": O.intl.string(O.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: s,
        ref: o,
        children: (0, r.jsxs)("div", {
            className: b.zc,
            children: [
                (0, r.jsx)(c.xBs, {
                    autoPause: !0,
                    listenOnDocumentBody: !0,
                    className: a()(b.is, c.d5l.refresh_sm),
                    dataBinding: { fill: "currentColor" },
                    eventTargetRef: o,
                }),
                e.hovered &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, r.jsx)(c.akl, { className: b.rY, importData: t }),
                            null != e.trinketGlowAnimationUrl && (0, r.jsx)(c.akl, { className: b.c5, importData: n }),
                        ],
                    }),
            ],
        }),
    });
}
let M = I.A.Millis.DAYS_30;
function P(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: s } = (0, _.Ay)(d.A.GIFT_BUTTON),
        [c, I] = i.useState(!1),
        N = (0, l.bG)([g.A], () => !g.A?.hasLayers()),
        O = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        D = null != O ? T.default.age(O.id) : 0,
        P = (0, l.bG)([E.A], () => {
            let e = E.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        x = (0, l.bG)([E.A], () => {
            let e = E.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        k = P?.gradient,
        U =
            null != k && null != k.colors && k.colors.length >= 2
                ? (0, p.K5)({ gradient: k.colors, angle: k.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        G = i.useMemo(() => {
            if (U?.background != null) return { "--custom-promotion-gradient": U.background };
        }, [U]),
        F = !(0, S.uJ)(P?.boxAnimationUrl),
        V = (!(0, S.uJ)(P?.trinketAnimationUrl) || !(0, S.uJ)(P?.trinketGlowAnimationUrl)) && !F,
        B = (0, l.bG)([E.A], () => E.A.getGiftPromotion()?.id),
        H = null != x && !t && N && D >= M && null != B,
        [j, Y] = (0, f.Cc)(H ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, B ?? ""),
        W = null != j,
        K = c || W,
        $ = (0, y.R1)(n),
        { openGiftModal: z } = (0, h.$)({
            giftRecipient: $,
            analyticsLocations: s,
            analyticsObject: {
                page: n.isPrivate() ? C.liQ.DM_CHANNEL : C.liQ.GUILD_CHANNEL,
                section: C.JJy.CHANNEL_TEXT_AREA,
                object: C.ZSU.GIFTING_PROMOTION_BUTTON,
                objectType: C.AnalyticsObjectTypes.GIFT,
            },
            wishlistAnalyticsObject: {
                page: n.isPrivate() ? C.liQ.DM_CHANNEL : C.liQ.GUILD_CHANNEL,
                section: C.JJy.CHANNEL_TEXT_AREA,
                object: C.ZSU.BUTTON_ICON,
                objectType: C.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-promotion-button",
        });
    if (t) return null;
    let q = () => {
            I(!1), Y(R.i.TAKE_ACTION), z();
        },
        Z =
            F && P?.boxAnimationUrl != null
                ? (0, r.jsx)(L, { boxAnimationUrl: P.boxAnimationUrl, hovered: K, onClick: q })
                : V
                  ? (0, r.jsx)(w, {
                        trinketAnimationUrl: P?.trinketAnimationUrl ?? null,
                        trinketGlowAnimationUrl: P?.trinketGlowAnimationUrl ?? null,
                        hovered: K,
                        onClick: q,
                    })
                  : (0, r.jsx)(v.A, { disabled: t, channel: n });
    return (0, r.jsx)("div", {
        className: a()(b.kL, { [b.DM]: K }),
        style: G,
        onMouseEnter: () => {
            c || I(!0);
        },
        onMouseLeave: () => {
            I(!1);
        },
        children: W
            ? (0, r.jsx)(m.A, {
                  onComplete: () => I(!1),
                  onCheckItOutClick: z,
                  markAsDismissed: Y,
                  coachmarkConfig: x,
                  children: Z,
              })
            : Z,
    });
}
let x = i.memo(P);
