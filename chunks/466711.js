n.d(t, { Z: () => Z }), n(388685);
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
    _ = n(906732),
    p = n(644916),
    h = n(243778),
    m = n(963249),
    g = n(998030),
    E = n(802408),
    b = n(909917),
    y = n(819640),
    O = n(594174),
    v = n(70956),
    I = n(709054),
    T = n(51144),
    S = n(713913),
    A = n(897291),
    C = n(443603),
    N = n(981631),
    R = n(921944),
    P = n(388032),
    D = n(276088),
    w = n(744114);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let { tooltipsWithKeybinds: t } = S.n.useConfig({ location: "TrinketsAnimationButton" });
    return (0, r.jsx)(u.u, {
        shouldShow: t,
        text: P.intl.string(P.t.Ve9Ge6),
        children: (0, r.jsx)(C.Z, {
            className: w.button,
            "aria-label": P.intl.string(P.t.Z1RnTk),
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
        { tooltipsWithKeybinds: a } = S.n.useConfig({ location: "TrinketsAnimationButton" }),
        o = () => {
            var t;
            i(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(u.u, {
        shouldShow: a,
        text: P.intl.string(P.t.Ve9Ge6),
        children: (0, r.jsx)(
            C.Z,
            j(
                x(
                    {
                        className: w.button,
                        "aria-label": P.intl.string(P.t.Z1RnTk),
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
function B(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: a, channel: c } = e,
        { analyticsLocations: u } = (0, _.ZP)(f.Z.GIFT_BUTTON),
        [d, v] = i.useState(!1),
        S = (0, s.e7)([y.Z], () => !(null === y.Z || void 0 === y.Z ? void 0 : y.Z.hasLayers())),
        C = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        P = null != C ? I.default.age(C.id) : 0,
        { giftBoxAnimation: w, trinketsAnimation: L } = null != (t = null == n ? void 0 : n.chatGiftIcon) ? t : {},
        x = null != n.firstTimeNotice && !a && S && P >= G,
        [M, j] = (0, h.XR)(
            x ? l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, p.t)(l.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        B = null != M,
        Z = d || B,
        F = (0, T.Ft)(c),
        V = (0, g.yc)({ location: "gift-button" }),
        H = c.type === N.d4z.DM;
    if (a) return null;
    let Y = () => {
            V && H && null != F
                ? (0, b.Z)({
                      giftRecipient: F,
                      analyticsLocations: u,
                      analyticsObject: {
                          page: c.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
                          section: N.jXE.CHANNEL_TEXT_AREA,
                          object: N.qAy.BUTTON_ICON,
                          objectType: N.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, m.Z)({
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
            v(!1), j(R.L.TAKE_ACTION), Y();
        },
        K =
            void 0 !== w
                ? (0, r.jsx)(k, {
                      config: w,
                      hovered: Z,
                      onClick: W,
                  })
                : void 0 !== L
                  ? (0, r.jsx)(U, {
                        config: L,
                        hovered: Z,
                        onClick: W,
                    })
                  : (0, r.jsx)(A.Z, {
                        disabled: a,
                        channel: c,
                    });
    return (0, r.jsx)("div", {
        className: o()(D.container, { [D.containerHovered]: Z }),
        onMouseEnter: () => {
            d || v(!0);
        },
        onMouseLeave: () => {
            v(!1);
        },
        children:
            void 0 !== n.firstTimeNotice && B
                ? (0, r.jsx)(E.Z, {
                      onComplete: () => v(!1),
                      onCheckItOutClick: Y,
                      markAsDismissed: j,
                      config: n.firstTimeNotice,
                      children: K,
                  })
                : K,
    });
}
let Z = i.memo(B);
