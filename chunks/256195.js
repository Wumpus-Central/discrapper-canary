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
    c = n(622631),
    d = n(401843),
    _ = n(616356),
    f = n(961350),
    p = n(200749),
    h = n(985018),
    E = n(559216);
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
        className: s()(E.Qs, E.FY),
        children: (0, r.jsx)(p.A, {
            className: E.FP,
            artURL: m,
            noArt: i,
            selected: g,
            size: (0, p.J)(n),
            header: A ? null : h.intl.string(h.t.epU4Ec),
            description: g
                ? null
                : (0, r.jsxs)("div", {
                      className: s()(E.t2, { [E.y8]: !A }),
                      children: [
                          (0, r.jsx)("div", {
                              className: E.lO,
                              children: (0, r.jsx)(l.$, {
                                  variant: "secondary",
                                  size: A ? "sm" : "md",
                                  text: n < 175 ? h.intl.string(h.t.I6JG46) : h.intl.string(h.t["7Xq/nV"]),
                              }),
                          }),
                          I
                              ? (0, r.jsx)("div", {
                                    className: s()(E.lO, E.EU),
                                    children: (0, r.jsx)(o.m, {
                                        text: h.intl.string(h.t.wCrzut),
                                        children: (0, r.jsx)(u.K, {
                                            variant: "secondary",
                                            size: A ? "sm" : "md",
                                            icon: c.v,
                                            "aria-label": h.intl.string(h.t.wCrzut),
                                            onClick: (e) => {
                                                e.stopPropagation(), (0, d.A9)(t.stream, { forceMultiple: !0 });
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
