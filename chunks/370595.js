t.d(e, { Z: () => o });
var n = t(255367);
t(73800);
var r = t(481060),
    l = t(50493),
    i = t(388032),
    s = t(792461),
    a = t(12740);
function o(A) {
    let { onNavigate: e, backPanel: t = l.k.INFO } = A;
    return (0, n.jsxs)('div', {
        className: a.header,
        children: [
            (0, n.jsx)('div', {
                className: a.headerTitle,
                children: (0, n.jsxs)(r.P3F, {
                    className: s.backButton,
                    onClick: () => (null == e ? void 0 : e(t)),
                    children: [
                        (0, n.jsx)(r.whL, {
                            size: 'custom',
                            width: 20,
                            height: 20
                        }),
                        (0, n.jsx)(r.X6q, {
                            variant: 'heading-md/semibold',
                            children: i.intl.string(i.t['13/7kZ'])
                        })
                    ]
                })
            }),
            (0, n.jsx)(r.M2$, {
                shortcut: 'esc',
                keyClassName: s.keyComboInner,
                className: s.keyComboContainer
            })
        ]
    });
}
