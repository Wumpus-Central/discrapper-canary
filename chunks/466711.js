n.d(t, { Z: () => M }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(704215),
    s = n(996146),
    l = n(481060),
    c = n(100527),
    u = n(906732),
    d = n(644916),
    f = n(243778),
    _ = n(963249),
    p = n(286961),
    h = n(802408),
    m = n(819640),
    g = n(594174),
    E = n(70956),
    b = n(709054),
    y = n(51144),
    v = n(443603),
    O = n(981631),
    I = n(921944),
    S = n(388032),
    T = n(767980),
    N = n(302195);
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
function C(e) {
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
    return (0, r.jsx)(v.Z, {
        innerClassName: N.button,
        'aria-label': S.NW.string(S.t.Z1RnTk),
        isActive: !1,
        onClick: e.onClick,
        children: (0, r.jsx)('div', {
            className: T.iconContainer,
            children: e.hovered
                ? (0, r.jsx)(l.Fmz, {
                      className: T.giftBoxIcon,
                      importData: e.config.getAnimationData
                  })
                : (0, r.jsx)(l.OgN, {})
        })
    });
}
function D(e) {
    let { Component: t, events: n, play: i } = (0, s.$)(),
        o = () => {
            var t;
            i(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(
        v.Z,
        P(
            C(
                {
                    innerClassName: N.button,
                    'aria-label': S.NW.string(S.t.Z1RnTk),
                    isActive: !1,
                    onClick: o
                },
                n
            ),
            {
                children: (0, r.jsxs)('div', {
                    className: T.iconContainer,
                    children: [
                        (0, r.jsx)(t, {
                            className: T.trinketsIcon,
                            color: 'currentColor'
                        }),
                        e.hovered &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Fmz, {
                                        className: T.trinketsDecoration,
                                        importData: e.config.getAnimationData
                                    }),
                                    (0, r.jsx)('div', { className: T.trinketsGlowMask }),
                                    (0, r.jsx)(l.Fmz, {
                                        className: T.trinketsGlow,
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
let L = E.Z.Millis.DAYS_30;
function x(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: s, channel: E } = e,
        { analyticsLocations: v } = (0, u.ZP)(c.Z.GIFT_BUTTON),
        [S, N] = i.useState(!1),
        A = (0, o.e7)([m.Z], () => !(null === m.Z || void 0 === m.Z ? void 0 : m.Z.hasLayers())),
        C = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        R = null != C ? b.default.age(C.id) : 0,
        { giftBoxAnimation: P, trinketsAnimation: x } = null != (t = null == n ? void 0 : n.chatGiftIcon) ? t : {},
        M = (0, p.u)(),
        k = void 0 !== M && !s && A && R >= L,
        [j, U] = (0, f.XR)(k ? a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null, (0, d.t)(a.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK)),
        G = null != j,
        B = S || G,
        F = (0, y.Ft)(E);
    if (s) return null;
    let V = () => {
            (0, _.Z)({
                isGift: !0,
                giftRecipient: null == F ? void 0 : F,
                initialPlanId: null,
                analyticsLocations: v,
                analyticsObject: {
                    page: E.isPrivate() ? O.ZY5.DM_CHANNEL : O.ZY5.GUILD_CHANNEL,
                    section: O.jXE.CHANNEL_TEXT_AREA,
                    object: O.qAy.GIFTING_PROMOTION_BUTTON,
                    objectType: O.Qqv.GIFT
                }
            });
        },
        Z = () => {
            N(!1), U(I.L.TAKE_ACTION), V();
        },
        H =
            void 0 !== P
                ? (0, r.jsx)(w, {
                      config: P,
                      hovered: B,
                      onClick: Z
                  })
                : void 0 !== x
                  ? (0, r.jsx)(D, {
                        config: x,
                        hovered: B,
                        onClick: Z
                    })
                  : (0, r.jsx)(l.OgN, {});
    return (0, r.jsx)('div', {
        className: T.container,
        onMouseEnter: () => {
            S || N(!0);
        },
        onMouseLeave: () => {
            N(!1);
        },
        children:
            void 0 !== M && G
                ? (0, r.jsx)(h.Z, {
                      onComplete: () => N(!1),
                      onCheckItOutClick: V,
                      markAsDismissed: U,
                      config: M,
                      children: H
                  })
                : H
    });
}
let M = i.memo(x);
