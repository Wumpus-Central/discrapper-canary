n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(951394),
    c = n(684314);
function u(e) {
    let { onClick: t, children: n, tooltip: o, dangerous: u = !1, className: d, 'aria-label': f } = e;
    return (0, r.jsx)(s.ua7, {
        text: o,
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
                'aria-label': null != f ? f : o,
                className: d,
                children: i.Children.map(n, (e) => (i.isValidElement(e) ? i.cloneElement(e, { className: a()(e.props.className, c.actionBarIcon) }) : e))
            });
        }
    });
}
