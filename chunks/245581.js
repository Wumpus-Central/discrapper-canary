n.d(t, { Z: () => a });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(313201),
    u = n(268999);
function a(e) {
    let { transitionState: t, title: n, subtitle: a, children: s } = e,
        c = (0, i.Dt)();
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        'aria-labelledby': c,
        parentComponent: 'SecureFramesVerificationModal',
        children: [
            (0, r.jsx)('div', {
                className: u.shieldIconContainer,
                children: (0, r.jsx)('div', {
                    className: u.shieldIcon,
                    children: (0, r.jsx)(l.tQf, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: l.TVs.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, r.jsxs)(l.hzk, {
                className: u.content,
                children: [
                    (0, r.jsx)(l.X6q, {
                        className: u.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, r.jsx)(l.Text, {
                        className: u.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: a
                    }),
                    s
                ]
            })
        ]
    });
}
