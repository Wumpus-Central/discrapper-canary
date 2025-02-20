n.d(e, { default: () => h });
var i = n(200651),
    a = n(192379),
    s = n(481060),
    c = n(313201),
    r = n(434404),
    o = n(703656),
    l = n(112612),
    x = n(981631),
    d = n(176505),
    u = n(388032),
    m = n(704456);
let h = function (t) {
    let { guildId: e, submittedGuildJoinRequestsCount: n, onClose: h, transitionState: f, onConfirm: b } = t,
        k = (0, c.Dt)(),
        {
            submitting: p,
            errorMessage: N,
            onSubmit: T
        } = (0, l.Z)({
            onSubmit: b,
            onClose: h
        }),
        z = a.useCallback(() => {
            h(), r.Z.close(), (0, o.uL)(x.Z5c.CHANNEL(e, d.oC.MEMBER_APPLICATIONS));
        }, [e, h]);
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
                        children: u.NW.format(u.t.chV4JS, { count: n })
                    }),
                    (0, i.jsx)(s.Text, {
                        className: m.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: u.NW.string(u.t.uNQIt7)
                    }),
                    (0, i.jsx)(s.P3F, {
                        className: m.actionText,
                        onClick: z,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: u.NW.string(u.t.szESVF)
                        })
                    }),
                    null != N &&
                        (0, i.jsx)(s.Text, {
                            className: m.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: N
                        })
                ]
            }),
            (0, i.jsxs)(s.mzw, {
                children: [
                    (0, i.jsx)(s.zxk, {
                        className: m.actionButton,
                        color: s.zxk.Colors.BRAND,
                        submitting: p,
                        onClick: T,
                        size: s.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: u.NW.string(u.t.LW0aUF)
                        })
                    }),
                    (0, i.jsx)(s.zxk, {
                        color: s.zxk.Colors.PRIMARY,
                        onClick: h,
                        size: s.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/semibold',
                            children: u.NW.string(u.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
