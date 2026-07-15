"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(990078),
    o = n(821609),
    d = n(408278),
    c = n(622631),
    u = n(401843),
    _ = n(616356),
    E = n(280450),
    A = n(200749),
    h = n(375708),
    I = n(559216);
let f = n(913516);
function p(e) {
    let { participant: t, width: n, noArt: r = !1, selected: p = !1 } = e,
        T = n < 195,
        m = (0, s.bG)([_.A, E.default], () =>
            _.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== E.default.getId();
            }),
        );
    return (0, i.jsx)("div", {
        className: a()(I.Qs, I.FY),
        children: (0, i.jsx)(A.A, {
            className: I.FP,
            artURL: f,
            noArt: r,
            selected: p,
            size: (0, A.J)(n),
            header: T ? null : h.intl.string(h.t.epU4Ec),
            description: p
                ? null
                : (0, i.jsxs)("div", {
                      className: a()(I.t2, { [I.y8]: !T }),
                      children: [
                          (0, i.jsx)("div", {
                              className: I.lO,
                              children: (0, i.jsx)(o.$, {
                                  variant: "secondary",
                                  size: T ? "sm" : "md",
                                  text: n < 175 ? h.intl.string(h.t.I6JG46) : h.intl.string(h.t["7Xq/nV"]),
                              }),
                          }),
                          m
                              ? (0, i.jsx)("div", {
                                    className: a()(I.lO, I.EU),
                                    children: (0, i.jsx)(l.m, {
                                        text: h.intl.string(h.t.wCrzut),
                                        children: (0, i.jsx)(d.K, {
                                            variant: "secondary",
                                            size: T ? "sm" : "md",
                                            icon: c.v,
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
