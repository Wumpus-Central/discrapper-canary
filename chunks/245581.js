n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var o = n(481060),
    c = n(313201),
    i = n(268999);
function l(e) {
    let { transitionState: t, title: n, subtitle: l, children: s } = e,
        a = (0, c.Dt)();
    return (0, r.jsxs)(o.Y0X, {
        transitionState: t,
        'aria-labelledby': a,
        children: [
            (0, r.jsx)('div', {
                className: i.shieldIconContainer,
                children: (0, r.jsx)('div', {
                    className: i.shieldIcon,
                    children: (0, r.jsx)(o.tQf, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: o.TVs.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, r.jsxs)(o.hzk, {
                className: i.content,
                children: [
                    (0, r.jsx)(o.X6q, {
                        className: i.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, r.jsx)(o.Text, {
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
