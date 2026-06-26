n.d(i, { m: () => h });
var s = n(627968);
n(64700);
var e = n(224640),
    a = n(430993),
    l = n(696208),
    r = n(683071),
    c = n(478016),
    d = n(834730),
    o = n(665711),
    x = n(41032),
    j = n(188275),
    m = n(375708),
    u = n(692288);
function h(t) {
    let {
        sku: i,
        application: n,
        primaryCTAButtonProps: r,
        transitionState: c,
        onClose: o,
        hasAlreadyLinked: h,
        canStartAuthorization: p,
        bodyText: N,
        title: g,
        reward: b,
    } = t;
    return (0, s.jsxs)(e.d, {
        transitionState: c,
        onClose: o,
        "aria-label": g,
        children: [
            (0, s.jsx)(x.z, { sku: i, title: g, reward: b }),
            (0, s.jsxs)(a.c, {
                children: [
                    (0, s.jsxs)("div", {
                        className: u.S3,
                        children: [
                            (0, s.jsx)(d.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: u.jJ,
                                children: N,
                            }),
                            (0, s.jsx)(v, { isConnected: h, application: n }),
                        ],
                    }),
                    !p &&
                        !h &&
                        (0, s.jsx)(d.E, {
                            variant: "text-md/normal",
                            className: u.tl,
                            color: "text-feedback-warning",
                            children: m.intl.string(m.t.GDL8wb),
                        }),
                    !h &&
                        (0, s.jsx)("div", {
                            className: u.ZT,
                            children: (0, s.jsx)(d.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: m.intl.formatToPlainString(m.t.TTj7ME, { numDays: j.tG }),
                            }),
                        }),
                ],
            }),
            (0, s.jsx)(l.H, { actions: [r], actionsFullWidth: !0 }),
        ],
    });
}
function v(t) {
    let { isConnected: i, application: n } = t;
    return i
        ? (0, s.jsx)("div", {
              className: u.II,
              children: (0, s.jsxs)("div", {
                  className: u.jf,
                  children: [
                      (0, s.jsxs)("div", {
                          className: u.iN,
                          children: [
                              (0, s.jsx)("div", {
                                  className: u.I8,
                                  children: (0, s.jsx)(c.U, { size: "xs", color: "currentColor" }),
                              }),
                              (0, s.jsx)(d.E, {
                                  variant: "text-md/normal",
                                  className: u.qS,
                                  color: "text-subtle",
                                  children: m.intl.string(m.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, s.jsx)("div", {
                          className: u.vA,
                          children: (0, s.jsx)(o.W, { application: n, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, s.jsx)(r.w, {
              type: "warning",
              children: (0, s.jsx)(d.E, { variant: "text-sm/medium", children: m.intl.string(m.t.Plv1Xk) }),
          });
}
