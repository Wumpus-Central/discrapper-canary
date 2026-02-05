i.d(e, { m: () => d });
var a = i(627968);
i(64700);
var n = i(158954),
    s = i(397927),
    l = i(665711),
    r = i(41032),
    c = i(985018),
    o = i(23337);
function d(t) {
    let {
        sku: e,
        application: i,
        primaryCTAButtonProps: l,
        transitionState: d,
        onClose: _,
        hasAlreadyLinked: x,
        canStartAuthorization: m,
        bodyText: f,
        title: p,
    } = t;
    return (0, a.jsxs)(n.dWK, {
        transitionState: d,
        onClose: _,
        children: [
            (0, a.jsx)(r.z, { sku: e, title: p }),
            (0, a.jsxs)(n.cwr, {
                children: [
                    (0, a.jsxs)("div", {
                        className: o.S3,
                        children: [
                            (0, a.jsx)(s.Text, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: o.jJ,
                                children: f,
                            }),
                            (0, a.jsx)(u, { isConnected: x, application: i }),
                        ],
                    }),
                    !m &&
                        !x &&
                        (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: o.tl,
                            color: "text-feedback-warning",
                            children: c.intl.string(c.t.GDL8wb),
                        }),
                    !x &&
                        (0, a.jsx)("div", {
                            className: o.ZT,
                            children: (0, a.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: c.intl.formatToPlainString(c.t.TTj7ME, { numDays: 14 }),
                            }),
                        }),
                ],
            }),
            (0, a.jsx)(n.H7u, { actions: [l], actionsFullWidth: !0 }),
        ],
    });
}
function u(t) {
    let { isConnected: e, application: i } = t;
    return e
        ? (0, a.jsx)("div", {
              className: o.II,
              children: (0, a.jsxs)("div", {
                  className: o.jf,
                  children: [
                      (0, a.jsxs)("div", {
                          className: o.iN,
                          children: [
                              (0, a.jsx)("div", {
                                  className: o.I8,
                                  children: (0, a.jsx)(n.Uzd, { size: "xs", color: "currentColor" }),
                              }),
                              (0, a.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  className: o.qS,
                                  color: "text-subtle",
                                  children: c.intl.string(c.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, a.jsx)("div", {
                          className: o.vA,
                          children: (0, a.jsx)(l.W, { application: i, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, a.jsx)(n.wx6, {
              type: "warning",
              children: (0, a.jsx)(s.Text, { variant: "text-sm/medium", children: c.intl.string(c.t.Plv1Xk) }),
          });
}
