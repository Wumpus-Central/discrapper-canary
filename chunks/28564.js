t.d(r, { default: () => o });
var n = t(255367);
t(73800);
var s = t(481060),
    l = t(388032);
function o(i) {
    let { onClose: r, onConfirmDelete: t, transitionState: o } = i;
    return (0, n.jsxs)(s.Y0X, {
        transitionState: o,
        'aria-label': l.intl.string(l.t['u/2TkZ']),
        children: [
            (0, n.jsx)(s.xBx, {
                separator: !1,
                children: (0, n.jsx)(s.X6q, {
                    variant: 'heading-lg/semibold',
                    children: l.intl.string(l.t['u/2TkZ'])
                })
            }),
            (0, n.jsx)(s.hzk, {
                children: (0, n.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    color: 'header-primary',
                    children: l.intl.string(l.t['9sgGbG'])
                })
            }),
            (0, n.jsxs)(s.mzw, {
                children: [
                    (0, n.jsx)(s.zxk, {
                        onClick: t,
                        color: s.zxk.Colors.RED,
                        children: l.intl.string(l.t.dO8DLC)
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: r,
                        look: s.zxk.Looks.LINK,
                        color: s.zxk.Colors.PRIMARY,
                        children: l.intl.string(l.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
