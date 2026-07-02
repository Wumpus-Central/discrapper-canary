"use strict";
n.d(t, { S: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(17928),
    u = n(866323),
    d = n(834730),
    c = n(475358),
    _ = n(775602),
    h = n(425763),
    f = n(375708),
    E = n(493442);
function p(e) {
    let { className: t } = e,
        n = [
            { keybinds: ["Spacebar", "Enter"], name: f.intl.string(f.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: f.intl.string(f.t.dmMqay) },
            { keybinds: ["ESC"], name: f.intl.string(f.t["1ioMJQ"]) },
        ],
        s = (0, l.bG)([_.Ay], () => _.Ay.useReducedMotion),
        p = (0, h.VU)();
    return (0, u.p)(
        p,
        {
            enter: { from: { opacity: 0, y: 80 * !s }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !s },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, s) =>
        s
            ? (0, i.jsx)("div", {
                  className: a()(E.lY, t),
                  children: (0, i.jsx)(o.animated.div, {
                      className: E.kL,
                      style: e,
                      children: n.map((e, t) => {
                          let { keybinds: s, name: a } = e;
                          return (0, i.jsxs)(
                              r.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(d.E, { variant: "text-md/semibold", className: E.nx, children: a }),
                                      s.map((e) => (0, i.jsx)(c.e, { shortcut: e, className: E.LE }, e)),
                                      t < n.length - 1 ? (0, i.jsx)("span", { className: E.me }) : null,
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
