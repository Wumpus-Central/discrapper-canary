l.d(t, {
    A: () => d,
}),
    l(228524);
var r = l(627968);
l(64700);
var n = l(934551),
    i = l(158954),
    s = l(827734),
    o = l(49999),
    a = l(985018),
    u = l(538409);

function d(e) {
    let { notificationConfig: t, markAsDismissed: l } = e;
    return (0, r.jsxs)("div", {
        className: u.kL,
        children: [
            (0, r.jsx)("div", {
                className: u.VN,
                children: (0, r.jsx)(i.K0, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": a.intl.string(a.t.cpT0Cq),
                    onClick: () => {
                        l(o.i.USER_DISMISS);
                    },
                    icon: n.XLargeIcon,
                }),
            }),
            (0, r.jsx)(n.CircleErrorIcon, {
                color: s.A.colors.TEXT_FEEDBACK_WARNING,
                className: u.Kk,
            }),
            (0, r.jsx)(i.EYj, {
                variant: "text-md/semibold",
                color: "text-feedback-warning",
                children: t.title,
            }),
            (0, r.jsx)(i.EYj, {
                variant: "text-sm/medium",
                children: t.description,
            }),
        ],
    });
}
