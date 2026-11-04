n.d(t, { A: () => E });
var i = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(17928),
    a = n(821609),
    o = n(866665),
    u = n(408278),
    c = n(622631),
    d = n(401843),
    m = n(616356),
    h = n(280450),
    f = n(200749),
    g = n(105292),
    p = n(604889);
let A = n(913516);
function E(e) {
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
        children: (0, i.jsx)(f.A, {
            className: p.FP,
            artURL: A,
            noArt: r,
            selected: E,
            size: (0, f.J)(n),
            header: b ? null : g.intl.string(g.t.epU4Ec),
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
                                  text: n < 175 ? g.intl.string(g.t.I6JG46) : g.intl.string(g.t["7Xq/nV"]),
                              }),
                          }),
                          C
                              ? (0, i.jsx)("div", {
                                    className: l()(p.lO, p.EU),
                                    children: (0, i.jsx)(o.m, {
                                        text: g.intl.string(g.t.wCrzut),
                                        children: (0, i.jsx)(u.K, {
                                            variant: "secondary",
                                            size: b ? "sm" : "md",
                                            icon: c.v,
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
