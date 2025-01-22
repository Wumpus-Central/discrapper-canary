r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(951394),
    c = r(390689);
function d(e) {
    let { onClick: n, children: r, tooltip: o, dangerous: d = !1, className: f, 'aria-label': p } = e;
    return (0, i.jsx)(l.Tooltip, {
        text: o,
        hideOnClick: !0,
        children: (e) => {
            let { onMouseEnter: l, onMouseLeave: h, onClick: _ } = e;
            return (0, i.jsx)(u.zx, {
                onMouseEnter: l,
                onMouseLeave: h,
                onClick: (e) => {
                    e.stopPropagation(), null == _ || _(), n(e);
                },
                dangerous: d,
                'aria-label': null != p ? p : o,
                className: f,
                children: a.Children.map(r, (e) => (a.isValidElement(e) ? a.cloneElement(e, { className: s()(e.props.className, c.actionBarIcon) }) : e))
            });
        }
    });
}
