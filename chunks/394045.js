e.d(n, { default: () => m });
var i = e(200651),
    s = e(192379),
    a = e(481060),
    c = e(313201),
    r = e(434404),
    o = e(703656),
    l = e(112612),
    x = e(981631),
    d = e(176505),
    u = e(388032),
    h = e(367503);
let m = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: m, transitionState: f, onConfirm: b } = t,
        k = (0, c.Dt)(),
        {
            submitting: T,
            errorMessage: z,
            onSubmit: j
        } = (0, l.Z)({
            onSubmit: b,
            onClose: m
        }),
        C = s.useCallback(() => {
            m(), r.Z.close(), (0, o.uL)(x.Z5c.CHANNEL(n, d.oC.MEMBER_APPLICATIONS));
        }, [n, m]);
    return (0, i.jsxs)(a.Y0X, {
        className: h.container,
        transitionState: f,
        'aria-labelledby': k,
        children: [
            (0, i.jsxs)(a.hzk, {
                className: h.content,
                children: [
                    (0, i.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        id: k,
                        children: u.intl.format(u.t.chV4JS, { count: e })
                    }),
                    (0, i.jsx)(a.Text, {
                        className: h.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: u.intl.string(u.t.uNQIt7)
                    }),
                    (0, i.jsx)(a.P3F, {
                        className: h.actionText,
                        onClick: C,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: u.intl.string(u.t.szESVF)
                        })
                    }),
                    null != z &&
                        (0, i.jsx)(a.Text, {
                            className: h.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: z
                        })
                ]
            }),
            (0, i.jsxs)(a.mzw, {
                children: [
                    (0, i.jsx)(a.zxk, {
                        className: h.actionButton,
                        color: a.zxk.Colors.BRAND,
                        submitting: T,
                        onClick: j,
                        size: a.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: u.intl.string(u.t.LW0aUF)
                        })
                    }),
                    (0, i.jsx)(a.zxk, {
                        color: a.zxk.Colors.PRIMARY,
                        onClick: m,
                        size: a.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: u.intl.string(u.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
