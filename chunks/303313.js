i.d(e, { default: () => d }), i(539854), i(388685);
var r = i(255367);
i(73800);
var t = i(149765),
    n = i(481060),
    a = i(995648),
    o = i(422559),
    l = i(388032),
    c = i(832339);
function d(s) {
    let { defaultMemberPermissions: e, onClose: i, transitionState: d } = s,
        f = [];
    for (let s of o.VY) t.e$(e, s) && f.push(s);
    return (0, r.jsxs)(n.Y0X, {
        size: n.CgR.DYNAMIC,
        'aria-label': l.intl.string(l.t.vusPtr),
        transitionState: d,
        parentComponent: 'DefaultMemberPermissionsModal',
        children: [
            (0, r.jsx)(n.xBx, {
                separator: !1,
                children: (0, r.jsx)(n.X6q, {
                    className: c.header,
                    variant: 'heading-xl/semibold',
                    children: l.intl.string(l.t['4gMlpa'])
                })
            }),
            (0, r.jsx)(n.hzk, {
                children: (0, r.jsx)(a.Z, {
                    className: c.permissionList,
                    grantedPermissions: f
                })
            }),
            (0, r.jsx)(n.mzw, {
                className: c.footer,
                children: (0, r.jsx)(n.zxk, {
                    size: n.PhG.MEDIUM,
                    onClick: i,
                    color: n.Ttl.BRAND,
                    children: l.intl.string(l.t.i4jeWV)
                })
            })
        ]
    });
}
