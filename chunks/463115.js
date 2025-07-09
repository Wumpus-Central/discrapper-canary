n.d(t, { Z: () => d });
var l = n(255367);
n(73800);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    s = n(888592),
    o = n(388032),
    c = n(167150);
let d = (e) => {
    let { school: t, setStep: n } = e;
    return (0, l.jsxs)('div', {
        className: c.container,
        children: [
            (0, l.jsx)('div', { className: c.topImage }),
            (0, l.jsx)(a.X6q, {
                className: r()(c.centerText, c.header),
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
            (0, l.jsx)('div', {
                'data-button-hoisted-classname-wrapper': !0,
                className: c.__invalid_resendLink,
                children: (0, l.jsx)(a.Avr, {
                    variant: 'primary',
                    size: 'sm',
                    text: o.intl.string(o.t.Zg63h4),
                    onClick: () => {
                        n(s.tF.VERIFY_EMAIL);
                    }
                })
            })
        ]
    });
};
