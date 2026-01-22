n.d(t, { A: () => W }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(877624),
    l = n(311907),
    c = n(554146),
    u = n(533781),
    d = n(435371),
    f = n(397927),
    p = n(793574),
    _ = n(688810),
    h = n(357186),
    m = n(379848),
    g = n(532794),
    E = n(810498),
    b = n(40493),
    y = n(412260),
    O = n(404036),
    A = n(594832),
    v = n(186111),
    S = n(287809),
    I = n(927813),
    T = n(661191),
    C = n(240248),
    N = n(427262),
    R = n(184761),
    w = n(743477),
    P = n(545428),
    D = n(652215),
    x = n(49999),
    L = n(985018),
    j = n(455424),
    M = n(111314);
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
function V(e, t) {
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
    let { tooltipsWithKeybinds: t } = R.C.useConfig({ location: "GiftBoxAnimationButton" }),
        n = i.useCallback(() => Promise.resolve({ default: e.boxAnimationUrl }), [e.boxAnimationUrl]);
    return (0, r.jsx)(d.m_, {
        shouldShow: t,
        text: L.intl.string(L.t.Ve9Ge6),
        children: (0, r.jsx)(P.A, {
            className: M.x6,
            "aria-label": L.intl.string(L.t.Z1RnTk),
            isActive: !1,
            noHover: !0,
            onClick: e.onClick,
            children: (0, r.jsx)("div", {
                className: j.zc,
                children: e.hovered
                    ? (0, r.jsx)(f.akl, {
                          className: j.Hl,
                          importData: n,
                      })
                    : (0, r.jsx)(f.okO, {}),
            }),
        }),
    });
}
function B(e) {
    let { Component: t, events: n, play: a } = (0, u.T)(),
        { tooltipsWithKeybinds: s } = R.C.useConfig({ location: "TrinketsAnimationButton" }),
        o = i.useCallback(() => Promise.resolve({ default: e.trinketAnimationUrl }), [e.trinketAnimationUrl]),
        l = i.useCallback(() => Promise.resolve({ default: e.trinketGlowAnimationUrl }), [e.trinketGlowAnimationUrl]),
        c = () => {
            var t;
            a(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(d.m_, {
        shouldShow: s,
        text: L.intl.string(L.t.Ve9Ge6),
        children: (0, r.jsx)(
            P.A,
            V(
                U(
                    {
                        className: M.x6,
                        "aria-label": L.intl.string(L.t.Z1RnTk),
                        isActive: !1,
                        noHover: !0,
                        onClick: c,
                    },
                    n,
                ),
                {
                    children: (0, r.jsxs)("div", {
                        className: j.zc,
                        children: [
                            (0, r.jsx)(t, {
                                className: j.is,
                                color: "currentColor",
                            }),
                            e.hovered &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != e.trinketAnimationUrl &&
                                            (0, r.jsx)(f.akl, {
                                                className: j.rY,
                                                importData: o,
                                            }),
                                        null != e.trinketGlowAnimationUrl &&
                                            (0, r.jsx)(f.akl, {
                                                className: j.c5,
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
let H = I.A.Millis.DAYS_30;
function Y(e) {
    var t, n;
    let { disabled: a, channel: u } = e,
        { analyticsLocations: d } = (0, _.Ay)(p.A.GIFT_BUTTON),
        [f, I] = i.useState(!1),
        R = (0, l.bG)([v.A], () => !(null === v.A || void 0 === v.A ? void 0 : v.A.hasLayers())),
        P = (0, l.bG)([S.default], () => S.default.getCurrentUser()),
        L = null != P ? T.default.age(P.id) : 0,
        M = (0, l.bG)([y.A], () => {
            let e = y.A.getMarketingComponentByType(o.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        k = (0, l.bG)([y.A], () => {
            let e = y.A.getMarketingComponentByType(o.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        U = i.useMemo(() => {
            let e = null == M ? void 0 : M.gradient;
            if (null == e || null == e.colors || e.colors.length < 2) return;
            let t = (0, E.K5)(
                {
                    gradient: e.colors,
                    angle: e.angle,
                },
                { defaultAngle: 180 },
            );
            if ((null == t ? void 0 : t.background) != null) return { "--custom-promotion-gradient": t.background };
        }, [null == M ? void 0 : M.gradient]),
        G = !(0, C.uJ)(null == M ? void 0 : M.boxAnimationUrl),
        V =
            (!(0, C.uJ)(null == M ? void 0 : M.trinketAnimationUrl) ||
                !(0, C.uJ)(null == M ? void 0 : M.trinketGlowAnimationUrl)) &&
            !G,
        Y = null != k && !a && R && L >= H,
        [W, K] = (0, m.RF)(
            Y ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, h.c)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        z = null != W,
        q = f || z,
        X = (0, N.R1)(u),
        Z = u.type === D.rbe.DM,
        Q = (0, A.tA)({
            location: "gift-promotion-button",
            isGift: !0,
            giftRecipient: X,
        });
    if (a) return null;
    let $ = () => {
            Q && Z && null != X
                ? (0, O.A)({
                      giftRecipient: X,
                      analyticsLocations: d,
                      analyticsObject: {
                          page: u.isPrivate() ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                          section: D.JJy.CHANNEL_TEXT_AREA,
                          object: D.ZSU.BUTTON_ICON,
                          objectType: D.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, g.A)({
                      isGift: !0,
                      giftRecipient: null == X ? void 0 : X,
                      initialPlanId: null,
                      analyticsLocations: d,
                      analyticsObject: {
                          page: u.isPrivate() ? D.liQ.DM_CHANNEL : D.liQ.GUILD_CHANNEL,
                          section: D.JJy.CHANNEL_TEXT_AREA,
                          object: D.ZSU.GIFTING_PROMOTION_BUTTON,
                          objectType: D.AnalyticsObjectTypes.GIFT,
                      },
                  });
        },
        J = () => {
            I(!1), K(x.i.TAKE_ACTION), $();
        },
        ee =
            G && (null == M ? void 0 : M.boxAnimationUrl) != null
                ? (0, r.jsx)(F, {
                      boxAnimationUrl: M.boxAnimationUrl,
                      hovered: q,
                      onClick: J,
                  })
                : V
                  ? (0, r.jsx)(B, {
                        trinketAnimationUrl: null != (t = null == M ? void 0 : M.trinketAnimationUrl) ? t : null,
                        trinketGlowAnimationUrl:
                            null != (n = null == M ? void 0 : M.trinketGlowAnimationUrl) ? n : null,
                        hovered: q,
                        onClick: J,
                    })
                  : (0, r.jsx)(w.A, {
                        disabled: a,
                        channel: u,
                    });
    return (0, r.jsx)("div", {
        className: s()(j.kL, { [j.DM]: q }),
        style: U,
        onMouseEnter: () => {
            f || I(!0);
        },
        onMouseLeave: () => {
            I(!1);
        },
        children: z
            ? (0, r.jsx)(b.A, {
                  onComplete: () => I(!1),
                  onCheckItOutClick: $,
                  markAsDismissed: K,
                  coachmarkConfig: k,
                  children: ee,
              })
            : ee,
    });
}
let W = i.memo(Y);
