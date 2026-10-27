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
    g = n(200749),
    f = n(105292),
    A = n(604889);
let p = n(913516);
function E(e) {
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
        children: (0, i.jsx)(g.A, {
            className: A.FP,
            artURL: p,
            noArt: r,
            selected: E,
            size: (0, g.J)(n),
            header: C ? null : f.intl.string(f.t.epU4Ec),
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
                                  text: n < 175 ? f.intl.string(f.t.I6JG46) : f.intl.string(f.t["7Xq/nV"]),
                              }),
                          }),
                          b
                              ? (0, i.jsx)("div", {
                                    className: l()(A.lO, A.EU),
                                    children: (0, i.jsx)(o.m, {
                                        text: f.intl.string(f.t.wCrzut),
                                        children: (0, i.jsx)(u.K, {
                                            variant: "secondary",
                                            size: C ? "sm" : "md",
                                            icon: c.v,
                                            "aria-label": f.intl.string(f.t.wCrzut),
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
