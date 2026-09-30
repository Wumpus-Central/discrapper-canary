l.d(s, { S: () => h });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    n = l.n(a),
    o = l(202091),
    m = l(866323),
    r = l(834730),
    d = l(475358),
    p = l(17928),
    u = l(775602),
    c = l(425763),
    f = l(375708),
    g = l(707615);
function h(e) {
    let { className: s } = e,
        l = [
            { keybinds: ["Spacebar", "Enter"], name: f.intl.string(f.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: f.intl.string(f.t.dmMqay) },
            { keybinds: ["ESC"], name: f.intl.string(f.t["1ioMJQ"]) },
        ],
        a = (0, p.bG)([u.Ay], () => u.Ay.useReducedMotion),
        h = (0, c.VU)();
    return (0, m.p)(
        h,
        {
            enter: { from: { opacity: 0, y: 80 * !a }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !a },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, a) =>
        a
            ? (0, t.jsx)("div", {
                  className: n()(g.lY, s),
                  children: (0, t.jsx)(o.animated.div, {
                      className: g.kL,
                      style: e,
                      children: l.map((e, s) => {
                          let { keybinds: a, name: n } = e;
                          return (0, t.jsxs)(
                              i.Fragment,
                              {
                                  children: [
                                      (0, t.jsx)(r.E, { variant: "text-md/semibold", className: g.nx, children: n }),
                                      a.map((e) => (0, t.jsx)(d.e, { shortcut: e, className: g.LE }, e)),
                                      s < l.length - 1 ? (0, t.jsx)("span", { className: g.me }) : null,
                                  ],
                              },
                              n,
                          );
                      }),
                  }),
              })
            : null,
    );
}
