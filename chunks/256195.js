var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(855986),
    a = n(821609),
    o = n(866665),
    c = n(408278),
    u = n(622631),
    d = n(401843),
    m = n(616356),
    h = n(46653),
    g = n(200749),
    f = n(792996),
    p = n(604889);
let A = n(913516);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { participant: t, width: n, noArt: r = !1, selected: E = !1 } = e,
                b = n < 195,
                C = (0, s.bG)([m.A, h.default], () =>
                    m.A.getAllActiveStreams().some((e) => {
                        let { ownerId: t } = e;
                        return t !== h.default.getId();
                    }),
                );
            return (0, i.jsx)("div", {
                className: l()(p.Qs, p.FY),
                children: (0, i.jsx)(g.A, {
                    className: p.FP,
                    artURL: A,
                    noArt: r,
                    selected: E,
                    size: (0, g.J)(n),
                    header: b ? null : f.intl.string(f.t.epU4Ec),
                    description: E
                        ? null
                        : (0, i.jsxs)("div", {
                              className: l()(p.t2, { [p.y8]: !b }),
                              children: [
                                  (0, i.jsx)("div", {
                                      className: p.lO,
                                      children: (0, i.jsx)(a.$, {
                                          variant: "secondary",
                                          size: b ? "sm" : "md",
                                          text: n < 175 ? f.intl.string(f.t.I6JG46) : f.intl.string(f.t["7Xq/nV"]),
                                      }),
                                  }),
                                  C
                                      ? (0, i.jsx)("div", {
                                            className: l()(p.lO, p.EU),
                                            children: (0, i.jsx)(o.m, {
                                                text: f.intl.string(f.t.wCrzut),
                                                children: (0, i.jsx)(c.K, {
                                                    variant: "secondary",
                                                    size: b ? "sm" : "md",
                                                    icon: u.EyePlusIcon,
                                                    "aria-label": f.intl.string(f.t.wCrzut),
                                                    onClick: (e) => {
                                                        (e.stopPropagation(),
                                                            (0, d.A9)(t.stream, { forceMultiple: !0 }));
                                                    },
                                                }),
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                }),
            });
        },
    },
);
