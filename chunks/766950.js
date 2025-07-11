(n.d(t, { default: () => v }), n(388685));
var l = n(255367),
    s = n(73800),
    r = n(522942),
    i = n(342905),
    o = n(442837),
    c = n(902704),
    a = n(481060),
    d = n(100527),
    u = n(906732),
    f = n(594174),
    S = n(305813),
    O = n(698282),
    m = n(388032),
    p = n(584794);
let x = [-1, -1];
function E(e) {
    let { onApply: t, onSurpriseMe: n, canApply: s } = e;
    return (0, l.jsxs)(a.mzw, {
        className: p.footer,
        children: [
            (0, l.jsx)(a.ua7, {
                text: '',
                shouldShow: !s,
                children: (e) => {
                    var n, r;
                    return (0, l.jsx)(
                        a.zxk,
                        ((n = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        ((l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = l));
                                    }));
                            }
                            return e;
                        })({}, e)),
                        (r = r =
                            {
                                onClick: t,
                                disabled: !s,
                                text: m.intl.string(m.t['1Qm829']),
                                variant: 'primary',
                                size: 'md'
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, l);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n)
                    );
                }
            }),
            (0, l.jsx)(a.zxk, {
                variant: 'secondary',
                size: 'md',
                onClick: n,
                icon: a.T$Z,
                iconPosition: 'start',
                text: m.intl.string(O.default.NOGFdn)
            })
        ]
    });
}
function j(e) {
    let { selectedEffectId: t, setSelectedEffectId: n } = e;
    return (0, l.jsx)('div', {
        className: p.selectionSubSection,
        children: (0, l.jsx)(a.Text, {
            variant: 'text-md/semibold',
            children: m.intl.string(O.default['1wilMz'])
        })
    });
}
function N(e) {
    let { selectedFontId: t, setSelectedFontId: n } = e;
    return (0, l.jsx)('div', {
        className: p.selectionSubSection,
        children: (0, l.jsx)(a.Text, {
            variant: 'text-md/semibold',
            children: m.intl.string(O.default.nP0ngY)
        })
    });
}
function y(e) {
    let { selectedColors: t, setSelectedColors: n } = e;
    return (0, l.jsx)('div', {
        className: p.selectionSubSection,
        children: (0, l.jsx)(a.Text, {
            variant: 'text-md/semibold',
            children: m.intl.string(O.default['JOpi7+'])
        })
    });
}
function v(e) {
    var t, n, v, I, b, h, C, _, P, g;
    let { transitionState: w, analyticsLocations: A, guild: R, onClose: D } = e,
        L = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        [T, M] = s.useState(null != (C = null == L || null == (t = L.displayNameStyles) ? void 0 : t.fontId) ? C : i.C.BANGERS),
        [B, H] = s.useState(null != (_ = null == L || null == (n = L.displayNameStyles) ? void 0 : n.effectId) ? _ : r.m.SOLID),
        [k, F] = s.useState(null != (P = null == L || null == (v = L.displayNameStyles) ? void 0 : v.colors) ? P : x),
        { analyticsLocations: G } = (0, u.ZP)(A, d.Z.EDIT_DISPLAY_NAME_STYLES_MODAL),
        Y = T !== (null == L || null == (I = L.displayNameStyles) ? void 0 : I.fontId) || B !== (null == L || null == (b = L.displayNameStyles) ? void 0 : b.effectId) || !(0, c.E)(k, null != (g = null == L || null == (h = L.displayNameStyles) ? void 0 : h.colors) ? g : x);
    return (s.useEffect(() => {}, [G]), null == L)
        ? null
        : (0, l.jsx)(u.Gt, {
              value: G,
              children: (0, l.jsxs)(a.Y0X, {
                  transitionState: w,
                  size: a.CgR.LARGE,
                  parentComponent: 'DisplayNameStylesModal',
                  children: [
                      (0, l.jsxs)(a.hzk, {
                          className: p.modalContent,
                          children: [
                              (0, l.jsxs)('div', {
                                  className: p.selectionSection,
                                  children: [
                                      (0, l.jsx)(a.xBx, {
                                          separator: !1,
                                          className: p.modalHeader,
                                          children: (0, l.jsx)(a.X6q, {
                                              variant: 'heading-lg/semibold',
                                              children: m.intl.string(O.default.ZPMAlZ)
                                          })
                                      }),
                                      (0, l.jsx)(N, {
                                          selectedFontId: T,
                                          setSelectedFontId: M
                                      }),
                                      (0, l.jsx)(j, {
                                          selectedEffectId: B,
                                          setSelectedEffectId: H
                                      }),
                                      (0, l.jsx)(y, {
                                          selectedColors: k,
                                          setSelectedColors: F
                                      })
                                  ]
                              }),
                              (0, l.jsx)(S.Z, {
                                  user: L,
                                  selectedFontId: T,
                                  selectedEffectId: B,
                                  selectedColors: k,
                                  onClose: D,
                                  className: p.previewSection
                              })
                          ]
                      }),
                      (0, l.jsx)(E, {
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
