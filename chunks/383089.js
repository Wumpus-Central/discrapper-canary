n.d(t, { m: () => j });
var l = n(477900);
n(582128);
var r = n(224640),
    a = n(430993),
    s = n(834730),
    i = n(696208),
    o = n(683071),
    c = n(478016),
    d = n(665711),
    u = n(41032),
    m = n(188275),
    h = n(105292),
    x = n(778491);
function j(e) {
    let {
        sku: t,
        application: n,
        primaryCTAButtonProps: o,
        transitionState: c,
        onClose: d,
        hasAlreadyLinked: j,
        canStartAuthorization: p,
        shouldShowGoToGameHint: g,
        bodyText: b,
        title: f,
        reward: C,
    } = e;
    return (0, l.jsxs)(r.d, {
        transitionState: c,
        onClose: d,
        "aria-label": f,
        children: [
            (0, l.jsx)(u.z, { sku: t, title: f, reward: C }),
            (0, l.jsxs)(a.c, {
                children: [
                    (0, l.jsxs)("div", {
                        className: x.S3,
                        children: [
                            (0, l.jsx)(s.E, {
                                variant: "body-md/normal",
                                color: "text-subtle",
                                className: x.jJ,
                                children: b,
                            }),
                            (0, l.jsx)(v, { isConnected: j, application: n }),
                        ],
                    }),
                    !p &&
                        !j &&
                        (0, l.jsx)(s.E, {
                            variant: "body-md/normal",
                            className: x.tl,
                            color: "text-feedback-warning",
                            children: h.intl.formatToPlainString(h.t.AYQq05, { applicationName: n.name }),
                        }),
                    !j &&
                        (0, l.jsx)("div", {
                            className: x.ZT,
                            children: (0, l.jsx)(s.E, {
                                variant: "body-xs/normal",
                                color: "text-subtle",
                                children: h.intl.formatToPlainString(h.t.TTj7ME, { numDays: m.tG }),
                            }),
                        }),
                    g &&
                        !j &&
                        (0, l.jsx)(s.E, {
                            variant: "body-md/normal",
                            className: x.tl,
                            color: "text-feedback-positive",
                            children: h.intl.string(h.t["HJJDr+"]),
                        }),
                ],
            }),
            null != o && (0, l.jsx)(i.H, { actions: [o], actionsFullWidth: !0 }),
        ],
    });
}
function v(e) {
    let { isConnected: t, application: n } = e;
    return t
        ? (0, l.jsx)("div", {
              className: x.II,
              children: (0, l.jsxs)("div", {
                  className: x.jf,
                  children: [
                      (0, l.jsxs)("div", {
                          className: x.iN,
                          children: [
                              (0, l.jsx)("div", {
                                  className: x.I8,
                                  children: (0, l.jsx)(c.U, { size: "xs", color: "currentColor" }),
                              }),
                              (0, l.jsx)(s.E, {
                                  variant: "body-md/normal",
                                  className: x.qS,
                                  color: "text-subtle",
                                  children: h.intl.string(h.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, l.jsx)("div", {
                          className: x.vA,
                          children: (0, l.jsx)(d.W, { application: n, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, l.jsx)(o.w, { type: "warning", message: h.intl.string(h.t.Plv1Xk), role: "none" });
}
