s.d(i, { default: () => e });
var t = s(200651);
s(192379);
var n = s(481060),
    o = s(388032);
function e(r) {
    let { onClose: i, onConfirmDelete: s, transitionState: e } = r;
    return (0, t.jsxs)(n.Y0X, {
        transitionState: e,
        'aria-label': o.NW.string(o.t['u/2TkZ']),
        children: [
            (0, t.jsx)(n.xBx, {
                separator: !1,
                children: (0, t.jsx)(n.X6q, {
                    variant: 'heading-lg/semibold',
                    children: o.NW.string(o.t['u/2TkZ'])
                })
            }),
            (0, t.jsx)(n.hzk, {
                children: (0, t.jsx)(n.Text, {
                    variant: 'text-md/normal',
                    color: 'header-primary',
                    children: o.NW.string(o.t['9sgGbG'])
                })
            }),
            (0, t.jsxs)(n.mzw, {
                children: [
                    (0, t.jsx)(n.zxk, {
                        onClick: s,
                        color: n.zxk.Colors.RED,
                        children: o.NW.string(o.t.dO8DLC)
                    }),
                    (0, t.jsx)(n.zxk, {
                        onClick: i,
                        look: n.zxk.Looks.LINK,
                        color: n.zxk.Colors.PRIMARY,
                        children: o.NW.string(o.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
