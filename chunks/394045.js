e.d(n, { default: () => f });
var i = e(54381),
    a = e(473749),
    r = e(793030),
    c = e(481060),
    o = e(434404),
    l = e(703656),
    s = e(112612),
    u = e(981631),
    x = e(176505),
    d = e(388032),
    h = e(175109);
let f = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: f, transitionState: p, onConfirm: C } = t,
        {
            submitting: T,
            errorMessage: m,
            onSubmit: k,
        } = (0, s.Z)({
            onSubmit: C,
            onClose: f,
        }),
        b = a.useCallback(() => {
            f(), o.Z.close(), (0, l.uL)(u.Z5c.CHANNEL(n, x.oC.MEMBER_APPLICATIONS));
        }, [n, f]);
    return (0, i.jsxs)(r.Modal, {
        transitionState: p,
        onClose: f,
        title: d.intl.formatToPlainString(d.t.chV4Jb, { count: e }),
        actions: [
            {
                text: d.intl.string(d.t["ETE/oC"]),
                onClick: f,
                variant: "secondary",
            },
            {
                text: d.intl.string(d.t.LW0aUP),
                onClick: k,
                variant: "primary",
                loading: T,
            },
        ],
        children: [
            (0, i.jsx)(c.Text, {
                className: h.descriptionText,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: d.intl.string(d.t.uNQItz),
            }),
            (0, i.jsx)(c.P3F, {
                className: h.actionText,
                onClick: b,
                children: (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: d.intl.string(d.t.szESVF),
                }),
            }),
            null != m &&
                (0, i.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: m,
                }),
        ],
    });
};
