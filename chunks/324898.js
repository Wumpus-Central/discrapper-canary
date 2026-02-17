"use strict";
n.d(t, { A: () => p, W: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(136722),
    a = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(317525),
    u = n(576705),
    g = n(488926),
    m = n(349828),
    x = n(124759),
    h = n(985018),
    _ = n(690450);
function A(e) {
    return x.dR.filter((t) => e?.id !== m.Vc && g.Ib(t, e));
}
function p(e) {
    let { guild: t } = e,
        s = (0, a.bG)([c.A], () => c.A.getEveryoneRole(t)),
        g = A(t),
        m = g.length > 0,
        p = x.dR.some((e) => !u.A.can(e, t, null, { [s.id]: { ...s, permissions: r.TF(s.permissions, e) } })),
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
                            children: h.intl.format(h.t.RXAtdO, { numPerms: g.length }),
                        }),
                    ],
                }),
                m
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
    return m
        ? p
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
