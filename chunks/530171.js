n.d(t, { I: () => s });
var r = n(951288),
    o = n(120356),
    l = n.n(o),
    i = n(657707),
    a = n(206403),
    c = n(481446);
function s(e) {
    let { title: t, subtitle: n, isOpen: o, setIsOpen: s, compact: u = !1, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.x, {
                title: t,
                description: o ? void 0 : n,
                secondaryTrailingElement: (0, r.jsx)(i.sXD, { className: l()(c.icon, { [c.iconClosed]: !o }) }),
                onClick: () => s(!o),
                compact: u,
            }),
            o && d,
        ],
    });
}
