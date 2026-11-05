var n = l(477900);
l(582128);
var r = l(224640),
    a = l(430993),
    s = l(834730),
    i = l(696208),
    o = l(683071),
    c = l(478016),
    d = l(665711),
    u = l(41032);
l(188275);
var m = l(792996),
    h = l(778491);
function x(e) {
    let { isConnected: t, application: l } = e;
    return t
        ? (0, n.jsx)("div", {
              className: h.II,
              children: (0, n.jsxs)("div", {
                  className: h.jf,
                  children: [
                      (0, n.jsxs)("div", {
                          className: h.iN,
                          children: [
                              (0, n.jsx)("div", {
                                  className: h.I8,
                                  children: (0, n.jsx)(c.CheckmarkSmallIcon, { size: "xs", color: "currentColor" }),
                              }),
                              (0, n.jsx)(s.E, {
                                  variant: "body-md/normal",
                                  className: h.qS,
                                  color: "text-subtle",
                                  children: m.intl.string(m.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, n.jsx)("div", {
                          className: h.vA,
                          children: (0, n.jsx)(d.W, { application: l, iconSize: 20 }),
                      }),
                  ],
              }),
          })
        : (0, n.jsx)(o.w, { type: "warning", message: m.intl.string(m.t.Plv1Xk), role: "none" });
}
l.d(
    t,
    {},
    {
        m: function (e) {
            let {
                sku: t,
                application: l,
                primaryCTAButtonProps: o,
                transitionState: c,
                onClose: d,
                hasAlreadyLinked: v,
                canStartAuthorization: j,
                shouldShowGoToGameHint: p,
                bodyText: g,
                title: b,
                reward: C,
            } = e;
            return (0, n.jsxs)(r.d, {
                transitionState: c,
                onClose: d,
                "aria-label": b,
                children: [
                    (0, n.jsx)(u.z, { sku: t, title: b, reward: C }),
                    (0, n.jsxs)(a.c, {
                        children: [
                            (0, n.jsxs)("div", {
                                className: h.S3,
                                children: [
                                    (0, n.jsx)(s.E, {
                                        variant: "body-md/normal",
                                        color: "text-subtle",
                                        className: h.jJ,
                                        children: g,
                                    }),
                                    (0, n.jsx)(x, { isConnected: v, application: l }),
                                ],
                            }),
                            !j &&
                                !v &&
                                (0, n.jsx)(s.E, {
                                    variant: "body-md/normal",
                                    className: h.tl,
                                    color: "text-feedback-warning",
                                    children: m.intl.formatToPlainString(m.t.AYQq05, { applicationName: l.name }),
                                }),
                            !v &&
                                (0, n.jsx)("div", {
                                    className: h.ZT,
                                    children: (0, n.jsx)(s.E, {
                                        variant: "body-xs/normal",
                                        color: "text-subtle",
                                        children: m.intl.formatToPlainString(m.t.TTj7ME, { numDays: 14 }),
                                    }),
                                }),
                            p &&
                                !v &&
                                (0, n.jsx)(s.E, {
                                    variant: "body-md/normal",
                                    className: h.tl,
                                    color: "text-feedback-positive",
                                    children: m.intl.string(m.t["HJJDr+"]),
                                }),
                        ],
                    }),
                    null != o && (0, n.jsx)(i.H, { actions: [o], actionsFullWidth: !0 }),
                ],
            });
        },
    },
);
