n.d(t, { S: () => I });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(785651),
    c = n(17928),
    o = n(866323),
    u = n(834730),
    d = n(475358),
    g = n(775602),
    m = n(425763),
    f = n(375708),
    x = n(493442);
function I(e) {
    let { className: t } = e,
        n = [
            { keybinds: ["Spacebar", "Enter"], name: f.intl.string(f.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: f.intl.string(f.t.dmMqay) },
            { keybinds: ["ESC"], name: f.intl.string(f.t["1ioMJQ"]) },
        ],
        s = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        I = (0, m.VU)();
    return (0, o.p)(
        I,
        {
            enter: { from: { opacity: 0, y: 80 * !s }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !s },
            config: r.config.stiff,
        },
        "animate-always",
    )((e, s) =>
        s
            ? (0, i.jsx)("div", {
                  className: a()(x.lY, t),
                  children: (0, i.jsx)(r.animated.div, {
                      className: x.kL,
                      style: e,
                      children: n.map((e, t) => {
                          let { keybinds: s, name: a } = e;
                          return (0, i.jsxs)(
                              l.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(u.E, { variant: "text-md/semibold", className: x.nx, children: a }),
                                      s.map((e) => (0, i.jsx)(d.e, { shortcut: e, className: x.LE }, e)),
                                      t < n.length - 1 ? (0, i.jsx)("span", { className: x.me }) : null,
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
