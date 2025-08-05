n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(50493),
    s = n(388032),
    a = n(792461),
    o = n(12740);
function u(e) {
    let { onNavigate: t, backPanel: n = i.k.INFO } = e;
    return (0, r.jsxs)('div', {
        className: o.header,
        children: [
            (0, r.jsx)('div', {
                className: o.headerTitle,
                children: (0, r.jsxs)(l.P3F, {
                    className: a.backButton,
                    onClick: () => (null == t ? void 0 : t(n)),
                    children: [
                        (0, r.jsx)(l.whL, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        }),
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-md/semibold',
                            children: s.intl.string(s.t['13/7kZ'])
                        })
                    ]
                })
            }),
            (0, r.jsx)(l.M2$, {
                shortcut: 'esc',
                keyClassName: a.keyComboInner,
                className: a.keyComboContainer
            })
        ]
    });
}
