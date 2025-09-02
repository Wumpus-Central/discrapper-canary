n.d(t, { Z: () => v }), n(388685);
var i = n(951288),
    r = n(647438),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(493773),
    d = n(178821),
    p = n(38618),
    f = n(522474),
    h = n(333031),
    m = n(610394),
    g = n(501787),
    y = n(533449);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function b(e, t) {
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
        v = (0, a.e7)([p.Z], () => p.Z.getSocket()),
        E = (0, a.e7)([m.ZP], () => m.ZP.isGPUBoosted());
    (0, d.nU)();
    let _ = (0, a.e7)([f.Z], () => f.Z.getWindow(g.$J)),
        [S, I] = (0, d.m8)(v),
        {
            currentFPS: x,
            averageFrameTime: j,
            timeSinceLastDrop: C,
            onResetFrameData: N,
            droppedFramesRef: Z,
            renderedFrameCount: w,
            bufferFramecountRef: P,
            frameCheckerEffect: T,
        } = (0, d.d6)(!0, S, !0),
        [k, A, D] = (0, d.ZF)(v),
        [R, L] = (0, d.Y5)(k, T, _),
        M = performance.now() - I.current < d.MC,
        z = A(j, P.current);
    (0, u.ZP)(
        () => (
            R(),
            () => {
                L();
            }
        ),
    );
    let U = r.useCallback(() => {
            N(), D(), R();
        }, [N, D, R]),
        [V, W] = r.useState(!0),
        [G, F] = r.useState(!0),
        [B, H] = r.useState(!0),
        [Y, Q] = r.useState(!0),
        [K, X] = r.useState(!0);
    return t && !n
        ? null
        : (0, i.jsxs)("div", {
              className: l()(y.panelGroup, !o && y.rightAligned),
              children: [
                  (V || !t) &&
                      (0, i.jsxs)("div", {
                          className: y.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: y.measurementCheckbox,
                                      children: (0, i.jsx)(s.$q, {
                                          size: 16,
                                          value: V,
                                          onChange: (e, t) => W(t),
                                      }),
                                  }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-secondary",
                                  className: y.measurementText,
                                  children: [
                                      "FPS:",
                                      " ",
                                      (0, i.jsx)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              x < 30
                                                  ? "text-danger"
                                                  : x < 45
                                                    ? "text-feedback-warning"
                                                    : "text-primary",
                                          children: x.toFixed(2),
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
                                      children: (0, i.jsx)(s.$q, {
                                          size: 16,
                                          value: G,
                                          onChange: (e, t) => F(t),
                                      }),
                                  }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-secondary",
                                  className: y.measurementText,
                                  children: [
                                      "Frame Times:",
                                      " ",
                                      (0, i.jsxs)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: j > 1.1 * d.tO ? "text-feedback-warning" : "text-primary",
                                          children: [j.toFixed(2), "ms"],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (B || !t) &&
                      (0, i.jsxs)("div", {
                          className: y.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: y.measurementCheckbox,
                                      children: (0, i.jsx)(s.$q, {
                                          size: 16,
                                          value: B,
                                          onChange: (e, t) => H(t),
                                      }),
                                  }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-secondary",
                                  className: y.measurementText,
                                  children: [
                                      "Dropped Frames:",
                                      " ",
                                      (0, i.jsx)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color:
                                              C < 2 ? "text-danger" : C < 5 ? "text-feedback-warning" : "text-primary",
                                          children: Z.current,
                                      }),
                                      (0, i.jsxs)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-secondary",
                                          className: y.secondaryInfoText,
                                          children: ["(", ((Z.current / w.current) * 100).toFixed(3), "%)"],
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
                                      children: (0, i.jsx)(s.$q, {
                                          size: 16,
                                          value: Y,
                                          onChange: (e, t) => Q(t),
                                      }),
                                  }),
                              (0, i.jsxs)(c.Text, {
                                  variant: "text-md/normal",
                                  color: "text-secondary",
                                  className: y.measurementText,
                                  children: [
                                      "Rendered Frames:",
                                      " ",
                                      (0, i.jsx)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-primary",
                                          children: w.current.toFixed(0),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  (K || !t) &&
                      (0, i.jsxs)("div", {
                          className: y.measurement,
                          children: [
                              !t &&
                                  (0, i.jsx)("div", {
                                      className: y.measurementCheckbox,
                                      children: (0, i.jsx)(s.$q, {
                                          size: 16,
                                          value: K,
                                          onChange: (e, t) => X(t),
                                      }),
                                  }),
                              (0, i.jsx)(c.ua7, {
                                  position: "left",
                                  text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                                  children: (e) =>
                                      (0, i.jsx)(
                                          "div",
                                          b(O({}, e), {
                                              children: (0, i.jsxs)(c.Text, {
                                                  variant: "text-md/normal",
                                                  color: "text-secondary",
                                                  className: y.measurementText,
                                                  children: [
                                                      "Idle Frame Delta:",
                                                      " ",
                                                      (0, i.jsxs)(c.Text, {
                                                          tag: "span",
                                                          variant: "code",
                                                          color: z > 1 ? "text-danger" : "text-primary",
                                                          children: [z.toFixed(2), "ms"],
                                                      }),
                                                  ],
                                              }),
                                          }),
                                      ),
                              }),
                          ],
                      }),
                  M &&
                      (0, i.jsx)(c.ua7, {
                          position: "left",
                          text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                          children: (e) =>
                              (0, i.jsx)(
                                  "span",
                                  b(O({}, e), {
                                      children: (0, i.jsx)(c.Text, {
                                          tag: "span",
                                          variant: "code",
                                          color: "text-danger",
                                          children: "(Main App Backgrounded)",
                                      }),
                                  }),
                              ),
                      }),
                  E &&
                      (0, i.jsx)(c.Text, {
                          tag: "span",
                          variant: "code",
                          color: "text-feedback-positive",
                          children: "(Using GPU Priority - Realtime)",
                      }),
                  !t &&
                      (0, i.jsx)("div", {
                          className: y.bottomPanelButton,
                          children: (0, i.jsx)(h.Z, {
                              children: (0, i.jsx)(c.zxk, {
                                  variant: "primary",
                                  text: "Reset Frame Data",
                                  onClick: U,
                              }),
                          }),
                      }),
              ],
          });
}
