n.d(i, { m: () => u });
var s = n(627968);
n(64700);
var e = n(224640),
    l = n(430993),
    a = n(696208),
    r = n(683071),
    c = n(478016),
    d = n(834730),
    o = n(665711),
    x = n(41032),
    j = n(375708),
    m = n(376960);
function u(t) {
    let {
        sku: i,
        application: n,
        primaryCTAButtonProps: r,
        transitionState: c,
        onClose: o,
        hasAlreadyLinked: u,
        canStartAuthorization: v,
        bodyText: p,
        title: N,
    } = t;
    return (0, s.jsxs)(e.d, {
        transitionState: c,
        onClose: o,
        "aria-label": N,
        children: [
            (0, s.jsx)(x.z, { sku: i, title: N }),
            (0, s.jsxs)(l.c, {
                children: [
                    (0, s.jsxs)("div", {
                        className: m.S3,
                        children: [
                            (0, s.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: m.jJ,
                                children: p,
                            }),
                            (0, s.jsx)(h, { isConnected: u, application: n }),
                        ],
                    }),
                    !v &&
                        !u &&
                        (0, s.jsx)(d.E, {
                            variant: "text-md/normal",
                            className: m.tl,
                            color: "text-feedback-warning",
                            children: j.intl.string(j.t.GDL8wb),
                        }),
                    !u &&
                        (0, s.jsx)("div", {
                            className: m.ZT,
                            children: (0, s.jsx)(d.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: j.intl.formatToPlainString(j.t.TTj7ME, { numDays: 14 }),
                            }),
                        }),
                ],
            }),
            (0, s.jsx)(a.H, { actions: [r], actionsFullWidth: !0 }),
        ],
    });
}
function h(t) {
    let { isConnected: i, application: n } = t;
    return i
        ? (0, s.jsx)("div", {
              className: m.II,
              children: (0, s.jsxs)("div", {
                  className: m.jf,
                  children: [
                      (0, s.jsxs)("div", {
                          className: m.iN,
                          children: [
                              (0, s.jsx)("div", {
                                  className: m.I8,
                                  children: (0, s.jsx)(c.U, { size: "xs", color: "currentColor" }),
                              }),
                              (0, s.jsx)(d.E, {
                                  variant: "text-md/normal",
                                  className: m.qS,
                                  color: "text-subtle",
                                  children: j.intl.string(j.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          className: m.vA,
                          children: (0, s.jsx)(o.W, { application: n, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(r.w, {
              type: "warning",
              children: (0, s.jsx)(d.E, { variant: "text-sm/medium", children: j.intl.string(j.t.Plv1Xk) }),
          });
}
