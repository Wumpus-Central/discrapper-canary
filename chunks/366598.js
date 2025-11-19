n.d(t, { Z: () => c });
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(955588);
function c(e) {
    let { children: t, icon: n, title: l } = e;
    return (0, i.jsxs)("header", {
        className: s.header,
        children: [
            (0, i.jsxs)("div", {
                className: s.name,
                children: [
                    r.cloneElement(n, {
                        className: a()(n.props.className, s.icon),
                        height: 24,
                        width: 24,
                    }),
                    (0, i.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        className: s.title,
                        children: l,
                    }),
                ],
            }),
            t,
        ],
    });
}
