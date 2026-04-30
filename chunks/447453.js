t.d(s, { S: () => v });
var n = t(627968),
    i = t(64700),
    a = t(503698),
    l = t.n(a),
    r = t(785651),
    c = t(17928),
    o = t(866323),
    u = t(834730),
    d = t(475358),
    g = t(775602),
    h = t(425763),
    m = t(985018),
    p = t(493442);
function v(e) {
    let { className: s } = e,
        t = [
            { keybinds: ["Spacebar", "Enter"], name: m.intl.string(m.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: m.intl.string(m.t.dmMqay) },
            { keybinds: ["ESC"], name: m.intl.string(m.t["1ioMJQ"]) },
        ],
        a = (0, c.bG)([g.A], () => g.A.useReducedMotion),
        v = (0, h.VU)();
    return (0, o.p)(
        v,
        {
            enter: { from: { opacity: 0, y: 80 * !a }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !a },
            config: r.config.stiff,
        },
        "animate-always",
    )((e, a) =>
        a
            ? (0, n.jsx)("div", {
                  className: l()(p.lY, s),
                  children: (0, n.jsx)(r.animated.div, {
                      className: p.kL,
                      style: e,
                      children: t.map((e, s) => {
                          let { keybinds: a, name: l } = e;
                          return (0, n.jsxs)(
                              i.Fragment,
                              {
                                  children: [
                                      (0, n.jsx)(u.E, { variant: "text-md/semibold", className: p.nx, children: l }),
                                      a.map((e) => (0, n.jsx)(d.e, { shortcut: e, className: p.LE }, e)),
                                      s < t.length - 1 ? (0, n.jsx)("span", { className: p.me }) : null,
                                  ],
                              },
                              l,
                          );
                      }),
                  }),
              })
            : null,
    );
}
