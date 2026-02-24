"use strict";
n.d(t, { S: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(442215),
    l = n(311907),
    u = n(397927),
    c = n(775602),
    d = n(425763),
    _ = n(985018),
    f = n(987987);
function p(e) {
    let { className: t } = e,
        n = [
            { keybinds: ["Spacebar", "Enter"], name: _.intl.string(_.t["cs/HVH"]) },
            { keybinds: ["up", "down"], name: _.intl.string(_.t.dmMqay) },
            { keybinds: ["ESC"], name: _.intl.string(_.t["1ioMJQ"]) },
        ],
        s = (0, l.bG)([c.A], () => c.A.useReducedMotion),
        p = (0, d.VU)();
    return (0, u.pnh)(
        p,
        {
            enter: { from: { opacity: 0, y: 80 * !s }, to: { opacity: 1, y: 0 } },
            leave: { opacity: 0, y: 80 * !s },
            config: o.config.stiff,
        },
        "animate-always",
    )((e, s) =>
        s
            ? (0, r.jsx)("div", {
                  className: a()(f.lY, t),
                  children: (0, r.jsx)(o.animated.div, {
                      className: f.kL,
                      style: e,
                      children: n.map((e, t) => {
                          let { keybinds: s, name: a } = e;
                          return (0, r.jsxs)(
                              i.Fragment,
                              {
                                  children: [
                                      (0, r.jsx)(u.Text, { variant: "text-md/semibold", className: f.nx, children: a }),
                                      s.map((e) => (0, r.jsx)(u.e7I, { shortcut: e, className: f.LE }, e)),
                                      t < n.length - 1 ? (0, r.jsx)("span", { className: f.me }) : null,
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
