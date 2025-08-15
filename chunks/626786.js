n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(134433),
    o = n(923573);
function s(e) {
    let t,
        { className: n, children: i, verified: s, roleColor: c, roleName: u } = e;
    return (
        (t = s
            ? (0, r.jsx)(a.Z, {
                  size: 12,
                  color: c,
                  className: o.linkedRoleColor,
              })
            : (0, r.jsx)("div", {
                  className: o.roleColor,
                  style: { backgroundColor: c },
              })),
        (0, r.jsxs)("div", {
            className: l()(n, o.role),
            style: { "--custom-role-label-color": c },
            children: [t, u, i],
        })
    );
}
