n.d(e, { m: () => j });
var r = n(627968);
n(64700);
var l = n(224640),
    a = n(430993),
    i = n(696208),
    s = n(683071),
    c = n(478016),
    o = n(834730),
    d = n(665711),
    u = n(41032),
    x = n(188275),
    m = n(375708),
    h = n(376960);
function j(t) {
    let {
        sku: e,
        application: n,
        primaryCTAButtonProps: s,
        transitionState: c,
        onClose: d,
        hasAlreadyLinked: j,
        canStartAuthorization: p,
        shouldShowGoToGameHint: g,
        bodyText: f,
        title: C,
        reward: N,
    } = t;
    return (0, r.jsxs)(l.d, {
        transitionState: c,
        onClose: d,
        "aria-label": C,
        children: [
            (0, r.jsx)(u.z, { sku: e, title: C, reward: N }),
            (0, r.jsxs)(a.c, {
                children: [
                    (0, r.jsxs)("div", {
                        className: h.S3,
                        children: [
                            (0, r.jsx)(o.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: h.jJ,
                                children: f,
                            }),
                            (0, r.jsx)(v, { isConnected: j, application: n }),
                        ],
                    }),
                    !p &&
                        !j &&
                        (0, r.jsx)(o.E, {
                            variant: "text-md/normal",
                            className: h.tl,
                            color: "text-feedback-warning",
                            children: m.intl.formatToPlainString(m.t.AYQq05, { applicationName: n.name }),
                        }),
                    !j &&
                        (0, r.jsx)("div", {
                            className: h.ZT,
                            children: (0, r.jsx)(o.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: m.intl.formatToPlainString(m.t.TTj7ME, { numDays: x.tG }),
                            }),
                        }),
                    g &&
                        !j &&
                        (0, r.jsx)(o.E, {
                            variant: "text-md/normal",
                            className: h.tl,
                            color: "text-feedback-positive",
                            children: m.intl.string(m.t["HJJDr+"]),
                        }),
                ],
            }),
            null != s && (0, r.jsx)(i.H, { actions: [s], actionsFullWidth: !0 }),
        ],
    });
}
function v(t) {
    let { isConnected: e, application: n } = t;
    return e
        ? (0, r.jsx)("div", {
              className: h.II,
              children: (0, r.jsxs)("div", {
                  className: h.jf,
                  children: [
                      (0, r.jsxs)("div", {
                          className: h.iN,
                          children: [
                              (0, r.jsx)("div", {
                                  className: h.I8,
                                  children: (0, r.jsx)(c.U, { size: "xs", color: "currentColor" }),
                              }),
                              (0, r.jsx)(o.E, {
                                  variant: "text-md/normal",
                                  className: h.qS,
                                  color: "text-subtle",
                                  children: m.intl.string(m.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, r.jsx)("div", {
                          className: h.vA,
                          children: (0, r.jsx)(d.W, { application: n, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(s.w, {
              type: "warning",
              children: (0, r.jsx)(o.E, { variant: "text-sm/medium", children: m.intl.string(m.t.Plv1Xk) }),
          });
}
