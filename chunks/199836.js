e.r(n);
var a = e(200651);
e(192379);
var i = e(481060),
    o = e(313201),
    r = e(112612),
    s = e(388032),
    l = e(916819);
n.default = function (t) {
    let { onClose: n, transitionState: e, onSubmit: c } = t,
        {
            submitting: d,
            errorMessage: u,
            onSubmit: x
        } = (0, r.Z)({
            onSubmit: c,
            onClose: n
        }),
        f = (0, o.Dt)();
    return (0, a.jsxs)(i.ModalRoot, {
        className: l.container,
        transitionState: e,
        'aria-labelledby': f,
        children: [
            (0, a.jsxs)(i.ModalContent, {
                className: l.content,
                children: [
                    (0, a.jsx)(i.Heading, {
                        variant: 'heading-md/semibold',
                        id: f,
                        children: s.intl.string(s.t.e1ekUl)
                    }),
                    (0, a.jsx)(i.Text, {
                        className: l.manualApprovalDescriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: s.intl.string(s.t.oW7b5O)
                    }),
                    (0, a.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: s.intl.format(s.t['9Zaa4u'], {})
                    }),
                    null != u &&
                        (0, a.jsx)(i.Text, {
                            className: l.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: u
                        })
                ]
            }),
            (0, a.jsxs)(i.ModalFooter, {
                children: [
                    (0, a.jsx)(i.Button, {
                        className: l.actionButton,
                        color: i.Button.Colors.BRAND,
                        submitting: d,
                        onClick: x,
                        size: i.Button.Sizes.SMALL,
                        children: (0, a.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: s.intl.string(s.t['cY+Ooa'])
                        })
                    }),
                    (0, a.jsx)(i.Button, {
                        color: i.Button.Colors.PRIMARY,
                        onClick: n,
                        size: i.Button.Sizes.SMALL,
                        children: (0, a.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: s.intl.string(s.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
