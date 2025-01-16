var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    a = n(481060),
    r = n(888592),
    o = n(388032),
    c = n(569055);
t.Z = (e) => {
    let { school: t, setStep: n } = e;
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)('div', { className: c.topImage }),
            (0, i.jsx)(a.Heading, {
                className: l()(c.centerText, c.header),
                variant: 'heading-xl/semibold',
                children: o.intl.string(o.t.OaloU1)
            }),
            (0, i.jsx)('div', {
                className: c.descriptionWidth,
                children: (0, i.jsx)(a.Text, {
                    className: c.centerText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: o.intl.format(o.t.Rs7MXF, { school: t })
                })
            }),
            (0, i.jsx)(a.Button, {
                look: a.Button.Looks.LINK,
                size: a.Button.Sizes.SMALL,
                color: a.Button.Colors.LINK,
                onClick: () => {
                    n(r.tF.VERIFY_EMAIL);
                },
                className: c.__invalid_resendLink,
                children: o.intl.string(o.t.Zg63h4)
            })
        ]
    });
};
