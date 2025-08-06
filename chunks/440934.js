t.r(e),
    t.d(e, {
        default: () => f,
        openInteractionModal: () => j,
    });
var i = t(255367);
t(73800);
var r = t(257465),
    a = t(369585),
    s = t(103866),
    o = t(37148),
    l = t(481060),
    c = t(970184),
    u = t(471073),
    d = t(293979),
    p = t(954654),
    b = t(388032),
    m = t(994186);
function f(n) {
    let { title: e, onClose: t, transitionState: f } = n,
        {
            components: j,
            applicationIconURL: x,
            applicationName: g,
            submissionState: h,
            error: y,
            validators: I,
            onSubmit: v,
        } = (0, d.X9)(n, t);
    return (0, i.jsx)("form", {
        onSubmit: (n) => {
            n.preventDefault(), v();
        },
        children: (0, i.jsxs)(r.I, {
            transitionState: f,
            onClose: t,
            children: [
                (0, i.jsx)(o.x, {
                    leading: (0, i.jsx)(l.qEK, {
                        src: x,
                        size: l.EFr.SIZE_24,
                        "aria-label": g,
                        className: m.applicationIcon,
                    }),
                    title: e,
                    titleTextVariant: "heading-xl/semibold",
                }),
                (0, i.jsxs)(s.f, {
                    children: [
                        null != y && "" !== y
                            ? (0, i.jsx)(l.Wn, {
                                  messageType: l.QYI.ERROR,
                                  className: m.submissionWarning,
                                  children: y,
                              })
                            : null,
                        (0, i.jsx)(l.Wn, {
                            messageType: l.QYI.WARNING,
                            className: m.submissionWarning,
                            children: b.intl.format(b.t["dSTy//"], { applicationName: g }),
                        }),
                        (0, i.jsx)(l.hjN, {
                            children: (0, i.jsx)(c.Il, {
                                modal: n,
                                validators: I,
                                children: (0, p.xX)(j),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)(a.G, {
                    actions: [
                        {
                            variant: "secondary",
                            text: b.intl.string(b.t["ETE/oK"]),
                            onClick: t,
                        },
                        {
                            variant: "primary",
                            text: b.intl.string(b.t.geKm7u),
                            loading: h === u.i.IN_FLIGHT,
                            onClick: v,
                        },
                    ],
                }),
            ],
        }),
    });
}
function j(n) {
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
