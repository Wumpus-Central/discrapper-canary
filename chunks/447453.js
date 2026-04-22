t.d(s, { S: () => I });
var i = t(627968),
    n = t(64700),
    a = t(503698),
    r = t.n(a),
    l = t(517738),
    u = t(311907),
    o = t(866323),
    c = t(834730),
    d = t(475358),
    m = t(775602),
    g = t(425763),
    h = t(985018),
    f = t(493442);
function I(e) {
    let { className: s } = e,
        t = [
            { keybinds: ["Spacebar", "Enter"], name: h.intl.string(h.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: h.intl.string(h.t.dmMqay) },
            { keybinds: ["ESC"], name: h.intl.string(h.t["1ioMJQ"]) },
        ],
        a = (0, u.bG)([m.A], () => m.A.useReducedMotion),
        I = (0, g.VU)();
    return (0, o.p)(
        I,
        {
            enter: { from: { opacity: 0, y: 80 * !a }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !a },
            config: l.config.stiff,
        },
        "animate-always",
    )((e, a) =>
        a
            ? (0, i.jsx)("div", {
                  className: r()(f.lY, s),
                  children: (0, i.jsx)(l.animated.div, {
                      className: f.kL,
                      style: e,
                      children: t.map((e, s) => {
                          let { keybinds: a, name: r } = e;
                          return (0, i.jsxs)(
                              n.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(c.E, { variant: "text-md/semibold", className: f.nx, children: r }),
                                      a.map((e) => (0, i.jsx)(d.e, { shortcut: e, className: f.LE }, e)),
                                      s < t.length - 1 ? (0, i.jsx)("span", { className: f.me }) : null,
                                  ],
                              },
                              r,
                          );
                      }),
                  }),
              })
            : null,
    );
}
