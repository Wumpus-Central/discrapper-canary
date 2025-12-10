n.d(t, { Z: () => B }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(996146),
    u = n(681715),
    d = n(481060),
    f = n(100527),
    p = n(906732),
    _ = n(644916),
    m = n(243778),
    h = n(963249),
    g = n(802408),
    E = n(909917),
    b = n(602733),
    y = n(819640),
    O = n(594174),
    v = n(70956),
    S = n(709054),
    I = n(51144),
    T = n(713913),
    C = n(897291),
    A = n(443603),
    N = n(981631),
    P = n(921944),
    R = n(388032),
    D = n(30989),
    w = n(564355);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let { tooltipsWithKeybinds: t } = T.n.useConfig({ location: "TrinketsAnimationButton" });
    return (0, r.jsx)(u.u, {
        shouldShow: t,
        text: R.intl.string(R.t.Ve9Ge6),
        children: (0, r.jsx)(A.Z, {
            className: w.button,
            "aria-label": R.intl.string(R.t.Z1RnTk),
            isActive: !1,
            noHover: !0,
            onClick: e.onClick,
            children: (0, r.jsx)("div", {
                className: D.iconContainer,
                children: e.hovered
                    ? (0, r.jsx)(d.Fmz, {
                          className: D.giftBoxIcon,
                          importData: e.config.getAnimationData,
                      })
                    : (0, r.jsx)(d.OgN, {}),
            }),
        }),
    });
}
function U(e) {
    let { Component: t, events: n, play: i } = (0, c.$)(),
        { tooltipsWithKeybinds: a } = T.n.useConfig({ location: "TrinketsAnimationButton" }),
        o = () => {
            var t;
            i(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(u.u, {
        shouldShow: a,
        text: R.intl.string(R.t.Ve9Ge6),
        children: (0, r.jsx)(
            A.Z,
            M(
                L(
                    {
                        className: w.button,
                        "aria-label": R.intl.string(R.t.Z1RnTk),
                        isActive: !1,
                        noHover: !0,
                        onClick: o,
                    },
                    n,
                ),
                {
                    children: (0, r.jsxs)("div", {
                        className: D.iconContainer,
                        children: [
                            (0, r.jsx)(t, {
                                className: D.trinketsIcon,
                                color: "currentColor",
                            }),
                            e.hovered &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(d.Fmz, {
                                            className: D.trinketsDecoration,
                                            importData: e.config.getAnimationData,
                                        }),
                                        (0, r.jsx)(d.Fmz, {
                                            className: D.trinketsGlow,
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
let G = v.Z.Millis.DAYS_30;
function Z(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: a, channel: c } = e,
        { analyticsLocations: u } = (0, p.ZP)(f.Z.GIFT_BUTTON),
        [d, v] = i.useState(!1),
        T = (0, s.e7)([y.Z], () => !(null === y.Z || void 0 === y.Z ? void 0 : y.Z.hasLayers())),
        A = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        R = null != A ? S.default.age(A.id) : 0,
        { giftBoxAnimation: w, trinketsAnimation: x } = null != (t = null == n ? void 0 : n.chatGiftIcon) ? t : {},
        L = null != n.firstTimeNotice && !a && T && R >= G,
        [j, M] = (0, m.XR)(
            L ? l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, _.t)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        Z = null != j,
        B = d || Z,
        F = (0, I.Ft)(c),
        V = c.type === N.d4z.DM,
        H = (0, b.ao)({
            location: "gift-promotion-button",
            isGift: !0,
            giftRecipient: F,
        });
    if (a) return null;
    let Y = () => {
            H && V && null != F
                ? (0, E.Z)({
                      giftRecipient: F,
                      analyticsLocations: u,
                      analyticsObject: {
                          page: c.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
                          section: N.jXE.CHANNEL_TEXT_AREA,
                          object: N.qAy.BUTTON_ICON,
                          objectType: N.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, h.Z)({
                      isGift: !0,
                      giftRecipient: null == F ? void 0 : F,
                      initialPlanId: null,
                      analyticsLocations: u,
                      analyticsObject: {
                          page: c.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
                          section: N.jXE.CHANNEL_TEXT_AREA,
                          object: N.qAy.GIFTING_PROMOTION_BUTTON,
                          objectType: N.AnalyticsObjectTypes.GIFT,
                      },
                  });
        },
        W = () => {
            v(!1), M(P.L.TAKE_ACTION), Y();
        },
        K =
            void 0 !== w
                ? (0, r.jsx)(k, {
                      config: w,
                      hovered: B,
                      onClick: W,
                  })
                : void 0 !== x
                  ? (0, r.jsx)(U, {
                        config: x,
                        hovered: B,
                        onClick: W,
                    })
                  : (0, r.jsx)(C.Z, {
                        disabled: a,
                        channel: c,
                    });
    return (0, r.jsx)("div", {
        className: o()(D.container, { [D.containerHovered]: B }),
        onMouseEnter: () => {
            d || v(!0);
        },
        onMouseLeave: () => {
            v(!1);
        },
        children:
            void 0 !== n.firstTimeNotice && Z
                ? (0, r.jsx)(g.Z, {
                      onComplete: () => v(!1),
                      onCheckItOutClick: Y,
                      markAsDismissed: M,
                      config: n.firstTimeNotice,
                      children: K,
                  })
                : K,
    });
}
let B = i.memo(Z);
