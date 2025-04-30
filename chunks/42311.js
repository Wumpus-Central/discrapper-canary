n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(626786),
    s = n(815756);
function c(e) {
    let { className: t, roleColor: n, roleName: i, hasRemoveIcon: c = !1, onClick: u, disabled: d = !1, verified: p = !1 } = e;
    return (0, r.jsx)(o.zxk, {
        className: l()(t, s.button),
        look: o.zxk.Looks.BLANK,
        size: o.zxk.Sizes.NONE,
        onClick: u,
        disabled: d,
        children: (0, r.jsx)(a.Z, {
            className: s.role,
            roleColor: n,
            roleName: i,
            verified: p,
            children:
                c &&
                (0, r.jsx)(o.Dio, {
                    size: 'custom',
                    color: 'currentColor',
                    height: 6,
                    width: 6,
                    className: s.removeRole,
                    colorClass: s.removeRoleIcon
                })
        })
    });
}
