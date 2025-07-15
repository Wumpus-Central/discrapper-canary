(l.d(t, { default: () => O }), l(388685));
var n = l(255367),
    s = l(73800),
    r = l(522942),
    i = l(342905),
    o = l(442837),
    c = l(902704),
    a = l(481060),
    d = l(100527),
    u = l(906732),
    f = l(594174),
    m = l(305813),
    p = l(698282),
    x = l(388032),
    S = l(584794);
let j = [-1, -1];
function y(e) {
    let { onApply: t, onSurpriseMe: l, canApply: s } = e;
    return (0, n.jsxs)(a.mzw, {
        className: S.footer,
        children: [
            (0, n.jsx)(a.ua7, {
                text: '',
                shouldShow: !s,
                children: (e) => {
                    var l, r;
                    return (0, n.jsx)(
                        a.zxk,
                        ((l = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var l = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(l);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(l).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        ((n = l[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n));
                                    }));
                            }
                            return e;
                        })({}, e)),
                        (r = r =
                            {
                                onClick: t,
                                disabled: !s,
                                text: x.intl.string(x.t['1Qm829']),
                                variant: 'primary',
                                size: 'md'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var l = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      l.push.apply(l, n);
                                  }
                                  return l;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        l)
                    );
                }
            }),
            (0, n.jsx)(a.zxk, {
                variant: 'secondary',
                size: 'md',
                onClick: l,
                icon: a.T$Z,
                iconPosition: 'start',
                text: x.intl.string(p.default.NOGFdn)
            })
        ]
    });
}
function b(e) {
    let { selectedEffectId: t, setSelectedEffectId: l } = e;
    return (0, n.jsx)('div', {
        className: S.selectionSubSection,
        children: (0, n.jsx)(a.Text, {
            variant: 'text-md/semibold',
            children: x.intl.string(p.default['1wilMz'])
        })
    });
}
function v(e) {
    let { selectedFontId: t, setSelectedFontId: l } = e;
    return (0, n.jsx)('div', {
        className: S.selectionSubSection,
        children: (0, n.jsx)(a.Text, {
            variant: 'text-md/semibold',
            children: x.intl.string(p.default.nP0ngY)
        })
    });
}
function h(e) {
    let { selectedColors: t, setSelectedColors: l } = e;
    return (0, n.jsx)('div', {
        className: S.selectionSubSection,
        children: (0, n.jsx)(a.Text, {
            variant: 'text-md/semibold',
            children: x.intl.string(p.default['JOpi7+'])
        })
    });
}
function O(e) {
    var t, l, O, g, w, N, _, C, I, P;
    let { transitionState: E, analyticsLocations: k, guild: A, onClose: D } = e,
        z = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        [F, H] = s.useState(null != (_ = null == z || null == (t = z.displayNameStyles) ? void 0 : t.fontId) ? _ : i.C.BANGERS),
        [L, T] = s.useState(null != (C = null == z || null == (l = z.displayNameStyles) ? void 0 : l.effectId) ? C : r.m.SOLID),
        [Z, M] = s.useState(null != (I = null == z || null == (O = z.displayNameStyles) ? void 0 : O.colors) ? I : j),
        { analyticsLocations: G } = (0, u.ZP)(k, d.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        Y = F !== (null == z || null == (g = z.displayNameStyles) ? void 0 : g.fontId) || L !== (null == z || null == (w = z.displayNameStyles) ? void 0 : w.effectId) || !(0, c.E)(Z, null != (P = null == z || null == (N = z.displayNameStyles) ? void 0 : N.colors) ? P : j);
    return (s.useEffect(() => {}, [G]), null == z)
        ? null
        : (0, n.jsx)(u.Gt, {
              value: G,
              children: (0, n.jsxs)(a.Y0X, {
                  transitionState: E,
                  size: a.CgR.LARGE,
                  parentComponent: 'DisplayNameStylesModal',
                  children: [
                      (0, n.jsxs)(a.hzk, {
                          className: S.modalContent,
                          children: [
                              (0, n.jsxs)('div', {
                                  className: S.selectionSection,
                                  children: [
                                      (0, n.jsx)(a.xBx, {
                                          separator: !1,
                                          className: S.modalHeader,
                                          children: (0, n.jsx)(a.X6q, {
                                              variant: 'heading-lg/semibold',
                                              children: x.intl.string(p.default.ZPMAlZ)
                                          })
                                      }),
                                      (0, n.jsx)(v, {
                                          selectedFontId: F,
                                          setSelectedFontId: H
                                      }),
                                      (0, n.jsx)(b, {
                                          selectedEffectId: L,
                                          setSelectedEffectId: T
                                      }),
                                      (0, n.jsx)(h, {
                                          selectedColors: Z,
                                          setSelectedColors: M
                                      })
                                  ]
                              }),
                              (0, n.jsx)(m.Z, {
                                  user: z,
                                  selectedFontId: F,
                                  selectedEffectId: L,
                                  selectedColors: Z,
                                  onClose: D,
                                  className: S.previewSection
                              })
                          ]
                      }),
                      (0, n.jsx)(y, {
                          onApply: () => {
                              D();
                          },
                          onSurpriseMe: () => {},
                          canApply: Y,
                          analyticsLocations: G
                      })
                  ]
              })
          });
}
