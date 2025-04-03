n.d(e, { default: () => l });
var a = n(200651);
n(192379);
var i = n(481060),
    r = n(313201),
    s = n(112612),
    o = n(388032),
    c = n(367503);
let l = function (t) {
    let { onClose: e, transitionState: n, onSubmit: l } = t,
        {
            submitting: x,
            errorMessage: d,
            onSubmit: u
        } = (0, s.Z)({
            onSubmit: l,
            onClose: e
        }),
        m = (0, r.Dt)();
    return (0, a.jsxs)(i.Y0X, {
        className: c.container,
        transitionState: n,
        'aria-labelledby': m,
        children: [
            (0, a.jsxs)(i.hzk, {
                className: c.content,
                children: [
                    (0, a.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        id: m,
                        children: o.NW.string(o.t.e1ekUl)
                    }),
                    (0, a.jsx)(i.Text, {
                        className: c.manualApprovalDescriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: o.NW.string(o.t.oW7b5O)
                    }),
                    (0, a.jsx)(i.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: o.NW.format(o.t['9Zaa4u'], {})
                    }),
                    null != d &&
                        (0, a.jsx)(i.Text, {
                            className: c.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: d
                        })
                ]
            }),
            (0, a.jsxs)(i.mzw, {
                children: [
                    (0, a.jsx)(i.zxk, {
                        className: c.actionButton,
                        color: i.zxk.Colors.BRAND,
                        submitting: x,
                        onClick: u,
                        size: i.zxk.Sizes.SMALL,
                        children: (0, a.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: o.NW.string(o.t['cY+Ooa'])
                        })
                    }),
                    (0, a.jsx)(i.zxk, {
                        color: i.zxk.Colors.PRIMARY,
                        onClick: e,
                        size: i.zxk.Sizes.SMALL,
                        children: (0, a.jsx)(i.Text, {
                            variant: 'text-sm/semibold',
                            children: o.NW.string(o.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
