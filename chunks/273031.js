n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(951394),
    u = n(390689);
function c(e) {
    let { onClick: t, children: n, tooltip: a, dangerous: c = !1, className: d, 'aria-label': f } = e;
    return (0, i.jsx)(o.ua7, {
        text: a,
        hideOnClick: !0,
        children: (e) => {
            let { onMouseEnter: o, onMouseLeave: _, onClick: p } = e;
            return (0, i.jsx)(l.zx, {
                onMouseEnter: o,
                onMouseLeave: _,
                onClick: (e) => {
                    e.stopPropagation(), null == p || p(), t(e);
                },
                dangerous: c,
                'aria-label': null != f ? f : a,
                className: d,
                children: r.Children.map(n, (e) => (r.isValidElement(e) ? r.cloneElement(e, { className: s()(e.props.className, u.actionBarIcon) }) : e))
            });
        }
    });
}
