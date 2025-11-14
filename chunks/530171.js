n.d(t, { I: () => s });
var r = n(951288),
    l = n(120356),
    o = n.n(l),
    i = n(657707),
    a = n(206403),
    c = n(481446);
function s(e) {
    let { title: t, subtitle: n, isOpen: l, setIsOpen: s, children: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.x, {
                title: t,
                description: l ? void 0 : n,
                secondaryTrailingElement: (0, r.jsx)(i.sXD, { className: o()(c.icon, { [c.iconClosed]: !l }) }),
                onClick: () => s(!l),
            }),
            l && u,
        ],
    });
}
