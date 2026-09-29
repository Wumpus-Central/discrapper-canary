n.d(t, { A: () => b });
var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(17928),
    a = n(821609),
    o = n(866665),
    c = n(408278),
    u = n(622631),
    d = n(401843),
    h = n(616356),
    A = n(280450),
    m = n(200749),
    g = n(375708),
    f = n(604889);
let E = n(913516);
function b(e) {
    let { participant: t, width: n, noArt: r = !1, selected: b = !1 } = e,
        p = n < 195,
        C = (0, s.bG)([h.A, A.default], () =>
            h.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== A.default.getId();
            }),
        );
    return (0, i.jsx)("div", {
        className: l()(f.Qs, f.FY),
        children: (0, i.jsx)(m.A, {
            className: f.FP,
            artURL: E,
            noArt: r,
            selected: b,
            size: (0, m.J)(n),
            header: p ? null : g.intl.string(g.t.epU4Ec),
            description: b
                ? null
                : (0, i.jsxs)("div", {
                      className: l()(f.t2, { [f.y8]: !p }),
                      children: [
                          (0, i.jsx)("div", {
                              className: f.lO,
                              children: (0, i.jsx)(a.$, {
                                  variant: "secondary",
                                  size: p ? "sm" : "md",
                                  text: n < 175 ? g.intl.string(g.t.I6JG46) : g.intl.string(g.t["7Xq/nV"]),
                              }),
                          }),
                          C
                              ? (0, i.jsx)("div", {
                                    className: l()(f.lO, f.EU),
                                    children: (0, i.jsx)(o.m, {
                                        text: g.intl.string(g.t.wCrzut),
                                        children: (0, i.jsx)(c.K, {
                                            variant: "secondary",
                                            size: p ? "sm" : "md",
                                            icon: u.v,
                                            "aria-label": g.intl.string(g.t.wCrzut),
                                            onClick: (e) => {
                                                (e.stopPropagation(), (0, d.A9)(t.stream, { forceMultiple: !0 }));
                                            },
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
        }),
    });
}
