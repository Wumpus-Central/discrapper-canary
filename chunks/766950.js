n.d(t, { default: () => R }), n(953529), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(990547),
    i = n(522942),
    a = n(342905),
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
    _ = n(131016),
    S = n(922626),
    C = n(579346),
    y = n(438759),
    O = n(512070),
    P = n(305813),
    v = n(203872),
    k = n(981631),
    E = n(474936),
    N = n(698282),
    T = n(388032),
    D = n(212552);
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
function I(e) {
    let { onApply: t, onSurpriseMe: n, onClose: o, canApply: l, isApplying: i } = e,
        a = (0, h.m)(E.p9.TIER_2),
        s = (0, r.jsx)(d.zxk, {
            variant: "secondary",
            size: "md",
            onClick: n,
            icon: d.T$Z,
            iconPosition: "start",
            text: T.intl.string(N.default.NOGFdn),
        }),
        c = (0, r.jsxs)("div", {
            className: D.subscriberButtonContainer,
            children: [
                s,
                (0, r.jsx)(d.ua7, {
                    text: T.intl.string(N.default.cVTpnp),
                    shouldShow: !l,
                    children: (e) => {
                        var n, o;
                        return (0, r.jsx)(
                            d.zxk,
                            ((n = w({}, e)),
                            (o = o =
                                {
                                    onClick: t,
                                    disabled: !l || i,
                                    loading: i,
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
                            children: T.intl.format(N.default.PWf0xc, {
                                onClickNitro: () => {
                                    x.default.track(k.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, m.$)(o);
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
                                section: k.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: k.qAy.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: E.Si.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)(d.mzw, {
        "data-migration-pending": !0,
        className: D.footer,
        children: a ? c : u,
    });
}
function R(e) {
    var t, n, m, g, h, E, w, R, A, L;
    let { transitionState: B, analyticsLocations: M, guild: Z, onClose: Y } = e,
        G = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        H = null != (w = null == G || null == (t = G.displayNameStyles) ? void 0 : t.colors) ? w : [],
        [z, F] = o.useState(
            null != (R = null == G || null == (n = G.displayNameStyles) ? void 0 : n.fontId) ? R : a.C.DEFAULT,
        ),
        [U, X] = o.useState(
            null != (A = null == G || null == (m = G.displayNameStyles) ? void 0 : m.effectId) ? A : i.m.SOLID,
        ),
        K = (0, v.R)(U),
        q = (0, v.R)(i.m.GRADIENT),
        [V, W] = o.useState(H.length > 0 && U !== i.m.GRADIENT ? H[0] : K.defaultColors[0]),
        [$, J] = o.useState(H.length > 0 && U === i.m.GRADIENT ? H : q.defaultColors);
    (0, f.Z)(
        {
            type: l.ImpressionTypes.POPOUT,
            name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL,
        },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: Q } = (0, p.ZP)(M, u.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        { handleApplyDisplayNameStyles: ee, isApplying: et } = (0, S.Z)({
            onSuccess: () => {
                Y();
            },
            onError: (e) => {},
        }),
        en = U === i.m.GRADIENT ? $ : [V],
        er =
            z !== (null == G || null == (g = G.displayNameStyles) ? void 0 : g.fontId) ||
            U !== (null == G || null == (h = G.displayNameStyles) ? void 0 : h.effectId) ||
            !(0, c.E)(en, null != (L = null == G || null == (E = G.displayNameStyles) ? void 0 : E.colors) ? L : []);
    return (o.useEffect(() => {}, [Q]), null == G)
        ? null
        : (0, r.jsx)(p.Gt, {
              value: Q,
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
                                                  children: T.intl.string(N.default.ZPMAlZ),
                                              }),
                                          }),
                                          (0, r.jsx)(O.Z, {
                                              selectedFontId: z,
                                              setSelectedFontId: F,
                                              className: D.selectionSubSection,
                                          }),
                                          (0, r.jsx)(y.Z, {
                                              selectedEffectId: U,
                                              setSelectedEffectId: (e) => {
                                                  X(e);
                                              },
                                              className: D.selectionSubSection,
                                          }),
                                          (0, r.jsx)(C.Z, {
                                              selectedColors: en,
                                              setSelectedColors: (e) => {
                                                  U === i.m.GRADIENT ? J(e) : W(e[0]);
                                              },
                                              selectedEffectId: U,
                                              className: D.selectionSubSection,
                                              defaultColor: K.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)(P.Z, {
                                      user: G,
                                      selectedFontId: z,
                                      selectedEffectId: U,
                                      selectedColors: U === i.m.SOLID && (0, c.E)(en, K.defaultColors) ? [] : en,
                                      onClose: Y,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(I, {
                              isApplying: et,
                              onApply: () => {
                                  if (er) {
                                      let e = en;
                                      U === i.m.SOLID && en.length > 0 && en[0] === K.defaultColors[0] && (e = []),
                                          ee({
                                              fontId: z,
                                              effectId: U,
                                              colors: e,
                                          }),
                                          x.default.track(k.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                                              font_name: a.C[z],
                                              effect_name: i.m[U],
                                              colors: en,
                                          });
                                  }
                              },
                              onSurpriseMe: () => {
                                  let e = (0, _.aY)();
                                  F(e.fontId),
                                      X(e.effectId),
                                      W(e.colors[0]),
                                      J(e.colors),
                                      x.default.track(k.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME);
                              },
                              onClose: Y,
                              canApply: er,
                              analyticsLocations: Q,
                          }),
                      ],
                  }),
              }),
          });
}
