n.d(t, {
    A: () => H,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(877624),
    l = n(311907),
    c = n(554146),
    u = n(533781),
    d = n(397927),
    f = n(793574),
    p = n(688810),
    _ = n(357186),
    h = n(379848),
    m = n(532794),
    g = n(810498),
    E = n(40493),
    y = n(412260),
    b = n(404036),
    O = n(594832),
    v = n(186111),
    A = n(287809),
    I = n(927813),
    S = n(661191),
    T = n(240248),
    C = n(427262),
    N = n(743477),
    w = n(545428),
    R = n(652215),
    P = n(49999),
    D = n(985018),
    L = n(455424),
    x = n(111314);

function M(e, t, n) {
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

function j(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}

function k(e, t) {
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

function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function G(e) {
    let t = i.useCallback(
        () =>
            Promise.resolve({
                default: e.boxAnimationUrl,
            }),
        [e.boxAnimationUrl],
    );
    return (0, r.jsx)(w.A, {
        className: x.x6,
        "aria-label": D.intl.string(D.t.Z1RnTk),
        isActive: !1,
        noHover: !0,
        onClick: e.onClick,
        children: (0, r.jsx)("div", {
            className: L.zc,
            children: e.hovered
                ? (0, r.jsx)(d.akl, {
                      className: L.Hl,
                      importData: t,
                  })
                : (0, r.jsx)(d.okO, {}),
        }),
    });
}

function F(e) {
    let { Component: t, events: n, play: a } = (0, u.T)(),
        o = i.useCallback(
            () =>
                Promise.resolve({
                    default: e.trinketAnimationUrl,
                }),
            [e.trinketAnimationUrl],
        ),
        s = i.useCallback(
            () =>
                Promise.resolve({
                    default: e.trinketGlowAnimationUrl,
                }),
            [e.trinketGlowAnimationUrl],
        ),
        l = () => {
            var t;
            a(), null == (t = e.onClick) || t.call(e);
        };
    return (0, r.jsx)(
        w.A,
        U(
            j(
                {
                    className: x.x6,
                    "aria-label": D.intl.string(D.t.Z1RnTk),
                    isActive: !1,
                    noHover: !0,
                    onClick: l,
                },
                n,
            ),
            {
                children: (0, r.jsxs)("div", {
                    className: L.zc,
                    children: [
                        (0, r.jsx)(t, {
                            className: L.is,
                            color: "currentColor",
                        }),
                        e.hovered &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    null != e.trinketAnimationUrl &&
                                        (0, r.jsx)(d.akl, {
                                            className: L.rY,
                                            importData: o,
                                        }),
                                    null != e.trinketGlowAnimationUrl &&
                                        (0, r.jsx)(d.akl, {
                                            className: L.c5,
                                            importData: s,
                                        }),
                                ],
                            }),
                    ],
                }),
            },
        ),
    );
}
let V = I.A.Millis.DAYS_30;

function B(e) {
    var t, n, a;
    let { disabled: u, channel: d } = e,
        { analyticsLocations: I } = (0, p.Ay)(f.A.GIFT_BUTTON),
        [w, D] = i.useState(!1),
        x = (0, l.bG)([v.A], () => !(null === v.A || void 0 === v.A ? void 0 : v.A.hasLayers())),
        M = (0, l.bG)([A.default], () => A.default.getCurrentUser()),
        j = null != M ? S.default.age(M.id) : 0,
        k = (0, l.bG)([y.A], () => {
            let e = y.A.getMarketingComponentByType(s.C.GIFT_ICON);
            return null == e || "giftIcon" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIcon;
        }),
        U = (0, l.bG)([y.A], () => {
            let e = y.A.getMarketingComponentByType(s.C.GIFT_ICON_COACHMARK);
            return null == e || "giftIconCoachmark" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftIconCoachmark;
        }),
        B = null == k ? void 0 : k.gradient,
        H =
            null != B && null != B.colors && B.colors.length >= 2
                ? (0, g.K5)(
                      {
                          gradient: B.colors,
                          angle: null != (t = B.angle) ? t : void 0,
                      },
                      {
                          defaultAngle: 180,
                      },
                  )
                : void 0,
        Y = i.useMemo(() => {
            if ((null == H ? void 0 : H.background) != null)
                return {
                    "--custom-promotion-gradient": H.background,
                };
        }, [H]),
        W = !(0, T.uJ)(null == k ? void 0 : k.boxAnimationUrl),
        K =
            (!(0, T.uJ)(null == k ? void 0 : k.trinketAnimationUrl) ||
                !(0, T.uJ)(null == k ? void 0 : k.trinketGlowAnimationUrl)) &&
            !W,
        z = null != U && !u && x && j >= V,
        [q, Z] = (0, h.RF)(
            z ? c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK : null,
            (0, _.c)(c.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK),
        ),
        Q = null != q,
        X = w || Q,
        J = (0, C.R1)(d),
        $ = d.type === R.rbe.DM,
        ee = (0, O.tA)({
            location: "gift-promotion-button",
            isGift: !0,
            giftRecipient: J,
        });
    if (u) return null;
    let et = () => {
            ee && $ && null != J
                ? (0, b.A)({
                      giftRecipient: J,
                      analyticsLocations: I,
                      analyticsObject: {
                          page: d.isPrivate() ? R.liQ.DM_CHANNEL : R.liQ.GUILD_CHANNEL,
                          section: R.JJy.CHANNEL_TEXT_AREA,
                          object: R.ZSU.BUTTON_ICON,
                          objectType: R.AnalyticsObjectTypes.GIFT,
                      },
                  })
                : (0, m.A)({
                      isGift: !0,
                      giftRecipient: null == J ? void 0 : J,
                      initialPlanId: null,
                      analyticsLocations: I,
                      analyticsObject: {
                          page: d.isPrivate() ? R.liQ.DM_CHANNEL : R.liQ.GUILD_CHANNEL,
                          section: R.JJy.CHANNEL_TEXT_AREA,
                          object: R.ZSU.GIFTING_PROMOTION_BUTTON,
                          objectType: R.AnalyticsObjectTypes.GIFT,
                      },
                  });
        },
        en = () => {
            D(!1), Z(P.i.TAKE_ACTION), et();
        },
        er =
            W && (null == k ? void 0 : k.boxAnimationUrl) != null
                ? (0, r.jsx)(G, {
                      boxAnimationUrl: k.boxAnimationUrl,
                      hovered: X,
                      onClick: en,
                  })
                : K
                  ? (0, r.jsx)(F, {
                        trinketAnimationUrl: null != (n = null == k ? void 0 : k.trinketAnimationUrl) ? n : null,
                        trinketGlowAnimationUrl:
                            null != (a = null == k ? void 0 : k.trinketGlowAnimationUrl) ? a : null,
                        hovered: X,
                        onClick: en,
                    })
                  : (0, r.jsx)(N.A, {
                        disabled: u,
                        channel: d,
                    });
    return (0, r.jsx)("div", {
        className: o()(L.kL, {
            [L.DM]: X,
        }),
        style: Y,
        onMouseEnter: () => {
            w || D(!0);
        },
        onMouseLeave: () => {
            D(!1);
        },
        children: Q
            ? (0, r.jsx)(E.A, {
                  onComplete: () => D(!1),
                  onCheckItOutClick: et,
                  markAsDismissed: Z,
                  coachmarkConfig: U,
                  children: er,
              })
            : er,
    });
}
let H = i.memo(B);
