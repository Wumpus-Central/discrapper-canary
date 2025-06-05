r.d(n, { default: () => s });
var t = r(255367);
r(73800);
var l = r(481060),
    o = r(388032);
function s(i) {
    let { onClose: n, onConfirmDelete: r, transitionState: s } = i;
    return (0, t.jsxs)(l.Y0X, {
        transitionState: s,
        'aria-label': o.intl.string(o.t['u/2TkZ']),
        parentComponent: 'EmojiDeleteConfirm',
        children: [
            (0, t.jsx)(l.xBx, {
                separator: !1,
                children: (0, t.jsx)(l.X6q, {
                    variant: 'heading-lg/semibold',
                    children: o.intl.string(o.t['u/2TkZ'])
                })
            }),
            (0, t.jsx)(l.hzk, {
                children: (0, t.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    color: 'header-primary',
                    children: o.intl.string(o.t['9sgGbG'])
                })
            }),
            (0, t.jsxs)(l.mzw, {
                children: [
                    (0, t.jsx)(l.zxk, {
                        onClick: r,
                        color: l.zxk.Colors.RED,
                        children: o.intl.string(o.t.dO8DLC)
                    }),
                    (0, t.jsx)(l.zxk, {
                        onClick: n,
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        children: o.intl.string(o.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
