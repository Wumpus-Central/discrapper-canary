n.d(t, { m: () => j });
var l = n(477900);
n(582128);
var r = n(224640),
    a = n(430993),
    s = n(834730),
    i = n(696208),
    c = n(683071),
    o = n(478016),
    d = n(665711),
    u = n(41032),
    x = n(188275),
    m = n(105292),
    h = n(778491);
function j(e) {
    let {
        sku: t,
        application: n,
        primaryCTAButtonProps: c,
        transitionState: o,
        onClose: d,
        hasAlreadyLinked: j,
        canStartAuthorization: p,
        shouldShowGoToGameHint: g,
        bodyText: f,
        title: C,
        reward: N,
    } = e;
    return (0, l.jsxs)(r.d, {
        transitionState: o,
        onClose: d,
        "aria-label": C,
        children: [
            (0, l.jsx)(u.z, { sku: t, title: C, reward: N }),
            (0, l.jsxs)(a.c, {
                children: [
                    (0, l.jsxs)("div", {
                        className: h.S3,
                        children: [
                            (0, l.jsx)(s.E, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: h.jJ,
                                children: f,
                            }),
                            (0, l.jsx)(v, { isConnected: j, application: n }),
                        ],
                    }),
                    !p &&
                        !j &&
                        (0, l.jsx)(s.E, {
                            variant: "text-md/normal",
                            className: h.tl,
                            color: "text-feedback-warning",
                            children: m.intl.formatToPlainString(m.t.AYQq05, { applicationName: n.name }),
                        }),
                    !j &&
                        (0, l.jsx)("div", {
                            className: h.ZT,
                            children: (0, l.jsx)(s.E, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: m.intl.formatToPlainString(m.t.TTj7ME, { numDays: x.tG }),
                            }),
                        }),
                    g &&
                        !j &&
                        (0, l.jsx)(s.E, {
                            variant: "text-md/normal",
                            className: h.tl,
                            color: "text-feedback-positive",
                            children: m.intl.string(m.t["HJJDr+"]),
                        }),
                ],
            }),
            null != c && (0, l.jsx)(i.H, { actions: [c], actionsFullWidth: !0 }),
        ],
    });
}
function v(e) {
    let { isConnected: t, application: n } = e;
    return t
        ? (0, l.jsx)("div", {
              className: h.II,
              children: (0, l.jsxs)("div", {
                  className: h.jf,
                  children: [
                      (0, l.jsxs)("div", {
                          className: h.iN,
                          children: [
                              (0, l.jsx)("div", {
                                  className: h.I8,
                                  children: (0, l.jsx)(o.U, { size: "xs", color: "currentColor" }),
                              }),
                              (0, l.jsx)(s.E, {
                                  variant: "text-md/normal",
                                  className: h.qS,
                                  color: "text-subtle",
                                  children: m.intl.string(m.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: h.vA,
                          children: (0, l.jsx)(d.W, { application: n, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(c.w, { type: "warning", message: m.intl.string(m.t.Plv1Xk), role: "none" });
}
