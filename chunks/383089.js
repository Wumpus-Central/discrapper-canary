var r = n(477900);
n(582128);
var l = n(224640),
    a = n(430993),
    s = n(834730),
    i = n(696208),
    o = n(683071),
    c = n(478016),
    d = n(665711),
    u = n(41032);
n(188275);
var m = n(792996),
    h = n(778491);
function x(e) {
    let { isConnected: t, application: n } = e;
    return t
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
                              (0, r.jsx)(s.E, {
                                  variant: "body-md/normal",
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
        : (0, r.jsx)(o.w, { type: "warning", message: m.intl.string(m.t.Plv1Xk), role: "none" });
}
n.d(
    t,
    {},
    {
        m: function (e) {
            let {
                sku: t,
                application: n,
                primaryCTAButtonProps: o,
                transitionState: c,
                onClose: d,
                hasAlreadyLinked: v,
                canStartAuthorization: j,
                shouldShowGoToGameHint: p,
                bodyText: g,
                title: b,
                reward: f,
            } = e;
            return (0, r.jsxs)(l.d, {
                transitionState: c,
                onClose: d,
                "aria-label": b,
                children: [
                    (0, r.jsx)(u.z, { sku: t, title: b, reward: f }),
                    (0, r.jsxs)(a.c, {
                        children: [
                            (0, r.jsxs)("div", {
                                className: h.S3,
                                children: [
                                    (0, r.jsx)(s.E, {
                                        variant: "body-md/normal",
                                        color: "text-subtle",
                                        className: h.jJ,
                                        children: g,
                                    }),
                                    (0, r.jsx)(x, { isConnected: v, application: n }),
                                ],
                            }),
                            !j &&
                                !v &&
                                (0, r.jsx)(s.E, {
                                    variant: "body-md/normal",
                                    className: h.tl,
                                    color: "text-feedback-warning",
                                    children: m.intl.formatToPlainString(m.t.AYQq05, { applicationName: n.name }),
                                }),
                            !v &&
                                (0, r.jsx)("div", {
                                    className: h.ZT,
                                    children: (0, r.jsx)(s.E, {
                                        variant: "body-xs/normal",
                                        color: "text-subtle",
                                        children: m.intl.formatToPlainString(m.t.TTj7ME, { numDays: 14 }),
                                    }),
                                }),
                            p &&
                                !v &&
                                (0, r.jsx)(s.E, {
                                    variant: "body-md/normal",
                                    className: h.tl,
                                    color: "text-feedback-positive",
                                    children: m.intl.string(m.t["HJJDr+"]),
                                }),
                        ],
                    }),
                    null != o && (0, r.jsx)(i.H, { actions: [o], actionsFullWidth: !0 }),
                ],
            });
        },
    },
);
