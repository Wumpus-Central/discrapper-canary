t.r(e),
    t.d(e, {
        default: () => f,
        openInteractionModal: () => h,
    });
var i = t(255367);
t(73800);
var r = t(257465),
    a = t(369585),
    s = t(103866),
    o = t(37148),
    l = t(481060),
    c = t(970184),
    d = t(471073),
    u = t(293979),
    p = t(954654),
    m = t(388032),
    b = t(721005);
function f(n) {
    let { title: e, onClose: t, transitionState: f } = n,
        {
            components: h,
            applicationIconURL: j,
            applicationName: x,
            submissionState: g,
            error: y,
            validators: I,
            validationErrors: v,
            setValidationErrors: E,
            onSubmit: O,
        } = (0, u.X9)(n, t);
    return (0, i.jsx)("form", {
        onSubmit: (n) => {
            n.preventDefault(), O();
        },
        children: (0, i.jsxs)(r.I, {
            transitionState: f,
            onClose: t,
            children: [
                (0, i.jsx)(o.x, {
                    leading: (0, i.jsx)(l.qEK, {
                        src: j,
                        size: l.EFr.SIZE_24,
                        "aria-label": x,
                        className: b.applicationIcon,
                    }),
                    title: e,
                    titleTextVariant: "heading-xl/semibold",
                }),
                (0, i.jsxs)(s.f, {
                    children: [
                        null != y && "" !== y
                            ? (0, i.jsx)(l.Wn, {
                                  messageType: l.QYI.ERROR,
                                  className: b.submissionWarning,
                                  children: y,
                              })
                            : null,
                        (0, i.jsx)(l.Wn, {
                            messageType: l.QYI.WARNING,
                            className: b.submissionWarning,
                            children: m.intl.format(m.t["dSTy//"], { applicationName: x }),
                        }),
                        (0, i.jsx)(l.hjN, {
                            className: b.components,
                            children: (0, i.jsx)(c.Il, {
                                modal: n,
                                validators: I,
                                validationErrors: v,
                                setValidationErrors: E,
                                children: (0, p.xX)(h),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.G, {
                    actions: [
                        {
                            variant: "secondary",
                            text: m.intl.string(m.t["ETE/oK"]),
                            onClick: t,
                        },
                        {
                            variant: "primary",
                            text: m.intl.string(m.t.geKm7u),
                            loading: g === d.i.IN_FLIGHT,
                            onClick: O,
                        },
                    ],
                    actionsFullWidth: !0,
                }),
            ],
        }),
    });
}
function h(n) {
    (0, l.h7j)((e) =>
        (0, i.jsx)(
            f,
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
    );
}
