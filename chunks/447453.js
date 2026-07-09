"use strict";
n.d(t, { S: () => I });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(17928),
    d = n(866323),
    c = n(834730),
    u = n(475358),
    _ = n(775602),
    E = n(425763),
    A = n(375708),
    h = n(493442);
function I(e) {
    let { className: t } = e,
        n = [
            { keybinds: ["Spacebar", "Enter"], name: A.intl.string(A.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: A.intl.string(A.t.dmMqay) },
            { keybinds: ["ESC"], name: A.intl.string(A.t["1ioMJQ"]) },
        ],
        a = (0, o.bG)([_.Ay], () => _.Ay.useReducedMotion),
        I = (0, E.VU)();
    return (0, d.p)(
        I,
        {
            enter: { from: { opacity: 0, y: 80 * !a }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !a },
            config: l.config.stiff,
        },
        "animate-always",
    )((e, a) =>
        a
            ? (0, i.jsx)("div", {
                  className: s()(h.lY, t),
                  children: (0, i.jsx)(l.animated.div, {
                      className: h.kL,
                      style: e,
                      children: n.map((e, t) => {
                          let { keybinds: a, name: s } = e;
                          return (0, i.jsxs)(
                              r.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(c.E, { variant: "text-md/semibold", className: h.nx, children: s }),
                                      a.map((e) => (0, i.jsx)(u.e, { shortcut: e, className: h.LE }, e)),
                                      t < n.length - 1 ? (0, i.jsx)("span", { className: h.me }) : null,
                                  ],
                              },
                              s,
                          );
                      }),
                  }),
              })
            : null,
    );
}
