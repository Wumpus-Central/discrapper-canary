i.d(e, { default: () => d }), i(653041), i(47120);
var r = i(200651);
i(192379);
var t = i(149765),
    a = i(481060),
    n = i(995648),
    o = i(422559),
    l = i(388032),
    c = i(832339);
function d(s) {
    let { defaultMemberPermissions: e, onClose: i, transitionState: d } = s,
        f = [];
    for (let s of o.VY) t.e$(e, s) && f.push(s);
    return (0, r.jsxs)(a.Y0X, {
        size: a.CgR.DYNAMIC,
        'aria-label': l.NW.string(l.t.vusPtr),
        transitionState: d,
        children: [
            (0, r.jsx)(a.xBx, {
                separator: !1,
                children: (0, r.jsx)(a.X6q, {
                    className: c.header,
                    variant: 'heading-xl/semibold',
                    children: l.NW.string(l.t['4gMlpa'])
                })
            }),
            (0, r.jsx)(a.hzk, {
                children: (0, r.jsx)(n.Z, {
                    className: c.permissionList,
                    grantedPermissions: f
                })
            }),
            (0, r.jsx)(a.mzw, {
                className: c.footer,
                children: (0, r.jsx)(a.zxk, {
                    size: a.PhG.MEDIUM,
                    onClick: i,
                    color: a.Ttl.BRAND,
                    children: l.NW.string(l.t.i4jeWV)
                })
            })
        ]
    });
}
