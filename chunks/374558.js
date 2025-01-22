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
    o = r.n(a),
    s = r(1561),
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
    let { className: n, tooltip: r, color: a, size: c = d.SIZE_32, icon: f, onMouseDown: p, onClick: h, disabled: _, focusProps: m } = e;
    return (0, i.jsx)(l.u, {
        text: r,
        shouldShow: !_,
        children: (e) => {
            let { onClick: l, ...d } = e;
            return (0, i.jsx)(s.P, {
                ...d,
                'aria-label': r,
                'aria-disabled': _,
                className: o()(n, u.button, a, c, { [u.disabled]: _ }),
                onMouseDown: p,
                onClick: (e) => {
                    null == l || l(), h(e);
                },
                focusProps: m,
                children: f
            });
        }
    });
}
