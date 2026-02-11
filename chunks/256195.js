"use strict";
n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    l = n(397927),
    u = n(401843),
    c = n(315606),
    d = n(616356),
    _ = n(961350),
    f = n(200749),
    h = n(985018),
    p = n(80477);
let g = 175,
    E = 195,
    A = n(913516);
function I(e) {
    let { participant: t, width: n, noArt: i = !1, selected: I = !1 } = e,
        T = n < E,
        { defaultWatchMultipleStreams: y } = (0, c.W)({ location: "StreamHidden" }),
        S = (0, s.bG)([d.A, _.default], () =>
            d.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== _.default.getId();
            }),
        );
    return (0, r.jsx)("div", {
        className: a()(p.Qs, p.FY),
        children: (0, r.jsx)(f.A, {
            className: p.FP,
            artURL: A,
            noArt: i,
            selected: I,
            size: (0, f.J)(n),
            header: T ? null : h.intl.string(h.t.epU4Ec),
            description: I
                ? null
                : (0, r.jsxs)("div", {
                      className: a()(p.t2, { [p.y8]: !T }),
                      children: [
                          (0, r.jsx)("div", {
                              className: p.lO,
                              children: (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  size: T ? "sm" : "md",
                                  text: n < g ? h.intl.string(h.t.I6JG46) : h.intl.string(h.t["7Xq/nV"]),
                              }),
                          }),
                          S && !y
                              ? (0, r.jsx)("div", {
                                    className: a()(p.lO, p.EU),
                                    children: (0, r.jsx)(o.m_, {
                                        text: h.intl.string(h.t.wCrzut),
                                        children: (0, r.jsx)(l.K0, {
                                            variant: "secondary",
                                            size: T ? "sm" : "md",
                                            icon: l.vAm,
                                            "aria-label": h.intl.string(h.t.wCrzut),
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
