"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(990078),
    l = n(821609),
    u = n(408278),
    d = n(622631),
    c = n(401843),
    _ = n(616356),
    f = n(961350),
    E = n(200749),
    h = n(985018),
    p = n(559216);
let m = n(913516);
function g(e) {
    let { participant: t, width: n, noArt: i = !1, selected: g = !1 } = e,
        A = n < 195,
        I = (0, a.bG)([_.A, f.default], () =>
            _.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== f.default.getId();
            }),
        );
    return (0, r.jsx)("div", {
        className: s()(p.Qs, p.FY),
        children: (0, r.jsx)(E.A, {
            className: p.FP,
            artURL: m,
            noArt: i,
            selected: g,
            size: (0, E.J)(n),
            header: A ? null : h.intl.string(h.t.epU4Ec),
            description: g
                ? null
                : (0, r.jsxs)("div", {
                      className: s()(p.t2, { [p.y8]: !A }),
                      children: [
                          (0, r.jsx)("div", {
                              className: p.lO,
                              children: (0, r.jsx)(l.$, {
                                  variant: "secondary",
                                  size: A ? "sm" : "md",
                                  text: n < 175 ? h.intl.string(h.t.I6JG46) : h.intl.string(h.t["7Xq/nV"]),
                              }),
                          }),
                          I
                              ? (0, r.jsx)("div", {
                                    className: s()(p.lO, p.EU),
                                    children: (0, r.jsx)(o.m, {
                                        text: h.intl.string(h.t.wCrzut),
                                        children: (0, r.jsx)(u.K, {
                                            variant: "secondary",
                                            size: A ? "sm" : "md",
                                            icon: d.v,
                                            "aria-label": h.intl.string(h.t.wCrzut),
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
