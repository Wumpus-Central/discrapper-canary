t.d(n, {
    Z: function () {
        return l;
    }
});
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(313201),
    c = t(822466);
function l(e) {
    let { transitionState: n, title: t, subtitle: l, children: s } = e,
        a = (0, r.Dt)();
    return (0, o.jsxs)(i.ModalRoot, {
        transitionState: n,
        'aria-labelledby': a,
        children: [
            (0, o.jsx)('div', {
                className: c.shieldIconContainer,
                children: (0, o.jsx)('div', {
                    className: c.shieldIcon,
                    children: (0, o.jsx)(i.ShieldLockIcon, {
                        size: 'custom',
                        width: 55,
                        height: 55,
                        color: i.tokens.colors.HEADER_SECONDARY
                    })
                })
            }),
            (0, o.jsxs)(i.ModalContent, {
                className: c.content,
                children: [
                    (0, o.jsx)(i.Heading, {
                        className: c.title,
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, o.jsx)(i.Text, {
                        className: c.subtitle,
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
