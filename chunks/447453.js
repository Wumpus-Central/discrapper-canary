t.d(s, { S: () => h });
var i = t(627968),
    l = t(64700),
    n = t(503698),
    a = t.n(n),
    o = t(580929),
    r = t(17928),
    u = t(866323),
    d = t(834730),
    c = t(475358),
    m = t(775602),
    p = t(425763),
    f = t(375708),
    g = t(493442);
function h(e) {
    let { className: s } = e,
        t = [
            { keybinds: ["Spacebar", "Enter"], name: f.intl.string(f.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: f.intl.string(f.t.dmMqay) },
            { keybinds: ["ESC"], name: f.intl.string(f.t["1ioMJQ"]) },
        ],
        n = (0, r.bG)([m.Ay], () => m.Ay.useReducedMotion),
        h = (0, p.VU)();
    return (0, u.p)(
        h,
        {
            enter: { from: { opacity: 0, y: 80 * !n }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !n },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, n) =>
        n
            ? (0, i.jsx)("div", {
                  className: a()(g.lY, s),
                  children: (0, i.jsx)(o.animated.div, {
                      className: g.kL,
                      style: e,
                      children: t.map((e, s) => {
                          let { keybinds: n, name: a } = e;
                          return (0, i.jsxs)(
                              l.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(d.E, { variant: "text-md/semibold", className: g.nx, children: a }),
                                      n.map((e) => (0, i.jsx)(c.e, { shortcut: e, className: g.LE }, e)),
                                      s < t.length - 1 ? (0, i.jsx)("span", { className: g.me }) : null,
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
