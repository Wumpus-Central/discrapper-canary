r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(951394),
    c = r(390689);
function d(e) {
    let { onClick: n, children: r, tooltip: s, dangerous: d = !1, className: f, 'aria-label': _ } = e;
    return (0, i.jsx)(l.Tooltip, {
        text: s,
        hideOnClick: !0,
        children: (e) => {
            let { onMouseEnter: l, onMouseLeave: h, onClick: p } = e;
            return (0, i.jsx)(u.zx, {
                onMouseEnter: l,
                onMouseLeave: h,
                onClick: (e) => {
                    e.stopPropagation(), null == p || p(), n(e);
                },
                dangerous: d,
                'aria-label': null != _ ? _ : s,
                className: f,
                children: a.Children.map(r, (e) => (a.isValidElement(e) ? a.cloneElement(e, { className: o()(e.props.className, c.actionBarIcon) }) : e))
            });
        }
    });
}
