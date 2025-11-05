n.d(t, { Z: () => M }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(996146),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(644916),
    f = n(243778),
    _ = n(963249),
    p = n(802408),
    h = n(819640),
    m = n(594174),
    g = n(70956),
    E = n(709054),
    b = n(51144),
    y = n(897291),
    O = n(443603),
    v = n(981631),
    I = n(921944),
    T = n(388032),
    S = n(30989),
    A = n(564355);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    return (0, r.jsx)(O.Z, {
        className: A.button,
        "aria-label": T.intl.string(T.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: S.iconContainer,
            children: e.hovered
                ? (0, r.jsx)(l.Fmz, {
                      className: S.giftBoxIcon,
                      importData: e.config.getAnimationData,
                  })
                : (0, r.jsx)(l.OgN, {}),
        }),
    });
}
function D(e) {
    let { Component: t, events: n, play: i } = (0, s.$)(),
        a = () => {
            var t;
            i(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(
        O.Z,
        P(
            N(
                {
                    className: A.button,
                    "aria-label": T.intl.string(T.t.Z1RnTk),
                    isActive: !1,
                    noHover: !0,
                    onClick: a,
                },
                n,
            ),
            {
                children: (0, r.jsxs)("div", {
                    className: S.iconContainer,
                    children: [
                        (0, r.jsx)(t, {
                            className: S.trinketsIcon,
                            color: "currentColor",
                        }),
                        e.hovered &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Fmz, {
                                        className: S.trinketsDecoration,
                                        importData: e.config.getAnimationData,
                                    }),
                                    (0, r.jsx)(l.Fmz, {
                                        className: S.trinketsGlow,
                                        importData: e.config.getGlowAnimationData,
                                    }),
                                ],
                            }),
                    ],
                }),
            },
        ),
    );
}
let x = g.Z.Millis.DAYS_30;
function L(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: s, channel: l } = e,
        { analyticsLocations: g } = (0, u.ZP)(c.Z.GIFT_BUTTON),
        [O, T] = i.useState(!1),
        A = (0, a.e7)([h.Z], () => !(null === h.Z || void 0 === h.Z ? void 0 : h.Z.hasLayers())),
        C = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        N = null != C ? E.default.age(C.id) : 0,
        { giftBoxAnimation: R, trinketsAnimation: P } = null != (t = null == n ? void 0 : n.chatGiftIcon) ? t : {},
        L = null != n.firstTimeNotice && !s && A && N >= x,
        [M, j] = (0, f.XR)(
            L ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, d.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        k = null != M,
        U = O || k,
        G = (0, b.Ft)(l);
    if (s) return null;
    let B = () => {
            (0, _.Z)({
                isGift: !0,
                giftRecipient: null == G ? void 0 : G,
                initialPlanId: null,
                analyticsLocations: g,
                analyticsObject: {
                    page: l.isPrivate() ? v.ZY5.DM_CHANNEL : v.ZY5.GUILD_CHANNEL,
                    section: v.jXE.CHANNEL_TEXT_AREA,
                    object: v.qAy.GIFTING_PROMOTION_BUTTON,
                    objectType: v.AnalyticsObjectTypes.GIFT,
                },
            });
        },
        Z = () => {
            T(!1), j(I.L.TAKE_ACTION), B();
        },
        F =
            void 0 !== R
                ? (0, r.jsx)(w, {
                      config: R,
                      hovered: U,
                      onClick: Z,
                  })
                : void 0 !== P
                  ? (0, r.jsx)(D, {
                        config: P,
                        hovered: U,
                        onClick: Z,
                    })
                  : (0, r.jsx)(y.Z, {
                        disabled: s,
                        channel: l,
                    });
    return (0, r.jsx)("div", {
        className: S.container,
        onMouseEnter: () => {
            O || T(!0);
        },
        onMouseLeave: () => {
            T(!1);
        },
        children:
            void 0 !== n.firstTimeNotice && k
                ? (0, r.jsx)(p.Z, {
                      onComplete: () => T(!1),
                      onCheckItOutClick: B,
                      markAsDismissed: j,
                      config: n.firstTimeNotice,
                      children: F,
                  })
                : F,
    });
}
let M = i.memo(L);
