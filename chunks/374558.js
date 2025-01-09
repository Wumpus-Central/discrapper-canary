r.d(n, {
    M0: function () {
        return f;
    },
    YX: function () {
        return c;
    },
    tT: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(1561),
    l = r(981729),
    u = r(691923);
let c = {
        TERTIARY: u.tertiary,
        SECONDARY: u.secondary,
        PRIMARY: u.primary
    },
    d = {
        SIZE_24: u.size24,
        SIZE_32: u.size32,
        SIZE_36: u.size36
    };
function f(e) {
    let { className: n, tooltip: r, color: a, size: c = d.SIZE_32, icon: f, onClick: _, disabled: h, focusProps: p } = e;
    return (0, i.jsx)(l.u, {
        text: r,
        shouldShow: !h,
        children: (e) => {
            let { onClick: l, ...d } = e;
            return (0, i.jsx)(o.P, {
                ...d,
                'aria-label': r,
                'aria-disabled': h,
                className: s()(n, u.button, a, c, { [u.disabled]: h }),
                onClick: (e) => {
                    null == l || l(), _(e);
                },
                focusProps: p,
                children: f
            });
        }
    });
}
