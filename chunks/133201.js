e.d(n, {
    Z: () => p,
    q: () => C,
});
var i = e(951288);
e(647438);
var a = e(120356),
    s = e.n(a),
    o = e(793030),
    l = e(481060),
    r = e(20471),
    c = e(22928),
    u = e(388032),
    d = e(261540);
function p(t) {
    let {
            sku: n,
            application: e,
            transitionState: a,
            onClose: s,
            successStateButtonText: c,
            onSuccessButtonClick: p,
            isSuccessButtonLoading: f,
        } = t,
        { hasAlreadyLinked: C, canStartAuthorization: m, startAuthorization: h, fetched: _ } = (0, r.FG)(e);
    if (!_)
        return (0, i.jsx)(o.IX, {
            transitionState: a,
            onClose: s,
            children: (0, i.jsx)(o.fef, {
                children: (0, i.jsx)("div", {
                    className: d.loadingContainer,
                    children: (0, i.jsx)(l.$jN, {}),
                }),
            }),
        });
    let I = C
        ? {
              variant: "primary",
              text: c,
              onClick: p,
              loading: f,
          }
        : {
              variant: "primary",
              text: u.intl.string(u.t.VDAhr6),
              onClick: h,
              icon: o.uIJ,
              disabled: !m,
          };
    return (0, i.jsx)(x, {
        sku: n,
        application: e,
        transitionState: a,
        onClose: s,
        hasAlreadyLinked: C,
        canStartAuthorization: m,
        primaryCTAButtonProps: I,
        bodyText: u.intl.formatToPlainString(u.t.PaYE39, { applicationName: e.name }),
        title: u.intl.string(u.t["Bn1J+f"]),
    });
}
function x(t) {
    let {
        sku: n,
        application: e,
        primaryCTAButtonProps: a,
        transitionState: s,
        onClose: r,
        hasAlreadyLinked: c,
        canStartAuthorization: p,
        bodyText: x,
        title: C,
    } = t;
    return (0, i.jsxs)(o.IX, {
        transitionState: s,
        onClose: r,
        children: [
            (0, i.jsx)(m, {
                sku: n,
                title: C,
            }),
            (0, i.jsxs)(o.fef, {
                children: [
                    (0, i.jsxs)("div", {
                        className: d.modalBody,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                className: d.modalBodyText,
                                children: x,
                            }),
                            (0, i.jsx)(f, {
                                isConnected: c,
                                application: e,
                            }),
                        ],
                    }),
                    !p &&
                        !c &&
                        (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: d.cannotLinkAccountWarning,
                            color: "text-feedback-warning",
                            children: u.intl.string(u.t.GDL8wc),
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
                                ? (0, i.jsx)(l.dz2, {
                                      size: "sm",
                                      color: "currentColor",
                                  })
                                : (0, i.jsx)(l.Dio, {
                                      size: "sm",
                                      color: "currentColor",
                                  }),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: d.statusText,
                            color: "text-secondary",
                            children: n ? u.intl.string(u.t["LV+CXF"]) : u.intl.string(u.t.Plv1Xl),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: d.statusRight,
                    children: (0, i.jsx)(c.h, {
                        application: e,
                        iconSize: 20,
                    }),
                }),
            ],
        }),
    });
}
function C(t) {
    let { transitionState: n, onClose: e, sku: a, application: s } = t,
        r = [
            {
                variant: "primary",
                text: "Play ".concat(s.name),
                onClick: () => {},
                icon: o.rgF,
            },
        ];
    return (0, i.jsxs)(o.IX, {
        transitionState: n,
        onClose: e,
        children: [
            (0, i.jsx)(m, {
                sku: a,
                title: u.intl.string(u.t["5glWtb"]),
            }),
            (0, i.jsx)(o.fef, {
                children: (0, i.jsx)(l.Text, {
                    variant: "text-md/normal",
                    className: d.modalBodyText,
                    children: u.intl.formatToPlainString(u.t.W2znvb, {
                        skuName: a.name,
                        applicationName: s.name,
                    }),
                }),
            }),
            (0, i.jsx)(o.Go$, {
                actions: r,
                actionsFullWidth: !0,
            }),
        ],
    });
}
function m(t) {
    let { sku: n, title: e } = t;
    return (0, i.jsx)(o.xBx, {
        alignCenter: !0,
        title: e,
        gradientColor: "purple",
        graphic: {
            type: "dynamic",
            component: l.AX$.SOCIAL_LAYER_GIFT_SUCCESS,
            aspectRatio: "16/9",
            props: { sku: n },
        },
    });
}
