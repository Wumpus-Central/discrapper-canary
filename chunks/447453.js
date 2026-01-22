n.d(t, { S: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(432022),
    l = n(311907),
    c = n(397927),
    u = n(775602),
    d = n(425763),
    f = n(985018),
    p = n(14949);
function _(e) {
    let { className: t } = e,
        n = [
            {
                keybinds: ["Spacebar", "Enter"],
                name: f.intl.string(f.t["cs/HVH"]),
            },
            {
                keybinds: ["up", "down"],
                name: f.intl.string(f.t.dmMqay),
            },
            {
                keybinds: ["ESC"],
                name: f.intl.string(f.t["1ioMJQ"]),
            },
        ],
        a = (0, l.bG)([u.A], () => u.A.useReducedMotion),
        _ = (0, d.VU)();
    return (0, c.pnh)(
        _,
        {
            enter: {
                from: {
                    opacity: 0,
                    y: 80 * !a,
                },
                to: {
                    opacity: 1,
                    y: 0,
                },
            },
            leave: {
                opacity: 0,
                y: 80 * !a,
            },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, a) =>
        a
            ? (0, r.jsx)("div", {
                  className: s()(p.lY, t),
                  children: (0, r.jsx)(o.animated.div, {
                      className: p.kL,
                      style: e,
                      children: n.map((e, t) => {
                          let { keybinds: a, name: s } = e;
                          return (0, r.jsxs)(
                              i.Fragment,
                              {
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          variant: "text-md/semibold",
                                          className: p.nx,
                                          children: s,
                                      }),
                                      a.map((e) =>
                                          (0, r.jsx)(
                                              c.e7I,
                                              {
                                                  shortcut: e,
                                                  className: p.LE,
                                              },
                                              e,
                                          ),
                                      ),
                                      t < n.length - 1 ? (0, r.jsx)("span", { className: p.me }) : null,
                                  ],
                              },
                              s,
                          );
                      }),
                  }),
              })
            : null,
    );
}
