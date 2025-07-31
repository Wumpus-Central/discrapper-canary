(n.d(t, { default: () => w }), n(953529), n(388685));
var r = n(255367),
    o = n(73800),
    l = n(522942),
    i = n(342905),
    a = n(442837),
    s = n(902704),
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
    O = n(512070),
    y = n(305813),
    C = n(203872),
    _ = n(981631),
    S = n(474936),
    v = n(698282),
    P = n(388032),
    N = n(584794);
function k(e) {
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
function T(e) {
    let { onApply: t, onSurpriseMe: n, onClose: o, canApply: l, isApplying: i } = e,
        a = (0, m.m)(S.p9.TIER_2),
        s = (0, r.jsx)(c.zxk, {
            variant: 'secondary',
            size: 'md',
            onClick: n,
            icon: c.T$Z,
            iconPosition: 'start',
            text: P.intl.string(v.default.NOGFdn)
        }),
        d = (0, r.jsxs)('div', {
            className: N.subscriberButtonContainer,
            children: [
                s,
                (0, r.jsx)(c.ua7, {
                    text: P.intl.string(v.default.cVTpnp),
                    shouldShow: !l,
                    children: (e) => {
                        var n, o;
                        return (0, r.jsx)(
                            c.zxk,
                            ((n = k({}, e)),
                            (o = o =
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
            className: N.upsell,
            children: [
                (0, r.jsxs)('div', {
                    className: N.descriptionContainer,
                    children: [
                        (0, r.jsx)(c.ua7, {
                            text: P.intl.string(P.t['5AFxuL']),
                            children: (e) =>
                                (0, r.jsx)(
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
                        (0, r.jsx)(c.Text, {
                            variant: 'text-md/medium',
                            color: 'text-default',
                            className: N.description,
                            children: P.intl.format(v.default.PWf0xc, {
                                onClickNitro: () => {
                                    (0, p.$)(o);
                                }
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: N.buttonContainer,
                    children: [
                        s,
                        (0, r.jsx)(f.Z, {
                            premiumModalAnalyticsLocation: {
                                section: _.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: _.qAy.PREMIUM_UPSELL_BUTTON
                            },
                            subscriptionTier: S.Si.TIER_2
                        })
                    ]
                })
            ]
        });
    return (0, r.jsx)(c.mzw, {
        'data-migration-pending': !0,
        className: N.footer,
        children: a ? d : u
    });
}
function w(e) {
    var t, n, p, f, m, S, k, w, E, D;
    let { transitionState: R, analyticsLocations: I, guild: A, onClose: L } = e,
        B = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        Z = (0, C.J)(),
        [G, H] = o.useState(null != (k = null == B || null == (t = B.displayNameStyles) ? void 0 : t.fontId) ? k : i.C.DEFAULT),
        [M, F] = o.useState(null != (w = null == B || null == (n = B.displayNameStyles) ? void 0 : n.effectId) ? w : l.m.SOLID),
        [z, U] = o.useState(null != (E = null == B || null == (p = B.displayNameStyles) ? void 0 : p.colors) ? E : Z[M].defaultColors),
        { analyticsLocations: X } = (0, u.ZP)(I, d.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        { handleApplyDisplayNameStyles: Y, isApplying: q } = (0, b.Z)({
            onSuccess: () => {
                L();
            },
            onError: (e) => {}
        }),
        K = G !== (null == B || null == (f = B.displayNameStyles) ? void 0 : f.fontId) || M !== (null == B || null == (m = B.displayNameStyles) ? void 0 : m.effectId) || !(0, s.E)(z, null != (D = null == B || null == (S = B.displayNameStyles) ? void 0 : S.colors) ? D : []);
    return (o.useEffect(() => {}, [X]), null == B)
        ? null
        : (0, r.jsx)(u.Gt, {
              value: X,
              children: (0, r.jsxs)(c.Y0X, {
                  'data-migration-pending': !0,
                  transitionState: R,
                  size: c.CgR.LARGE,
                  parentComponent: 'DisplayNameStylesModal',
                  className: N.modalRoot,
                  children: [
                      (0, r.jsxs)(c.hzk, {
                          'data-migration-pending': !0,
                          className: N.modalContent,
                          style: { overflow: 'hidden auto' },
                          children: [
                              (0, r.jsxs)('div', {
                                  className: N.selectionSection,
                                  children: [
                                      (0, r.jsx)(c.xBx, {
                                          'data-migration-pending': !0,
                                          separator: !1,
                                          className: N.sectionHeader,
                                          children: (0, r.jsx)(c.X6q, {
                                              variant: 'heading-lg/semibold',
                                              children: P.intl.string(v.default.ZPMAlZ)
                                          })
                                      }),
                                      (0, r.jsx)(O.Z, {
                                          selectedFontId: G,
                                          setSelectedFontId: H,
                                          className: N.selectionSubSection
                                      }),
                                      (0, r.jsx)(x.Z, {
                                          selectedEffectId: M,
                                          setSelectedEffectId: (e) => {
                                              (e === l.m.GRADIENT && 1 === z.length ? U(z.concat(_.p6O)) : (0 === z.length || (0, s.E)(z, Z[M].defaultColors)) && U(Z[e].defaultColors), F(e));
                                          },
                                          className: N.selectionSubSection,
                                          configs: Z
                                      }),
                                      (0, r.jsx)(j.Z, {
                                          selectedColors: z,
                                          setSelectedColors: U,
                                          selectedEffectId: M,
                                          className: N.selectionSubSection,
                                          defaultColor: Z[M].defaultColors[0]
                                      })
                                  ]
                              }),
                              (0, r.jsx)(y.Z, {
                                  user: B,
                                  selectedFontId: G,
                                  selectedEffectId: M,
                                  selectedColors: z,
                                  onClose: L
                              })
                          ]
                      }),
                      (0, r.jsx)(T, {
                          isApplying: q,
                          onApply: () => {
                              if (K) {
                                  let e = z;
                                  (M === l.m.SOLID && z.length > 0 && z[0] === Z[M].defaultColors[0] && (e = []),
                                      Y({
                                          fontId: G,
                                          effectId: M,
                                          colors: e
                                      }));
                              }
                          },
                          onSurpriseMe: () => {
                              let e = (0, h.aY)();
                              (H(e.fontId), F(e.effectId), U(e.colors));
                          },
                          onClose: L,
                          canApply: K,
                          analyticsLocations: X
                      })
                  ]
              })
          });
}
