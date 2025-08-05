n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(755721),
    s = n(481060),
    l = n(626786),
    c = n(815756);
let u = 6;
function d(e) {
    let { className: t, roleColor: n, roleName: i, hasRemoveIcon: d = !1, onClick: f, disabled: _ = !1, verified: p = !1 } = e;
    return (0, r.jsx)(o.zx, {
        className: a()(t, c.button),
        look: o.zx.Looks.BLANK,
        size: o.zx.Sizes.NONE,
        onClick: f,
        disabled: _,
        children: (0, r.jsx)(l.Z, {
            className: c.role,
            roleColor: n,
            roleName: i,
            verified: p,
            children:
                d &&
                (0, r.jsx)(s.Dio, {
                    size: 'custom',
                    color: 'currentColor',
                    height: u,
                    width: u,
                    className: c.removeRole,
                    colorClass: c.removeRoleIcon
                })
        })
    });
}
