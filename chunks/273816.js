n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(493773),
    d = n(178821),
    u = n(38618),
    h = n(333031),
    m = n(992813);
function p(e) {
    let { locked: t, pinned: n, anchorLeft: o } = e,
        p = (0, a.e7)([u.Z], () => u.Z.getSocket());
    (0, d.nU)();
    let [x, f] = (0, d.m8)(p),
        { currentFPS: v, averageFrameTime: g, timeSinceLastDrop: C, onResetFrameData: Z, droppedFramesRef: _, renderedFrameCount: b, bufferFramecountRef: j, frameCheckerEffect: I } = (0, d.d6)(!0, x, !0),
        [E, k, N] = (0, d.ZF)(p),
        [w, y] = (0, d.Y5)(E, I),
        T = performance.now() - f.current < d.MC,
        S = k(g, j.current);
    (0, c.Z)(
        () => (
            w(),
            () => {
                y();
            }
        )
    );
    let L = r.useCallback(() => {
            Z(), N(), w();
        }, [Z, N, w]),
        [A, O] = r.useState(!0),
        [P, V] = r.useState(!0),
        [M, R] = r.useState(!0),
        [D, W] = r.useState(!0),
        [z, F] = r.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)('div', {
              className: l()(m.panelGroup, !o && m.rightAligned),
              children: [
                  (A || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.Checkbox, {
                                          size: 16,
                                          value: A,
                                          onChange: (e, t) => O(t)
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
                                          color: v < 30 ? 'text-danger' : v < 45 ? 'text-warning' : 'text-primary',
                                          children: v.toFixed(2)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (P || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.Checkbox, {
                                          size: 16,
                                          value: P,
                                          onChange: (e, t) => V(t)
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
                                          color: g > 1.1 * d.tO ? 'text-warning' : 'text-primary',
                                          children: [g.toFixed(2), 'ms']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (M || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.Checkbox, {
                                          size: 16,
                                          value: M,
                                          onChange: (e, t) => R(t)
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
                                          color: C < 2 ? 'text-danger' : C < 5 ? 'text-warning' : 'text-primary',
                                          children: _.current
                                      }),
                                      (0, i.jsxs)(s.Text, {
                                          tag: 'span',
                                          variant: 'code',
                                          color: 'text-secondary',
                                          className: m.secondaryInfoText,
                                          children: ['(', ((_.current / b.current) * 100).toFixed(3), '%)']
                                      })
                                  ]
                              })
                          ]
                      }),
                  (D || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.Checkbox, {
                                          size: 16,
                                          value: D,
                                          onChange: (e, t) => W(t)
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
                                          children: b.current.toFixed(0)
                                      })
                                  ]
                              })
                          ]
                      }),
                  (z || !t) &&
                      (0, i.jsxs)('div', {
                          className: m.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)('div', {
                                      className: m.measurementCheckbox,
                                      children: (0, i.jsx)(s.Checkbox, {
                                          size: 16,
                                          value: z,
                                          onChange: (e, t) => F(t)
                                      })
                                  }),
                              (0, i.jsx)(s.Tooltip, {
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
                                                      color: S > 1 ? 'text-danger' : 'text-primary',
                                                      children: [S.toFixed(2), 'ms']
                                                  })
                                              ]
                                          })
                                      })
                              })
                          ]
                      }),
                  T &&
                      (0, i.jsx)(s.Tooltip, {
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
                          className: m.bottomPanelButton,
                          children: (0, i.jsx)(h.Z, {
                              children: (0, i.jsx)(s.Button, {
                                  onClick: L,
                                  children: 'Reset Frame Data'
                              })
                          })
                      })
              ]
          });
}
