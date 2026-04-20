n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(955382),
    a = n(985018),
    r = n(578673),
    o = n(906471);
function c(e) {
    let { icon: t, title: n, description: s, onClick: a } = e;
    return (0, i.jsx)(l.vN3, {
        children: (0, i.jsxs)("button", {
            className: r.we,
            onClick: a,
            children: [
                (0, i.jsx)("div", { className: r.XM, children: (0, i.jsx)(t, { size: "md", color: "currentColor" }) }),
                (0, i.jsxs)("div", {
                    className: r.ht,
                    children: [
                        (0, i.jsx)(l.Text, { variant: "text-md/semibold", children: n }),
                        (0, i.jsx)(l.Text, { variant: "text-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                (0, i.jsx)("img", { className: r.$O, alt: "", src: o }),
            ],
        }),
    });
}
function d(e) {
    let { onSelectOption: t, onExplore: n, onCreateServer: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c, {
                icon: l.L_e,
                title: a.intl.string(a.t.riOUtB),
                description: a.intl.string(a.t["5u0zvP"]),
                onClick: () => t(s.Z.JOIN_SERVER),
            }),
            (0, i.jsx)(c, {
                icon: l.QGJ,
                title: a.intl.string(a.t.gHNiza),
                description: a.intl.string(a.t.v7xiEA),
                onClick: n,
            }),
            (0, i.jsx)(c, {
                icon: l.Rvf,
                title: a.intl.string(a.t.w5uwoI),
                description: a.intl.string(a.t.bgoxKS),
                onClick: () => t(s.Z.ADD_FRIEND),
            }),
            (0, i.jsx)(c, {
                icon: l.RR9,
                title: a.intl.string(a.t.ZLfEo8),
                description: a.intl.string(a.t.z7OAvN),
                onClick: r,
            }),
        ],
    });
}
