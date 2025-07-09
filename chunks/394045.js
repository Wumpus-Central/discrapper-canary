e.d(n, { default: () => f });
var i = e(255367),
    a = e(73800),
    s = e(755721),
    c = e(481060),
    o = e(313201),
    r = e(434404),
    l = e(703656),
    x = e(112612),
    d = e(981631),
    u = e(176505),
    m = e(388032),
    h = e(367503);
let f = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: f, transitionState: b, onConfirm: T } = t,
        p = (0, o.Dt)(),
        {
            submitting: z,
            errorMessage: C,
            onSubmit: j
        } = (0, x.Z)({
            onSubmit: T,
            onClose: f
        }),
        S = a.useCallback(() => {
            (f(), r.Z.close(), (0, l.uL)(d.Z5c.CHANNEL(n, u.oC.MEMBER_APPLICATIONS)));
        }, [n, f]);
    return (0, i.jsxs)(c.Y0X, {
        className: h.container,
        transitionState: b,
        'aria-labelledby': p,
        parentComponent: 'EditQuestionWarningModal',
        children: [
            (0, i.jsxs)(c.hzk, {
                className: h.content,
                children: [
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        id: p,
                        children: m.intl.format(m.t.chV4JS, { count: e })
                    }),
                    (0, i.jsx)(c.Text, {
                        className: h.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: m.intl.string(m.t.uNQIt7)
                    }),
                    (0, i.jsx)(c.P3F, {
                        className: h.actionText,
                        onClick: S,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: m.intl.string(m.t.szESVF)
                        })
                    }),
                    null != C &&
                        (0, i.jsx)(c.Text, {
                            className: h.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: C
                        })
                ]
            }),
            (0, i.jsxs)(c.mzw, {
                children: [
                    (0, i.jsx)(s.zx, {
                        className: h.actionButton,
                        color: s.zx.Colors.BRAND,
                        submitting: z,
                        onClick: j,
                        size: s.zx.Sizes.SMALL,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t.LW0aUF)
                        })
                    }),
                    (0, i.jsx)(s.zx, {
                        color: s.zx.Colors.PRIMARY,
                        onClick: f,
                        size: s.zx.Sizes.SMALL,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-sm/semibold',
                            children: m.intl.string(m.t['ETE/oK'])
                        })
                    })
                ]
            })
        ]
    });
};
