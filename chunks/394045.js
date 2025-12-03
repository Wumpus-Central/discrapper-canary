i.d(n, { default: () => h });
var e = i(54381),
    a = i(473749),
    c = i(793030),
    l = i(481060),
    r = i(434404),
    o = i(703656),
    s = i(112612),
    u = i(981631),
    x = i(176505),
    d = i(388032),
    f = i(820954);
let h = function (t) {
    let { guildId: n, submittedGuildJoinRequestsCount: i, onClose: h, transitionState: p, onConfirm: C } = t,
        {
            submitting: T,
            errorMessage: k,
            onSubmit: m,
        } = (0, s.Z)({
            onSubmit: C,
            onClose: h,
        }),
        b = a.useCallback(() => {
            h(), r.Z.close(), (0, o.uL)(u.Z5c.CHANNEL(n, x.oC.MEMBER_APPLICATIONS));
        }, [n, h]);
    return (0, e.jsxs)(c.Modal, {
        transitionState: p,
        onClose: h,
        title: d.intl.formatToPlainString(d.t.chV4Jb, { count: i }),
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
            (0, e.jsx)(l.Text, {
                className: f.descriptionText,
                color: "text-default",
                variant: "text-sm/normal",
                children: d.intl.string(d.t.uNQItz),
            }),
            (0, e.jsx)(l.P3F, {
                className: f.actionText,
                onClick: b,
                children: (0, e.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-link",
                    children: d.intl.string(d.t.szESVF),
                }),
            }),
            null != k &&
                (0, e.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    children: k,
                }),
        ],
    });
};
