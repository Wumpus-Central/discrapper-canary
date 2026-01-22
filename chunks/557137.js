n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(397927),
    o = n(961350),
    c = n(296227),
    u = n(582153);

function d(e) {
    let {
        userId: t,
        headingId: n,
        widget: l,
        disableInteraction: a = !1,
        title: o,
        subtitle: c,
        actionButtons: d = [],
        className: p,
    } = e;
    return (0, r.jsxs)("div", {
        className: i()(u.U1, p),
        children: [
            (0, r.jsxs)("div", {
                className: u.DD,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-sm/medium",
                        color: "text-default",
                        id: n,
                        children: o,
                    }),
                    null != c &&
                        (0, r.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "text-subtle",
                            children: c,
                        }),
                ],
            }),
            (0, r.jsx)(f, {
                widget: l,
                actionButtons: d,
                disabledInteraction: a,
                userId: t,
            }),
        ],
    });
}

function f(e) {
    let { widget: t, actionButtons: n, disabledInteraction: l, userId: i } = e,
        s = (0, a.bG)([o.default], () => o.default.getId());
    return l
        ? null
        : null != n && n.length > 0
          ? (0, r.jsx)("div", {
                className: u.o1,
                children: n,
            })
          : s !== i
            ? (0, r.jsx)("div", {
                  className: u.o1,
                  children: (0, r.jsx)(c.A, {
                      widget: t,
                      userId: i,
                      className: u.AQ,
                  }),
              })
            : null;
}
