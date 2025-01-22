var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(661824),
    u = r(46124);
let c = a.forwardRef(function (e, n) {
    let { className: r, isBeforeGroup: a = !1, ...o } = e,
        { children: c } = o;
    return (0, i.jsx)(l.Z, {
        ...o,
        ref: n,
        role: 'separator',
        'aria-label': 'string' == typeof c ? c : void 0,
        className: s()(r, {
            [u.divider]: !0,
            [u.hasContent]: null != c,
            [u.beforeGroup]: a
        })
    });
});
n.Z = a.memo(c);
