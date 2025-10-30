n.d(t, { Z: () => k }), n(388685);
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
    p = n(107756),
    h = n(802408),
    m = n(819640),
    g = n(594174),
    E = n(70956),
    b = n(709054),
    y = n(51144),
    O = n(897291),
    v = n(443603),
    I = n(981631),
    T = n(921944),
    S = n(388032),
    A = n(276088),
    C = n(744114);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    return (0, r.jsx)(v.Z, {
        className: C.button,
        "aria-label": S.intl.string(S.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: A.iconContainer,
            children: e.hovered
                ? (0, r.jsx)(l.Fmz, {
                      className: A.giftBoxIcon,
                      importData: e.config.getAnimationData,
                  })
                : (0, r.jsx)(l.OgN, {}),
        }),
    });
}
function x(e) {
    let { Component: t, events: n, play: i } = (0, s.$)(),
        a = () => {
            var t;
            i(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(
        v.Z,
        w(
            R(
                {
                    className: C.button,
                    "aria-label": S.intl.string(S.t.Z1RnTk),
                    isActive: !1,
                    noHover: !0,
                    onClick: a,
                },
                n,
            ),
            {
                children: (0, r.jsxs)("div", {
                    className: A.iconContainer,
                    children: [
                        (0, r.jsx)(t, {
                            className: A.trinketsIcon,
                            color: "currentColor",
                        }),
                        e.hovered &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Fmz, {
                                        className: A.trinketsDecoration,
                                        importData: e.config.getAnimationData,
                                    }),
                                    (0, r.jsx)(l.Fmz, {
                                        className: A.trinketsGlow,
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
let L = E.Z.Millis.DAYS_30;
function M(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: s, channel: l } = e,
        { analyticsLocations: E } = (0, u.ZP)(c.Z.GIFT_BUTTON),
        [v, S] = i.useState(!1),
        C = (0, a.e7)([m.Z], () => !(null === m.Z || void 0 === m.Z ? void 0 : m.Z.hasLayers())),
        N = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        R = null != N ? b.default.age(N.id) : 0,
        { giftBoxAnimation: P, trinketsAnimation: w } = null != (t = null == n ? void 0 : n.chatGiftIcon) ? t : {},
        M = null != n.firstTimeNotice && !s && C && R >= L,
        [k, j] = (0, f.XR)(
            M ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, d.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        U = null != k,
        G = v || U,
        B = (0, y.Ft)(l),
        Z = (0, p.IH)();
    if (s) return null;
    let F = () => {
            (0, _.Z)({
                isGift: !0,
                giftRecipient: null == B ? void 0 : B,
                initialPlanId: null,
                analyticsLocations: E,
                analyticsObject: {
                    page: l.isPrivate() ? I.ZY5.DM_CHANNEL : I.ZY5.GUILD_CHANNEL,
                    section: I.jXE.CHANNEL_TEXT_AREA,
                    object: I.qAy.GIFTING_PROMOTION_BUTTON,
                    objectType: I.AnalyticsObjectTypes.GIFT,
                },
            });
        },
        V = () => {
            S(!1), j(T.L.TAKE_ACTION), F();
        },
        H =
            void 0 !== P
                ? (0, r.jsx)(D, {
                      config: P,
                      hovered: G,
                      onClick: V,
                  })
                : void 0 !== w && Z
                  ? (0, r.jsx)(x, {
                        config: w,
                        hovered: G,
                        onClick: V,
                    })
                  : (0, r.jsx)(O.Z, {
                        disabled: s,
                        channel: l,
                    });
    return (0, r.jsx)("div", {
        className: A.container,
        onMouseEnter: () => {
            v || S(!0);
        },
        onMouseLeave: () => {
            S(!1);
        },
        children:
            void 0 !== n.firstTimeNotice && U
                ? (0, r.jsx)(h.Z, {
                      onComplete: () => S(!1),
                      onCheckItOutClick: F,
                      markAsDismissed: j,
                      config: n.firstTimeNotice,
                      children: H,
                  })
                : H,
    });
}
let k = i.memo(M);
