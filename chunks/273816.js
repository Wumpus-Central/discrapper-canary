n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(493773),
    u = n(178821),
    c = n(38618),
    h = n(522474),
    _ = n(333031),
    p = n(610394),
    f = n(501787),
    m = n(249582);
function g(e) {
    let { locked: t, pinned: n, anchorLeft: r } = e,
        g = (0, a.e7)([c.Z], () => c.Z.getSocket()),
        v = (0, a.e7)([p.ZP], () => p.ZP.isGPUBoosted());
    (0, u.nU)();
    let E = (0, a.e7)([h.Z], () => h.Z.getWindow(f.$J)),
        [x, I] = (0, u.m8)(g),
        { currentFPS: C, averageFrameTime: S, timeSinceLastDrop: Z, onResetFrameData: y, droppedFramesRef: O, renderedFrameCount: N, bufferFramecountRef: b, frameCheckerEffect: T } = (0, u.d6)(!0, x, !0),
        [w, A, j] = (0, u.ZF)(g),
        [k, R] = (0, u.Y5)(w, T, E),
        L = performance.now() - I.current < u.MC,
        D = A(S, b.current);
    (0, d.ZP)(
        () => (
            k(),
            () => {
                R();
            }
        )
    );
    let P = l.useCallback(() => {
            y(), j(), k();
        }, [y, j, k]),
        [M, z] = l.useState(!0),
        [V, W] = l.useState(!0),
        [U, F] = l.useState(!0),
        [B, G] = l.useState(!0),
        [H, Y] = l.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)('div', {
              className: o()(m.panelGroup, !r && m.rightAligned),
              children: [
                  (M || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: M,
                                          onChange: (e, t) => z(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: m.measurementText,
                                  children: [
                                      'FPS:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: C < 30 ? 'text-danger' : C < 45 ? 'text-warning' : 'text-primary',
                                          children: C.toFixed(2)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (V || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: V,
                                          onChange: (e, t) => W(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: m.measurementText,
                                  children: [
                                      'Frame Times:',
                                      ' ',
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: S > 1.1 * u.tO ? 'text-warning' : 'text-primary',
                                          children: [S.toFixed(2), 'ms']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (U || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: U,
                                          onChange: (e, t) => F(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: m.measurementText,
                                  children: [
                                      'Dropped Frames:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: Z < 2 ? 'text-danger' : Z < 5 ? 'text-warning' : 'text-primary',
                                          children: O.current
                                      }),
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-secondary',
                                          className: m.secondaryInfoText,
                                          children: ['(', ((O.current / N.current) * 100).toFixed(3), '%)']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (B || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: B,
                                          onChange: (e, t) => G(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: m.measurementText,
                                  children: [
                                      'Rendered Frames:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-primary',
                                          children: N.current.toFixed(0)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (H || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: H,
                                          onChange: (e, t) => Y(t)
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
                                              className: m.measurementText,
                                              children: [
                                                  'Idle Frame Delta:',
                                                  ' ',
                                                  (0, i.jsxs)(s.Text, {
                                                      tag: 'span',
                                                      variant: 'code',
                                                      color: D > 1 ? 'text-danger' : 'text-primary',
                                                      children: [D.toFixed(2), 'ms']
                                                  })
                                              ]
                                          })
                                      })
                              })
                          ]
                      }),
                  L &&
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
                  v &&
                      (0, i.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'code',
                          color: 'text-positive',
                          children: '(Using GPU Priority - Realtime)'
                      }),
                  !t &&
                      (0, i.jsx)('div', {
                          className: m.bottomPanelButton,
                          children: (0, i.jsx)(_.Z, {
                              children: (0, i.jsx)(s.zxk, {
                                  onClick: P,
                                  children: 'Reset Frame Data'
                              })
                          })
                      })
              ]
          });
}
