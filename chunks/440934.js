n.r(t),
    n.d(t, {
        default: () => d,
        openInteractionModal: () => p
    });
var o = n(200651);
n(192379);
var i = n(481060),
    r = n(118012),
    a = n(970184),
    l = n(471073),
    c = n(293979),
    s = n(954654),
    _ = n(388032),
    u = n(676373);
function d(e) {
    let { title: t, onClose: n, transitionState: d } = e,
        { components: p, applicationIconURL: f, applicationName: I, submissionState: m, error: S, validators: b, onSubmit: C } = (0, c.X9)(e, n);
    return (0, o.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), C();
        },
        children: (0, o.jsxs)(i.Y0X, {
            transitionState: d,
            children: [
                (0, o.jsxs)(i.xBx, {
                    separator: !1,
                    children: [
                        (0, o.jsx)(i.qEK, {
                            src: f,
                            size: i.EFr.SIZE_24,
                            'aria-label': I,
                            className: u.applicationIcon
                        }),
                        (0, o.jsx)(r.Z, {
                            color: r.Z.Colors.HEADER_PRIMARY,
                            size: r.Z.Sizes.SIZE_24,
                            children: t
                        }),
                        (0, o.jsx)(i.olH, {
                            onClick: n,
                            className: u.closeButton
                        })
                    ]
                }),
                (0, o.jsxs)(i.hzk, {
                    children: [
                        null != S && '' !== S
                            ? (0, o.jsx)(i.Wn, {
                                  messageType: i.QYI.ERROR,
                                  className: u.submissionWarning,
                                  children: S
                              })
                            : null,
                        (0, o.jsx)(i.Wn, {
                            messageType: i.QYI.WARNING,
                            className: u.submissionWarning,
                            children: _.NW.format(_.t['dSTy//'], { applicationName: I })
                        }),
                        (0, o.jsx)(i.hjN, {
                            children: (0, o.jsx)(a.Il, {
                                modal: e,
                                validators: b,
                                children: (0, s.xX)(p)
                            })
                        })
                    ]
                }),
                (0, o.jsxs)(i.mzw, {
                    children: [
                        (0, o.jsx)(i.zxk, {
                            type: 'submit',
                            color: i.zxk.Colors.BRAND,
                            size: i.zxk.Sizes.MEDIUM,
                            submitting: m === l.i.IN_FLIGHT,
                            children: _.NW.string(_.t.geKm7u)
                        }),
                        (0, o.jsx)(i.zxk, {
                            look: i.zxk.Looks.LINK,
                            color: i.zxk.Colors.PRIMARY,
                            onClick: n,
                            children: _.NW.string(_.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function p(e) {
    (0, i.h7j)((t) =>
        (0, o.jsx)(
            d,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        o = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        o.forEach(function (t) {
                            var o;
                            (o = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: o,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = o);
                        });
                }
                return e;
            })({}, t, e)
        )
    );
}
