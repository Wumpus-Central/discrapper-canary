e.d(n, { Z: () => x });
var i = e(951288);
e(647438);
var a = e(120356),
    s = e.n(a),
    l = e(793030),
    o = e(481060),
    r = e(20471),
    c = e(22928),
    u = e(438926),
    d = e(388032),
    p = e(261540);
function x(t) {
    let {
            sku: n,
            application: e,
            transitionState: a,
            onClose: s,
            successStateButtonText: c,
            onSuccessButtonClick: u,
            isSuccessButtonLoading: x,
        } = t,
        { hasAlreadyLinked: f, canStartAuthorization: h, startAuthorization: C, fetched: g } = (0, r.FG)(e);
    if (!g)
        return (0, i.jsx)(l.IX, {
            transitionState: a,
            onClose: s,
            children: (0, i.jsx)(l.fef, {
                children: (0, i.jsx)("div", {
                    className: p.loadingContainer,
                    children: (0, i.jsx)(o.$jN, {}),
                }),
            }),
        });
    let S = f
        ? {
              variant: "primary",
              text: c,
              onClick: u,
              loading: x,
          }
        : {
              variant: "primary",
              text: d.intl.string(d.t["VDAhr+"]),
              onClick: C,
              icon: l.uIJ,
              disabled: !h,
          };
    return (0, i.jsx)(m, {
        sku: n,
        application: e,
        transitionState: a,
        onClose: s,
        hasAlreadyLinked: f,
        canStartAuthorization: h,
        primaryCTAButtonProps: S,
        bodyText: d.intl.formatToPlainString(d.t.PaYE38, { applicationName: e.name }),
        title: d.intl.string(d.t["Bn1J+a"]),
    });
}
function m(t) {
    let {
        sku: n,
        application: e,
        primaryCTAButtonProps: a,
        transitionState: s,
        onClose: r,
        hasAlreadyLinked: c,
        canStartAuthorization: x,
        bodyText: m,
        title: h,
    } = t;
    return (0, i.jsxs)(l.IX, {
        transitionState: s,
        onClose: r,
        children: [
            (0, i.jsx)(u.y, {
                sku: n,
                title: h,
            }),
            (0, i.jsxs)(l.fef, {
                children: [
                    (0, i.jsxs)("div", {
                        className: p.modalBody,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: p.modalBodyText,
                                children: m,
                            }),
                            (0, i.jsx)(f, {
                                isConnected: c,
                                application: e,
                            }),
                        ],
                    }),
                    !x &&
                        !c &&
                        (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: p.cannotLinkAccountWarning,
                            color: "text-feedback-warning",
                            children: d.intl.string(d.t.GDL8wb),
                        }),
                ],
            }),
            (0, i.jsx)(l.Go$, {
                actions: [a],
                actionsFullWidth: !0,
            }),
        ],
    });
}
function f(t) {
    let { isConnected: n, application: e } = t;
    return (0, i.jsx)("div", {
        className: p.statusContainer,
        children: (0, i.jsxs)("div", {
            className: p.statusRow,
            children: [
                (0, i.jsxs)("div", {
                    className: p.statusLeft,
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(p.statusIcon, {
                                [p.statusIconConnected]: n,
                                [p.statusIconDisconnected]: !n,
                            }),
                            children: n
                                ? (0, i.jsx)(o.dz2, {
                                      size: "sm",
                                      color: "currentColor",
                                  })
                                : (0, i.jsx)(o.Dio, {
                                      size: "sm",
                                      color: "currentColor",
                                  }),
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: "text-md/normal",
                            className: p.statusText,
                            color: "text-secondary",
                            children: n ? d.intl.string(d.t["LV+CXH"]) : d.intl.string(d.t.Plv1Xk),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: p.statusRight,
                    children: (0, i.jsx)(c.h, {
                        application: e,
                        iconSize: 20,
                    }),
                }),
            ],
        }),
    });
}
