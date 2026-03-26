a.d(i, { m: () => d });
var n = a(627968);
a(64700);
var e = a(158954),
    l = a(397927),
    s = a(665711),
    r = a(41032),
    c = a(985018),
    o = a(806288);
function d(t) {
    let {
        sku: i,
        application: a,
        primaryCTAButtonProps: s,
        transitionState: d,
        onClose: _,
        hasAlreadyLinked: x,
        canStartAuthorization: p,
        bodyText: m,
        title: A,
    } = t;
    return (0, n.jsxs)(e.dWK, {
        transitionState: d,
        onClose: _,
        children: [
            (0, n.jsx)(r.z, { sku: i, title: A }),
            (0, n.jsxs)(e.cwr, {
                children: [
                    (0, n.jsxs)("div", {
                        className: o.S3,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: o.jJ,
                                children: m,
                            }),
                            (0, n.jsx)(u, { isConnected: x, application: a }),
                        ],
                    }),
                    !p &&
                        !x &&
                        (0, n.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: o.tl,
                            color: "text-feedback-warning",
                            children: c.intl.string(c.t.GDL8wb),
                        }),
                    !x &&
                        (0, n.jsx)("div", {
                            className: o.ZT,
                            children: (0, n.jsx)(l.Text, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: c.intl.formatToPlainString(c.t.TTj7ME, { numDays: 14 }),
                            }),
                        }),
                ],
            }),
            (0, n.jsx)(e.H7u, { actions: [s], actionsFullWidth: !0 }),
        ],
    });
}
function u(t) {
    let { isConnected: i, application: a } = t;
    return i
        ? (0, n.jsx)("div", {
              className: o.II,
              children: (0, n.jsxs)("div", {
                  className: o.jf,
                  children: [
                      (0, n.jsxs)("div", {
                          className: o.iN,
                          children: [
                              (0, n.jsx)("div", {
                                  className: o.I8,
                                  children: (0, n.jsx)(e.Uzd, { size: "xs", color: "currentColor" }),
                              }),
                              (0, n.jsx)(l.Text, {
                                  variant: "text-md/normal",
                                  className: o.qS,
                                  color: "text-subtle",
                                  children: c.intl.string(c.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          className: o.vA,
                          children: (0, n.jsx)(s.W, { application: a, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, n.jsx)(e.wx6, {
              type: "warning",
              children: (0, n.jsx)(l.Text, { variant: "text-sm/medium", children: c.intl.string(c.t.Plv1Xk) }),
          });
}
