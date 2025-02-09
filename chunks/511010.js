n.d(t, { Z: () => c });
var s = n(200651),
    i = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(661824),
    o = n(194240);
let _ = i.forwardRef(function (e, t) {
        let { className: n, isBeforeGroup: i = !1, ...r } = e,
            { children: _ } = r;
        return (0, s.jsx)(l.Z, {
            ...r,
            ref: t,
            role: 'separator',
            'aria-label': 'string' == typeof _ ? _ : void 0,
            className: a()(n, {
                [o.divider]: !0,
                [o.hasContent]: null != _,
                [o.beforeGroup]: i
            })
        });
    }),
    c = i.memo(_);
