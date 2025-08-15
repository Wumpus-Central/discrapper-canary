n.d(t, { I: () => u });
var i = n(951288),
    l = n(120356),
    s = n.n(l),
    o = n(657707),
    r = n(206403),
    a = n(481446);
function u(e) {
    let { title: t, subtitle: n, isOpen: l, setIsOpen: u, compact: c = !1, children: d } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.x, {
                title: t,
                description: l ? void 0 : n,
                secondaryTrailingElement: (0, i.jsx)(o.sXD, { className: s()(a.icon, { [a.iconClosed]: !l }) }),
                onClick: () => u(!l),
                compact: c,
            }),
            (0, i.jsx)("div", {
                className: s()({ [a.hidden]: !l }),
                children: d,
            }),
        ],
    });
}
