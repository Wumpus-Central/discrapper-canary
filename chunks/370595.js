n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(50493),
    a = n(388032),
    s = n(509133),
    o = n(758570);
function c(e) {
    let { onNavigate: t, backPanel: n = r.k.INFO } = e;
    return (0, i.jsxs)('div', {
        className: o.header,
        children: [
            (0, i.jsx)('div', {
                className: o.headerTitle,
                children: (0, i.jsxs)(l.Clickable, {
                    className: s.backButton,
                    onClick: () => (null == t ? void 0 : t(n)),
                    children: [
                        (0, i.jsx)(l.ArrowSmallLeftIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        }),
                        (0, i.jsx)(l.Heading, {
                            variant: 'heading-md/semibold',
                            children: a.intl.string(a.t['13/7kZ'])
                        })
                    ]
                })
            }),
            (0, i.jsx)(l.KeyCombo, {
                shortcut: 'esc',
                keyClassName: s.keyComboInner,
                className: s.keyComboContainer
            })
        ]
    });
}
