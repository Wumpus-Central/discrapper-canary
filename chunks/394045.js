e.d(n, { default: () => h });
var i = e(255367),
    a = e(73800),
    c = e(82659),
    r = e(481060),
    o = e(434404),
    s = e(703656),
    l = e(112612),
    u = e(981631),
    x = e(176505),
    d = e(388032),
    f = e(367503);
let h = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: h, transitionState: p, onConfirm: T } = t,
        {
            submitting: m,
            errorMessage: C,
            onSubmit: b
        } = (0, l.Z)({
            onSubmit: T,
            onClose: h
        }),
        k = a.useCallback(() => {
            (h(), o.Z.close(), (0, s.uL)(u.Z5c.CHANNEL(n, x.oC.MEMBER_APPLICATIONS)));
        }, [n, h]);
    return (0, i.jsxs)(c.u, {
        transitionState: p,
        onClose: h,
        title: d.intl.formatToPlainString(d.t.chV4JS, { count: e }),
        actions: [
            {
                text: d.intl.string(d.t['ETE/oK']),
                onClick: h,
                variant: 'secondary'
            },
            {
                text: d.intl.string(d.t.LW0aUF),
                onClick: b,
                variant: 'primary',
                loading: m
            }
        ],
        children: [
            (0, i.jsx)(r.Text, {
                className: f.descriptionText,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: d.intl.string(d.t.uNQIt7)
            }),
            (0, i.jsx)(r.P3F, {
                className: f.actionText,
                onClick: k,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-link',
                    children: d.intl.string(d.t.szESVF)
                })
            }),
            null != C &&
                (0, i.jsx)(r.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    children: C
                })
        ]
    });
};
