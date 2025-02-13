n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(134433),
    s = n(944675);
function o(e) {
    let t,
        { className: n, children: l, verified: o, roleColor: c, roleName: d } = e;
    return (
        (t = o
            ? (0, i.jsx)(r.Z, {
                  size: 12,
                  color: c,
                  className: s.linkedRoleColor
              })
            : (0, i.jsx)('div', {
                  className: s.roleColor,
                  style: { backgroundColor: c }
              })),
        (0, i.jsxs)('div', {
            className: a()(n, s.role),
            children: [t, d, l]
        })
    );
}
