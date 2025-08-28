n.d(t, { I: () => u });
var r = n(951288),
    l = n(120356),
    i = n.n(l),
    o = n(657707),
    s = n(206403),
    a = n(481446);
function u(e) {
    let { title: t, subtitle: n, isOpen: l, setIsOpen: u, compact: c = !1, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.x, {
                title: t,
                description: l ? void 0 : n,
                secondaryTrailingElement: (0, r.jsx)(o.sXD, { className: i()(a.icon, { [a.iconClosed]: !l }) }),
                onClick: () => u(!l),
                compact: c,
            }),
            l && d,
        ],
    });
}
