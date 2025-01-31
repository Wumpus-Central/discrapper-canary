n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(50493),
    r = n(388032),
    s = n(509133),
    o = n(758570);
function c(e) {
    let { onNavigate: t, backPanel: n = a.k.INFO } = e;
    return (0, i.jsxs)('div', {
        className: o.header,
        children: [
            (0, i.jsx)('div', {
                className: o.headerTitle,
                children: (0, i.jsxs)(l.P3F, {
                    className: s.backButton,
                    onClick: () => (null == t ? void 0 : t(n)),
                    children: [
                        (0, i.jsx)(l.whL, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        }),
                        (0, i.jsx)(l.X6q, {
                            variant: 'heading-md/semibold',
                            children: r.intl.string(r.t['13/7kZ'])
                        })
                    ]
                })
            }),
            (0, i.jsx)(l.M2$, {
                shortcut: 'esc',
                keyClassName: s.keyComboInner,
                className: s.keyComboContainer
            })
        ]
    });
}
