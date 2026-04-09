n.d(t, { A: () => u, H: () => A });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(342952),
    s = n(435371),
    o = n(397927),
    d = n(915089),
    c = n(20342);
function u(e) {
    let { label: t, className: n, size: a = o._3J.SIZE_16, maxUsers: s = 4, ...u } = e,
        A = (0, d.GV)();
    return (0, i.jsxs)("div", {
        className: r()(n, c.k),
        children: [
            (0, i.jsx)(l.I, { "aria-labelledby": A, overflowCountClassName: c.j, size: a, maxUsers: s, ...u }),
            (0, i.jsx)(o.Text, { variant: "text-xs/normal", color: "text-subtle", id: A, children: t }),
        ],
    });
}
function A(e) {
    let {
        label: t,
        className: n,
        overflowCountClassName: a,
        size: d = o._3J.SIZE_16,
        maxUsers: u = 4,
        onClick: A,
        ..._
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
                children: (0, i.jsx)(l.I, {
                    size: d,
                    maxUsers: u,
                    overflowCountClassName: r()(c.j, a),
                    "aria-hidden": !0,
                    ..._,
                }),
            }),
        }),
    });
}
