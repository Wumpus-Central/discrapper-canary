n.d(t, { S: () => h });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(419354),
    o = n(311907),
    u = n(866323),
    c = n(834730),
    d = n(475358),
    _ = n(775602),
    E = n(425763),
    S = n(985018),
    p = n(493442);
function h(e) {
    let { className: t } = e,
        n = [
            { keybinds: ["Spacebar", "Enter"], name: S.intl.string(S.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: S.intl.string(S.t.dmMqay) },
            { keybinds: ["ESC"], name: S.intl.string(S.t["1ioMJQ"]) },
        ],
        a = (0, o.bG)([_.A], () => _.A.useReducedMotion),
        h = (0, E.VU)();
    return (0, u.p)(
        h,
        {
            enter: { from: { opacity: 0, y: 80 * !a }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !a },
            config: l.config.stiff,
        },
        "animate-always",
    )((e, a) =>
        a
            ? (0, i.jsx)("div", {
                  className: r()(p.lY, t),
                  children: (0, i.jsx)(l.animated.div, {
                      className: p.kL,
                      style: e,
                      children: n.map((e, t) => {
                          let { keybinds: a, name: r } = e;
                          return (0, i.jsxs)(
                              s.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(c.E, { variant: "text-md/semibold", className: p.nx, children: r }),
                                      a.map((e) => (0, i.jsx)(d.e, { shortcut: e, className: p.LE }, e)),
                                      t < n.length - 1 ? (0, i.jsx)("span", { className: p.me }) : null,
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
