r.d(t, { Z: () => l });
var n = r(255367);
r(73800);
var o = r(481060),
    c = r(313201),
    i = r(268999);
function l(e) {
    let { transitionState: t, title: r, subtitle: l, children: s } = e,
        a = (0, c.Dt)();
    return (0, n.jsxs)(o.Y0X, {
        transitionState: t,
        'aria-labelledby': a,
        parentComponent: 'SecureFramesVerificationModal',
        children: [
            (0, n.jsx)('div', {
                className: i.shieldIconContainer,
                children: (0, n.jsx)('div', {
                    className: i.shieldIcon,
                    children: (0, n.jsx)(o.tQf, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: o.TVs.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, n.jsxs)(o.hzk, {
                className: i.content,
                children: [
                    (0, n.jsx)(o.X6q, {
                        className: i.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: r
                    }),
                    (0, n.jsx)(o.Text, {
                        className: i.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: l
                    }),
                    s
                ]
            })
        ]
    });
}
