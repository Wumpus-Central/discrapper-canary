n.d(t, { Z: () => Y }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(79766),
    l = n(442837),
    c = n(704215),
    u = n(996146),
    d = n(681715),
    f = n(481060),
    p = n(100527),
    _ = n(906732),
    m = n(644916),
    h = n(243778),
    g = n(963249),
    E = n(717401),
    b = n(802408),
    y = n(1844),
    O = n(909917),
    v = n(602733),
    S = n(819640),
    I = n(594174),
    T = n(70956),
    C = n(709054),
    A = n(624138),
    N = n(51144),
    P = n(713913),
    R = n(897291),
    w = n(443603),
    D = n(981631),
    x = n(921944),
    L = n(388032),
    j = n(124907),
    M = n(72775);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function Z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function F(e) {
    let { tooltipsWithKeybinds: t } = P.n.useConfig({ location: "GiftBoxAnimationButton" }),
        n = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(d.u, {
        shouldShow: t,
        text: L.intl.string(L.t.Ve9Ge6),
        children: (0, r.jsx)(w.Z, {
            className: M.button,
            "aria-label": L.intl.string(L.t.Z1RnTk),
            isActive: !1,
            noHover: !0,
            onClick: e.onClick,
            children: (0, r.jsx)("div", {
                className: j.iconContainer,
                children: e.hovered
                    ? (0, r.jsx)(f.Fmz, {
                          className: j.giftBoxIcon,
                          importData: n,
                      })
                    : (0, r.jsx)(f.OgN, {}),
            }),
        }),
    });
}
function B(e) {
    let { Component: t, events: n, play: a } = (0, u.$)(),
        { tooltipsWithKeybinds: o } = P.n.useConfig({ location: "TrinketsAnimationButton" }),
        s = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        l = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]),
        c = () => {
            var t;
            a(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(d.u, {
        shouldShow: o,
        text: L.intl.string(L.t.Ve9Ge6),
        children: (0, r.jsx)(
            w.Z,
            Z(
                U(
                    {
                        className: M.button,
                        "aria-label": L.intl.string(L.t.Z1RnTk),
                        isActive: !1,
                        noHover: !0,
                        onClick: c,
                    },
                    n,
                ),
                {
                    children: (0, r.jsxs)("div", {
                        className: j.iconContainer,
                        children: [
                            (0, r.jsx)(t, {
                                className: j.trinketsIcon,
                                color: "currentColor",
                            }),
                            e.hovered &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != e.trinketAnimationUrl &&
                                            (0, r.jsx)(f.Fmz, {
                                                className: j.trinketsDecoration,
                                                importData: s,
                                            }),
                                        null != e.trinketGlowAnimationUrl &&
                                            (0, r.jsx)(f.Fmz, {
                                                className: j.trinketsGlow,
                                                importData: l,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                },
            ),
        ),
    });
}
let V = T.Z.Millis.DAYS_30;
function H(e) {
    var t, n;
    let { giftingPromotionConfig: a, disabled: u, channel: d } = e,
        { analyticsLocations: f } = (0, _.ZP)(p.Z.GIFT_BUTTON),
        [T, P] = i.useState(!1),
        w = (0, l.e7)([S.Z], () => !(null === S.Z || void 0 === S.Z ? void 0 : S.Z.hasLayers())),
        L = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        M = null != L ? C.default.age(L.id) : 0,
        k = (0, l.e7)([y.Z], () => {
            let e = y.Z.getMarketingComponentByType(s.I.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        U = i.useMemo(() => {
            let e = null == k ? void 0 : k.gradient;
            if (null == e || null == e.colors || e.colors.length < 2) return;
            let t = (0, E.Tl)(
                {
                    gradient: e.colors,
                    angle: e.angle,
                },
                { defaultAngle: 180 },
            );
            if ((null == t ? void 0 : t.background) != null) return { "--custom-promotion-gradient": t.background };
        }, [null == k ? void 0 : k.gradient]),
        G = !(0, A.Ew)(null == k ? void 0 : k.boxAnimationUrl),
        Z =
            (!(0, A.Ew)(null == k ? void 0 : k.trinketAnimationUrl) ||
                !(0, A.Ew)(null == k ? void 0 : k.trinketGlowAnimationUrl)) &&
            !G,
        H = null != a.firstTimeNotice && !u && w && M >= V,
        [Y, W] = (0, h.XR)(
            H ? c.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, m.t)(c.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        K = null != Y,
        z = T || K,
        q = (0, N.Ft)(d),
        Q = d.type === D.d4z.DM,
        X = (0, v.ao)({
            location: "gift-promotion-button",
            isGift: !0,
            giftRecipient: q,
        });
    if (u) return null;
    let J = () => {
            X && Q && null != q
                ? (0, O.Z)({
                      giftRecipient: q,
                      analyticsLocations: f,
                      analyticsObject: {
                          page: d.isPrivate() ? D.ZY5.DM_CHANNEL : D.ZY5.GUILD_CHANNEL,
                          section: D.jXE.CHANNEL_TEXT_AREA,
                          object: D.qAy.BUTTON_ICON,
                          objectType: D.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, g.Z)({
                      isGift: !0,
                      giftRecipient: null == q ? void 0 : q,
                      initialPlanId: null,
                      analyticsLocations: f,
                      analyticsObject: {
                          page: d.isPrivate() ? D.ZY5.DM_CHANNEL : D.ZY5.GUILD_CHANNEL,
                          section: D.jXE.CHANNEL_TEXT_AREA,
                          object: D.qAy.GIFTING_PROMOTION_BUTTON,
                          objectType: D.AnalyticsObjectTypes.GIFT,
                      },
                  });
        },
        $ = () => {
            P(!1), W(x.L.TAKE_ACTION), J();
        },
        ee =
            G && (null == k ? void 0 : k.boxAnimationUrl) != null
                ? (0, r.jsx)(F, {
                      boxAnimationUrl: k.boxAnimationUrl,
                      hovered: z,
                      onClick: $,
                  })
                : Z
                  ? (0, r.jsx)(B, {
                        trinketAnimationUrl: null != (t = null == k ? void 0 : k.trinketAnimationUrl) ? t : null,
                        trinketGlowAnimationUrl:
                            null != (n = null == k ? void 0 : k.trinketGlowAnimationUrl) ? n : null,
                        hovered: z,
                        onClick: $,
                    })
                  : (0, r.jsx)(R.Z, {
                        disabled: u,
                        channel: d,
                    });
    return (0, r.jsx)("div", {
        className: o()(j.container, { [j.containerHovered]: z }),
        style: U,
        onMouseEnter: () => {
            T || P(!0);
        },
        onMouseLeave: () => {
            P(!1);
        },
        children:
            void 0 !== a.firstTimeNotice && K
                ? (0, r.jsx)(b.Z, {
                      onComplete: () => P(!1),
                      onCheckItOutClick: J,
                      markAsDismissed: W,
                      config: a.firstTimeNotice,
                      children: ee,
                  })
                : ee,
    });
}
let Y = i.memo(H);
