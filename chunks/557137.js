n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(397927),
    o = n(961350),
    d = n(296227),
    c = n(582153);
function u(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: r = !1,
        title: o,
        subtitle: d,
        actionButtons: u = [],
        className: m,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(c.U1, m),
        children: [
            (0, i.jsxs)("div", {
                className: c.DD,
                children: [
                    (0, i.jsx)(s.Heading, { variant: "heading-sm/medium", color: "text-default", id: n, children: o }),
                    null != d && (0, i.jsx)(s.Text, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
            (0, i.jsx)(g, { widget: l, actionButtons: u, disabledInteraction: r, userId: t }),
        ],
    });
}
function g(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: a } = e,
        s = (0, r.bG)([o.default], () => o.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: c.o1, children: n })
          : s !== a
            ? (0, i.jsx)("div", {
                  className: c.o1,
                  children: (0, i.jsx)(d.A, { widget: t, userId: a, className: c.AQ }),
              })
            : null;
}
