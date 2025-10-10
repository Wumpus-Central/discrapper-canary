n.d(t, { I: () => c });
var r = n(951288),
    l = n(120356),
    o = n.n(l),
    i = n(657707),
    a = n(206403),
    s = n(481446);
function c(e) {
    let { title: t, subtitle: n, isOpen: l, setIsOpen: c, compact: u = !1, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.x, {
                title: t,
                description: l ? void 0 : n,
                secondaryTrailingElement: (0, r.jsx)(i.sXD, { className: o()(s.icon, { [s.iconClosed]: !l }) }),
                onClick: () => c(!l),
                compact: u,
            }),
            l && d,
        ],
    });
}
