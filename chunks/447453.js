t.d(s, { S: () => h });
var i = t(477900),
    n = t(582128),
    l = t(503698),
    a = t.n(l),
    o = t(53466),
    r = t(866323),
    u = t(834730),
    d = t(475358),
    c = t(17928),
    m = t(775602),
    p = t(425763),
    f = t(375708),
    g = t(707615);
function h(e) {
    let { className: s } = e,
        t = [
            { keybinds: ["Spacebar", "Enter"], name: f.intl.string(f.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: f.intl.string(f.t.dmMqay) },
            { keybinds: ["ESC"], name: f.intl.string(f.t["1ioMJQ"]) },
        ],
        l = (0, c.bG)([m.Ay], () => m.Ay.useReducedMotion),
        h = (0, p.VU)();
    return (0, r.p)(
        h,
        {
            enter: { from: { opacity: 0, y: 80 * !l }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !l },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, l) =>
        l
            ? (0, i.jsx)("div", {
                  className: a()(g.lY, s),
                  children: (0, i.jsx)(o.animated.div, {
                      className: g.kL,
                      style: e,
                      children: t.map((e, s) => {
                          let { keybinds: l, name: a } = e;
                          return (0, i.jsxs)(
                              n.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(u.E, { variant: "text-md/semibold", className: g.nx, children: a }),
                                      l.map((e) => (0, i.jsx)(d.e, { shortcut: e, className: g.LE }, e)),
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
