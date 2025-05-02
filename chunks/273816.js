n.d(t, { Z: () => v }), n(388685);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(493773),
    u = n(178821),
    d = n(38618),
    p = n(522474),
    f = n(333031),
    h = n(610394),
    m = n(501787),
    g = n(565655);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { locked: t, pinned: n, anchorLeft: o } = e,
        v = (0, a.e7)([d.Z], () => d.Z.getSocket()),
        b = (0, a.e7)([h.ZP], () => h.ZP.isGPUBoosted());
    (0, u.nU)();
    let E = (0, a.e7)([p.Z], () => p.Z.getWindow(m.$J)),
        [_, I] = (0, u.m8)(v),
        { currentFPS: x, averageFrameTime: j, timeSinceLastDrop: S, onResetFrameData: C, droppedFramesRef: N, renderedFrameCount: Z, bufferFramecountRef: w, frameCheckerEffect: P } = (0, u.d6)(!0, _, !0),
        [T, k, D] = (0, u.ZF)(v),
        [A, L] = (0, u.Y5)(T, P, E),
        R = performance.now() - I.current < u.MC,
        M = k(j, w.current);
    (0, c.ZP)(
        () => (
            A(),
            () => {
                L();
            }
        )
    );
    let V = r.useCallback(() => {
            C(), D(), A();
        }, [C, D, A]),
        [U, z] = r.useState(!0),
        [W, G] = r.useState(!0),
        [F, B] = r.useState(!0),
        [H, Y] = r.useState(!0),
        [Q, K] = r.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)('div', {
              className: l()(g.panelGroup, !o && g.rightAligned),
              children: [
                  (U || !t) &&
                      (0, i.jsxs)('div', {
                          className: g.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: g.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: U,
                                          onChange: (e, t) => z(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: g.measurementText,
                                  children: [
                                      'FPS:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: x < 30 ? 'text-danger' : x < 45 ? 'text-warning' : 'text-primary',
                                          children: x.toFixed(2)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (W || !t) &&
                      (0, i.jsxs)('div', {
                          className: g.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: g.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: W,
                                          onChange: (e, t) => G(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: g.measurementText,
                                  children: [
                                      'Frame Times:',
                                      ' ',
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: j > 1.1 * u.tO ? 'text-warning' : 'text-primary',
                                          children: [j.toFixed(2), 'ms']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (F || !t) &&
                      (0, i.jsxs)('div', {
                          className: g.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: g.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: F,
                                          onChange: (e, t) => B(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: g.measurementText,
                                  children: [
                                      'Dropped Frames:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: S < 2 ? 'text-danger' : S < 5 ? 'text-warning' : 'text-primary',
                                          children: N.current
                                      }),
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-secondary',
                                          className: g.secondaryInfoText,
                                          children: ['(', ((N.current / Z.current) * 100).toFixed(3), '%)']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (H || !t) &&
                      (0, i.jsxs)('div', {
                          className: g.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: g.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: H,
                                          onChange: (e, t) => Y(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: g.measurementText,
                                  children: [
                                      'Rendered Frames:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-primary',
                                          children: Z.current.toFixed(0)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (Q || !t) &&
                      (0, i.jsxs)('div', {
                          className: g.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: g.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: Q,
                                          onChange: (e, t) => K(t)
                                      })
                                  }),
                              (0, i.jsx)(s.ua7, {
                                  position: 'left',
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (e) =>
                                      (0, i.jsx)(
                                          'div',
                                          O(y({}, e), {
                                              children: (0, i.jsxs)(s.Text, {
                                                  variant: 'text-md/normal',
                                                  color: 'text-secondary',
                                                  className: g.measurementText,
                                                  children: [
                                                      'Idle Frame Delta:',
                                                      ' ',
                                                      (0, i.jsxs)(s.Text, {
                                                          tag: 'span',
                                                          variant: 'code',
                                                          color: M > 1 ? 'text-danger' : 'text-primary',
                                                          children: [M.toFixed(2), 'ms']
                                                      })
                                                  ]
                                              })
                                          })
                                      )
                              })
                          ]
                      }),
                  R &&
                      (0, i.jsx)(s.ua7, {
                          position: 'left',
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (e) =>
                              (0, i.jsx)(
                                  'span',
                                  O(y({}, e), {
                                      children: (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-danger',
                                          children: '(Main App Backgrounded)'
                                      })
                                  })
                              )
                      }),
                  b &&
                      (0, i.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'code',
                          color: 'text-positive',
                          children: '(Using GPU Priority - Realtime)'
                      }),
                  !t &&
                      (0, i.jsx)('div', {
                          className: g.bottomPanelButton,
                          children: (0, i.jsx)(f.Z, {
                              children: (0, i.jsx)(s.zxk, {
                                  onClick: V,
                                  children: 'Reset Frame Data'
                              })
                          })
                      })
              ]
          });
}
