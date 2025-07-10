e.d(n, { default: () => m });
var i = e(255367),
    a = e(73800),
    r = e(481060),
    s = e(313201),
    c = e(434404),
    l = e(703656),
    o = e(112612),
    d = e(981631),
    x = e(176505),
    u = e(388032),
    h = e(367503);
let m = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: m, transitionState: f, onConfirm: p } = t,
        b = (0, s.Dt)(),
        {
            submitting: k,
            errorMessage: j,
            onSubmit: T
        } = (0, o.Z)({
            onSubmit: p,
            onClose: m
        }),
        C = a.useCallback(() => {
            (m(), c.Z.close(), (0, l.uL)(d.Z5c.CHANNEL(n, x.oC.MEMBER_APPLICATIONS)));
        }, [n, m]);
    return (0, i.jsxs)(r.Y0X, {
        className: h.container,
        transitionState: f,
        'aria-labelledby': b,
        parentComponent: 'EditQuestionWarningModal',
        children: [
            (0, i.jsxs)(r.hzk, {
                className: h.content,
                children: [
                    (0, i.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        id: b,
                        children: u.intl.format(u.t.chV4JS, { count: e })
                    }),
                    (0, i.jsx)(r.Text, {
                        className: h.descriptionText,
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: u.intl.string(u.t.uNQIt7)
                    }),
                    (0, i.jsx)(r.P3F, {
                        className: h.actionText,
                        onClick: C,
                        children: (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: u.intl.string(u.t.szESVF)
                        })
                    }),
                    null != j &&
                        (0, i.jsx)(r.Text, {
                            className: h.__invalid_errorText,
                            variant: 'text-xs/normal',
                            color: 'text-danger',
                            children: j
                        })
                ]
            }),
            (0, i.jsx)(r.mzw, {
                children: (0, i.jsxs)(r.hE2, {
                    size: 'sm',
                    justify: 'end',
                    children: [
                        (0, i.jsx)(r.zxk, {
                            variant: 'secondary',
                            onClick: m,
                            text: u.intl.string(u.t['ETE/oK'])
                        }),
                        (0, i.jsx)(r.zxk, {
                            variant: 'primary',
                            onClick: T,
                            loading: k,
                            text: u.intl.string(u.t.LW0aUF)
                        })
                    ]
                })
            })
        ]
    });
};
