n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(493773),
    c = n(178821),
    u = n(38618),
    h = n(522474),
    _ = n(333031),
    p = n(501787),
    f = n(249582);
function g(e) {
    let { locked: t, pinned: n, anchorLeft: r } = e,
        g = (0, a.e7)([u.Z], () => u.Z.getSocket());
    (0, c.nU)();
    let m = (0, a.e7)([h.Z], () => h.Z.getWindow(p.$J)),
        [v, x] = (0, c.m8)(g),
        { currentFPS: E, averageFrameTime: C, timeSinceLastDrop: Z, onResetFrameData: I, droppedFramesRef: S, renderedFrameCount: b, bufferFramecountRef: y, frameCheckerEffect: w } = (0, c.d6)(!0, v, !0),
        [O, N, T] = (0, c.ZF)(g),
        [j, k] = (0, c.Y5)(O, w, m),
        R = performance.now() - x.current < c.MC,
        A = N(C, y.current);
    (0, d.ZP)(
        () => (
            j(),
            () => {
                k();
            }
        )
    );
    let L = o.useCallback(() => {
            I(), T(), j();
        }, [I, T, j]),
        [P, D] = o.useState(!0),
        [M, z] = o.useState(!0),
        [V, W] = o.useState(!0),
        [F, U] = o.useState(!0),
        [H, B] = o.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)('div', {
              className: l()(f.panelGroup, !r && f.rightAligned),
              children: [
                  (P || !t) &&
                      (0, i.jsxs)('div', {
                          className: f.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: f.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: P,
                                          onChange: (e, t) => D(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: f.measurementText,
                                  children: [
                                      'FPS:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: E < 30 ? 'text-danger' : E < 45 ? 'text-warning' : 'text-primary',
                                          children: E.toFixed(2)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (M || !t) &&
                      (0, i.jsxs)('div', {
                          className: f.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: f.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: M,
                                          onChange: (e, t) => z(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: f.measurementText,
                                  children: [
                                      'Frame Times:',
                                      ' ',
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: C > 1.1 * c.tO ? 'text-warning' : 'text-primary',
                                          children: [C.toFixed(2), 'ms']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (V || !t) &&
                      (0, i.jsxs)('div', {
                          className: f.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: f.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: V,
                                          onChange: (e, t) => W(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: f.measurementText,
                                  children: [
                                      'Dropped Frames:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: Z < 2 ? 'text-danger' : Z < 5 ? 'text-warning' : 'text-primary',
                                          children: S.current
                                      }),
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-secondary',
                                          className: f.secondaryInfoText,
                                          children: ['(', ((S.current / b.current) * 100).toFixed(3), '%)']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (F || !t) &&
                      (0, i.jsxs)('div', {
                          className: f.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: f.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: F,
                                          onChange: (e, t) => U(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: f.measurementText,
                                  children: [
                                      'Rendered Frames:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-primary',
                                          children: b.current.toFixed(0)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (H || !t) &&
                      (0, i.jsxs)('div', {
                          className: f.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: f.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: H,
                                          onChange: (e, t) => B(t)
                                      })
                                  }),
                              (0, i.jsx)(s.ua7, {
                                  position: 'left',
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (e) =>
                                      (0, i.jsx)('div', {
                                          ...e,
                                          children: (0, i.jsxs)(s.Text, {
                                              variant: 'text-md/normal',
                                              color: 'text-secondary',
                                              className: f.measurementText,
                                              children: [
                                                  'Idle Frame Delta:',
                                                  ' ',
                                                  (0, i.jsxs)(s.Text, {
                                                      tag: 'span',
                                                      variant: 'code',
                                                      color: A > 1 ? 'text-danger' : 'text-primary',
                                                      children: [A.toFixed(2), 'ms']
                                                  })
                                              ]
                                          })
                                      })
                              })
                          ]
                      }),
                  R &&
                      (0, i.jsx)(s.ua7, {
                          position: 'left',
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (e) =>
                              (0, i.jsx)('span', {
                                  ...e,
                                  children: (0, i.jsx)(s.Text, {
                                      tag: 'span',
                                      variant: 'code',
                                      color: 'text-danger',
                                      children: '(Main App Backgrounded)'
                                  })
                              })
                      }),
                  !t &&
                      (0, i.jsx)('div', {
                          className: f.bottomPanelButton,
                          children: (0, i.jsx)(_.Z, {
                              children: (0, i.jsx)(s.zxk, {
                                  onClick: L,
                                  children: 'Reset Frame Data'
                              })
                          })
                      })
              ]
          });
}
