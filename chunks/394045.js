e.d(n, { default: () => h });
var i = e(54381),
    a = e(473749),
    c = e(793030),
    r = e(481060),
    l = e(434404),
    o = e(703656),
    s = e(112612),
    u = e(981631),
    x = e(176505),
    d = e(388032),
    f = e(820954);
let h = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: e, onClose: h, transitionState: p, onConfirm: C } = t,
        {
            submitting: T,
            errorMessage: k,
            onSubmit: m,
        } = (0, s.Z)({
            onSubmit: C,
            onClose: h,
        }),
        b = a.useCallback(() => {
            h(), l.Z.close(), (0, o.uL)(u.Z5c.CHANNEL(n, x.oC.MEMBER_APPLICATIONS));
        }, [n, h]);
    return (0, i.jsxs)(c.Modal, {
        transitionState: p,
        onClose: h,
        title: d.intl.formatToPlainString(d.t.chV4Jb, { count: e }),
        actions: [
            {
                text: d.intl.string(d.t["ETE/oC"]),
                onClick: h,
                variant: "secondary",
            },
            {
                text: d.intl.string(d.t.LW0aUP),
                onClick: m,
                variant: "primary",
                loading: T,
            },
        ],
        children: [
            (0, i.jsx)(r.Text, {
                className: f.descriptionText,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: d.intl.string(d.t.uNQItz),
            }),
            (0, i.jsx)(r.P3F, {
                className: f.actionText,
                onClick: b,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: d.intl.string(d.t.szESVF),
                }),
            }),
            null != k &&
                (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: k,
                }),
        ],
    });
};
