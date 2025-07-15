(t.r(n),
    t.d(n, {
        default: () => p,
        openInteractionModal: () => b
    }));
var o = t(255367);
t(73800);
var i = t(257465),
    r = t(369585),
    a = t(103866),
    c = t(37148),
    l = t(481060),
    _ = t(970184),
    s = t(471073),
    d = t(293979),
    u = t(954654),
    m = t(388032),
    f = t(994186);
function p(e) {
    let { title: n, onClose: t, transitionState: p } = e,
        { components: b, applicationIconURL: I, applicationName: h, submissionState: x, error: g, validators: C, onSubmit: y } = (0, d.X9)(e, t);
    return (0, o.jsx)('form', {
        onSubmit: (e) => {
            (e.preventDefault(), y());
        },
        children: (0, o.jsxs)(i.IX, {
            transitionState: p,
            onClose: t,
            children: [
                (0, o.jsx)(c.x, {
                    leading: (0, o.jsx)(l.qEK, {
                        src: I,
                        size: l.EFr.SIZE_24,
                        'aria-label': h,
                        className: f.applicationIcon
                    }),
                    title: n,
                    titleTextVariant: 'heading-xl/semibold'
                }),
                (0, o.jsxs)(a.f, {
                    children: [
                        null != g && '' !== g
                            ? (0, o.jsx)(l.Wn, {
                                  messageType: l.QYI.ERROR,
                                  className: f.submissionWarning,
                                  children: g
                              })
                            : null,
                        (0, o.jsx)(l.Wn, {
                            messageType: l.QYI.WARNING,
                            className: f.submissionWarning,
                            children: m.intl.format(m.t['dSTy//'], { applicationName: h })
                        }),
                        (0, o.jsx)(l.hjN, {
                            children: (0, o.jsx)(_.Il, {
                                modal: e,
                                validators: C,
                                children: (0, u.xX)(b)
                            })
                        })
                    ]
                }),
                (0, o.jsx)(r.G, {
                    actions: [
                        {
                            variant: 'secondary',
                            text: m.intl.string(m.t['ETE/oK']),
                            onClick: t
                        },
                        {
                            variant: 'primary',
                            text: m.intl.string(m.t.geKm7u),
                            loading: x === s.i.IN_FLIGHT,
                            onClick: y
                        }
                    ]
                })
            ]
        })
    });
}
function b(e) {
    (0, l.h7j)((n) =>
        (0, o.jsx)(
            p,
            (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(t);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        o.forEach(function (n) {
                            var o;
                            ((o = t[n]),
                                n in e
                                    ? Object.defineProperty(e, n, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[n] = o));
                        }));
                }
                return e;
            })({}, n, e)
        )
    );
}
