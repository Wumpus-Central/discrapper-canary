(n.d(t, { default: () => E }), n(953529), n(388685));
var r = n(255367),
    o = n(73800),
    l = n(522942),
    i = n(342905),
    s = n(442837),
    a = n(902704),
    c = n(481060),
    d = n(100527),
    u = n(906732),
    p = n(98278),
    f = n(740594),
    m = n(612659),
    g = n(594174),
    h = n(364747),
    b = n(131016),
    j = n(922626),
    x = n(579346),
    y = n(438759),
    O = n(512070),
    v = n(305813),
    S = n(203872),
    C = n(981631),
    _ = n(474936),
    P = n(698282),
    N = n(388032),
    k = n(584794);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function w(e) {
    let { onApply: t, onSurpriseMe: n, onClose: o, canApply: l, isApplying: i } = e,
        s = (0, m.m)(_.p9.TIER_2),
        a = (0, r.jsx)(c.zxk, {
            variant: 'secondary',
            size: 'md',
            onClick: n,
            icon: c.T$Z,
            iconPosition: 'start',
            text: N.intl.string(P.default.NOGFdn)
        }),
        d = (0, r.jsxs)('div', {
            className: k.subscriberButtonContainer,
            children: [
                a,
                (0, r.jsx)(c.ua7, {
                    text: N.intl.string(P.default.cVTpnp),
                    shouldShow: !l,
                    children: (e) => {
                        var n, o;
                        return (0, r.jsx)(
                            c.zxk,
                            ((n = T({}, e)),
                            (o = o =
                                {
                                    onClick: t,
                                    disabled: !l || i,
                                    loading: i,
                                    text: N.intl.string(N.t['1Qm829']),
                                    variant: 'primary',
                                    size: 'md',
                                    fullWidth: !0
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
                            n)
                        );
                    }
                })
            ]
        }),
        u = (0, r.jsxs)('div', {
            className: k.upsell,
            children: [
                (0, r.jsxs)('div', {
                    className: k.descriptionContainer,
                    children: [
                        (0, r.jsx)(c.ua7, {
                            text: N.intl.string(N.t['5AFxuL']),
                            children: (e) =>
                                (0, r.jsx)(
                                    c.SrA,
                                    T(
                                        {
                                            size: 'md',
                                            colorClass: k.nitroIcon
                                        },
                                        e
                                    )
                                )
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-default',
                            className: k.description,
                            children: N.intl.format(P.default.PWf0xc, {
                                onClickNitro: () => {
                                    (0, p.$)(o);
                                }
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: k.buttonContainer,
                    children: [
                        a,
                        (0, r.jsx)(f.Z, {
                            premiumModalAnalyticsLocation: {
                                section: C.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: C.qAy.PREMIUM_UPSELL_BUTTON
                            },
                            subscriptionTier: _.Si.TIER_2
                        })
                    ]
                })
            ]
        });
    return (0, r.jsx)(c.mzw, {
        'data-migration-pending': !0,
        className: k.footer,
        children: s ? d : u
    });
}
function E(e) {
    var t, n, p, f, m, _, T, E, D, R, I;
    let { transitionState: A, analyticsLocations: L, guild: B, onClose: Z } = e,
        G = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        H = (0, S.J)(),
        [M, F] = o.useState(null != (D = null == G || null == (t = G.displayNameStyles) ? void 0 : t.fontId) ? D : i.C.DEFAULT),
        [z, U] = o.useState(null != (R = null == G || null == (n = G.displayNameStyles) ? void 0 : n.effectId) ? R : l.m.SOLID),
        [X, Y] = o.useState((null == G || null == (p = G.displayNameStyles) ? void 0 : p.colors) != null && (null == G || null == (f = G.displayNameStyles) ? void 0 : f.colors.length) > 0 ? (null == G || null == (m = G.displayNameStyles) ? void 0 : m.colors) : H[z].defaultColors),
        { analyticsLocations: q } = (0, u.ZP)(L, d.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        { handleApplyDisplayNameStyles: K, isApplying: V } = (0, j.Z)({
            onSuccess: () => {
                Z();
            },
            onError: (e) => {}
        }),
        W = M !== (null == G || null == (_ = G.displayNameStyles) ? void 0 : _.fontId) || z !== (null == G || null == (T = G.displayNameStyles) ? void 0 : T.effectId) || !(0, a.E)(X, null != (I = null == G || null == (E = G.displayNameStyles) ? void 0 : E.colors) ? I : []);
    return (o.useEffect(() => {}, [q]), null == G)
        ? null
        : (0, r.jsx)(u.Gt, {
              value: q,
              children: (0, r.jsx)(h.k.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, r.jsxs)(c.Y0X, {
                      'data-migration-pending': !0,
                      transitionState: A,
                      size: c.CgR.LARGE,
                      parentComponent: 'DisplayNameStylesModal',
                      className: k.modalRoot,
                      children: [
                          (0, r.jsxs)(c.hzk, {
                              'data-migration-pending': !0,
                              className: k.modalContent,
                              style: { overflow: 'hidden auto' },
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: k.selectionSection,
                                      children: [
                                          (0, r.jsx)(c.xBx, {
                                              'data-migration-pending': !0,
                                              separator: !1,
                                              className: k.sectionHeader,
                                              children: (0, r.jsx)(c.X6q, {
                                                  variant: 'heading-lg/semibold',
                                                  children: N.intl.string(P.default.ZPMAlZ)
                                              })
                                          }),
                                          (0, r.jsx)(O.Z, {
                                              selectedFontId: M,
                                              setSelectedFontId: F,
                                              className: k.selectionSubSection
                                          }),
                                          (0, r.jsx)(y.Z, {
                                              selectedEffectId: z,
                                              setSelectedEffectId: (e) => {
                                                  (e === l.m.GRADIENT && 1 === X.length ? Y(X.concat(C.p6O)) : (0 === X.length || (0, a.E)(X, H[z].defaultColors)) && Y(H[e].defaultColors), U(e));
                                              },
                                              className: k.selectionSubSection,
                                              configs: H
                                          }),
                                          (0, r.jsx)(x.Z, {
                                              selectedColors: X,
                                              setSelectedColors: Y,
                                              selectedEffectId: z,
                                              className: k.selectionSubSection,
                                              defaultColor: H[z].defaultColors[0]
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(v.Z, {
                                      user: G,
                                      selectedFontId: M,
                                      selectedEffectId: z,
                                      selectedColors: z === l.m.SOLID && (0, a.E)(X, H[z].defaultColors) ? [] : X,
                                      onClose: Z
                                  })
                              ]
                          }),
                          (0, r.jsx)(w, {
                              isApplying: V,
                              onApply: () => {
                                  if (W) {
                                      let e = X;
                                      (z === l.m.SOLID && X.length > 0 && X[0] === H[z].defaultColors[0] && (e = []),
                                          K({
                                              fontId: M,
                                              effectId: z,
                                              colors: e
                                          }));
                                  }
                              },
                              onSurpriseMe: () => {
                                  let e = (0, b.aY)();
                                  (F(e.fontId), U(e.effectId), Y(e.colors));
                              },
                              onClose: Z,
                              canApply: W,
                              analyticsLocations: q
                          })
                      ]
                  })
              })
          });
}
