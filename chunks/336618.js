"use strict";
n.d(t, { A: () => k });
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
    f = n(357186),
    p = n(379848),
    h = n(979474),
    m = n(810498),
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
    b = n(652215),
    R = n(49999),
    O = n(985018),
    D = n(455424),
    L = n(111314);
function w(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(C.A, {
        className: L.x6,
        "aria-label": O.intl.string(O.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: D.zc,
            children: e.hovered ? (0, r.jsx)(c.akl, { className: D.Hl, importData: t }) : (0, r.jsx)(c.okO, {}),
        }),
    });
}
function x(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        n = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]),
        s = () => {
            e.onClick?.();
        },
        o = i.useRef(null);
    return (0, r.jsx)(C.A, {
        className: L.x6,
        "aria-label": O.intl.string(O.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: s,
        ref: o,
        children: (0, r.jsxs)("div", {
            className: D.zc,
            children: [
                (0, r.jsx)(c.xBs, {
                    listenOnDocumentBody: !0,
                    className: a()(D.is, c.d5l.refresh_sm),
                    dataBinding: { fill: "currentColor" },
                    eventTargetRef: o,
                }),
                e.hovered &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, r.jsx)(c.akl, { className: D.rY, importData: t }),
                            null != e.trinketGlowAnimationUrl && (0, r.jsx)(c.akl, { className: D.c5, importData: n }),
                        ],
                    }),
            ],
        }),
    });
}
let M = T.A.Millis.DAYS_30;
function P(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: s } = (0, _.Ay)(d.A.GIFT_BUTTON),
        [c, T] = i.useState(!1),
        C = (0, l.bG)([A.A], () => !A.A?.hasLayers()),
        O = (0, l.bG)([I.default], () => I.default.getCurrentUser()),
        L = null != O ? S.default.age(O.id) : 0,
        P = (0, l.bG)([g.A], () => {
            let e = g.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        k = (0, l.bG)([g.A], () => {
            let e = g.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        U = P?.gradient,
        G =
            null != U && null != U.colors && U.colors.length >= 2
                ? (0, m.K5)({ gradient: U.colors, angle: U.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        F = i.useMemo(() => {
            if (G?.background != null) return { "--custom-promotion-gradient": G.background };
        }, [G]),
        V = !(0, y.uJ)(P?.boxAnimationUrl),
        B = (!(0, y.uJ)(P?.trinketAnimationUrl) || !(0, y.uJ)(P?.trinketGlowAnimationUrl)) && !V,
        H = null != k && !t && C && L >= M,
        [j, Y] = (0, p.RF)(
            H ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, f.c)(u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        W = null != j,
        K = c || W,
        z = (0, v.R1)(n),
        $ = n.type === b.rbe.DM,
        { openGiftModal: q } = (0, h.$)({
            giftRecipient: z,
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
            isDmChannel: $,
            location: "gift-promotion-button",
        });
    if (t) return null;
    let X = () => {
            T(!1), Y(R.i.TAKE_ACTION), q();
        },
        Z =
            V && P?.boxAnimationUrl != null
                ? (0, r.jsx)(w, { boxAnimationUrl: P.boxAnimationUrl, hovered: K, onClick: X })
                : B
                  ? (0, r.jsx)(x, {
                        trinketAnimationUrl: P?.trinketAnimationUrl ?? null,
                        trinketGlowAnimationUrl: P?.trinketGlowAnimationUrl ?? null,
                        hovered: K,
                        onClick: X,
                    })
                  : (0, r.jsx)(N.A, { disabled: t, channel: n });
    return (0, r.jsx)("div", {
        className: a()(D.kL, { [D.DM]: K }),
        style: F,
        onMouseEnter: () => {
            c || T(!0);
        },
        onMouseLeave: () => {
            T(!1);
        },
        children: W
            ? (0, r.jsx)(E.A, {
                  onComplete: () => T(!1),
                  onCheckItOutClick: q,
                  markAsDismissed: Y,
                  coachmarkConfig: k,
                  children: Z,
              })
            : Z,
    });
}
let k = i.memo(P);
