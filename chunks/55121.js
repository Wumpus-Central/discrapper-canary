e.d(n, { M: () => x });
var i = e(951288);
e(647438);
var a = e(120356),
    s = e.n(a),
    o = e(793030),
    r = e(481060),
    l = e(22928),
    c = e(438926),
    u = e(388032),
    d = e(475495);
function x(t) {
    let {
        sku: n,
        application: e,
        primaryCTAButtonProps: a,
        transitionState: s,
        onClose: l,
        hasAlreadyLinked: x,
        canStartAuthorization: p,
        bodyText: m,
        title: g,
    } = t;
    return (0, i.jsxs)(o.IX, {
        transitionState: s,
        onClose: l,
        children: [
            (0, i.jsx)(c.y, {
                sku: n,
                title: g,
            }),
            (0, i.jsxs)(o.fef, {
                children: [
                    (0, i.jsxs)("div", {
                        className: d.modalBody,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                className: d.modalBodyText,
                                children: m,
                            }),
                            (0, i.jsx)(f, {
                                isConnected: x,
                                application: e,
                            }),
                        ],
                    }),
                    !p &&
                        !x &&
                        (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: d.cannotLinkAccountWarning,
                            color: "text-feedback-warning",
                            children: u.intl.string(u.t.GDL8wb),
                        }),
                    !x &&
                        (0, i.jsx)("div", {
                            className: d.expirationWarningContainer,
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: "text-secondary",
                                children: u.intl.formatToPlainString(u.t.TTj7ME, { numDays: 14 }),
                            }),
                        }),
                ],
            }),
            (0, i.jsx)(o.Go$, {
                actions: [a],
                actionsFullWidth: !0,
            }),
        ],
    });
}
function f(t) {
    let { isConnected: n, application: e } = t;
    return (0, i.jsx)("div", {
        className: d.statusContainer,
        children: (0, i.jsxs)("div", {
            className: d.statusRow,
            children: [
                (0, i.jsxs)("div", {
                    className: d.statusLeft,
                    children: [
                        (0, i.jsx)("div", {
                            className: s()(d.statusIcon, {
                                [d.statusIconConnected]: n,
                                [d.statusIconDisconnected]: !n,
                            }),
                            children: n
                                ? (0, i.jsx)(r.dz2, {
                                      size: "sm",
                                      color: "currentColor",
                                  })
                                : (0, i.jsx)(r.Dio, {
                                      size: "sm",
                                      color: "currentColor",
                                  }),
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: d.statusText,
                            color: "text-secondary",
                            children: n ? u.intl.string(u.t["LV+CXH"]) : u.intl.string(u.t.Plv1Xk),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: d.statusRight,
                    children: (0, i.jsx)(l.h, {
                        application: e,
                        iconSize: 20,
                    }),
                }),
            ],
        }),
    });
}
