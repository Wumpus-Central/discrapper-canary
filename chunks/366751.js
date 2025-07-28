(n.d(t, { Z: () => u }), n(953529));
var r = n(255367);
n(73800);
var o = n(657707),
    i = n(793030),
    l = n(692547),
    s = n(481060),
    a = n(921944),
    c = n(243821);
function u(e) {
    let { notificationConfig: t, markAsDismissed: n } = e;
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)(s.olH, {
                className: c.close,
                innerClassName: c.innerClose,
                onClick: () => {
                    n(a.L.USER_DISMISS);
                }
            }),
            (0, r.jsx)(o.P4T, {
                color: l.Z.colors.TEXT_FEEDBACK_WARNING,
                className: c.icon
            }),
            (0, r.jsx)(i.xv, {
                variant: 'text-md/semibold',
                color: 'text-feedback-warning',
                children: t.title
            }),
            (0, r.jsx)(i.xv, {
                variant: 'text-sm/medium',
                children: t.description
            })
        ]
    });
}
