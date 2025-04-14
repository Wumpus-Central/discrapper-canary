r.d(t, { Z: () => s });
var n = r(200651);
r(192379);
var l = r(481060),
    i = r(313201),
    u = r(268999);
function s(e) {
    let { transitionState: t, title: r, subtitle: s, children: a } = e,
        o = (0, i.Dt)();
    return (0, n.jsxs)(l.Y0X, {
        transitionState: t,
        'aria-labelledby': o,
        children: [
            (0, n.jsx)('div', {
                className: u.shieldIconContainer,
                children: (0, n.jsx)('div', {
                    className: u.shieldIcon,
                    children: (0, n.jsx)(l.tQf, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: l.TVs.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, n.jsxs)(l.hzk, {
                className: u.content,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: u.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: r
                    }),
                    (0, n.jsx)(l.Text, {
                        className: u.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: s
                    }),
                    a
                ]
            })
        ]
    });
}
