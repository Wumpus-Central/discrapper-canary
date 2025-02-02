n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(493773),
    c = n(178821),
    u = n(38618),
    h = n(333031),
    _ = n(992813);
function p(e) {
    let { locked: t, pinned: n, anchorLeft: r } = e,
        p = (0, a.e7)([u.Z], () => u.Z.getSocket());
    (0, c.nU)();
    let [g, f] = (0, c.m8)(p),
        { currentFPS: m, averageFrameTime: v, timeSinceLastDrop: x, onResetFrameData: E, droppedFramesRef: Z, renderedFrameCount: C, bufferFramecountRef: I, frameCheckerEffect: S } = (0, c.d6)(!0, g, !0),
        [b, y, N] = (0, c.ZF)(p),
        [w, T] = (0, c.Y5)(b, S),
        O = performance.now() - f.current < c.MC,
        j = y(v, I.current);
    (0, d.Z)(
        () => (
            w(),
            () => {
                T();
            }
        )
    );
    let k = l.useCallback(() => {
            E(), N(), w();
        }, [E, N, w]),
        [R, A] = l.useState(!0),
        [L, M] = l.useState(!0),
        [P, D] = l.useState(!0),
        [z, V] = l.useState(!0),
        [W, F] = l.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)('div', {
              className: o()(_.panelGroup, !r && _.rightAligned),
              children: [
                  (R || !t) &&
                      (0, i.jsxs)('div', {
                          className: _.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: _.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: R,
                                          onChange: (e, t) => A(t)
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
                                          color: m < 30 ? 'text-danger' : m < 45 ? 'text-warning' : 'text-primary',
                                          children: m.toFixed(2)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (L || !t) &&
                      (0, i.jsxs)('div', {
                          className: _.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: _.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: L,
                                          onChange: (e, t) => M(t)
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
                                          color: v > 1.1 * c.tO ? 'text-warning' : 'text-primary',
                                          children: [v.toFixed(2), 'ms']
                                      })
                                  ]
                              })
                          ]
                      }),
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
                                          onChange: (e, t) => D(t)
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
                                          color: x < 2 ? 'text-danger' : x < 5 ? 'text-warning' : 'text-primary',
                                          children: Z.current
                                      }),
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-secondary',
                                          className: _.secondaryInfoText,
                                          children: ['(', ((Z.current / C.current) * 100).toFixed(3), '%)']
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
                                          onChange: (e, t) => V(t)
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
                                          children: C.current.toFixed(0)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (W || !t) &&
                      (0, i.jsxs)('div', {
                          className: _.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: _.measurementCheckbox,
                                      children: (0, i.jsx)(s.XZJ, {
                                          size: 16,
                                          value: W,
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
                                                      color: j > 1 ? 'text-danger' : 'text-primary',
                                                      children: [j.toFixed(2), 'ms']
                                                  })
                                              ]
                                          })
                                      })
                              })
                          ]
                      }),
                  O &&
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
                                  onClick: k,
                                  children: 'Reset Frame Data'
                              })
                          })
                      })
              ]
          });
}
