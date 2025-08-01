(n.d(t, { default: () => w }), n(953529), n(388685));
var o = n(255367),
    r = n(73800),
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
    h = n(131016),
    b = n(922626),
    j = n(579346),
    x = n(438759),
    y = n(512070),
    O = n(305813),
    C = n(203872),
    S = n(981631),
    v = n(474936),
    _ = n(698282),
    P = n(388032),
    N = n(584794);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                ((o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o));
            }));
    }
    return e;
}
function T(e) {
    let { onApply: t, onSurpriseMe: n, onClose: r, canApply: l, isApplying: i } = e,
        s = (0, m.m)(v.p9.TIER_2),
        a = (0, o.jsx)(c.zxk, {
            variant: 'secondary',
            size: 'md',
            onClick: n,
            icon: c.T$Z,
            iconPosition: 'start',
            text: P.intl.string(_.default.NOGFdn)
        }),
        d = (0, o.jsxs)('div', {
            className: N.subscriberButtonContainer,
            children: [
                a,
                (0, o.jsx)(c.ua7, {
                    text: P.intl.string(_.default.cVTpnp),
                    shouldShow: !l,
                    children: (e) => {
                        var n, r;
                        return (0, o.jsx)(
                            c.zxk,
                            ((n = k({}, e)),
                            (r = r =
                                {
                                    onClick: t,
                                    disabled: !l || i,
                                    loading: i,
                                    text: P.intl.string(P.t['1Qm829']),
                                    variant: 'primary',
                                    size: 'md',
                                    fullWidth: !0
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var o = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, o);
                                      }
                                      return n;
                                  })(Object(r)).forEach(function (e) {
                                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                  }),
                            n)
                        );
                    }
                })
            ]
        }),
        u = (0, o.jsxs)('div', {
            className: N.upsell,
            children: [
                (0, o.jsxs)('div', {
                    className: N.descriptionContainer,
                    children: [
                        (0, o.jsx)(c.ua7, {
                            text: P.intl.string(P.t['5AFxuL']),
                            children: (e) =>
                                (0, o.jsx)(
                                    c.SrA,
                                    k(
                                        {
                                            size: 'md',
                                            colorClass: N.nitroIcon
                                        },
                                        e
                                    )
                                )
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-default',
                            className: N.description,
                            children: P.intl.format(_.default.PWf0xc, {
                                onClickNitro: () => {
                                    (0, p.$)(r);
                                }
                            })
                        })
                    ]
                }),
                (0, o.jsxs)('div', {
                    className: N.buttonContainer,
                    children: [
                        a,
                        (0, o.jsx)(f.Z, {
                            premiumModalAnalyticsLocation: {
                                section: S.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: S.qAy.PREMIUM_UPSELL_BUTTON
                            },
                            subscriptionTier: v.Si.TIER_2
                        })
                    ]
                })
            ]
        });
    return (0, o.jsx)(c.mzw, {
        'data-migration-pending': !0,
        className: N.footer,
        children: s ? d : u
    });
}
function w(e) {
    var t, n, p, f, m, v, k, w, E, D, R;
    let { transitionState: I, analyticsLocations: A, guild: L, onClose: B } = e,
        Z = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        G = (0, C.J)(),
        [H, M] = r.useState(null != (E = null == Z || null == (t = Z.displayNameStyles) ? void 0 : t.fontId) ? E : i.C.DEFAULT),
        [F, z] = r.useState(null != (D = null == Z || null == (n = Z.displayNameStyles) ? void 0 : n.effectId) ? D : l.m.SOLID),
        [U, X] = r.useState((null == Z || null == (p = Z.displayNameStyles) ? void 0 : p.colors) != null && (null == Z || null == (f = Z.displayNameStyles) ? void 0 : f.colors.length) > 0 ? (null == Z || null == (m = Z.displayNameStyles) ? void 0 : m.colors) : G[F].defaultColors),
        { analyticsLocations: Y } = (0, u.ZP)(A, d.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        { handleApplyDisplayNameStyles: q, isApplying: K } = (0, b.Z)({
            onSuccess: () => {
                B();
            },
            onError: (e) => {}
        }),
        V = H !== (null == Z || null == (v = Z.displayNameStyles) ? void 0 : v.fontId) || F !== (null == Z || null == (k = Z.displayNameStyles) ? void 0 : k.effectId) || !(0, a.E)(U, null != (R = null == Z || null == (w = Z.displayNameStyles) ? void 0 : w.colors) ? R : []);
    return (r.useEffect(() => {}, [Y]), null == Z)
        ? null
        : (0, o.jsx)(u.Gt, {
              value: Y,
              children: (0, o.jsxs)(c.Y0X, {
                  'data-migration-pending': !0,
                  transitionState: I,
                  size: c.CgR.LARGE,
                  parentComponent: 'DisplayNameStylesModal',
                  className: N.modalRoot,
                  children: [
                      (0, o.jsxs)(c.hzk, {
                          'data-migration-pending': !0,
                          className: N.modalContent,
                          style: { overflow: 'hidden auto' },
                          children: [
                              (0, o.jsxs)('div', {
                                  className: N.selectionSection,
                                  children: [
                                      (0, o.jsx)(c.xBx, {
                                          'data-migration-pending': !0,
                                          separator: !1,
                                          className: N.sectionHeader,
                                          children: (0, o.jsx)(c.X6q, {
                                              variant: 'heading-lg/semibold',
                                              children: P.intl.string(_.default.ZPMAlZ)
                                          })
                                      }),
                                      (0, o.jsx)(y.Z, {
                                          selectedFontId: H,
                                          setSelectedFontId: M,
                                          className: N.selectionSubSection
                                      }),
                                      (0, o.jsx)(x.Z, {
                                          selectedEffectId: F,
                                          setSelectedEffectId: (e) => {
                                              (e === l.m.GRADIENT && 1 === U.length ? X(U.concat(S.p6O)) : (0 === U.length || (0, a.E)(U, G[F].defaultColors)) && X(G[e].defaultColors), z(e));
                                          },
                                          className: N.selectionSubSection,
                                          configs: G
                                      }),
                                      (0, o.jsx)(j.Z, {
                                          selectedColors: U,
                                          setSelectedColors: X,
                                          selectedEffectId: F,
                                          className: N.selectionSubSection,
                                          defaultColor: G[F].defaultColors[0]
                                      })
                                  ]
                              }),
                              (0, o.jsx)(O.Z, {
                                  user: Z,
                                  selectedFontId: H,
                                  selectedEffectId: F,
                                  selectedColors: F === l.m.SOLID && (0, a.E)(U, G[F].defaultColors) ? [] : U,
                                  onClose: B
                              })
                          ]
                      }),
                      (0, o.jsx)(T, {
                          isApplying: K,
                          onApply: () => {
                              if (V) {
                                  let e = U;
                                  (F === l.m.SOLID && U.length > 0 && U[0] === G[F].defaultColors[0] && (e = []),
                                      q({
                                          fontId: H,
                                          effectId: F,
                                          colors: e
                                      }));
                              }
                          },
                          onSurpriseMe: () => {
                              let e = (0, h.aY)();
                              (M(e.fontId), z(e.effectId), X(e.colors));
                          },
                          onClose: B,
                          canApply: V,
                          analyticsLocations: Y
                      })
                  ]
              })
          });
}
