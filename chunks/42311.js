n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(626786),
    o = n(956476);
function c(e) {
    let { className: t, roleColor: n, roleName: l, hasRemoveIcon: c = !1, onClick: d, disabled: u = !1, verified: h = !1 } = e;
    return (0, i.jsx)(r.zxk, {
        className: a()(t, o.button),
        look: r.zxk.Looks.BLANK,
        size: r.zxk.Sizes.NONE,
        onClick: d,
        disabled: u,
        children: (0, i.jsx)(s.Z, {
            className: o.role,
            roleColor: n,
            roleName: l,
            verified: h,
            children:
                c &&
                (0, i.jsx)(r.Dio, {
                    size: 'custom',
                    color: 'currentColor',
                    height: 6,
                    width: 6,
                    className: o.removeRole,
                    colorClass: o.removeRoleIcon
                })
        })
    });
}
