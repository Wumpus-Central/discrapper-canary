n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(661824),
    l = n(46124);
let u = r.forwardRef(function (e, t) {
        let { className: n, isBeforeGroup: r = !1, ...a } = e,
            { children: u } = a;
        return (0, i.jsx)(o.Z, {
            ...a,
            ref: t,
            role: 'separator',
            'aria-label': 'string' == typeof u ? u : void 0,
            className: s()(n, {
                [l.divider]: !0,
                [l.hasContent]: null != u,
                [l.beforeGroup]: r
            })
        });
    }),
    c = r.memo(u);
