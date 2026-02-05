"use strict";
n.d(t, { A: () => V });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877624),
    l = n(311907),
    u = n(554146),
    c = n(533781),
    d = n(397927),
    _ = n(793574),
    f = n(688810),
    p = n(357186),
    h = n(379848),
    m = n(532794),
    g = n(810498),
    E = n(40493),
    A = n(412260),
    I = n(404036),
    T = n(594832),
    y = n(186111),
    S = n(287809),
    v = n(927813),
    C = n(661191),
    b = n(240248),
    N = n(427262),
    R = n(743477),
    O = n(545428),
    D = n(652215),
    L = n(49999),
    w = n(985018),
    x = n(455424),
    P = n(111314);
function M(e) {
    let t = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(O.A, {
        className: P.x6,
        "aria-label": w.intl.string(w.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: x.zc,
            children: e.hovered ? (0, r.jsx)(d.akl, { className: x.Hl, importData: t }) : (0, r.jsx)(d.okO, {}),
        }),
    });
}
function k(e) {
    let { Component: t, events: n, play: a } = (0, c.T)(),
        s = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        o = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]),
        l = () => {
            a(), e.onClick?.();
        };
    return (0, r.jsx)(O.A, {
        className: P.x6,
        "aria-label": w.intl.string(w.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: l,
        ...n,
        children: (0, r.jsxs)("div", {
            className: x.zc,
            children: [
                (0, r.jsx)(t, { className: x.is, color: "currentColor" }),
                e.hovered &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != e.trinketAnimationUrl && (0, r.jsx)(d.akl, { className: x.rY, importData: s }),
                            null != e.trinketGlowAnimationUrl && (0, r.jsx)(d.akl, { className: x.c5, importData: o }),
                        ],
                    }),
            ],
        }),
    });
}
let U = v.A.Millis.DAYS_30;
function G(e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: a } = (0, f.Ay)(_.A.GIFT_BUTTON),
        [c, d] = i.useState(!1),
        v = (0, l.bG)([y.A], () => !y.A?.hasLayers()),
        O = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
        w = null != O ? C.default.age(O.id) : 0,
        P = (0, l.bG)([A.A], () => {
            let e = A.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        G = (0, l.bG)([A.A], () => {
            let e = A.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        V = P?.gradient,
        F =
            null != V && null != V.colors && V.colors.length >= 2
                ? (0, g.K5)({ gradient: V.colors, angle: V.angle ?? void 0 }, { defaultAngle: 180 })
                : void 0,
        B = i.useMemo(() => {
            if (F?.background != null) return { "--custom-promotion-gradient": F.background };
        }, [F]),
        j = !(0, b.uJ)(P?.boxAnimationUrl),
        H = (!(0, b.uJ)(P?.trinketAnimationUrl) || !(0, b.uJ)(P?.trinketGlowAnimationUrl)) && !j,
        Y = null != G && !t && v && w >= U,
        [W, K] = (0, h.RF)(
            Y ? u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, p.c)(u.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        z = null != W,
        $ = c || z,
        q = (0, N.R1)(n),
        Z = n.type === D.rbe.DM,
        Q = (0, T.tA)({ location: "gift-promotion-button", isGift: !0, giftRecipient: q });
    if (t) return null;
    let X = () => {
            Q && Z && null != q
                ? (0, I.A)({
                      giftRecipient: q,
                      analyticsLocations: a,
                      analyticsObject: {
                          page: n.isPrivate() ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                          section: D.JJy.CHANNEL_TEXT_AREA,
                          object: D.ZSU.BUTTON_ICON,
                          objectType: D.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, m.A)({
                      isGift: !0,
                      giftRecipient: null == q ? void 0 : q,
                      initialPlanId: null,
                      analyticsLocations: a,
                      analyticsObject: {
                          page: n.isPrivate() ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                          section: D.JJy.CHANNEL_TEXT_AREA,
                          object: D.ZSU.GIFTING_PROMOTION_BUTTON,
                          objectType: D.AnalyticsObjectTypes.GIFT,
                      },
                  });
        },
        J = () => {
            d(!1), K(L.i.TAKE_ACTION), X();
        },
        ee =
            j && P?.boxAnimationUrl != null
                ? (0, r.jsx)(M, { boxAnimationUrl: P.boxAnimationUrl, hovered: $, onClick: J })
                : H
                  ? (0, r.jsx)(k, {
                        trinketAnimationUrl: P?.trinketAnimationUrl ?? null,
                        trinketGlowAnimationUrl: P?.trinketGlowAnimationUrl ?? null,
                        hovered: $,
                        onClick: J,
                    })
                  : (0, r.jsx)(R.A, { disabled: t, channel: n });
    return (0, r.jsx)("div", {
        className: s()(x.kL, { [x.DM]: $ }),
        style: B,
        onMouseEnter: () => {
            c || d(!0);
        },
        onMouseLeave: () => {
            d(!1);
        },
        children: z
            ? (0, r.jsx)(E.A, {
                  onComplete: () => d(!1),
                  onCheckItOutClick: X,
                  markAsDismissed: K,
                  coachmarkConfig: G,
                  children: ee,
              })
            : ee,
    });
}
let V = i.memo(G);
