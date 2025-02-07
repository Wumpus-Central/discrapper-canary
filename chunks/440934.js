n.r(t),
    n.d(t, {
        default: () => u,
        openInteractionModal: () => p
    });
var i = n(200651);
n(192379);
var o = n(481060),
    a = n(118012),
    r = n(970184),
    _ = n(471073),
    c = n(293979),
    s = n(954654),
    l = n(388032),
    d = n(517753);
function u(e) {
    let { title: t, onClose: n, transitionState: u } = e,
        { components: p, applicationIconURL: I, applicationName: f, submissionState: m, error: S, validators: C, onSubmit: T } = (0, c.X9)(e, n);
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
                        (0, i.jsx)(a.Z, {
                            color: a.Z.Colors.HEADER_PRIMARY,
                            size: a.Z.Sizes.SIZE_24,
                            children: t
                        }),
                        (0, i.jsx)(o.olH, {
                            onClick: n,
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
                            children: l.intl.format(l.t['dSTy//'], { applicationName: f })
                        }),
                        (0, i.jsx)(o.hjN, {
                            children: (0, i.jsx)(r.Il, {
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
                            submitting: m === _.i.IN_FLIGHT,
                            children: l.intl.string(l.t.geKm7u)
                        }),
                        (0, i.jsx)(o.zxk, {
                            look: o.zxk.Looks.LINK,
                            color: o.zxk.Colors.PRIMARY,
                            onClick: n,
                            children: l.intl.string(l.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function p(e) {
    (0, o.h7j)((t) =>
        (0, i.jsx)(u, {
            ...t,
            ...e
        })
    );
}
