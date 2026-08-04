"use strict";
n.d(t, { S: () => I });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(534740),
    o = n(866323),
    d = n(834730),
    c = n(475358),
    u = n(17928),
    _ = n(775602),
    E = n(425763),
    A = n(375708),
    h = n(33626);
function I(e) {
    let { className: t } = e,
        n = [
            { keybinds: ["Spacebar", "Enter"], name: A.intl.string(A.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: A.intl.string(A.t.dmMqay) },
            { keybinds: ["ESC"], name: A.intl.string(A.t["1ioMJQ"]) },
        ],
        a = (0, u.bG)([_.Ay], () => _.Ay.useReducedMotion),
        I = (0, E.VU)();
    return (0, o.p)(
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
                                      (0, i.jsx)(d.E, { variant: "text-md/semibold", className: h.nx, children: s }),
                                      a.map((e) => (0, i.jsx)(c.e, { shortcut: e, className: h.LE }, e)),
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
