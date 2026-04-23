"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(990078),
    l = n(821609),
    d = n(408278),
    _ = n(622631),
    u = n(401843),
    c = n(616356),
    E = n(495544),
    h = n(200749),
    m = n(985018),
    f = n(559216);
let g = n(913516);
function p(e) {
    let { participant: t, width: n, noArt: r = !1, selected: p = !1 } = e,
        A = n < 195,
        I = (0, a.bG)([c.A, E.default], () =>
            c.A.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== E.default.getId();
            }),
        );
    return (0, i.jsx)("div", {
        className: s()(f.Qs, f.FY),
        children: (0, i.jsx)(h.A, {
            className: f.FP,
            artURL: g,
            noArt: r,
            selected: p,
            size: (0, h.J)(n),
            header: A ? null : m.intl.string(m.t.epU4Ec),
            description: p
                ? null
                : (0, i.jsxs)("div", {
                      className: s()(f.t2, { [f.y8]: !A }),
                      children: [
                          (0, i.jsx)("div", {
                              className: f.lO,
                              children: (0, i.jsx)(l.$, {
                                  variant: "secondary",
                                  size: A ? "sm" : "md",
                                  text: n < 175 ? m.intl.string(m.t.I6JG46) : m.intl.string(m.t["7Xq/nV"]),
                              }),
                          }),
                          I
                              ? (0, i.jsx)("div", {
                                    className: s()(f.lO, f.EU),
                                    children: (0, i.jsx)(o.m, {
                                        text: m.intl.string(m.t.wCrzut),
                                        children: (0, i.jsx)(d.K, {
                                            variant: "secondary",
                                            size: A ? "sm" : "md",
                                            icon: _.v,
                                            "aria-label": m.intl.string(m.t.wCrzut),
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
