t.d(s, { S: () => h });
var i = t(627968),
    l = t(64700),
    n = t(503698),
    a = t.n(n),
    o = t(18005),
    r = t(17928),
    d = t(866323),
    u = t(834730),
    c = t(475358),
    m = t(775602),
    p = t(425763),
    g = t(375708),
    f = t(493442);
function h(e) {
    let { className: s } = e,
        t = [
            { keybinds: ["Spacebar", "Enter"], name: g.intl.string(g.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: g.intl.string(g.t.dmMqay) },
            { keybinds: ["ESC"], name: g.intl.string(g.t["1ioMJQ"]) },
        ],
        n = (0, r.bG)([m.Ay], () => m.Ay.useReducedMotion),
        h = (0, p.VU)();
    return (0, d.p)(
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
                  className: a()(f.lY, s),
                  children: (0, i.jsx)(o.animated.div, {
                      className: f.kL,
                      style: e,
                      children: t.map((e, s) => {
                          let { keybinds: n, name: a } = e;
                          return (0, i.jsxs)(
                              l.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(u.E, { variant: "text-md/semibold", className: f.nx, children: a }),
                                      n.map((e) => (0, i.jsx)(c.e, { shortcut: e, className: f.LE }, e)),
                                      s < t.length - 1 ? (0, i.jsx)("span", { className: f.me }) : null,
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
