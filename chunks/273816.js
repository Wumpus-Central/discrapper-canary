n.d(t, { Z: () => y }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(28664),
    u = n(481060),
    c = n(493773),
    d = n(178821),
    h = n(38618),
    p = n(522474),
    f = n(333031),
    m = n(76623),
    g = n(501787),
    O = n(533449);
function y(e) {
    let { locked: t, pinned: n, anchorLeft: l } = e,
        y = (0, a.e7)([h.Z], () => h.Z.getSocket()),
        E = (0, a.e7)([m.Z], () => m.Z.isGPUBoosted());
    (0, d.nU)();
    let v = (0, a.e7)([p.Z], () => p.Z.getWindow(g.$J)),
        [b, S] = (0, d.m8)(y),
        {
            currentFPS: x,
            averageFrameTime: j,
            timeSinceLastDrop: I,
            onResetFrameData: C,
            droppedFramesRef: Z,
            renderedFrameCount: N,
            bufferFramecountRef: w,
            frameCheckerEffect: T,
        } = (0, d.d6)(!0, b, !0),
        [_, P, A] = (0, d.ZF)(y),
        [D, R] = (0, d.Y5)(_, T, v),
        k = performance.now() - S.current < d.MC,
        L = P(j, w.current);
    (0, c.ZP)(
        () => (
            D(),
            () => {
                R();
            }
        ),
    );
    let M = r.useCallback(() => {
            C(), A(), D();
        }, [C, A, D]),
        [V, z] = r.useState(!0),
        [U, W] = r.useState(!0),
        [G, F] = r.useState(!0),
        [H, Y] = r.useState(!0),
        [B, Q] = r.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)("div", {
              className: o()(O.panelGroup, !l && O.rightAligned),
              children: [
                  (V || !t) &&
                      (0, i.jsxs)("div", {
                          className: O.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: O.measurementCheckbox,
                                      children: (0, i.jsx)(u.rsf, {
                                          checked: V,
                                          onChange: (e) => z(e),
                                      }),
                                  }),
                              (0, i.jsxs)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: O.measurementText,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, i.jsx)(u.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              x < 30
                                                  ? "text-feedback-critical"
                                                  : x < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: x.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (U || !t) &&
                      (0, i.jsxs)("div", {
                          className: O.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: O.measurementCheckbox,
                                      children: (0, i.jsx)(u.rsf, {
                                          checked: U,
                                          onChange: (e) => W(e),
                                      }),
                                  }),
                              (0, i.jsxs)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: O.measurementText,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, i.jsxs)(u.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: j > 1.1 * d.tO ? "text-feedback-warning" : "text-strong",
                                          children: [j.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (G || !t) &&
                      (0, i.jsxs)("div", {
                          className: O.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: O.measurementCheckbox,
                                      children: (0, i.jsx)(u.rsf, {
                                          checked: G,
                                          onChange: (e) => F(e),
                                      }),
                                  }),
                              (0, i.jsxs)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: O.measurementText,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, i.jsx)(u.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              I < 2
                                                  ? "text-feedback-critical"
                                                  : I < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: Z.current,
                                      }),
                                      (0, i.jsxs)(u.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: O.secondaryInfoText,
                                          children: ["(", ((Z.current / N.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (H || !t) &&
                      (0, i.jsxs)("div", {
                          className: O.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: O.measurementCheckbox,
                                      children: (0, i.jsx)(u.rsf, {
                                          checked: H,
                                          onChange: (e) => Y(e),
                                      }),
                                  }),
                              (0, i.jsxs)(u.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: O.measurementText,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, i.jsx)(u.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-strong",
                                          children: N.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (B || !t) &&
                      (0, i.jsxs)("div", {
                          className: O.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: O.measurementCheckbox,
                                      children: (0, i.jsx)(u.rsf, {
                                          checked: B,
                                          onChange: (e) => Q(e),
                                      }),
                                  }),
                              (0, i.jsx)(s.u, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, i.jsx)("div", {
                                      children: (0, i.jsxs)(u.Text, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: O.measurementText,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, i.jsxs)(u.Text, {
                                                  tag: "span",
                                                  variant: "code",
                                                  color: L > 1 ? "text-feedback-critical" : "text-strong",
                                                  children: [L.toFixed(2), "ms"],
                                              }),
                                          ],
                                      }),
                                  }),
                              }),
                          ],
                      }),
                  k &&
                      (0, i.jsx)(s.u, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, i.jsx)("span", {
                              children: (0, i.jsx)(u.Text, {
                                  tag: "span",
                                  variant: "code",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  E &&
                      (0, i.jsx)(u.Text, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, i.jsx)("div", {
                          className: O.bottomPanelButton,
                          children: (0, i.jsx)(f.Z, {
                              children: (0, i.jsx)(u.Button, {
                                  variant: "primary",
                                  text: "Reset Frame Data",
                                  onClick: M,
                              }),
                          }),
                      }),
              ],
          });
}
