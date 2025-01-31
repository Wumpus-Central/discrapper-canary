n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(481060),
    c = n(493773),
    d = n(178821),
    u = n(38618),
    h = n(333031),
    _ = n(992813);
function m(e) {
    let { locked: t, pinned: n, anchorLeft: o } = e,
        m = (0, l.e7)([u.Z], () => u.Z.getSocket());
    (0, d.nU)();
    let [g, p] = (0, d.m8)(m),
        { currentFPS: f, averageFrameTime: x, timeSinceLastDrop: v, onResetFrameData: C, droppedFramesRef: b, renderedFrameCount: Z, bufferFramecountRef: I, frameCheckerEffect: j } = (0, d.d6)(!0, g, !0),
        [w, y, E] = (0, d.ZF)(m),
        [k, N] = (0, d.Y5)(w, j),
        S = performance.now() - p.current < d.MC,
        T = y(x, I.current);
    (0, c.Z)(
        () => (
            k(),
            () => {
                N();
            }
        )
    );
    let O = r.useCallback(() => {
            C(), E(), k();
        }, [C, E, k]),
        [P, L] = r.useState(!0),
        [A, R] = r.useState(!0),
        [V, W] = r.useState(!0),
        [M, D] = r.useState(!0),
        [z, F] = r.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)('div', {
              className: a()(_.panelGroup, !o && _.rightAligned),
              children: [
                  (P || !t) &&
                      (0, i.jsxs)('div', {
                          className: _.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: _.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: P,
                                          onChange: (e, t) => L(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: _.measurementText,
                                  children: [
                                      'FPS:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: f < 30 ? 'text-danger' : f < 45 ? 'text-warning' : 'text-primary',
                                          children: f.toFixed(2)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (A || !t) &&
                      (0, i.jsxs)('div', {
                          className: _.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: _.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: A,
                                          onChange: (e, t) => R(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: _.measurementText,
                                  children: [
                                      'Frame Times:',
                                      ' ',
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: x > 1.1 * d.tO ? 'text-warning' : 'text-primary',
                                          children: [x.toFixed(2), 'ms']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (V || !t) &&
                      (0, i.jsxs)('div', {
                          className: _.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: _.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: V,
                                          onChange: (e, t) => W(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: _.measurementText,
                                  children: [
                                      'Dropped Frames:',
                                      ' ',
                                      (0, i.jsx)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: v < 2 ? 'text-danger' : v < 5 ? 'text-warning' : 'text-primary',
                                          children: b.current
                                      }),
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-secondary',
                                          className: _.secondaryInfoText,
                                          children: ['(', ((b.current / Z.current) * 100).toFixed(3), '%)']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (M || !t) &&
                      (0, i.jsxs)('div', {
                          className: _.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: _.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: M,
                                          onChange: (e, t) => D(t)
                                      })
                                  }),
                              (0, i.jsxs)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  className: _.measurementText,
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
                  (z || !t) &&
                      (0, i.jsxs)('div', {
                          className: _.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: _.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: z,
                                          onChange: (e, t) => F(t)
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
                                              className: _.measurementText,
                                              children: [
                                                  'Idle Frame Delta:',
                                                  ' ',
                                                  (0, i.jsxs)(s.Text, {
                                                      tag: 'span',
                                                      variant: 'code',
                                                      color: T > 1 ? 'text-danger' : 'text-primary',
                                                      children: [T.toFixed(2), 'ms']
                                                  })
                                              ]
                                          })
                                      })
                              })
                          ]
                      }),
                  S &&
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
                          className: _.bottomPanelButton,
                          children: (0, i.jsx)(h.Z, {
                              children: (0, i.jsx)(s.zxk, {
                                  onClick: O,
                                  children: 'Reset Frame Data'
                              })
                          })
                      })
              ]
          });
}
