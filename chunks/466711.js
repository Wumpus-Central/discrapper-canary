n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(996146),
    l = n(681715),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(644916),
    _ = n(243778),
    p = n(963249),
    h = n(998030),
    m = n(802408),
    g = n(909917),
    E = n(819640),
    b = n(594174),
    y = n(70956),
    O = n(709054),
    v = n(51144),
    I = n(713913),
    T = n(897291),
    S = n(443603),
    A = n(981631),
    C = n(921944),
    N = n(388032),
    R = n(30989),
    P = n(564355);
function D(e, t, n) {
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
function w(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let { tooltipsWithKeybinds: t } = I.n.useConfig({ location: "TrinketsAnimationButton" });
    return (0, r.jsx)(l.u, {
        shouldShow: t,
        text: N.intl.string(N.t.Ve9Ge6),
        children: (0, r.jsx)(S.Z, {
            className: P.button,
            "aria-label": N.intl.string(N.t.Z1RnTk),
            isActive: !1,
            noHover: !0,
            onClick: e.onClick,
            children: (0, r.jsx)("div", {
                className: R.iconContainer,
                children: e.hovered
                    ? (0, r.jsx)(c.Fmz, {
                          className: R.giftBoxIcon,
                          importData: e.config.getAnimationData,
                      })
                    : (0, r.jsx)(c.OgN, {}),
            }),
        }),
    });
}
function k(e) {
    let { Component: t, events: n, play: i } = (0, s.$)(),
        { tooltipsWithKeybinds: a } = I.n.useConfig({ location: "TrinketsAnimationButton" }),
        o = () => {
            var t;
            i(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(l.u, {
        shouldShow: a,
        text: N.intl.string(N.t.Ve9Ge6),
        children: (0, r.jsx)(
            S.Z,
            L(
                w(
                    {
                        className: P.button,
                        "aria-label": N.intl.string(N.t.Z1RnTk),
                        isActive: !1,
                        noHover: !0,
                        onClick: o,
                    },
                    n,
                ),
                {
                    children: (0, r.jsxs)("div", {
                        className: R.iconContainer,
                        children: [
                            (0, r.jsx)(t, {
                                className: R.trinketsIcon,
                                color: "currentColor",
                            }),
                            e.hovered &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.Fmz, {
                                            className: R.trinketsDecoration,
                                            importData: e.config.getAnimationData,
                                        }),
                                        (0, r.jsx)(c.Fmz, {
                                            className: R.trinketsGlow,
                                            importData: e.config.getGlowAnimationData,
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
let j = y.Z.Millis.DAYS_30;
function U(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: s, channel: l } = e,
        { analyticsLocations: c } = (0, d.ZP)(u.Z.GIFT_BUTTON),
        [y, I] = i.useState(!1),
        S = (0, a.e7)([E.Z], () => !(null === E.Z || void 0 === E.Z ? void 0 : E.Z.hasLayers())),
        N = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        P = null != N ? O.default.age(N.id) : 0,
        { giftBoxAnimation: D, trinketsAnimation: w } = null != (t = null == n ? void 0 : n.chatGiftIcon) ? t : {},
        x = null != n.firstTimeNotice && !s && S && P >= j,
        [L, U] = (0, _.XR)(
            x ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, f.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        G = null != L,
        B = y || G,
        Z = (0, v.Ft)(l),
        F = (0, h.yc)({ location: "gift-button" }),
        V = l.type === A.d4z.DM;
    if (s) return null;
    let H = () => {
            F && V && null != Z
                ? (0, g.Z)({
                      giftRecipient: Z,
                      analyticsLocations: c,
                      analyticsObject: {
                          page: l.isPrivate() ? A.ZY5.DM_CHANNEL : A.ZY5.GUILD_CHANNEL,
                          section: A.jXE.CHANNEL_TEXT_AREA,
                          object: A.qAy.BUTTON_ICON,
                          objectType: A.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, p.Z)({
                      isGift: !0,
                      giftRecipient: null == Z ? void 0 : Z,
                      initialPlanId: null,
                      analyticsLocations: c,
                      analyticsObject: {
                          page: l.isPrivate() ? A.ZY5.DM_CHANNEL : A.ZY5.GUILD_CHANNEL,
                          section: A.jXE.CHANNEL_TEXT_AREA,
                          object: A.qAy.GIFTING_PROMOTION_BUTTON,
                          objectType: A.AnalyticsObjectTypes.GIFT,
                      },
                  });
        },
        Y = () => {
            I(!1), U(C.L.TAKE_ACTION), H();
        },
        W =
            void 0 !== D
                ? (0, r.jsx)(M, {
                      config: D,
                      hovered: B,
                      onClick: Y,
                  })
                : void 0 !== w
                  ? (0, r.jsx)(k, {
                        config: w,
                        hovered: B,
                        onClick: Y,
                    })
                  : (0, r.jsx)(T.Z, {
                        disabled: s,
                        channel: l,
                    });
    return (0, r.jsx)("div", {
        className: R.container,
        onMouseEnter: () => {
            y || I(!0);
        },
        onMouseLeave: () => {
            I(!1);
        },
        children:
            void 0 !== n.firstTimeNotice && G
                ? (0, r.jsx)(m.Z, {
                      onComplete: () => I(!1),
                      onCheckItOutClick: H,
                      markAsDismissed: U,
                      config: n.firstTimeNotice,
                      children: W,
                  })
                : W,
    });
}
let G = i.memo(U);
