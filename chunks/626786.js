n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(134433),
    s = n(753130);
function l(e) {
    let t,
        { className: n, children: i, verified: l, roleColor: c, roleName: u } = e;
    return (
        (t = l
            ? (0, r.jsx)(o.Z, {
                  size: 12,
                  color: c,
                  className: s.linkedRoleColor
              })
            : (0, r.jsx)('div', {
                  className: s.roleColor,
                  style: { backgroundColor: c }
              })),
        (0, r.jsxs)('div', {
            className: a()(n, s.role),
            style: { '--custom-role-label-color': c },
            children: [t, u, i]
        })
    );
}
