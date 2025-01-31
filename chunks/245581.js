n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(313201),
    s = n(822466);
function o(e) {
    let { transitionState: t, title: n, subtitle: o, children: c } = e,
        a = (0, l.Dt)();
    return (0, i.jsxs)(r.Y0X, {
        transitionState: t,
        'aria-labelledby': a,
        children: [
            (0, i.jsx)('div', {
                className: s.shieldIconContainer,
                children: (0, i.jsx)('div', {
                    className: s.shieldIcon,
                    children: (0, i.jsx)(r.tQf, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: r.TVs.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, i.jsxs)(r.hzk, {
                className: s.content,
                children: [
                    (0, i.jsx)(r.X6q, {
                        className: s.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, i.jsx)(r.Text, {
                        className: s.subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: o
                    }),
                    c
                ]
            })
        ]
    });
}
