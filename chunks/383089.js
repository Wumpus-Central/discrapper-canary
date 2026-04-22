i.d(e, { m: () => m });
var n = i(627968);
i(64700);
var a = i(224640),
    s = i(430993),
    l = i(696208),
    r = i(683071),
    c = i(478016),
    o = i(834730),
    d = i(665711),
    u = i(41032),
    _ = i(985018),
    x = i(376960);
function m(t) {
    let {
        sku: e,
        application: i,
        primaryCTAButtonProps: r,
        transitionState: c,
        onClose: d,
        hasAlreadyLinked: m,
        canStartAuthorization: f,
        bodyText: g,
        title: A,
    } = t;
    return (0, n.jsxs)(a.d, {
        transitionState: c,
        onClose: d,
        children: [
            (0, n.jsx)(u.z, { sku: e, title: A }),
            (0, n.jsxs)(s.c, {
                children: [
                    (0, n.jsxs)("div", {
                        className: x.S3,
                        children: [
                            (0, n.jsx)(o.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: x.jJ,
                                children: g,
                            }),
                            (0, n.jsx)(p, { isConnected: m, application: i }),
                        ],
                    }),
                    !f &&
                        !m &&
                        (0, n.jsx)(o.E, {
                            variant: "text-md/normal",
                            className: x.tl,
                            color: "text-feedback-warning",
                            children: _.intl.string(_.t.GDL8wb),
                        }),
                    !m &&
                        (0, n.jsx)("div", {
                            className: x.ZT,
                            children: (0, n.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: _.intl.formatToPlainString(_.t.TTj7ME, { numDays: 14 }),
                            }),
                        }),
                ],
            }),
            (0, n.jsx)(l.H, { actions: [r], actionsFullWidth: !0 }),
        ],
    });
}
function p(t) {
    let { isConnected: e, application: i } = t;
    return e
        ? (0, n.jsx)("div", {
              className: x.II,
              children: (0, n.jsxs)("div", {
                  className: x.jf,
                  children: [
                      (0, n.jsxs)("div", {
                          className: x.iN,
                          children: [
                              (0, n.jsx)("div", {
                                  className: x.I8,
                                  children: (0, n.jsx)(c.U, { size: "xs", color: "currentColor" }),
                              }),
                              (0, n.jsx)(o.E, {
                                  variant: "text-md/normal",
                                  className: x.qS,
                                  color: "text-subtle",
                                  children: _.intl.string(_.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          className: x.vA,
                          children: (0, n.jsx)(d.W, { application: i, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, n.jsx)(r.w, {
              type: "warning",
              children: (0, n.jsx)(o.E, { variant: "text-sm/medium", children: _.intl.string(_.t.Plv1Xk) }),
          });
}
