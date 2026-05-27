"use strict";
n.d(t, { T: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(661531),
    u = n(717421),
    c = n(603392),
    d = n(844222),
    _ = n(187322),
    h = n(452027),
    f = n(180846);
let p = { mass: 1, tension: 250 },
    E = "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z",
    m = "M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z",
    g = "M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z",
    A = "M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z",
    I = "M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z",
    T = "M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z";
function S(e) {
    var t;
    let n,
        s,
        S,
        { onChange: y, checked: N, disabled: v, displayOnly: C, focusProps: R, innerRef: O, ...b } = e,
        { reducedMotion: D } = r.useContext(d.C),
        L = r.useRef(null),
        [w, M] = r.useState(!1),
        P = (0, c.r)(l.A.colors.SLIDER_TRACK_BACKGROUND).spring(),
        x = (0, c.r)(l.A.colors.BACKGROUND_BRAND).spring(),
        { state: k } = (0, u.z)({ config: p, state: w ? (N ? 0.7 : 0.3) : +!!N }, "animate-always");
    function U(e) {
        M(!1), e.stopPropagation(), y?.(e.currentTarget.checked);
    }
    function G(e) {
        v || e.repeat || ((" " === e.key || "Enter" === e.key) && M(!0));
    }
    function F(e) {
        v || !w || e.repeat || (M(!1), "Enter" === e.key && L.current?.click());
    }
    let V = (0, i.jsxs)(o.animated.svg, {
        className: f.aw,
        viewBox: "0 0 28 20",
        preserveAspectRatio: "xMinYMid meet",
        style: { left: k.to({ range: [0, 0.3, 0.7, 1], output: [-4, 1, 8, 12] }) },
        "aria-hidden": !0,
        children: [
            (0, i.jsx)(o.animated.rect, {
                fill: "white",
                x: k.to({ range: [0, 0.3, 0.7, 1], output: [4, 0, 0, 4] }),
                y: k.to({ range: [0, 0.3, 0.7, 1], output: [0, 1, 1, 0] }),
                height: k.to({ range: [0, 0.3, 0.7, 1], output: [20, 18, 18, 20] }),
                width: k.to({ range: [0, 0.3, 0.7, 1], output: [20, 28, 28, 20] }),
                rx: "10",
            }),
            ((t = D.enabled),
            (n = k.to({ output: [P, x] })),
            (s = t ? [E, E, I, I] : [E, g, g, I]),
            (S = t ? [m, m, T, T] : [m, A, A, T]),
            (0, i.jsxs)("svg", {
                viewBox: "0 0 20 20",
                fill: "none",
                children: [
                    (0, i.jsx)(o.animated.path, { fill: n, d: k.to({ range: [0, 0.3, 0.7, 1], output: s }) }),
                    (0, i.jsx)(o.animated.path, { fill: n, d: k.to({ range: [0, 0.3, 0.7, 1], output: S }) }),
                ],
            })),
        ],
    });
    return C
        ? (0, i.jsx)(o.animated.div, {
              "data-toggleable-component": "switch",
              className: a()(f.kL, { [f.KD]: N, [f.r9]: v }),
              style: { backgroundColor: k.to({ output: [P, x] }) },
              children: V,
          })
        : (0, i.jsx)(h.D, {
              ...b,
              disabled: v,
              layout: "horizontal",
              layoutConfig: { horizontalControlColumnWidth: "auto" },
              auxiliaryContentPosition: "under-label",
              children: (e) =>
                  (0, i.jsx)(_.vN, {
                      ...R,
                      within: !0,
                      offset: -2,
                      children: (0, i.jsxs)(o.animated.div, {
                          "data-toggleable-component": "switch",
                          className: a()(f.kL, { [f.KD]: N, [f.r9]: v }),
                          onMouseDown: () => !v && M(!0),
                          onMouseUp: () => M(!1),
                          onMouseLeave: () => M(!1),
                          style: { backgroundColor: k.to({ output: [P, x] }) },
                          children: [
                              V,
                              (0, i.jsx)("input", {
                                  id: e.controlId,
                                  "aria-describedby": e.describedById,
                                  "aria-errormessage": e.errorMessageId,
                                  "aria-invalid": null != e.errorMessageId,
                                  type: "checkbox",
                                  ref: (e) => {
                                      (L.current = e), null != O && (O.current = e);
                                  },
                                  className: f.hF,
                                  tabIndex: v ? -1 : 0,
                                  onKeyDown: G,
                                  onKeyUp: F,
                                  onChange: U,
                                  checked: N,
                                  disabled: v,
                              }),
                          ],
                      }),
                  }),
          });
}
