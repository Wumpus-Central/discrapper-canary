n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(951394),
    c = n(684314);
function u(e) {
    let { onClick: t, children: n, tooltip: a, dangerous: u = !1, className: d, 'aria-label': f } = e;
    return (0, r.jsx)(s.ua7, {
        text: a,
        hideOnClick: !0,
        children: (e) => {
            let { onMouseEnter: s, onMouseLeave: _, onClick: p } = e;
            return (0, r.jsx)(l.zx, {
                onMouseEnter: s,
                onMouseLeave: _,
                onClick: (e) => {
                    e.stopPropagation(), null == p || p(), t(e);
                },
                dangerous: u,
                'aria-label': null != f ? f : a,
                className: d,
                children: i.Children.map(n, (e) => (i.isValidElement(e) ? i.cloneElement(e, { className: o()(e.props.className, c.actionBarIcon) }) : e))
            });
        }
    });
}
