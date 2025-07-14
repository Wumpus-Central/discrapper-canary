(t.r(n),
    t.d(n, {
        default: () => d,
        openInteractionModal: () => u
    }));
var o = t(255367);
t(73800);
var i = t(481060),
    r = t(970184),
    a = t(471073),
    c = t(293979),
    l = t(954654),
    _ = t(388032),
    s = t(994186);
function d(e) {
    let { title: n, onClose: t, transitionState: d } = e,
        { components: u, applicationIconURL: m, applicationName: f, submissionState: p, error: b, validators: h, onSubmit: I } = (0, c.X9)(e, t);
    return (0, o.jsx)('form', {
        onSubmit: (e) => {
            (e.preventDefault(), I());
        },
        children: (0, o.jsxs)(i.Y0X, {
            transitionState: d,
            parentComponent: 'InteractionModal',
            children: [
                (0, o.jsxs)(i.xBx, {
                    separator: !1,
                    children: [
                        (0, o.jsx)(i.qEK, {
                            src: m,
                            size: i.EFr.SIZE_24,
                            'aria-label': f,
                            className: s.applicationIcon
                        }),
                        (0, o.jsx)(i.X6q, {
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            children: n
                        }),
                        (0, o.jsx)(i.olH, {
                            onClick: t,
                            className: s.closeButton
                        })
                    ]
                }),
                (0, o.jsxs)(i.hzk, {
                    children: [
                        null != b && '' !== b
                            ? (0, o.jsx)(i.Wn, {
                                  messageType: i.QYI.ERROR,
                                  className: s.submissionWarning,
                                  children: b
                              })
                            : null,
                        (0, o.jsx)(i.Wn, {
                            messageType: i.QYI.WARNING,
                            className: s.submissionWarning,
                            children: _.intl.format(_.t['dSTy//'], { applicationName: f })
                        }),
                        (0, o.jsx)(i.hjN, {
                            children: (0, o.jsx)(r.Il, {
                                modal: e,
                                validators: h,
                                children: (0, l.xX)(u)
                            })
                        })
                    ]
                }),
                (0, o.jsx)(i.mzw, {
                    children: (0, o.jsxs)(i.hE2, {
                        direction: 'horizontal-reverse',
                        children: [
                            (0, o.jsx)(i.zxk, {
                                variant: 'primary',
                                text: _.intl.string(_.t.geKm7u),
                                type: 'submit',
                                loading: p === a.i.IN_FLIGHT
                            }),
                            (0, o.jsx)(i.zxk, {
                                variant: 'secondary',
                                text: _.intl.string(_.t['ETE/oK']),
                                type: 'button',
                                onClick: t
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function u(e) {
    (0, i.h7j)((n) =>
        (0, o.jsx)(
            d,
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
