"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(834730),
    a = n(825484),
    o = n(821609),
    c = n(854378),
    d = n(813516),
    u = n(524832),
    _ = n(652215),
    h = n(985018),
    m = n(244460),
    p = n(818050);
function g(e) {
    let { children: t } = e;
    return (0, i.jsx)("li", {
        className: m.Aw,
        children: (0, i.jsx)(l.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function A(e) {
    let { setSlide: t, transitionTo: s } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(c._V, { src: n(79418), className: r()(p.SX, p.Ot) }),
            (0, i.jsx)(c.hE, { className: p.QB, children: h.intl.string(h.t["8UcxI6"]) }),
            (0, i.jsx)(l.E, { variant: "text-md/normal", children: h.intl.string(h.t.O37hMl) }),
            (0, i.jsxs)(c.eB, {
                className: r()(p.SX, p.QX),
                children: [
                    (0, i.jsx)(l.E, { variant: "text-sm/normal" }),
                    (0, i.jsxs)("ul", {
                        className: m.qI,
                        children: [
                            (0, i.jsx)(g, { children: h.intl.string(h.t.Gj1Zry) }),
                            (0, i.jsx)(d.A, {}),
                            (0, i.jsx)(g, { children: h.intl.string(h.t["8C6t3B"]) }),
                            (0, i.jsx)(d.A, {}),
                            (0, i.jsx)(g, { children: h.intl.string(h.t.mToZMA) }),
                            (0, i.jsx)(d.A, {}),
                            (0, i.jsx)(g, { children: h.intl.string(h.t.TPEvkc) }),
                            (0, i.jsx)(d.A, {}),
                            (0, i.jsx)(g, { children: h.intl.string(h.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(a.e, {
                direction: "vertical",
                fullWidth: !0,
                className: m.UD,
                children: [
                    (0, i.jsx)(o.$, { text: h.intl.string(h.t.GgCRqR), onClick: () => t(u.k.PASSWORD) }),
                    (0, i.jsx)(o.$, {
                        text: h.intl.string(h.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => s(_.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
