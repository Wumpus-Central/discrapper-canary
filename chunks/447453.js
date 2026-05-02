"use strict";
n.d(t, { S: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(785651),
    l = n(17928),
    u = n(866323),
    c = n(834730),
    d = n(475358),
    _ = n(775602),
    f = n(425763),
    h = n(375708),
    p = n(493442);
function E(e) {
    let { className: t } = e,
        n = [
            { keybinds: ["Spacebar", "Enter"], name: h.intl.string(h.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: h.intl.string(h.t.dmMqay) },
            { keybinds: ["ESC"], name: h.intl.string(h.t["1ioMJQ"]) },
        ],
        s = (0, l.bG)([_.A], () => _.A.useReducedMotion),
        E = (0, f.VU)();
    return (0, u.p)(
        E,
        {
            enter: { from: { opacity: 0, y: 80 * !s }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !s },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, s) =>
        s
            ? (0, i.jsx)("div", {
                  className: a()(p.lY, t),
                  children: (0, i.jsx)(o.animated.div, {
                      className: p.kL,
                      style: e,
                      children: n.map((e, t) => {
                          let { keybinds: s, name: a } = e;
                          return (0, i.jsxs)(
                              r.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(c.E, { variant: "text-md/semibold", className: p.nx, children: a }),
                                      s.map((e) => (0, i.jsx)(d.e, { shortcut: e, className: p.LE }, e)),
                                      t < n.length - 1 ? (0, i.jsx)("span", { className: p.me }) : null,
                                  ],
                              },
                              a,
                          );
                      }),
                  }),
              })
            : null,
    );
}
