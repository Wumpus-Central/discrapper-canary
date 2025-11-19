n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(28664),
    l = n(951394),
    c = n(283839);
function u(e) {
    let { onClick: t, children: n, tooltip: a, dangerous: u = !1, className: d, "aria-label": f } = e;
    return (0, r.jsx)(s.u, {
        text: a,
        children: (0, r.jsx)(l.zx, {
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            dangerous: u,
            "aria-label": null != f ? f : a,
            className: d,
            children: i.Children.map(n, (e) =>
                i.isValidElement(e) ? i.cloneElement(e, { className: o()(e.props.className, c.actionBarIcon) }) : e,
            ),
        }),
    });
}
