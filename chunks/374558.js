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
    c = n(390756);
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
            onMouseDown: _,
            onClick: p,
            disabled: h,
            focusProps: m,
        } = e;
        return (0, r.jsx)(l.u, {
            asContainer: !0,
            text: i,
            shouldShow: !h,
            children: (0, r.jsx)(s.P3F, {
                innerRef: t,
                "aria-label": i,
                "aria-disabled": h,
                className: o()(n, c.button, a, u, { [c.disabled]: h }),
                onMouseDown: _,
                onClick: (e) => {
                    p(e);
                },
                focusProps: m,
                children: f,
            }),
        });
    });
