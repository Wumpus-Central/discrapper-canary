t.r(n),
    t.d(n, {
        default: () => u,
        openInteractionModal: () => p
    });
var i = t(200651);
t(192379);
var o = t(481060),
    r = t(118012),
    a = t(970184),
    l = t(471073),
    c = t(293979),
    s = t(954654),
    _ = t(388032),
    d = t(845162);
function u(e) {
    let { title: n, onClose: t, transitionState: u } = e,
        { components: p, applicationIconURL: I, applicationName: f, submissionState: m, error: S, validators: C, onSubmit: T } = (0, c.X9)(e, t);
    return (0, i.jsx)('form', {
        onSubmit: (e) => {
            e.preventDefault(), T();
        },
        children: (0, i.jsxs)(o.Y0X, {
            transitionState: u,
            children: [
                (0, i.jsxs)(o.xBx, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.qEK, {
                            src: I,
                            size: o.EFr.SIZE_24,
                            'aria-label': f,
                            className: d.applicationIcon
                        }),
                        (0, i.jsx)(r.Z, {
                            color: r.Z.Colors.HEADER_PRIMARY,
                            size: r.Z.Sizes.SIZE_24,
                            children: n
                        }),
                        (0, i.jsx)(o.olH, {
                            onClick: t,
                            className: d.closeButton
                        })
                    ]
                }),
                (0, i.jsxs)(o.hzk, {
                    children: [
                        null != S && '' !== S
                            ? (0, i.jsx)(o.Wn, {
                                  messageType: o.QYI.ERROR,
                                  className: d.submissionWarning,
                                  children: S
                              })
                            : null,
                        (0, i.jsx)(o.Wn, {
                            messageType: o.QYI.WARNING,
                            className: d.submissionWarning,
                            children: _.intl.format(_.t['dSTy//'], { applicationName: f })
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
                            children: _.intl.string(_.t.geKm7u)
                        }),
                        (0, i.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: t,
                            children: _.intl.string(_.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function p(e) {
    (0, o.h7j)((n) =>
        (0, i.jsx)(u, {
            ...n,
            ...e
        })
    );
}
