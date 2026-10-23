n.d(t, { A: () => p });
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
    h = n(616356),
    m = n(280450),
    A = n(200749),
    g = n(105292),
    E = n(604889);
let f = n(913516);
function p(e) {
    let { participant: t, width: n, noArt: r = !1, selected: p = !1 } = e,
        C = n < 195,
        _ = (0, s.bG)([h.A, m.default], () =>
            h.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== m.default.getId();
            }),
        );
    return (0, i.jsx)("div", {
        className: l()(E.Qs, E.FY),
        children: (0, i.jsx)(A.A, {
            className: E.FP,
            artURL: f,
            noArt: r,
            selected: p,
            size: (0, A.J)(n),
            header: C ? null : g.intl.string(g.t.epU4Ec),
            description: p
                ? null
                : (0, i.jsxs)("div", {
                      className: l()(E.t2, { [E.y8]: !C }),
                      children: [
                          (0, i.jsx)("div", {
                              className: E.lO,
                              children: (0, i.jsx)(a.$, {
                                  variant: "secondary",
                                  size: C ? "sm" : "md",
                                  text: n < 175 ? g.intl.string(g.t.I6JG46) : g.intl.string(g.t["7Xq/nV"]),
                              }),
                          }),
                          _
                              ? (0, i.jsx)("div", {
                                    className: l()(E.lO, E.EU),
                                    children: (0, i.jsx)(o.m, {
                                        text: g.intl.string(g.t.wCrzut),
                                        children: (0, i.jsx)(u.K, {
                                            variant: "secondary",
                                            size: C ? "sm" : "md",
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
