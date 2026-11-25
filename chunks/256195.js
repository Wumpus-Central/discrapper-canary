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
    h = n(616356),
    m = n(46653),
    p = n(200749),
    f = n(792996),
    g = n(604889);
let A = n(913516);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { participant: t, width: n, noArt: r = !1, selected: v = !1 } = e,
                E = n < 195,
                I = (0, s.bG)([h.A, m.default], () =>
                    h.A.getAllActiveStreams().some((e) => {
                        let { ownerId: t } = e;
                        return t !== m.default.getId();
                    }),
                );
            return (0, i.jsx)("div", {
                className: l()(g.Qs, g.FY),
                children: (0, i.jsx)(p.A, {
                    className: g.FP,
                    artURL: A,
                    noArt: r,
                    selected: v,
                    size: (0, p.J)(n),
                    header: E ? null : f.intl.string(f.t.epU4Ec),
                    description: v
                        ? null
                        : (0, i.jsxs)("div", {
                              className: l()(g.t2, { [g.y8]: !E }),
                              children: [
                                  (0, i.jsx)("div", {
                                      className: g.lO,
                                      children: (0, i.jsx)(a.$, {
                                          variant: "secondary",
                                          size: E ? "sm" : "md",
                                          text: n < 175 ? f.intl.string(f.t.I6JG46) : f.intl.string(f.t["7Xq/nV"]),
                                      }),
                                  }),
                                  I
                                      ? (0, i.jsx)("div", {
                                            className: l()(g.lO, g.EU),
                                            children: (0, i.jsx)(o.m, {
                                                text: f.intl.string(f.t.wCrzut),
                                                children: (0, i.jsx)(u.K, {
                                                    variant: "secondary",
                                                    size: E ? "sm" : "md",
                                                    icon: c.EyePlusIcon,
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
