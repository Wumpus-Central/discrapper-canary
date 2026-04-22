n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(189213),
    r = n(534514),
    d = n(834730),
    o = n(585510),
    c = n(500896),
    u = n(122802),
    h = n(894333),
    g = n(931413),
    m = n(972192),
    x = n(985018),
    A = n(476347);
function N(e) {
    return (0, i.jsx)("div", {
        className: A.bV,
        children: (0, i.jsx)(r.D, { variant: "text-xs/bold", className: A.l_, color: "text-muted", children: e.title }),
    });
}
function j(e) {
    return (0, i.jsx)("div", {
        className: A.yV,
        children: (0, i.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: e.description }),
    });
}
function S(e) {
    return (0, i.jsxs)("div", {
        children: [
            null != e.title && (0, i.jsx)(N, { title: e.title }),
            (0, i.jsx)("div", {
                className: l()(A.f5, { [A.ou]: !0 !== e.noPadding, [A._9]: !0 !== e.noContainer }),
                children: e.children,
            }),
        ],
    });
}
function p(e) {
    let { guildId: t, ...n } = e,
        s = (0, o._g)(t);
    return (0, i.jsxs)(a.Modal, {
        ...n,
        title: x.intl.string(x.t.h850Ss),
        actions: [{ text: x.intl.string(x.t.i4jeWR), onClick: n.onClose }],
        children: [
            (0, i.jsx)(S, { noPadding: !0, noContainer: !0, children: (0, i.jsx)(g.A, { guildId: t }) }),
            (0, i.jsx)(S, {
                title: x.intl.string(x.t.R9Ej96),
                noPadding: !0,
                children: (0, i.jsx)(m.A, { guildId: t }),
            }),
            (0, i.jsx)(S, { title: x.intl.string(x.t["31DySj"]), children: (0, i.jsx)(c.A, { guildId: t }) }),
            s &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(N, { title: x.intl.string(x.t.D9yVAH) }),
                        (0, i.jsx)(j, { description: x.intl.string(x.t["0PhAOH"]) }),
                        (0, i.jsx)(S, { children: (0, i.jsx)(h.A, { guildId: t }) }),
                    ],
                }),
            (0, i.jsx)(N, { title: x.intl.string(x.t.JrySi3) }),
            (0, i.jsx)(u.A, { guildId: t }),
        ],
    });
}
