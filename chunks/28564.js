r.d(i, { default: () => s });
var n = r(255367);
r(73800);
var e = r(481060),
    a = r(388032);
function s(t) {
    let { onClose: i, onConfirmDelete: r, transitionState: s } = t;
    return (0, n.jsxs)(e.Y0X, {
        transitionState: s,
        'aria-label': a.intl.string(a.t['u/2TkZ']),
        parentComponent: 'EmojiDeleteConfirm',
        children: [
            (0, n.jsx)(e.xBx, {
                separator: !1,
                children: (0, n.jsx)(e.X6q, {
                    variant: 'heading-lg/semibold',
                    children: a.intl.string(a.t['u/2TkZ'])
                })
            }),
            (0, n.jsx)(e.hzk, {
                children: (0, n.jsx)(e.Text, {
                    variant: 'text-md/normal',
                    color: 'header-primary',
                    children: a.intl.string(a.t['9sgGbG'])
                })
            }),
            (0, n.jsx)(e.mzw, {
                children: (0, n.jsxs)(e.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, n.jsx)(e.zxk, {
                            variant: 'critical-primary',
                            text: a.intl.string(a.t.dO8DLC),
                            onClick: r
                        }),
                        (0, n.jsx)(e.zxk, {
                            variant: 'secondary',
                            text: a.intl.string(a.t['ETE/oK']),
                            onClick: i
                        })
                    ]
                })
            })
        ]
    });
}
