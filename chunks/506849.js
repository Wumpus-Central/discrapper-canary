i.d(t, { A: () => S });
var n = i(627968);
i(64700);
var s = i(503698),
    l = i.n(s),
    a = i(158954),
    r = i(397927),
    d = i(585510),
    o = i(500896),
    c = i(122802),
    u = i(894333),
    g = i(931413),
    h = i(972192),
    x = i(985018),
    m = i(726228);
function A(e) {
    return (0, n.jsx)("div", {
        className: m.bV,
        children: (0, n.jsx)(r.Heading, {
            variant: "text-xs/bold",
            className: m.l_,
            color: "text-muted",
            children: e.title,
        }),
    });
}
function N(e) {
    return (0, n.jsx)("div", {
        className: m.yV,
        children: (0, n.jsx)(r.Text, { variant: "text-sm/normal", color: "text-subtle", children: e.description }),
    });
}
function j(e) {
    return (0, n.jsxs)("div", {
        children: [
            null != e.title && (0, n.jsx)(A, { title: e.title }),
            (0, n.jsx)("div", {
                className: l()(m.f5, { [m.ou]: !0 !== e.noPadding, [m._9]: !0 !== e.noContainer }),
                children: e.children,
            }),
        ],
    });
}
function S(e) {
    let { guildId: t, ...i } = e,
        s = (0, d._g)(t);
    return (0, n.jsxs)(a.Modal, {
        ...i,
        title: x.intl.string(x.t.h850Ss),
        actions: [{ text: x.intl.string(x.t.i4jeWR), onClick: i.onClose }],
        children: [
            (0, n.jsx)(j, { noPadding: !0, noContainer: !0, children: (0, n.jsx)(g.A, { guildId: t }) }),
            (0, n.jsx)(j, {
                title: x.intl.string(x.t.R9Ej96),
                noPadding: !0,
                children: (0, n.jsx)(h.A, { guildId: t }),
            }),
            (0, n.jsx)(j, { title: x.intl.string(x.t["31DySj"]), children: (0, n.jsx)(o.A, { guildId: t }) }),
            s &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(A, { title: x.intl.string(x.t.D9yVAH) }),
                        (0, n.jsx)(N, { description: x.intl.string(x.t["0PhAOH"]) }),
                        (0, n.jsx)(j, { children: (0, n.jsx)(u.A, { guildId: t }) }),
                    ],
                }),
            (0, n.jsx)(A, { title: x.intl.string(x.t.JrySi3) }),
            (0, n.jsx)(c.A, { guildId: t }),
        ],
    });
}
