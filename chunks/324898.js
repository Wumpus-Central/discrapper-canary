"use strict";
n.d(t, { A: () => A, W: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(136722),
    a = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(5180),
    u = n(317525),
    m = n(576705),
    g = n(488926),
    x = n(124759),
    h = n(985018),
    _ = n(690450);
function p(e) {
    return x.dR.filter((t) => !(0, c.ai)(e?.id) && g.Ib(t, e));
}
function A(e) {
    let { guild: t } = e,
        s = (0, a.bG)([u.A], () => u.A.getEveryoneRole(t)),
        c = p(t),
        g = c.length > 0,
        A = x.dR.some((e) => !m.A.can(e, t, null, { [s.id]: { ...s, permissions: r.TF(s.permissions, e) } })),
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: _.Ly,
                    children: [
                        (0, i.jsx)(d.Heading, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: h.intl.string(h.t["+vaUlM"]),
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: h.intl.format(h.t.RXAtdO, { numPerms: c.length }),
                        }),
                    ],
                }),
                g
                    ? (0, i.jsx)(d.EpV, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                          width: 24,
                          className: _.$e,
                          "aria-label": h.intl.string(h.t["bG7Gu+"]),
                      })
                    : (0, i.jsx)(d.yr3, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                          width: 24,
                          className: _.z6,
                          "aria-label": h.intl.string(h.t.YQix8y),
                      }),
            ],
        });
    return g
        ? A
            ? (0, i.jsx)(o.m, {
                  text: h.intl.string(h.t["E5v/a/"]),
                  children: (0, i.jsx)("div", { className: l()(_.ph, _.r9), children: f }),
              })
            : (0, i.jsx)(d.DUT, {
                  onClick: () => {
                      (0, d.mMO)(async () => {
                          let { default: e } = await n.e("94286").then(n.bind(n, 868952));
                          return (n) => (0, i.jsx)(e, { guild: t, ...n });
                      });
                  },
                  className: l()(_.ph, _.vk),
                  children: f,
              })
        : (0, i.jsx)("div", { className: _.ph, children: f });
}
