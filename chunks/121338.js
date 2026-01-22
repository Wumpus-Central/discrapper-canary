n.r(t),
    n.d(t, {
        default: () => f,
        openInteractionModal: () => p,
    });
var r = n(627968),
    a = n(158954),
    i = n(397927),
    s = n(207963),
    l = n(750128),
    o = n(969508),
    c = n(520586),
    d = n(985018),
    u = n(308040);

function f(e) {
    let { title: t, onClose: n, transitionState: f } = e,
        {
            components: p,
            applicationIconURL: m,
            applicationName: x,
            submissionState: b,
            error: h,
            validators: j,
            validationErrors: y,
            setValidationErrors: g,
            onSubmit: v,
        } = (0, o.uD)(e, n);
    return (0, r.jsx)("form", {
        onSubmit: (e) => {
            e.preventDefault(), v();
        },
        children: (0, r.jsxs)(a.dWK, {
            transitionState: f,
            onClose: n,
            children: [
                (0, r.jsx)(a.rQ0, {
                    leading: (0, r.jsx)(i.euF, {
                        src: m,
                        size: i._3J.SIZE_24,
                        "aria-label": x,
                        className: u.In,
                    }),
                    title: t,
                    titleTextVariant: "heading-xl/semibold",
                }),
                (0, r.jsxs)(a.cwr, {
                    children: [
                        null != h && "" !== h
                            ? (0, r.jsx)(i.po8, {
                                  messageType: i.YCn.ERROR,
                                  className: u.$Q,
                                  children: h,
                              })
                            : null,
                        (0, r.jsx)(i.po8, {
                            messageType: i.YCn.WARNING,
                            className: u.$Q,
                            children: d.intl.format(d.t["dSTy/w"], {
                                applicationName: x,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: u.dK,
                            children: (0, r.jsx)(s.f5, {
                                modal: e,
                                validators: j,
                                validationErrors: y,
                                setValidationErrors: g,
                                children: (0, c.fD)(p),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(a.H7u, {
                    actions: [
                        {
                            variant: "secondary",
                            text: d.intl.string(d.t["ETE/oC"]),
                            onClick: n,
                        },
                        {
                            variant: "primary",
                            text: d.intl.string(d.t.geKm7t),
                            loading: b === l.Z.IN_FLIGHT,
                            onClick: v,
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        }),
    });
}

function p(e) {
    (0, i.qfG)(
        (t) =>
            (0, r.jsx)(
                f,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, t, e),
            ),
        {
            stackNextByDefault: !0,
        },
    );
}
