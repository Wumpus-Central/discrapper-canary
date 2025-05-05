e.d(i, { default: () => d }), e(539854), e(388685);
var r = e(255367);
e(73800);
var t = e(149765),
    n = e(481060),
    a = e(995648),
    o = e(422559),
    l = e(388032),
    c = e(832339);
function d(s) {
    let { defaultMemberPermissions: i, onClose: e, transitionState: d } = s,
        f = [];
    for (let s of o.VY) t.e$(i, s) && f.push(s);
    return (0, r.jsxs)(n.Y0X, {
        size: n.CgR.DYNAMIC,
        'aria-label': l.intl.string(l.t.vusPtr),
        transitionState: d,
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
                    onClick: e,
                    color: n.Ttl.BRAND,
                    children: l.intl.string(l.t.i4jeWV)
                })
            })
        ]
    });
}
