n.d(t, { Z: () => c }), n(953529);
var r = n(54381);
n(473749);
var i = n(657707),
    l = n(793030),
    o = n(692547),
    a = n(921944),
    s = n(388032),
    u = n(695610);
function c(e) {
    let { notificationConfig: t, markAsDismissed: n } = e;
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsx)("div", {
                className: u.close,
                children: (0, r.jsx)(l.hU, {
                    variant: "icon-only",
                    size: "md",
                    "aria-label": s.intl.string(s.t.cpT0Cq),
                    onClick: () => {
                        n(a.L.USER_DISMISS);
                    },
                    icon: i.Uz9,
                }),
            }),
            (0, r.jsx)(i.Mgn, {
                color: o.Z.colors.TEXT_FEEDBACK_WARNING,
                className: u.icon,
            }),
            (0, r.jsx)(l.xvT, {
                variant: "text-md/semibold",
                color: "text-feedback-warning",
                children: t.title,
            }),
            (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                children: t.description,
            }),
        ],
    });
}
