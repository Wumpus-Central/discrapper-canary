n.d(t, { A: () => b });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    l = n(397927),
    c = n(401843),
    u = n(315606),
    d = n(616356),
    f = n(961350),
    p = n(200749),
    _ = n(985018),
    h = n(438823);
let m = 175,
    g = 195,
    E = n(913516);
function b(e) {
    let { participant: t, width: n, noArt: i = !1, selected: b = !1 } = e,
        y = n < g,
        { defaultWatchMultipleStreams: O } = (0, u.W)({ location: "StreamHidden" }),
        A = (0, s.bG)([d.A, f.default], () =>
            d.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== f.default.getId();
            }),
        );
    return (0, r.jsx)("div", {
        className: a()(h.Qs, h.FY),
        children: (0, r.jsx)(p.A, {
            className: h.FP,
            artURL: E,
            noArt: i,
            selected: b,
            size: (0, p.J)(n),
            header: y ? null : _.intl.string(_.t.epU4Ec),
            description: b
                ? null
                : (0, r.jsxs)("div", {
                      className: a()(h.t2, { [h.y8]: !y }),
                      children: [
                          (0, r.jsx)("div", {
                              className: h.lO,
                              children: (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  size: y ? "sm" : "md",
                                  text: n < m ? _.intl.string(_.t.I6JG46) : _.intl.string(_.t["7Xq/nV"]),
                              }),
                          }),
                          A && !O
                              ? (0, r.jsx)("div", {
                                    className: a()(h.lO, h.EU),
                                    children: (0, r.jsx)(o.m_, {
                                        text: _.intl.string(_.t.wCrzut),
                                        children: (0, r.jsx)(l.K0, {
                                            variant: "secondary",
                                            size: y ? "sm" : "md",
                                            icon: l.vAm,
                                            "aria-label": _.intl.string(_.t.wCrzut),
                                            onClick: (e) => {
                                                e.stopPropagation(), (0, c.A9)(t.stream, { forceMultiple: !0 });
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
