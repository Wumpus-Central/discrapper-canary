"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(397927),
    a = n(854378),
    o = n(813516),
    c = n(524832),
    d = n(652215),
    u = n(985018),
    h = n(22079),
    _ = n(818050);
function p(e) {
    let { children: t } = e;
    return (0, i.jsx)("li", {
        className: h.Aw,
        children: (0, i.jsx)(l.Text, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function m(e) {
    let { setSlide: t, transitionTo: s } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a._V, { src: n(79418), className: r()(_.SX, _.Ot) }),
            (0, i.jsx)(a.hE, { className: _.QB, children: u.intl.string(u.t["8UcxI6"]) }),
            (0, i.jsx)(l.Text, { variant: "text-md/normal", children: u.intl.string(u.t.O37hMl) }),
            (0, i.jsxs)(a.eB, {
                className: r()(_.SX, _.QX),
                children: [
                    (0, i.jsx)(l.Text, { variant: "text-sm/normal" }),
                    (0, i.jsxs)("ul", {
                        className: h.qI,
                        children: [
                            (0, i.jsx)(p, { children: u.intl.string(u.t.Gj1Zry) }),
                            (0, i.jsx)(o.A, {}),
                            (0, i.jsx)(p, { children: u.intl.string(u.t["8C6t3B"]) }),
                            (0, i.jsx)(o.A, {}),
                            (0, i.jsx)(p, { children: u.intl.string(u.t.mToZMA) }),
                            (0, i.jsx)(o.A, {}),
                            (0, i.jsx)(p, { children: u.intl.string(u.t.TPEvkc) }),
                            (0, i.jsx)(o.A, {}),
                            (0, i.jsx)(p, { children: u.intl.string(u.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)(l.ButtonGroup, {
                direction: "vertical",
                fullWidth: !0,
                className: h.UD,
                children: [
                    (0, i.jsx)(l.Button, { text: u.intl.string(u.t.GgCRqR), onClick: () => t(c.k.PASSWORD) }),
                    (0, i.jsx)(l.Button, {
                        text: u.intl.string(u.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => s(d.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
