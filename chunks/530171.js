n.d(t, { I: () => u }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(657707),
    c = n(206403),
    s = n(481446);
function u(e) {
    let { title: t, collapsedSubtitle: n, isOpen: i, setIsOpen: u, children: d } = e,
        f = l.useRef(null),
        [b, p] = l.useState(null),
        y = i && null != b;
    return (
        l.useLayoutEffect(() => {
            null != f.current && null == b && p(f.current.clientHeight);
        }, [b]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.x, {
                    ref: f,
                    style: null != b ? { minHeight: b } : void 0,
                    title: t,
                    description: y ? void 0 : n,
                    secondaryTrailingElement: (0, r.jsx)(a.sXD, { className: o()(s.icon, { [s.iconClosed]: !i }) }),
                    onClick: () => u(!i),
                }),
                i && d,
            ],
        })
    );
}
