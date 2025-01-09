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
    let { className: n, tooltip: r, color: a, size: c = d.SIZE_32, icon: f, onMouseDown: _, onClick: h, disabled: p, focusProps: m } = e;
    return (0, i.jsx)(l.u, {
        text: r,
        shouldShow: !p,
        children: (e) => {
            let { onClick: l, ...d } = e;
            return (0, i.jsx)(o.P, {
                ...d,
                'aria-label': r,
                'aria-disabled': p,
                className: s()(n, u.button, a, c, { [u.disabled]: p }),
                onMouseDown: _,
                onClick: (e) => {
                    null == l || l(), h(e);
                },
                focusProps: m,
                children: f
            });
        }
    });
}
