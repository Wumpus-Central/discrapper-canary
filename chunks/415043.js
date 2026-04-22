n.d(t, { A: () => g, H: () => f });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(342952),
    r = n(990078),
    o = n(778712),
    c = n(834730),
    d = n(939249),
    u = n(915089),
    _ = n(499270);
function g(e) {
    let { label: t, className: n, size: a = o._3.SIZE_16, maxUsers: r = 4, ...d } = e,
        g = (0, u.GV)();
    return (0, i.jsxs)("div", {
        className: l()(n, _.k),
        children: [
            (0, i.jsx)(s.I, { "aria-labelledby": g, overflowCountClassName: _.j, size: a, maxUsers: r, ...d }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", id: g, children: t }),
        ],
    });
}
function f(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: a,
        size: c = o._3.SIZE_16,
        maxUsers: u = 4,
        onClick: g,
        ...f
    } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(r.m, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(d.D, {
                onClick: g,
                "aria-label": t,
                children: (0, i.jsx)(s.I, {
                    size: c,
                    maxUsers: u,
                    overflowCountClassName: l()(_.j, a),
                    "aria-hidden": !0,
                    ...f,
                }),
            }),
        }),
    });
}
