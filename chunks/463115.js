n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    r = n(888592),
    o = n(388032),
    c = n(874635);
let d = (e) => {
    let { school: t, setStep: n } = e;
    return (0, l.jsxs)('div', {
        className: c.container,
        children: [
            (0, l.jsx)('div', { className: c.topImage }),
            (0, l.jsx)(a.X6q, {
                className: s()(c.centerText, c.header),
                variant: 'heading-xl/semibold',
                children: o.intl.string(o.t.OaloU1)
            }),
            (0, l.jsx)('div', {
                className: c.descriptionWidth,
                children: (0, l.jsx)(a.Text, {
                    className: c.centerText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: o.intl.format(o.t.Rs7MXF, { school: t })
                })
            }),
            (0, l.jsx)(a.zxk, {
                look: a.zxk.Looks.LINK,
                size: a.zxk.Sizes.SMALL,
                color: a.zxk.Colors.LINK,
                onClick: () => {
                    n(r.tF.VERIFY_EMAIL);
                },
                className: c.__invalid_resendLink,
                children: o.intl.string(o.t.Zg63h4)
            })
        ]
    });
};
