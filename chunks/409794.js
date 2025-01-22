r.d(n, {
    X: function () {
        return d;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(803997),
    s = r.n(o),
    l = r(793030),
    u = r(200269),
    c = r(417272);
let d = a.forwardRef(function (e, n) {
    let { variant: r, className: a, ...o } = e,
        d = (0, u.x)(),
        f = 'h'.concat(Math.min(d, 6));
    return (0, i.jsx)(l.xv, {
        ref: n,
        variant: r,
        tag: f,
        className: s()(c.defaultColor, a),
        ...(d > 6 ? { 'data-excessive-heading-level': d } : {}),
        ...o
    });
});
