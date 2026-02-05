"use strict";
n.d(t, { A: () => A });
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
    p = n(985018),
    h = n(438823);
let m = 175,
    g = 195,
    E = n(913516);
function A(e) {
    let { participant: t, width: n, noArt: i = !1, selected: A = !1 } = e,
        I = n < g,
        { defaultWatchMultipleStreams: T } = (0, c.W)({ location: "StreamHidden" }),
        y = (0, s.bG)([d.A, _.default], () =>
            d.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== _.default.getId();
            }),
        );
    return (0, r.jsx)("div", {
        className: a()(h.Qs, h.FY),
        children: (0, r.jsx)(f.A, {
            className: h.FP,
            artURL: E,
            noArt: i,
            selected: A,
            size: (0, f.J)(n),
            header: I ? null : p.intl.string(p.t.epU4Ec),
            description: A
                ? null
                : (0, r.jsxs)("div", {
                      className: a()(h.t2, { [h.y8]: !I }),
                      children: [
                          (0, r.jsx)("div", {
                              className: h.lO,
                              children: (0, r.jsx)(l.Button, {
                                  variant: "secondary",
                                  size: I ? "sm" : "md",
                                  text: n < m ? p.intl.string(p.t.I6JG46) : p.intl.string(p.t["7Xq/nV"]),
                              }),
                          }),
                          y && !T
                              ? (0, r.jsx)("div", {
                                    className: a()(h.lO, h.EU),
                                    children: (0, r.jsx)(o.m_, {
                                        text: p.intl.string(p.t.wCrzut),
                                        children: (0, r.jsx)(l.K0, {
                                            variant: "secondary",
                                            size: I ? "sm" : "md",
                                            icon: l.vAm,
                                            "aria-label": p.intl.string(p.t.wCrzut),
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
