i.d(t, { S: () => I });
var n = i(627968),
    s = i(64700),
    l = i(503698),
    a = i.n(l),
    r = i(873174),
    c = i(17928),
    o = i(866323),
    u = i(834730),
    d = i(475358),
    g = i(775602),
    m = i(425763),
    f = i(375708),
    x = i(493442);
function I(e) {
    let { className: t } = e,
        i = [
            { keybinds: ["Spacebar", "Enter"], name: f.intl.string(f.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: f.intl.string(f.t.dmMqay) },
            { keybinds: ["ESC"], name: f.intl.string(f.t["1ioMJQ"]) },
        ],
        l = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        I = (0, m.VU)();
    return (0, o.p)(
        I,
        {
            enter: { from: { opacity: 0, y: 80 * !l }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !l },
            config: r.config.stiff,
        },
        "animate-always",
    )((e, l) =>
        l
            ? (0, n.jsx)("div", {
                  className: a()(x.lY, t),
                  children: (0, n.jsx)(r.animated.div, {
                      className: x.kL,
                      style: e,
                      children: i.map((e, t) => {
                          let { keybinds: l, name: a } = e;
                          return (0, n.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      (0, n.jsx)(u.E, { variant: "text-md/semibold", className: x.nx, children: a }),
                                      l.map((e) => (0, n.jsx)(d.e, { shortcut: e, className: x.LE }, e)),
                                      t < i.length - 1 ? (0, n.jsx)("span", { className: x.me }) : null,
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
