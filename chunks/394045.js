n.d(e, { default: () => m });
var i = n(200651),
    s = n(192379),
    a = n(481060),
    c = n(313201),
    r = n(434404),
    o = n(703656),
    l = n(112612),
    x = n(981631),
    d = n(176505),
    u = n(388032),
    h = n(302797);
let m = function (t) {
    let { guildId: e, submittedGuildJoinRequestsCount: n, onClose: m, transitionState: f, onConfirm: b } = t,
        k = (0, c.Dt)(),
        {
            submitting: N,
            errorMessage: T,
            onSubmit: z
        } = (0, l.Z)({
            onSubmit: b,
            onClose: m
        }),
        j = s.useCallback(() => {
            m(), r.Z.close(), (0, o.uL)(x.Z5c.CHANNEL(e, d.oC.MEMBER_APPLICATIONS));
        }, [e, m]);
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
                        children: u.NW.format(u.t.chV4JS, { count: n })
                    }),
                    (0, i.jsx)(a.Text, {
                        className: h.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: u.NW.string(u.t.uNQIt7)
                    }),
                    (0, i.jsx)(a.P3F, {
                        className: h.actionText,
                        onClick: j,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: u.NW.string(u.t.szESVF)
                        })
                    }),
                    null != T &&
                        (0, i.jsx)(a.Text, {
                            className: h.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: T
                        })
                ]
            }),
            (0, i.jsxs)(a.mzw, {
                children: [
                    (0, i.jsx)(a.zxk, {
                        className: h.actionButton,
                        color: a.zxk.Colors.BRAND,
                        submitting: N,
                        onClick: z,
                        size: a.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: u.NW.string(u.t.LW0aUF)
                        })
                    }),
                    (0, i.jsx)(a.zxk, {
                        color: a.zxk.Colors.PRIMARY,
                        onClick: m,
                        size: a.zxk.Sizes.SMALL,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/semibold',
                            children: u.NW.string(u.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
