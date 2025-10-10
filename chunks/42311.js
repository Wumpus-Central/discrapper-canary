n.d(t, { Z: () => u });
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    a = n(755721),
    o = n(481060),
    s = n(626786),
    c = n(628012);
function u(e) {
    let {
        className: t,
        roleColor: n,
        roleName: r,
        hasRemoveIcon: u = !1,
        onClick: d,
        disabled: p = !1,
        verified: h = !1,
    } = e;
    return (0, i.jsx)(a.zx, {
        className: l()(t, c.button),
        look: a.zx.Looks.BLANK,
        size: a.zx.Sizes.NONE,
        onClick: d,
        disabled: p,
        children: (0, i.jsx)(s.Z, {
            className: c.role,
            roleColor: n,
            roleName: r,
            verified: h,
            children:
                u &&
                (0, i.jsx)(o.Dio, {
                    size: "custom",
                    color: "currentColor",
                    height: 6,
                    width: 6,
                    className: c.removeRole,
                    colorClass: c.removeRoleIcon,
                }),
        }),
    });
}
