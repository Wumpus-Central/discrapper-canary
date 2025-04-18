n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(50493),
    o = n(388032),
    a = n(792461),
    s = n(12740);
function c(e) {
    let { onNavigate: t, backPanel: n = l.k.INFO } = e;
    return (0, r.jsxs)('div', {
        className: s.header,
        children: [
            (0, r.jsx)('div', {
                className: s.headerTitle,
                children: (0, r.jsxs)(i.P3F, {
                    className: a.backButton,
                    onClick: () => (null == t ? void 0 : t(n)),
                    children: [
                        (0, r.jsx)(i.whL, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        }),
                        (0, r.jsx)(i.X6q, {
                            variant: 'heading-md/semibold',
                            children: o.NW.string(o.t['13/7kZ'])
                        })
                    ]
                })
            }),
            (0, r.jsx)(i.M2$, {
                shortcut: 'esc',
                keyClassName: a.keyComboInner,
                className: a.keyComboContainer
            })
        ]
    });
}
