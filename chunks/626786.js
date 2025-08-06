n.d(t, { Z: () => l });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(134433),
    s = n(753130);
function l(e) {
    let t,
        { className: n, children: i, verified: l, roleColor: c, roleName: u } = e;
    return (
        (t = l
            ? (0, r.jsx)(a.Z, {
                  size: 12,
                  color: c,
                  className: s.linkedRoleColor
              })
            : (0, r.jsx)('div', {
                  className: s.roleColor,
                  style: { backgroundColor: c }
              })),
        (0, r.jsxs)('div', {
            className: o()(n, s.role),
            style: { '--custom-role-label-color': c },
            children: [t, u, i]
        })
    );
}
