n.d(t, { Z: () => O }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(28664),
    c = n(481060),
    u = n(493773),
    d = n(178821),
    h = n(38618),
    p = n(522474),
    f = n(333031),
    m = n(76623),
    g = n(501787),
    y = n(533449);
function O(e) {
    let { locked: t, pinned: n, anchorLeft: l } = e,
        O = (0, a.e7)([h.Z], () => h.Z.getSocket()),
        v = (0, a.e7)([m.Z], () => m.Z.isGPUBoosted());
    (0, d.nU)();
    let E = (0, a.e7)([p.Z], () => p.Z.getWindow(g.$J)),
        [b, _] = (0, d.m8)(O),
        {
            currentFPS: S,
            averageFrameTime: x,
            timeSinceLastDrop: I,
            onResetFrameData: j,
            droppedFramesRef: C,
            renderedFrameCount: Z,
            bufferFramecountRef: N,
            frameCheckerEffect: w,
        } = (0, d.d6)(!0, b, !0),
        [T, P, A] = (0, d.ZF)(O),
        [k, D] = (0, d.Y5)(T, w, E),
        R = performance.now() - _.current < d.MC,
        L = P(x, N.current);
    (0, u.ZP)(
        () => (
            k(),
            () => {
                D();
            }
        ),
    );
    let M = r.useCallback(() => {
            j(), A(), k();
        }, [j, A, k]),
        [z, V] = r.useState(!0),
        [U, W] = r.useState(!0),
        [G, F] = r.useState(!0),
        [H, B] = r.useState(!0),
        [Y, Q] = r.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)("div", {
              className: o()(y.panelGroup, !l && y.rightAligned),
              children: [
                  (z || !t) &&
                      (0, i.jsxs)("div", {
                          className: y.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: y.measurementCheckbox,
                                      children: (0, i.jsx)(c.rsf, {
                                          checked: z,
                                          onChange: (e) => V(e),
                                      }),
                                  }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: y.measurementText,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, i.jsx)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              S < 30
                                                  ? "text-feedback-critical"
                                                  : S < 45
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: S.toFixed(2),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (U || !t) &&
                      (0, i.jsxs)("div", {
                          className: y.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: y.measurementCheckbox,
                                      children: (0, i.jsx)(c.rsf, {
                                          checked: U,
                                          onChange: (e) => W(e),
                                      }),
                                  }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: y.measurementText,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, i.jsxs)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: x > 1.1 * d.tO ? "text-feedback-warning" : "text-strong",
                                          children: [x.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (G || !t) &&
                      (0, i.jsxs)("div", {
                          className: y.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: y.measurementCheckbox,
                                      children: (0, i.jsx)(c.rsf, {
                                          checked: G,
                                          onChange: (e) => F(e),
                                      }),
                                  }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: y.measurementText,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, i.jsx)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              I < 2
                                                  ? "text-feedback-critical"
                                                  : I < 5
                                                    ? "text-feedback-warning"
                                                    : "text-strong",
                                          children: C.current,
                                      }),
                                      (0, i.jsxs)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-subtle",
                                          className: y.secondaryInfoText,
                                          children: ["(", ((C.current / Z.current) * 100).toFixed(3), "%)"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (H || !t) &&
                      (0, i.jsxs)("div", {
                          className: y.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: y.measurementCheckbox,
                                      children: (0, i.jsx)(c.rsf, {
                                          checked: H,
                                          onChange: (e) => B(e),
                                      }),
                                  }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  className: y.measurementText,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, i.jsx)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-strong",
                                          children: Z.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (Y || !t) &&
                      (0, i.jsxs)("div", {
                          className: y.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: y.measurementCheckbox,
                                      children: (0, i.jsx)(c.rsf, {
                                          checked: Y,
                                          onChange: (e) => Q(e),
                                      }),
                                  }),
                              (0, i.jsx)(s.u, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (0, i.jsx)("div", {
                                      children: (0, i.jsxs)(c.Text, {
                                          variant: "text-md/normal",
                                          color: "text-subtle",
                                          className: y.measurementText,
                                          children: [
                                              "Idle Frame Delta:",
                                              " ",
                                              (0, i.jsxs)(c.Text, {
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
                  R &&
                      (0, i.jsx)(s.u, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (0, i.jsx)("span", {
                              children: (0, i.jsx)(c.Text, {
                                  tag: "span",
                                  variant: "code",
                                  color: "text-feedback-critical",
                                  children: "(Main App Backgrounded)",
                              }),
                          }),
                      }),
                  v &&
                      (0, i.jsx)(c.Text, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, i.jsx)("div", {
                          className: y.bottomPanelButton,
                          children: (0, i.jsx)(f.Z, {
                              children: (0, i.jsx)(c.Button, {
                                  variant: "primary",
                                  text: "Reset Frame Data",
                                  onClick: M,
                              }),
                          }),
                      }),
              ],
          });
}
