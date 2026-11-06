var t = l(477900),
    i = l(582128),
    n = l(503698),
    a = l.n(n),
    o = l(120692),
    r = l(866323),
    m = l(834730),
    d = l(475358),
    u = l(855986),
    c = l(775602),
    p = l(425763),
    f = l(792996),
    S = l(707615);
l.d(
    s,
    {},
    {
        S: function (e) {
            let { className: s } = e,
                l = [
                    { keybinds: ["Spacebar", "Enter"], name: f.intl.string(f.t["cs/HVH"]) },
                    { keybinds: ["up", "down"], name: f.intl.string(f.t.dmMqay) },
                    { keybinds: ["ESC"], name: f.intl.string(f.t["1ioMJQ"]) },
                ],
                n = (0, u.bG)([c.Ay], () => c.Ay.useReducedMotion),
                g = (0, p.VU)();
            return (0, r.p)(
                g,
                {
                    enter: { from: { opacity: 0, y: 80 * !n }, to: { opacity: 1, y: 0 } },
                    leave: { opacity: 0, y: 80 * !n },
                    config: o.config.stiff,
                },
                "animate-always",
            )((e, n) =>
                n
                    ? (0, t.jsx)("div", {
                          className: a()(S.lY, s),
                          children: (0, t.jsx)(o.animated.div, {
                              className: S.kL,
                              style: e,
                              children: l.map((e, s) => {
                                  let { keybinds: n, name: a } = e;
                                  return (0, t.jsxs)(
                                      i.Fragment,
                                      {
                                          children: [
                                              (0, t.jsx)(m.E, {
                                                  variant: "body-md/semibold",
                                                  className: S.nx,
                                                  children: a,
                                              }),
                                              n.map((e) => (0, t.jsx)(d.e, { shortcut: e, className: S.LE }, e)),
                                              s < l.length - 1 ? (0, t.jsx)("span", { className: S.me }) : null,
                                          ],
                                      },
                                      a,
                                  );
                              }),
                          }),
                      })
                    : null,
            );
        },
    },
);
