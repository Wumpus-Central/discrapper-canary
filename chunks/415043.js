n.d(t, { A: () => u, H: () => g });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(342952),
    r = n(435371),
    o = n(397927),
    d = n(915089),
    c = n(20342);
function u(e) {
    let { label: t, className: n, size: a = o._3J.SIZE_16, maxUsers: r = 4, ...u } = e,
        g = (0, d.GV)();
    return (0, i.jsxs)("div", {
        className: l()(n, c.k),
        children: [
            (0, i.jsx)(s.I, { "aria-labelledby": g, overflowCountClassName: c.j, size: a, maxUsers: r, ...u }),
            (0, i.jsx)(o.Text, { variant: "text-xs/normal", color: "text-subtle", id: g, children: t }),
        ],
    });
}
function g(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: a,
        size: d = o._3J.SIZE_16,
        maxUsers: u = 4,
        onClick: g,
        ...m
    } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(r.m_, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: g,
                "aria-label": t,
                children: (0, i.jsx)(s.I, {
                    size: d,
                    maxUsers: u,
                    overflowCountClassName: l()(c.j, a),
                    "aria-hidden": !0,
                    ...m,
                }),
            }),
        }),
    });
}
