n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var l = n(934551),
    i = n(158954),
    s = n(827734),
    o = n(49999),
    a = n(985018),
    u = n(538409);
function d(e) {
    let { notificationConfig: t, markAsDismissed: n } = e;
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
                        n(o.i.USER_DISMISS);
                    },
                    icon: l.XLargeIcon,
                }),
            }),
            (0, r.jsx)(l.CircleErrorIcon, { color: s.A.colors.TEXT_FEEDBACK_WARNING, className: u.Kk }),
            (0, r.jsx)(i.EYj, { variant: "text-md/semibold", color: "text-feedback-warning", children: t.title }),
            (0, r.jsx)(i.EYj, { variant: "text-sm/medium", children: t.description }),
        ],
    });
}
