n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(134433),
    o = n(24000);
function s(e) {
    let t,
        { className: n, children: r, verified: s, roleColor: c, roleName: u } = e;
    return (
        (t = s
            ? (0, i.jsx)(a.Z, {
                  size: 12,
                  color: c,
                  className: o.linkedRoleColor,
              })
            : (0, i.jsx)("div", {
                  className: o.roleColor,
                  style: { backgroundColor: c },
              })),
        (0, i.jsxs)("div", {
            className: l()(n, o.role),
            style: { "--custom-role-label-color": c },
            children: [t, u, r],
        })
    );
}
