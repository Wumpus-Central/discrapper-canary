t.d(l, { S: () => w });
var s = t(627968),
    a = t(64700),
    n = t(503698),
    i = t.n(n),
    o = t(580929),
    d = t(17928),
    r = t(866323),
    m = t(834730),
    p = t(475358),
    c = t(775602),
    u = t(425763),
    h = t(375708),
    f = t(493442);
function w(e) {
    let { className: l } = e,
        t = [
            { keybinds: ["Spacebar", "Enter"], name: h.intl.string(h.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: h.intl.string(h.t.dmMqay) },
            { keybinds: ["ESC"], name: h.intl.string(h.t["1ioMJQ"]) },
        ],
        n = (0, d.bG)([c.Ay], () => c.Ay.useReducedMotion),
        w = (0, u.VU)();
    return (0, r.p)(
        w,
        {
            enter: { from: { opacity: 0, y: 80 * !n }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !n },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, n) =>
        n
            ? (0, s.jsx)("div", {
                  className: i()(f.lY, l),
                  children: (0, s.jsx)(o.animated.div, {
                      className: f.kL,
                      style: e,
                      children: t.map((e, l) => {
                          let { keybinds: n, name: i } = e;
                          return (0, s.jsxs)(
                              a.Fragment,
                              {
                                  children: [
                                      (0, s.jsx)(m.E, { variant: "text-md/semibold", className: f.nx, children: i }),
                                      n.map((e) => (0, s.jsx)(p.e, { shortcut: e, className: f.LE }, e)),
                                      l < t.length - 1 ? (0, s.jsx)("span", { className: f.me }) : null,
                                  ],
                              },
                              i,
                          );
                      }),
                  }),
              })
            : null,
    );
}
