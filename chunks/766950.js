(n.d(t, { default: () => w }), n(953529), n(388685));
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
    h = n(131016),
    b = n(922626),
    j = n(579346),
    x = n(438759),
    O = n(512070),
    y = n(305813),
    C = n(203872),
    v = n(981631),
    _ = n(474936),
    S = n(698282),
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
        s = (0, m.m)(_.p9.TIER_2),
        a = (0, r.jsx)(c.zxk, {
            variant: 'secondary',
            size: 'md',
            onClick: n,
            icon: c.T$Z,
            iconPosition: 'start',
            text: P.intl.string(S.default.NOGFdn)
        }),
        d = (0, r.jsxs)('div', {
            className: N.subscriberButtonContainer,
            children: [
                a,
                (0, r.jsx)(c.ua7, {
                    text: P.intl.string(S.default.cVTpnp),
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
                            children: P.intl.format(S.default.PWf0xc, {
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
                        a,
                        (0, r.jsx)(f.Z, {
                            premiumModalAnalyticsLocation: {
                                section: v.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: v.qAy.PREMIUM_UPSELL_BUTTON
                            },
                            subscriptionTier: _.Si.TIER_2
                        })
                    ]
                })
            ]
        });
    return (0, r.jsx)(c.mzw, {
        'data-migration-pending': !0,
        className: N.footer,
        children: s ? d : u
    });
}
function w(e) {
    var t, n, p, f, m, _, k, w, D, E;
    let { transitionState: R, analyticsLocations: I, guild: A, onClose: L } = e,
        B = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        Z = (0, C.J)(),
        [G, H] = o.useState(null != (k = null == B || null == (t = B.displayNameStyles) ? void 0 : t.fontId) ? k : i.C.DEFAULT),
        [F, M] = o.useState(null != (w = null == B || null == (n = B.displayNameStyles) ? void 0 : n.effectId) ? w : l.m.SOLID),
        [z, U] = o.useState(null != (D = null == B || null == (p = B.displayNameStyles) ? void 0 : p.colors) ? D : Z[F].defaultColors),
        { analyticsLocations: X } = (0, u.ZP)(I, d.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        { handleApplyDisplayNameStyles: q, isApplying: Y } = (0, b.Z)({
            onSuccess: () => {
                L();
            },
            onError: (e) => {}
        }),
        K = G !== (null == B || null == (f = B.displayNameStyles) ? void 0 : f.fontId) || F !== (null == B || null == (m = B.displayNameStyles) ? void 0 : m.effectId) || !(0, a.E)(z, null != (E = null == B || null == (_ = B.displayNameStyles) ? void 0 : _.colors) ? E : []);
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
                                              children: P.intl.string(S.default.ZPMAlZ)
                                          })
                                      }),
                                      (0, r.jsx)(O.Z, {
                                          selectedFontId: G,
                                          setSelectedFontId: H,
                                          className: N.selectionSubSection
                                      }),
                                      (0, r.jsx)(x.Z, {
                                          selectedEffectId: F,
                                          setSelectedEffectId: (e) => {
                                              (e === l.m.GRADIENT && 1 === z.length ? U(z.concat(v.p6O)) : (0 === z.length || (0, a.E)(z, Z[F].defaultColors)) && U(Z[e].defaultColors), M(e));
                                          },
                                          className: N.selectionSubSection,
                                          configs: Z
                                      }),
                                      (0, r.jsx)(j.Z, {
                                          selectedColors: z,
                                          setSelectedColors: U,
                                          selectedEffectId: F,
                                          className: N.selectionSubSection,
                                          defaultColor: Z[F].defaultColors[0]
                                      })
                                  ]
                              }),
                              (0, r.jsx)(y.Z, {
                                  user: B,
                                  selectedFontId: G,
                                  selectedEffectId: F,
                                  selectedColors: z,
                                  onClose: L
                              })
                          ]
                      }),
                      (0, r.jsx)(T, {
                          isApplying: Y,
                          onApply: () => {
                              if (K) {
                                  let e = z;
                                  (F === l.m.SOLID && z.length > 0 && z[0] === Z[F].defaultColors[0] && (e = []),
                                      q({
                                          fontId: G,
                                          effectId: F,
                                          colors: e
                                      }));
                              }
                          },
                          onSurpriseMe: () => {
                              let e = (0, h.aY)();
                              (H(e.fontId), M(e.effectId), U(e.colors));
                          },
                          onClose: L,
                          canApply: K,
                          analyticsLocations: X
                      })
                  ]
              })
          });
}
