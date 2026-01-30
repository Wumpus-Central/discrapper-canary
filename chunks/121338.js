n.r(t),
    n.d(t, {
        default: () => f,
        openInteractionModal: () => m,
    });
var r = n(627968),
    i = n(158954),
    o = n(397927),
    a = n(176634),
    l = n(207963),
    c = n(750128),
    _ = n(969508),
    s = n(520586),
    d = n(818348),
    u = n(985018),
    p = n(308040);

function f(e) {
    let { title: t, onClose: n, transitionState: f } = e,
        {
            components: m,
            applicationIconURL: g,
            applicationName: h,
            submissionState: E,
            error: I,
            validators: b,
            validationErrors: O,
            setValidationErrors: T,
            onSubmit: y,
        } = (0, _.uD)(e, n);
    return (
        (0, a.A)({
            onPasteFiles: d.tE,
            onPasteBackgroundText: d.tE,
        }),
        (0, r.jsx)("form", {
            onSubmit: (e) => {
                e.preventDefault(), y();
            },
            children: (0, r.jsxs)(i.dWK, {
                transitionState: f,
                onClose: n,
                children: [
                    (0, r.jsx)(i.rQ0, {
                        leading: (0, r.jsx)(o.euF, {
                            src: g,
                            size: o._3J.SIZE_24,
                            "aria-label": h,
                            className: p.In,
                        }),
                        title: t,
                        titleTextVariant: "heading-xl/semibold",
                    }),
                    (0, r.jsxs)(i.cwr, {
                        children: [
                            null != I && "" !== I
                                ? (0, r.jsx)(o.po8, {
                                      messageType: o.YCn.ERROR,
                                      className: p.$Q,
                                      children: I,
                                  })
                                : null,
                            (0, r.jsx)(o.po8, {
                                messageType: o.YCn.WARNING,
                                className: p.$Q,
                                children: u.intl.format(u.t["dSTy/w"], {
                                    applicationName: h,
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: p.dK,
                                children: (0, r.jsx)(l.f5, {
                                    modal: e,
                                    validators: b,
                                    validationErrors: O,
                                    setValidationErrors: T,
                                    children: (0, s.fD)(m),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(i.H7u, {
                        actions: [
                            {
                                variant: "secondary",
                                text: u.intl.string(u.t["ETE/oC"]),
                                onClick: n,
                            },
                            {
                                variant: "primary",
                                text: u.intl.string(u.t.geKm7t),
                                loading: E === c.Z.IN_FLIGHT,
                                onClick: y,
                            },
                        ],
                        actionsFullWidth: !0,
                    }),
                ],
            }),
        })
    );
}

function m(e) {
    (0, o.qfG)(
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
