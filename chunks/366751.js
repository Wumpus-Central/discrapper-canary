n.d(t, { Z: () => u }), n(953529);
var r = n(951288);
n(647438);
var i = n(657707),
    o = n(793030),
    s = n(692547),
    l = n(481060),
    a = n(921944),
    c = n(695610);
function u(e) {
    let { notificationConfig: t, markAsDismissed: n } = e;
    return (0, r.jsxs)("div", {
        className: c.container,
        children: [
            (0, r.jsx)(l.olH, {
                className: c.close,
                innerClassName: c.innerClose,
                onClick: () => {
                    n(a.L.USER_DISMISS);
                },
            }),
            (0, r.jsx)(i.Mgn, {
                color: s.Z.colors.TEXT_FEEDBACK_WARNING,
                className: c.icon,
            }),
            (0, r.jsx)(o.xvT, {
                variant: "text-md/semibold",
                color: "text-feedback-warning",
                children: t.title,
            }),
            (0, r.jsx)(o.xvT, {
                variant: "text-sm/medium",
                children: t.description,
            }),
        ],
    });
}
