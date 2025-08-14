n.d(t, { default: () => I }), n(953529), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(990547),
    a = n(522942),
    i = n(342905),
    s = n(442837),
    c = n(902704),
    d = n(481060),
    u = n(809206),
    p = n(100527),
    f = n(906732),
    m = n(213609),
    g = n(98278),
    h = n(740594),
    b = n(612659),
    x = n(25990),
    j = n(594174),
    _ = n(626135),
    S = n(364747),
    C = n(131016),
    O = n(579346),
    y = n(438759),
    v = n(512070),
    P = n(305813),
    k = n(203872),
    N = n(981631),
    E = n(474936),
    T = n(698282),
    D = n(388032),
    w = n(212552);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e) {
    let { onApply: t, onSurpriseMe: n, onClose: o, canApply: l } = e,
        a = (0, b.m)(E.p9.TIER_2),
        i = (0, r.jsx)(d.zxk, {
            variant: "secondary",
            size: "md",
            onClick: n,
            icon: d.T$Z,
            iconPosition: "start",
            text: D.intl.string(T.default.NOGFdn),
        }),
        s = (0, r.jsxs)("div", {
            className: w.subscriberButtonContainer,
            children: [
                i,
                (0, r.jsx)(d.ua7, {
                    text: D.intl.string(T.default.cVTpnp),
                    shouldShow: !l,
                    children: (e) => {
                        var n, o;
                        return (0, r.jsx)(
                            d.zxk,
                            ((n = R({}, e)),
                            (o = o =
                                {
                                    onClick: t,
                                    disabled: !l,
                                    text: D.intl.string(D.t["1Qm829"]),
                                    variant: "primary",
                                    size: "md",
                                    fullWidth: !0,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            n),
                        );
                    },
                }),
            ],
        }),
        c = (0, r.jsxs)("div", {
            className: w.upsell,
            children: [
                (0, r.jsxs)("div", {
                    className: w.descriptionContainer,
                    children: [
                        (0, r.jsx)(d.ua7, {
                            text: D.intl.string(D.t["5AFxuL"]),
                            children: (e) =>
                                (0, r.jsx)(
                                    d.SrA,
                                    R(
                                        {
                                            size: "md",
                                            colorClass: w.nitroIcon,
                                        },
                                        e,
                                    ),
                                ),
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: w.description,
                            children: D.intl.format(T.default.PWf0xc, {
                                onClickNitro: () => {
                                    _.default.track(N.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, g.$)(o);
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: w.buttonContainer,
                    children: [
                        i,
                        (0, r.jsx)(h.Z, {
                            premiumModalAnalyticsLocation: {
                                section: N.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: N.qAy.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: E.Si.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)(d.mzw, {
        "data-migration-pending": !0,
        className: w.footer,
        children: a ? s : c,
    });
}
function I(e) {
    var t, n, g;
    let { transitionState: h, analyticsLocations: b, guild: E, onClose: R } = e,
        I = (0, s.e7)([j.default], () => j.default.getCurrentUser()),
        L = (0, s.e7)([x.Z], () => x.Z.getAllPending().pendingDisplayNameStyles),
        B = void 0 !== L ? L : null == I ? void 0 : I.displayNameStyles,
        [M, G] = o.useState(null != (t = null == B ? void 0 : B.fontId) ? t : i.C.DEFAULT),
        [Z, Y] = o.useState(null != (n = null == B ? void 0 : B.effectId) ? n : a.m.SOLID),
        H = (0, k.R)(Z),
        z = (0, k.R)(a.m.GRADIENT),
        F = null != (g = null == B ? void 0 : B.colors) ? g : [],
        [U, K] = o.useState(F.length > 0 && Z !== a.m.GRADIENT ? F[0] : H.defaultColors[0]),
        [X, q] = o.useState(F.length > 0 && Z === a.m.GRADIENT ? F : z.defaultColors);
    (0, m.Z)(
        {
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: V } = (0, f.ZP)(b, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        W = o.useMemo(() => (Z === a.m.GRADIENT ? X : [U]), [Z, X, U]),
        $ = o.useMemo(() => {
            var e;
            return (
                M !== (null == B ? void 0 : B.fontId) ||
                Z !== (null == B ? void 0 : B.effectId) ||
                !(0, c.E)(W, null != (e = null == B ? void 0 : B.colors) ? e : [])
            );
        }, [B, M, Z, W]),
        J = o.useCallback(() => {
            if ($) {
                let e = W;
                Z === a.m.SOLID && W.length > 0 && W[0] === H.defaultColors[0] && (e = []),
                    (0, u.NI)({
                        fontId: M,
                        effectId: Z,
                        colors: e,
                    }),
                    _.default.track(N.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                        font_name: i.C[M],
                        effect_name: a.m[Z],
                        colors: W,
                    }),
                    R();
            }
        }, [$, M, Z, W, H, R]),
        Q = o.useCallback(() => {
            let { fontId: e, effectId: t, colors: n } = (0, C.aY)();
            G(e), Y(t), t === a.m.GRADIENT ? q(n) : K(n[0]), _.default.track(N.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [q, K]),
        ee = o.useCallback(
            (e) => {
                Y(e);
            },
            [Y],
        ),
        et = o.useCallback(
            (e) => {
                Z === a.m.GRADIENT ? q(e) : K(e[0]);
            },
            [Z, q, K],
        );
    return null == I
        ? null
        : (0, r.jsx)(f.Gt, {
              value: V,
              children: (0, r.jsx)(S.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, r.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: h,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: w.modalRoot,
                      children: [
                          (0, r.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: w.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: w.selectionSection,
                                      children: [
                                          (0, r.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: w.sectionHeader,
                                              children: (0, r.jsx)(d.X6q, {
                                                  variant: "heading-lg/semibold",
                                                  children: D.intl.string(T.default.ZPMAlZ),
                                              }),
                                          }),
                                          (0, r.jsx)(v.Z, {
                                              selectedFontId: M,
                                              setSelectedFontId: G,
                                              className: w.selectionSubSection,
                                          }),
                                          (0, r.jsx)(y.Z, {
                                              selectedEffectId: Z,
                                              setSelectedEffectId: ee,
                                              className: w.selectionSubSection,
                                          }),
                                          (0, r.jsx)(O.Z, {
                                              selectedColors: W,
                                              setSelectedColors: et,
                                              selectedEffectId: Z,
                                              className: w.selectionSubSection,
                                              defaultColor: H.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(P.Z, {
                                      user: I,
                                      selectedFontId: M,
                                      selectedEffectId: Z,
                                      selectedColors: Z === a.m.SOLID && (0, c.E)(W, H.defaultColors) ? [] : W,
                                      onClose: R,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(A, {
                              onApply: J,
                              onSurpriseMe: Q,
                              onClose: R,
                              canApply: $,
                              analyticsLocations: V,
                          }),
                      ],
                  }),
              }),
          });
}
