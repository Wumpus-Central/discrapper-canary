n.d(e, { M: () => u });
var i = n(54381);
n(473749);
var a = n(793030),
    s = n(481060),
    l = n(22928),
    o = n(438926),
    r = n(388032),
    c = n(475495);
function u(t) {
    let {
        sku: e,
        application: n,
        primaryCTAButtonProps: l,
        transitionState: u,
        onClose: x,
        hasAlreadyLinked: f,
        canStartAuthorization: _,
        bodyText: m,
        title: g,
    } = t;
    return (0, i.jsxs)(a.IX, {
        transitionState: u,
        onClose: x,
        children: [
            (0, i.jsx)(o.y, {
                sku: e,
                title: g,
            }),
            (0, i.jsxs)(a.fef, {
                children: [
                    (0, i.jsxs)("div", {
                        className: c.modalBody,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: c.modalBodyText,
                                children: m,
                            }),
                            (0, i.jsx)(d, {
                                isConnected: f,
                                application: n,
                            }),
                        ],
                    }),
                    !_ &&
                        !f &&
                        (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: c.cannotLinkAccountWarning,
                            color: "text-feedback-warning",
                            children: r.intl.string(r.t.GDL8wb),
                        }),
                    !f &&
                        (0, i.jsx)("div", {
                            className: c.expirationWarningContainer,
                            children: (0, i.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "text-subtle",
                                children: r.intl.formatToPlainString(r.t.TTj7ME, { numDays: 14 }),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(a.Go$, {
                actions: [l],
                actionsFullWidth: !0,
            }),
        ],
    });
}
function d(t) {
    let { isConnected: e, application: n } = t;
    return e
        ? (0, i.jsx)("div", {
              className: c.statusContainer,
              children: (0, i.jsxs)("div", {
                  className: c.statusRow,
                  children: [
                      (0, i.jsxs)("div", {
                          className: c.statusLeft,
                          children: [
                              (0, i.jsx)("div", {
                                  className: c.statusIcon,
                                  children: (0, i.jsx)(a.kmB, {
                                      size: "xs",
                                      color: "currentColor",
                                  }),
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  className: c.statusText,
                                  color: "text-subtle",
                                  children: r.intl.string(r.t["LV+CXH"]),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: c.statusRight,
                          children: (0, i.jsx)(l.h, {
                              application: n,
                              iconSize: 20,
                          }),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(a.M14, {
              type: "warning",
              children: (0, i.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  children: r.intl.string(r.t.Plv1Xk),
              }),
          });
}
