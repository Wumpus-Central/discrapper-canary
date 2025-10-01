t.r(e),
    t.d(e, {
        default: () => p,
        openInteractionModal: () => m,
    });
var i = t(951288);
t(647438);
var a = t(793030),
    r = t(481060),
    s = t(970184),
    o = t(471073),
    l = t(293979),
    c = t(954654),
    d = t(388032),
    u = t(620309);
function p(n) {
    let { title: e, onClose: t, transitionState: p } = n,
        {
            components: m,
            applicationIconURL: f,
            applicationName: b,
            submissionState: x,
            error: h,
            validators: j,
            validationErrors: g,
            setValidationErrors: y,
            onSubmit: I,
        } = (0, l.X9)(n, t);
    return (0, i.jsx)("form", {
        onSubmit: (n) => {
            n.preventDefault(), I();
        },
        children: (0, i.jsxs)(a.IX, {
            transitionState: p,
            onClose: t,
            children: [
                (0, i.jsx)(a.xBx, {
                    leading: (0, i.jsx)(r.qEK, {
                        src: f,
                        size: r.EFr.SIZE_24,
                        "aria-label": b,
                        className: u.applicationIcon,
                    }),
                    title: e,
                    titleTextVariant: "heading-xl/semibold",
                }),
                (0, i.jsxs)(a.fef, {
                    children: [
                        null != h && "" !== h
                            ? (0, i.jsx)(r.Wn, {
                                  messageType: r.QYI.ERROR,
                                  className: u.submissionWarning,
                                  children: h,
                              })
                            : null,
                        (0, i.jsx)(r.Wn, {
                            messageType: r.QYI.WARNING,
                            className: u.submissionWarning,
                            children: d.intl.format(d.t["dSTy//"], { applicationName: b }),
                        }),
                        (0, i.jsx)(r.hjN, {
                            className: u.components,
                            children: (0, i.jsx)(s.Il, {
                                modal: n,
                                validators: j,
                                validationErrors: g,
                                setValidationErrors: y,
                                children: (0, c.xX)(m),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.Go$, {
                    actions: [
                        {
                            variant: "secondary",
                            text: d.intl.string(d.t["ETE/oK"]),
                            onClick: t,
                        },
                        {
                            variant: "primary",
                            text: d.intl.string(d.t.geKm7u),
                            loading: x === o.i.IN_FLIGHT,
                            onClick: I,
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        }),
    });
}
function m(n) {
    (0, r.h7j)(
        (e) =>
            (0, i.jsx)(
                p,
                (function (n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (n) {
                                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                                }),
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = t[e]),
                                    e in n
                                        ? Object.defineProperty(n, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (n[e] = i);
                            });
                    }
                    return n;
                })({}, e, n),
            ),
        { stackNextByDefault: !0 },
    );
}
