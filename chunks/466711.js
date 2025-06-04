n.d(t, { Z: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
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
    y = n(443603),
    O = n(981631),
    v = n(921944),
    I = n(388032),
    S = n(767980),
    T = n(302195);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    return (0, r.jsx)(y.Z, {
        innerClassName: T.button,
        'aria-label': I.intl.string(I.t.Z1RnTk),
        isActive: !1,
        onClick: e.onClick,
        children: (0, r.jsx)('div', {
            className: S.iconContainer,
            children: e.hovered
                ? (0, r.jsx)(l.Fmz, {
                      className: S.giftBoxIcon,
                      importData: e.config.getAnimationData
                  })
                : (0, r.jsx)(l.OgN, {})
        })
    });
}
function w(e) {
    let { Component: t, events: n, play: i } = (0, s.$)(),
        a = () => {
            var t;
            i(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(
        y.Z,
        P(
            N(
                {
                    innerClassName: T.button,
                    'aria-label': I.intl.string(I.t.Z1RnTk),
                    isActive: !1,
                    onClick: a
                },
                n
            ),
            {
                children: (0, r.jsxs)('div', {
                    className: S.iconContainer,
                    children: [
                        (0, r.jsx)(t, {
                            className: S.trinketsIcon,
                            color: 'currentColor'
                        }),
                        e.hovered &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Fmz, {
                                        className: S.trinketsDecoration,
                                        importData: e.config.getAnimationData
                                    }),
                                    (0, r.jsx)('div', { className: S.trinketsGlowMask }),
                                    (0, r.jsx)(l.Fmz, {
                                        className: S.trinketsGlow,
                                        importData: e.config.getGlowAnimationData
                                    })
                                ]
                            })
                    ]
                })
            }
        )
    );
}
let D = g.Z.Millis.DAYS_30;
function L(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: s, channel: g } = e,
        { analyticsLocations: y } = (0, u.ZP)(c.Z.GIFT_BUTTON),
        [I, T] = i.useState(!1),
        A = (0, a.e7)([h.Z], () => !(null === h.Z || void 0 === h.Z ? void 0 : h.Z.hasLayers())),
        N = (0, a.e7)([m.default], () => m.default.getCurrentUser()),
        C = null != N ? E.default.age(N.id) : 0,
        { giftBoxAnimation: P, trinketsAnimation: L } = null != (t = null == n ? void 0 : n.chatGiftIcon) ? t : {},
        x = null != n.firstTimeNotice && !s && A && C >= D,
        [k, M] = (0, f.XR)(x ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        j = null != k,
        U = I || j,
        G = (0, b.Ft)(g);
    if (s) return null;
    let B = () => {
            (0, _.Z)({
                isGift: !0,
                giftRecipient: null == G ? void 0 : G,
                initialPlanId: null,
                analyticsLocations: y,
                analyticsObject: {
                    page: g.isPrivate() ? O.ZY5.DM_CHANNEL : O.ZY5.GUILD_CHANNEL,
                    section: O.jXE.CHANNEL_TEXT_AREA,
                    object: O.qAy.GIFTING_PROMOTION_BUTTON,
                    objectType: O.Qqv.GIFT
                }
            });
        },
        F = () => {
            T(!1), M(v.L.TAKE_ACTION), B();
        },
        V =
            void 0 !== P
                ? (0, r.jsx)(R, {
                      config: P,
                      hovered: U,
                      onClick: F
                  })
                : void 0 !== L
                  ? (0, r.jsx)(w, {
                        config: L,
                        hovered: U,
                        onClick: F
                    })
                  : (0, r.jsx)(l.OgN, {});
    return (0, r.jsx)('div', {
        className: S.container,
        onMouseEnter: () => {
            I || T(!0);
        },
        onMouseLeave: () => {
            T(!1);
        },
        children:
            void 0 !== n.firstTimeNotice && j
                ? (0, r.jsx)(p.Z, {
                      onComplete: () => T(!1),
                      onCheckItOutClick: B,
                      markAsDismissed: M,
                      config: n.firstTimeNotice,
                      children: V
                  })
                : V
    });
}
let x = i.memo(L);
