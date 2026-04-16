n.d(t, { A: () => u, H: () => A });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(342952),
    s = n(435371),
    o = n(397927),
    d = n(915089),
    c = n(499270);
function u(e) {
    let { label: t, className: n, size: l = o._3J.SIZE_16, maxUsers: s = 4, ...u } = e,
        A = (0, d.GV)();
    return (0, i.jsxs)("div", {
        className: a()(n, c.k),
        children: [
            (0, i.jsx)(r.I, { "aria-labelledby": A, overflowCountClassName: c.j, size: l, maxUsers: s, ...u }),
            (0, i.jsx)(o.Text, { variant: "text-xs/normal", color: "text-subtle", id: A, children: t }),
        ],
    });
}
function A(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: l,
        size: d = o._3J.SIZE_16,
        maxUsers: u = 4,
        onClick: A,
        ...h
    } = e;
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(s.m_, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, i.jsx)(o.DUT, {
                onClick: A,
                "aria-label": t,
                children: (0, i.jsx)(r.I, {
                    size: d,
                    maxUsers: u,
                    overflowCountClassName: a()(c.j, l),
                    "aria-hidden": !0,
                    ...h,
                }),
            }),
        }),
    });
}
