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
    h = n(644916),
    m = n(243778),
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
    w = n(897291),
    R = n(443603),
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
        children: (0, r.jsx)(R.Z, {
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
            R.Z,
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
    let { disabled: a, channel: u } = e,
        { analyticsLocations: d } = (0, _.ZP)(p.Z.GIFT_BUTTON),
        [f, T] = i.useState(!1),
        P = (0, l.e7)([S.Z], () => !(null === S.Z || void 0 === S.Z ? void 0 : S.Z.hasLayers())),
        R = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        L = null != R ? C.default.age(R.id) : 0,
        M = (0, l.e7)([y.Z], () => {
            let e = y.Z.getMarketingComponentByType(s.I.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        k = (0, l.e7)([y.Z], () => {
            let e = y.Z.getMarketingComponentByType(s.I.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        U = i.useMemo(() => {
            let e = null == M ? void 0 : M.gradient;
            if (null == e || null == e.colors || e.colors.length < 2) return;
            let t = (0, E.Tl)(
                {
                    gradient: e.colors,
                    angle: e.angle,
                },
                { defaultAngle: 180 },
            );
            if ((null == t ? void 0 : t.background) != null) return { "--custom-promotion-gradient": t.background };
        }, [null == M ? void 0 : M.gradient]),
        G = !(0, A.Ew)(null == M ? void 0 : M.boxAnimationUrl),
        Z =
            (!(0, A.Ew)(null == M ? void 0 : M.trinketAnimationUrl) ||
                !(0, A.Ew)(null == M ? void 0 : M.trinketGlowAnimationUrl)) &&
            !G,
        H = null != k && !a && P && L >= V,
        [Y, W] = (0, m.XR)(
            H ? c.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, h.t)(c.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        K = null != Y,
        z = f || K,
        q = (0, N.Ft)(u),
        Q = u.type === D.d4z.DM,
        X = (0, v.ao)({
            location: "gift-promotion-button",
            isGift: !0,
            giftRecipient: q,
        });
    if (a) return null;
    let J = () => {
            X && Q && null != q
                ? (0, O.Z)({
                      giftRecipient: q,
                      analyticsLocations: d,
                      analyticsObject: {
                          page: u.isPrivate() ? D.ZY5.DM_CHANNEL : D.ZY5.GUILD_CHANNEL,
                          section: D.jXE.CHANNEL_TEXT_AREA,
                          object: D.qAy.BUTTON_ICON,
                          objectType: D.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, g.Z)({
                      isGift: !0,
                      giftRecipient: null == q ? void 0 : q,
                      initialPlanId: null,
                      analyticsLocations: d,
                      analyticsObject: {
                          page: u.isPrivate() ? D.ZY5.DM_CHANNEL : D.ZY5.GUILD_CHANNEL,
                          section: D.jXE.CHANNEL_TEXT_AREA,
                          object: D.qAy.GIFTING_PROMOTION_BUTTON,
                          objectType: D.AnalyticsObjectTypes.GIFT,
                      },
                  });
        },
        $ = () => {
            T(!1), W(x.L.TAKE_ACTION), J();
        },
        ee =
            G && (null == M ? void 0 : M.boxAnimationUrl) != null
                ? (0, r.jsx)(F, {
                      boxAnimationUrl: M.boxAnimationUrl,
                      hovered: z,
                      onClick: $,
                  })
                : Z
                  ? (0, r.jsx)(B, {
                        trinketAnimationUrl: null != (t = null == M ? void 0 : M.trinketAnimationUrl) ? t : null,
                        trinketGlowAnimationUrl:
                            null != (n = null == M ? void 0 : M.trinketGlowAnimationUrl) ? n : null,
                        hovered: z,
                        onClick: $,
                    })
                  : (0, r.jsx)(w.Z, {
                        disabled: a,
                        channel: u,
                    });
    return (0, r.jsx)("div", {
        className: o()(j.container, { [j.containerHovered]: z }),
        style: U,
        onMouseEnter: () => {
            f || T(!0);
        },
        onMouseLeave: () => {
            T(!1);
        },
        children: K
            ? (0, r.jsx)(b.Z, {
                  onComplete: () => T(!1),
                  onCheckItOutClick: J,
                  markAsDismissed: W,
                  coachmarkConfig: k,
                  children: ee,
              })
            : ee,
    });
}
let Y = i.memo(H);
