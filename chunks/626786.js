n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(134433),
    a = n(753130);
function s(e) {
    let t,
        { className: n, children: i, verified: s, roleColor: c, roleName: u } = e;
    return (
        (t = s
            ? (0, r.jsx)(o.Z, {
                  size: 12,
                  color: c,
                  className: a.linkedRoleColor
              })
            : (0, r.jsx)('div', {
                  className: a.roleColor,
                  style: { backgroundColor: c }
              })),
        (0, r.jsxs)('div', {
            className: l()(n, a.role),
            style: { '--custom-role-label-color': c },
            children: [t, u, i]
        })
    );
}
