e.r(n),
    e.d(n, {
        default: function () {
            return p;
        },
        openInteractionModal: function () {
            return S;
        }
    });
var i = e(200651);
e(192379);
var o = e(481060),
    r = e(118012),
    s = e(970184),
    l = e(471073),
    a = e(293979),
    c = e(954654),
    u = e(388032),
    d = e(517753);
function p(t) {
    let { title: n, onClose: e, transitionState: p } = t,
        { components: S, applicationIconURL: I, applicationName: _, submissionState: T, error: C, validators: f, onSubmit: N } = (0, a.X9)(t, e);
    return (0, i.jsx)('form', {
        onSubmit: (t) => {
            t.preventDefault(), N();
        },
        children: (0, i.jsxs)(o.ModalRoot, {
            transitionState: p,
            children: [
                (0, i.jsxs)(o.ModalHeader, {
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.Avatar, {
                            src: I,
                            size: o.AvatarSizes.SIZE_24,
                            'aria-label': _,
                            className: d.applicationIcon
                        }),
                        (0, i.jsx)(r.Z, {
                            color: r.Z.Colors.HEADER_PRIMARY,
                            size: r.Z.Sizes.SIZE_24,
                            children: n
                        }),
                        (0, i.jsx)(o.ModalCloseButton, {
                            onClick: e,
                            className: d.closeButton
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalContent, {
                    children: [
                        null != C && '' !== C
                            ? (0, i.jsx)(o.HelpMessage, {
                                  messageType: o.HelpMessageTypes.ERROR,
                                  className: d.submissionWarning,
                                  children: C
                              })
                            : null,
                        (0, i.jsx)(o.HelpMessage, {
                            messageType: o.HelpMessageTypes.WARNING,
                            className: d.submissionWarning,
                            children: u.intl.format(u.t['dSTy//'], { applicationName: _ })
                        }),
                        (0, i.jsx)(o.FormSection, {
                            children: (0, i.jsx)(s.Il, {
                                modal: t,
                                validators: f,
                                children: (0, c.xX)(S)
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(o.ModalFooter, {
                    children: [
                        (0, i.jsx)(o.Button, {
                            type: 'submit',
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.MEDIUM,
                            submitting: T === l.i.IN_FLIGHT,
                            children: u.intl.string(u.t.geKm7u)
                        }),
                        (0, i.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: e,
                            children: u.intl.string(u.t['ETE/oK'])
                        })
                    ]
                })
            ]
        })
    });
}
function S(t) {
    (0, o.openModal)((n) =>
        (0, i.jsx)(p, {
            ...n,
            ...t
        })
    );
}
