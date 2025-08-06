n.d(t, { default: () => I }), n(953529), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(990547),
    a = n(522942),
    i = n(342905),
    s = n(442837),
    c = n(902704),
    d = n(481060),
    u = n(100527),
    p = n(906732),
    f = n(213609),
    m = n(98278),
    g = n(740594),
    h = n(612659),
    b = n(594174),
    x = n(626135),
    j = n(364747),
    S = n(131016),
    _ = n(922626),
    O = n(579346),
    y = n(438759),
    C = n(512070),
    P = n(305813),
    v = n(203872),
    E = n(981631),
    N = n(474936),
    k = n(698282),
    T = n(388032),
    D = n(584794);
function w(e) {
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
function L(e) {
    let { onApply: t, onSurpriseMe: n, onClose: o, canApply: l, isApplying: a } = e,
        i = (0, h.m)(N.p9.TIER_2),
        s = (0, r.jsx)(d.zxk, {
            variant: "secondary",
            size: "md",
            onClick: n,
            icon: d.T$Z,
            iconPosition: "start",
            text: T.intl.string(k.default.NOGFdn),
        }),
        c = (0, r.jsxs)("div", {
            className: D.subscriberButtonContainer,
            children: [
                s,
                (0, r.jsx)(d.ua7, {
                    text: T.intl.string(k.default.cVTpnp),
                    shouldShow: !l,
                    children: (e) => {
                        var n, o;
                        return (0, r.jsx)(
                            d.zxk,
                            ((n = w({}, e)),
                            (o = o =
                                {
                                    onClick: t,
                                    disabled: !l || a,
                                    loading: a,
                                    text: T.intl.string(T.t["1Qm829"]),
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
        u = (0, r.jsxs)("div", {
            className: D.upsell,
            children: [
                (0, r.jsxs)("div", {
                    className: D.descriptionContainer,
                    children: [
                        (0, r.jsx)(d.ua7, {
                            text: T.intl.string(T.t["5AFxuL"]),
                            children: (e) =>
                                (0, r.jsx)(
                                    d.SrA,
                                    w(
                                        {
                                            size: "md",
                                            colorClass: D.nitroIcon,
                                        },
                                        e,
                                    ),
                                ),
                        }),
                        (0, r.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: D.description,
                            children: T.intl.format(k.default.PWf0xc, {
                                onClickNitro: () => {
                                    x.default.track(E.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, m.$)(o);
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: D.buttonContainer,
                    children: [
                        s,
                        (0, r.jsx)(g.Z, {
                            premiumModalAnalyticsLocation: {
                                section: E.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: E.qAy.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: N.Si.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)(d.mzw, {
        "data-migration-pending": !0,
        className: D.footer,
        children: i ? c : u,
    });
}
function I(e) {
    var t, n, m, g, h, N, w, I, A, R, M;
    let { transitionState: B, analyticsLocations: Z, guild: Y, onClose: G } = e,
        H = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        F = (0, v.J)(),
        [z, U] = o.useState(
            null != (A = null == H || null == (t = H.displayNameStyles) ? void 0 : t.fontId) ? A : i.C.DEFAULT,
        ),
        [X, K] = o.useState(
            null != (R = null == H || null == (n = H.displayNameStyles) ? void 0 : n.effectId) ? R : a.m.SOLID,
        ),
        [V, q] = o.useState(
            (null == H || null == (m = H.displayNameStyles) ? void 0 : m.colors) != null &&
                (null == H || null == (g = H.displayNameStyles) ? void 0 : g.colors.length) > 0
                ? null == H || null == (h = H.displayNameStyles)
                    ? void 0
                    : h.colors
                : F[X].defaultColors,
        );
    (0, f.Z)(
        {
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: W } = (0, p.ZP)(Z, u.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        { handleApplyDisplayNameStyles: J, isApplying: $ } = (0, _.Z)({
            onSuccess: () => {
                G();
            },
            onError: (e) => {},
        }),
        Q =
            z !== (null == H || null == (N = H.displayNameStyles) ? void 0 : N.fontId) ||
            X !== (null == H || null == (w = H.displayNameStyles) ? void 0 : w.effectId) ||
            !(0, c.E)(V, null != (M = null == H || null == (I = H.displayNameStyles) ? void 0 : I.colors) ? M : []);
    return (o.useEffect(() => {}, [W]), null == H)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: W,
              children: (0, r.jsx)(j.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, r.jsxs)(d.Y0X, {
                      "data-migration-pending": !0,
                      transitionState: B,
                      size: d.CgR.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: D.modalRoot,
                      children: [
                          (0, r.jsxs)(d.hzk, {
                              "data-migration-pending": !0,
                              className: D.modalContent,
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: D.selectionSection,
                                      children: [
                                          (0, r.jsx)(d.xBx, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: D.sectionHeader,
                                              children: (0, r.jsx)(d.X6q, {
                                                  variant: "heading-lg/semibold",
                                                  children: T.intl.string(k.default.ZPMAlZ),
                                              }),
                                          }),
                                          (0, r.jsx)(C.Z, {
                                              selectedFontId: z,
                                              setSelectedFontId: U,
                                              className: D.selectionSubSection,
                                          }),
                                          (0, r.jsx)(y.Z, {
                                              selectedEffectId: X,
                                              setSelectedEffectId: (e) => {
                                                  e === a.m.GRADIENT && 1 === V.length
                                                      ? q(V.concat(E.p6O))
                                                      : (0 === V.length || (0, c.E)(V, F[X].defaultColors)) &&
                                                        q(F[e].defaultColors),
                                                      K(e);
                                              },
                                              className: D.selectionSubSection,
                                              configs: F,
                                          }),
                                          (0, r.jsx)(O.Z, {
                                              selectedColors: V,
                                              setSelectedColors: q,
                                              selectedEffectId: X,
                                              className: D.selectionSubSection,
                                              defaultColor: F[X].defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(P.Z, {
                                      user: H,
                                      selectedFontId: z,
                                      selectedEffectId: X,
                                      selectedColors: X === a.m.SOLID && (0, c.E)(V, F[X].defaultColors) ? [] : V,
                                      onClose: G,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(L, {
                              isApplying: $,
                              onApply: () => {
                                  if (Q) {
                                      let e = V;
                                      X === a.m.SOLID && V.length > 0 && V[0] === F[X].defaultColors[0] && (e = []),
                                          J({
                                              fontId: z,
                                              effectId: X,
                                              colors: e,
                                          }),
                                          x.default.track(E.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                                              font_name: i.C[z],
                                              effect_name: a.m[X],
                                              colors: V,
                                          });
                                  }
                              },
                              onSurpriseMe: () => {
                                  let e = (0, S.aY)();
                                  U(e.fontId),
                                      K(e.effectId),
                                      q(e.colors),
                                      x.default.track(E.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
                              },
                              onClose: G,
                              canApply: Q,
                              analyticsLocations: W,
                          }),
                      ],
                  }),
              }),
          });
}
