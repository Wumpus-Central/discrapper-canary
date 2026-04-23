n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(311907),
    s = n(534514),
    o = n(834730),
    c = n(961350),
    d = n(296227),
    u = n(355144);
function m(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: r = !1,
        title: c,
        subtitle: d,
        actionButtons: m = [],
        className: h,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(u.U1, h),
        children: [
            (0, i.jsxs)("div", {
                className: u.DD,
                children: [
                    (0, i.jsx)(s.D, { variant: "heading-sm/medium", color: "text-default", id: n, children: c }),
                    null != d && (0, i.jsx)(o.E, { variant: "text-xs/normal", color: "text-subtle", children: d }),
                ],
            }),
            (0, i.jsx)(p, { widget: l, actionButtons: m, disabledInteraction: r, userId: t }),
        ],
    });
}
function p(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: a } = e,
        s = (0, r.bG)([c.default], () => c.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, i.jsx)("div", { className: u.o1, children: n })
          : s !== a
            ? (0, i.jsx)("div", {
                  className: u.o1,
                  children: (0, i.jsx)(d.A, { widget: t, userId: a, className: u.AQ }),
              })
            : null;
}
