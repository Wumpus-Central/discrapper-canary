"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(435371),
    l = n(397927),
    u = n(401843),
    c = n(616356),
    d = n(961350),
    _ = n(200749),
    f = n(985018),
    p = n(438823);
let h = 175,
    m = 195,
    E = n(913516);
function g(e) {
    let { participant: t, width: n, noArt: i = !1, selected: g = !1 } = e,
        A = n < m,
        I = (0, a.bG)([c.A, d.default], () =>
            c.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== d.default.getId();
            }),
        );
    return (0, r.jsx)("div", {
        className: s()(p.Qs, p.FY),
        children: (0, r.jsx)(_.A, {
            className: p.FP,
            artURL: E,
            noArt: i,
            selected: g,
            size: (0, _.J)(n),
            header: A ? null : f.intl.string(f.t.epU4Ec),
            description: g
                ? null
                : (0, r.jsxs)("div", {
                      className: s()(p.t2, { [p.y8]: !A }),
                      children: [
                          (0, r.jsx)("div", {
                              className: p.lO,
                              children: (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  size: A ? "sm" : "md",
                                  text: n < h ? f.intl.string(f.t.I6JG46) : f.intl.string(f.t["7Xq/nV"]),
                              }),
                          }),
                          I
                              ? (0, r.jsx)("div", {
                                    className: s()(p.lO, p.EU),
                                    children: (0, r.jsx)(o.m_, {
                                        text: f.intl.string(f.t.wCrzut),
                                        children: (0, r.jsx)(l.K0, {
                                            variant: "secondary",
                                            size: A ? "sm" : "md",
                                            icon: l.vAm,
                                            "aria-label": f.intl.string(f.t.wCrzut),
                                            onClick: (e) => {
                                                e.stopPropagation(), (0, u.A9)(t.stream, { forceMultiple: !0 });
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
