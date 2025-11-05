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
    p = n(998030),
    h = n(802408),
    m = n(909917),
    g = n(819640),
    E = n(594174),
    b = n(70956),
    y = n(709054),
    O = n(51144),
    v = n(897291),
    I = n(443603),
    T = n(981631),
    S = n(921944),
    A = n(388032),
    C = n(30989),
    N = n(564355);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    return (0, r.jsx)(I.Z, {
        className: N.button,
        "aria-label": A.intl.string(A.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: C.iconContainer,
            children: e.hovered
                ? (0, r.jsx)(l.Fmz, {
                      className: C.giftBoxIcon,
                      importData: e.config.getAnimationData,
                  })
                : (0, r.jsx)(l.OgN, {}),
        }),
    });
}
function L(e) {
    let { Component: t, events: n, play: i } = (0, s.$)(),
        a = () => {
            var t;
            i(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(
        I.Z,
        D(
            P(
                {
                    className: N.button,
                    "aria-label": A.intl.string(A.t.Z1RnTk),
                    isActive: !1,
                    noHover: !0,
                    onClick: a,
                },
                n,
            ),
            {
                children: (0, r.jsxs)("div", {
                    className: C.iconContainer,
                    children: [
                        (0, r.jsx)(t, {
                            className: C.trinketsIcon,
                            color: "currentColor",
                        }),
                        e.hovered &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(l.Fmz, {
                                        className: C.trinketsDecoration,
                                        importData: e.config.getAnimationData,
                                    }),
                                    (0, r.jsx)(l.Fmz, {
                                        className: C.trinketsGlow,
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
let M = b.Z.Millis.DAYS_30;
function j(e) {
    var t;
    let { giftingPromotionConfig: n, disabled: s, channel: l } = e,
        { analyticsLocations: b } = (0, u.ZP)(c.Z.GIFT_BUTTON),
        [I, A] = i.useState(!1),
        N = (0, a.e7)([g.Z], () => !(null === g.Z || void 0 === g.Z ? void 0 : g.Z.hasLayers())),
        R = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        P = null != R ? y.default.age(R.id) : 0,
        { giftBoxAnimation: w, trinketsAnimation: D } = null != (t = null == n ? void 0 : n.chatGiftIcon) ? t : {},
        j = null != n.firstTimeNotice && !s && N && P >= M,
        [k, U] = (0, f.XR)(
            j ? o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, d.t)(o.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        G = null != k,
        B = I || G,
        Z = (0, O.Ft)(l),
        F = (0, p.yc)({ location: "gift-button" }),
        V = l.type === T.d4z.DM;
    if (s) return null;
    let H = () => {
            F && V && null != Z
                ? (0, m.Z)({
                      giftRecipient: Z,
                      analyticsLocations: b,
                      analyticsObject: {
                          page: l.isPrivate() ? T.ZY5.DM_CHANNEL : T.ZY5.GUILD_CHANNEL,
                          section: T.jXE.CHANNEL_TEXT_AREA,
                          object: T.qAy.BUTTON_ICON,
                          objectType: T.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, _.Z)({
                      isGift: !0,
                      giftRecipient: null == Z ? void 0 : Z,
                      initialPlanId: null,
                      analyticsLocations: b,
                      analyticsObject: {
                          page: l.isPrivate() ? T.ZY5.DM_CHANNEL : T.ZY5.GUILD_CHANNEL,
                          section: T.jXE.CHANNEL_TEXT_AREA,
                          object: T.qAy.GIFTING_PROMOTION_BUTTON,
                          objectType: T.AnalyticsObjectTypes.GIFT,
                      },
                  });
        },
        Y = () => {
            A(!1), U(S.L.TAKE_ACTION), H();
        },
        W =
            void 0 !== w
                ? (0, r.jsx)(x, {
                      config: w,
                      hovered: B,
                      onClick: Y,
                  })
                : void 0 !== D
                  ? (0, r.jsx)(L, {
                        config: D,
                        hovered: B,
                        onClick: Y,
                    })
                  : (0, r.jsx)(v.Z, {
                        disabled: s,
                        channel: l,
                    });
    return (0, r.jsx)("div", {
        className: C.container,
        onMouseEnter: () => {
            I || A(!0);
        },
        onMouseLeave: () => {
            A(!1);
        },
        children:
            void 0 !== n.firstTimeNotice && G
                ? (0, r.jsx)(h.Z, {
                      onComplete: () => A(!1),
                      onCheckItOutClick: H,
                      markAsDismissed: U,
                      config: n.firstTimeNotice,
                      children: W,
                  })
                : W,
    });
}
let k = i.memo(j);
