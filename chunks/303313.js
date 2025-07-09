(i.d(e, { default: () => d }), i(539854), i(388685));
var t = i(255367);
i(73800);
var r = i(149765),
    n = i(481060),
    a = i(995648),
    o = i(422559),
    l = i(388032),
    f = i(832339);
function d(s) {
    let { defaultMemberPermissions: e, onClose: i, transitionState: d } = s,
        c = [];
    for (let s of o.VY) r.e$(e, s) && c.push(s);
    return (0, t.jsxs)(n.Y0X, {
        size: n.CgR.DYNAMIC,
        'aria-label': l.intl.string(l.t.vusPtr),
        transitionState: d,
        parentComponent: 'DefaultMemberPermissionsModal',
        children: [
            (0, t.jsx)(n.xBx, {
                separator: !1,
                children: (0, t.jsx)(n.X6q, {
                    className: f.header,
                    variant: 'heading-xl/semibold',
                    children: l.intl.string(l.t['4gMlpa'])
                })
            }),
            (0, t.jsx)(n.hzk, {
                children: (0, t.jsx)(a.Z, {
                    className: f.permissionList,
                    grantedPermissions: c
                })
            }),
            (0, t.jsx)(n.mzw, {
                className: f.footer,
                children: (0, t.jsx)(n.zxk, {
                    variant: 'primary',
                    text: l.intl.string(l.t.i4jeWV),
                    onClick: i
                })
            })
        ]
    });
}
