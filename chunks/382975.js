n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(187322),
    s = n(834730),
    a = n(998445),
    r = n(836480),
    o = n(283973),
    c = n(664121),
    d = n(955382),
    u = n(985018),
    p = n(578673),
    m = n(906471);
function x(e) {
    let { icon: t, title: n, description: a, onClick: r } = e;
    return (0, i.jsx)(l.vN, {
        children: (0, i.jsxs)("button", {
            className: p.we,
            onClick: r,
            children: [
                (0, i.jsx)("div", { className: p.XM, children: (0, i.jsx)(t, { size: "md", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: p.ht,
                    children: [
                        (0, i.jsx)(s.E, { variant: "text-md/semibold", children: n }),
                        (0, i.jsx)(s.E, { variant: "text-sm/normal", color: "text-subtle", children: a }),
                    ],
                }),
                (0, i.jsx)("img", { className: p.$O, alt: "", src: m }),
            ],
        }),
    });
}
function g(e) {
    let { onSelectOption: t, onExplore: n, onCreateServer: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x, {
                icon: a.L,
                title: u.intl.string(u.t.riOUtB),
                description: u.intl.string(u.t["5u0zvP"]),
                onClick: () => t(d.Z.JOIN_SERVER),
            }),
            (0, i.jsx)(x, {
                icon: r.Q,
                title: u.intl.string(u.t.gHNiza),
                description: u.intl.string(u.t.v7xiEA),
                onClick: n,
            }),
            (0, i.jsx)(x, {
                icon: o.R,
                title: u.intl.string(u.t.w5uwoI),
                description: u.intl.string(u.t.bgoxKS),
                onClick: () => t(d.Z.ADD_FRIEND),
            }),
            (0, i.jsx)(x, {
                icon: c.R,
                title: u.intl.string(u.t.ZLfEo8),
                description: u.intl.string(u.t.z7OAvN),
                onClick: l,
            }),
        ],
    });
}
