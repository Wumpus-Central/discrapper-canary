n.r(t),
    n.d(t, {
        default: () => d,
        openInteractionModal: () => p
    });
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(118012),
    a = n(970184),
    l = n(471073),
    c = n(293979),
    s = n(954654),
    _ = n(388032),
    u = n(994186);
function d(e) {
    let { title: t, onClose: n, transitionState: d } = e,
        { components: p, applicationIconURL: f, applicationName: I, submissionState: m, error: S, validators: C, onSubmit: T } = (0, c.X9)(e, n);
    return (0, i.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), T();
        },
        children: (0, i.jsxs)(o.Y0X, {
            transitionState: d,
            children: [
                (0, i.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.qEK, {
                            src: f,
                            size: o.EFr.SIZE_24,
                            'aria-label': I,
                            className: u.applicationIcon
                        }),
                        (0, i.jsx)(r.Z, {
                            color: r.Z.Colors.HEADER_PRIMARY,
                            size: r.Z.Sizes.SIZE_24,
                            children: t
                        }),
                        (0, i.jsx)(o.olH, {
                            onClick: n,
                            className: u.closeButton
                        })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    children: [
                        null != S && '' !== S
                            ? (0, i.jsx)(o.Wn, {
                                  messageType: o.QYI.ERROR,
                                  className: u.submissionWarning,
                                  children: S
                              })
                            : null,
                        (0, i.jsx)(o.Wn, {
                            messageType: o.QYI.WARNING,
                            className: u.submissionWarning,
                            children: _.NW.format(_.t['dSTy//'], { applicationName: I })
                        }),
                        (0, i.jsx)(o.hjN, {
                            children: (0, i.jsx)(a.Il, {
                                modal: e,
                                validators: C,
                                children: (0, s.xX)(p)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    children: [
                        (0, i.jsx)(o.zxk, {
                            type: 'submit',
                            color: o.zxk.Colors.BRAND,
                            size: o.zxk.Sizes.MEDIUM,
                            submitting: m === l.i.IN_FLIGHT,
                            children: _.NW.string(_.t.geKm7u)
                        }),
                        (0, i.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
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
    (0, o.h7j)((t) =>
        (0, i.jsx)(
            d,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, t, e)
        )
    );
}
