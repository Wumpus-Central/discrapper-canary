var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(661824),
    u = r(46124);
let c = a.forwardRef(function (e, n) {
    let { className: r, isBeforeGroup: a = !1, ...s } = e,
        { children: c } = s;
    return (0, i.jsx)(l.Z, {
        ...s,
        ref: n,
        role: 'separator',
        'aria-label': 'string' == typeof c ? c : void 0,
        className: o()(r, {
            [u.divider]: !0,
            [u.hasContent]: null != c,
            [u.beforeGroup]: a
        })
    });
});
n.Z = a.memo(c);
