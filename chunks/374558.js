n.d(t, {
    M0: () => f,
    YX: () => u,
    tT: () => d,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(28664),
    c = n(94321);
let u = {
        TERTIARY: c.tertiary,
        SECONDARY: c.secondary,
        PRIMARY: c.primary,
    },
    d = {
        SIZE_24: c.size24,
        SIZE_32: c.size32,
        SIZE_36: c.size36,
    },
    f = i.forwardRef(function (e, t) {
        let {
            className: n,
            tooltip: i,
            color: a,
            size: u = d.SIZE_32,
            icon: f,
            onMouseDown: p,
            onClick: _,
            disabled: m,
            focusProps: h,
        } = e;
        return (0, r.jsx)(l.u, {
            asContainer: !0,
            text: i,
            shouldShow: !m,
            children: (0, r.jsx)(s.P3F, {
                innerRef: t,
                "aria-label": i,
                "aria-disabled": m,
                className: o()(n, c.button, a, u, { [c.disabled]: m }),
                onMouseDown: p,
                onClick: (e) => {
                    _(e);
                },
                focusProps: h,
                children: f,
            }),
        });
    });
