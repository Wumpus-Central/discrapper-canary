n.d(t, { A: () => I, W: () => N });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(136722),
    a = n(311907),
    o = n(990078),
    d = n(192308),
    c = n(534514),
    u = n(834730),
    m = n(695366),
    g = n(628284),
    h = n(939249),
    x = n(5180),
    _ = n(317525),
    p = n(576705),
    A = n(488926),
    E = n(124759),
    f = n(985018),
    j = n(101839);
function N(e) {
    return E.dR.filter((t) => !(0, x.ai)(e?.id) && A.Ib(t, e));
}
function I(e) {
    let { guild: t } = e,
        l = (0, a.bG)([_.A], () => _.A.getEveryoneRole(t)),
        x = N(t),
        A = x.length > 0,
        I = E.dR.some((e) => !p.A.can(e, t, null, { [l.id]: { ...l, permissions: r.TF(l.permissions, e) } })),
        C = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: j.Ly,
                    children: [
                        (0, i.jsx)(c.D, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: f.intl.string(f.t["+vaUlM"]),
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: f.intl.format(f.t.RXAtdO, { numPerms: x.length }),
                        }),
                    ],
                }),
                A
                    ? (0, i.jsx)(m.E, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                          width: 24,
                          className: j.$e,
                          "aria-label": f.intl.string(f.t["bG7Gu+"]),
                      })
                    : (0, i.jsx)(g.y, {
                          size: "custom",
                          color: "currentColor",
                          height: 24,
                          width: 24,
                          className: j.z6,
                          "aria-label": f.intl.string(f.t.YQix8y),
                      }),
            ],
        });
    return A
        ? I
            ? (0, i.jsx)(o.m, {
                  text: f.intl.string(f.t["E5v/a/"]),
                  children: (0, i.jsx)("div", { className: s()(j.ph, j.r9), children: C }),
              })
            : (0, i.jsx)(h.D, {
                  onClick: () => {
                      (0, d.openModalLazy)(async () => {
                          let { default: e } = await n.e("94286").then(n.bind(n, 868952));
                          return (n) => (0, i.jsx)(e, { guild: t, ...n });
                      });
                  },
                  className: s()(j.ph, j.vk),
                  children: C,
              })
        : (0, i.jsx)("div", { className: j.ph, children: C });
}
