var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(855986),
    a = n(821609),
    o = n(866665),
    u = n(408278),
    c = n(622631),
    d = n(401843),
    m = n(616356),
    h = n(46653),
    f = n(200749),
    g = n(792996),
    A = n(604889);
let p = n(913516);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { participant: t, width: n, noArt: r = !1, selected: E = !1 } = e,
                C = n < 195,
                b = (0, s.bG)([m.A, h.default], () =>
                    m.A.getAllActiveStreams().some((e) => {
                        let { ownerId: t } = e;
                        return t !== h.default.getId();
                    }),
                );
            return (0, i.jsx)("div", {
                className: l()(A.Qs, A.FY),
                children: (0, i.jsx)(f.A, {
                    className: A.FP,
                    artURL: p,
                    noArt: r,
                    selected: E,
                    size: (0, f.J)(n),
                    header: C ? null : g.intl.string(g.t.epU4Ec),
                    description: E
                        ? null
                        : (0, i.jsxs)("div", {
                              className: l()(A.t2, { [A.y8]: !C }),
                              children: [
                                  (0, i.jsx)("div", {
                                      className: A.lO,
                                      children: (0, i.jsx)(a.$, {
                                          variant: "secondary",
                                          size: C ? "sm" : "md",
                                          text: n < 175 ? g.intl.string(g.t.I6JG46) : g.intl.string(g.t["7Xq/nV"]),
                                      }),
                                  }),
                                  b
                                      ? (0, i.jsx)("div", {
                                            className: l()(A.lO, A.EU),
                                            children: (0, i.jsx)(o.m, {
                                                text: g.intl.string(g.t.wCrzut),
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "secondary",
                                                    size: C ? "sm" : "md",
                                                    icon: c.EyePlusIcon,
                                                    "aria-label": g.intl.string(g.t.wCrzut),
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
