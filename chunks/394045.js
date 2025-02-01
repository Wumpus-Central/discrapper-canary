e.d(n, { default: () => h });
var i = e(200651),
    a = e(192379),
    s = e(481060),
    c = e(313201),
    r = e(434404),
    o = e(703656),
    l = e(112612),
    x = e(981631),
    d = e(176505),
    u = e(388032),
    m = e(916819);
let h = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: h, transitionState: f, onConfirm: b } = t,
        k = (0, c.Dt)(),
        {
            submitting: p,
            errorMessage: T,
            onSubmit: z
        } = (0, l.Z)({
            onSubmit: b,
            onClose: h
        }),
        j = a.useCallback(() => {
            h(), r.Z.close(), (0, o.uL)(x.Z5c.CHANNEL(n, d.oC.MEMBER_APPLICATIONS));
        }, [n, h]);
    return (0, i.jsxs)(s.Y0X, {
        className: m.container,
        transitionState: f,
        'aria-labelledby': k,
        children: [
            (0, i.jsxs)(s.hzk, {
                className: m.content,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/semibold',
                        id: k,
                        children: u.intl.format(u.t.chV4JS, { count: e })
                    }),
                    (0, i.jsx)(s.Text, {
                        className: m.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: u.intl.string(u.t.uNQIt7)
                    }),
                    (0, i.jsx)(s.P3F, {
                        className: m.actionText,
                        onClick: j,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: u.intl.string(u.t.szESVF)
                        })
                    }),
                    null != T &&
                        (0, i.jsx)(s.Text, {
                            className: m.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: T
                        })
                ]
            }),
            (0, i.jsxs)(s.mzw, {
                children: [
                    (0, i.jsx)(s.zxk, {
                        className: m.actionButton,
                        color: s.zxk.Colors.BRAND,
                        submitting: p,
                        onClick: z,
                        size: s.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: u.intl.string(u.t.LW0aUF)
                        })
                    }),
                    (0, i.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        onClick: h,
                        size: s.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: u.intl.string(u.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
