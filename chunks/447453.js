l.d(s, { S: () => g });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    n = l.n(a),
    o = l(941143),
    r = l(866323),
    m = l(834730),
    d = l(475358),
    p = l(17928),
    c = l(775602),
    u = l(425763),
    h = l(105292),
    f = l(707615);
function g(e) {
    let { className: s } = e,
        l = [
            { keybinds: ["Spacebar", "Enter"], name: h.intl.string(h.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: h.intl.string(h.t.dmMqay) },
            { keybinds: ["ESC"], name: h.intl.string(h.t["1ioMJQ"]) },
        ],
        a = (0, p.bG)([c.Ay], () => c.Ay.useReducedMotion),
        g = (0, u.VU)();
    return (0, r.p)(
        g,
        {
            enter: { from: { opacity: 0, y: 80 * !a }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !a },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, a) =>
        a
            ? (0, t.jsx)("div", {
                  className: n()(f.lY, s),
                  children: (0, t.jsx)(o.animated.div, {
                      className: f.kL,
                      style: e,
                      children: l.map((e, s) => {
                          let { keybinds: a, name: n } = e;
                          return (0, t.jsxs)(
                              i.Fragment,
                              {
                                  children: [
                                      (0, t.jsx)(m.E, { variant: "text-md/semibold", className: f.nx, children: n }),
                                      a.map((e) => (0, t.jsx)(d.e, { shortcut: e, className: f.LE }, e)),
                                      s < l.length - 1 ? (0, t.jsx)("span", { className: f.me }) : null,
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
