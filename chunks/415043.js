n.d(t, { A: () => u, H: () => g });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(342952),
    r = n(435371),
    o = n(397927),
    d = n(915089),
    c = n(577373);
function u(e) {
    let { label: t, className: n, size: l = o._3J.SIZE_16, maxUsers: r = 4, ...u } = e,
        g = (0, d.GV)();
    return (0, i.jsxs)("div", {
        className: a()(n, c.k),
        children: [
            (0, i.jsx)(s.I, { "aria-labelledby": g, overflowCountClassName: c.j, size: l, maxUsers: r, ...u }),
            (0, i.jsx)(o.Text, { variant: "text-xs/normal", color: "text-subtle", id: g, children: t }),
        ],
    });
}
function g(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: l,
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
                    overflowCountClassName: a()(c.j, l),
                    "aria-hidden": !0,
                    ...m,
                }),
            }),
        }),
    });
}
