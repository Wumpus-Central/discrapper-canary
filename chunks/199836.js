e.d(n, { default: () => l });
var i = e(200651);
e(192379);
var a = e(481060),
    r = e(313201),
    s = e(112612),
    o = e(388032),
    c = e(937413);
let l = function (t) {
    let { onClose: n, transitionState: e, onSubmit: l } = t,
        {
            submitting: x,
            errorMessage: d,
            onSubmit: u
        } = (0, s.Z)({
            onSubmit: l,
            onClose: n
        }),
        m = (0, r.Dt)();
    return (0, i.jsxs)(a.Y0X, {
        className: c.container,
        transitionState: e,
        'aria-labelledby': m,
        children: [
            (0, i.jsxs)(a.hzk, {
                className: c.content,
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        id: m,
                        children: o.intl.string(o.t.e1ekUl)
                    }),
                    (0, i.jsx)(a.Text, {
                        className: c.manualApprovalDescriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: o.intl.string(o.t.oW7b5O)
                    }),
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: o.intl.format(o.t['9Zaa4u'], {})
                    }),
                    null != d &&
                        (0, i.jsx)(a.Text, {
                            className: c.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: d
                        })
                ]
            }),
            (0, i.jsxs)(a.mzw, {
                children: [
                    (0, i.jsx)(a.zxk, {
                        className: c.actionButton,
                        color: a.zxk.Colors.BRAND,
                        submitting: x,
                        onClick: u,
                        size: a.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: o.intl.string(o.t['cY+Ooa'])
                        })
                    }),
                    (0, i.jsx)(a.zxk, {
                        color: a.zxk.Colors.PRIMARY,
                        onClick: n,
                        size: a.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: o.intl.string(o.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
