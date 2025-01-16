n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(134433),
    s = n(662253);
function o(e) {
    let t,
        { className: n, children: l, verified: o, roleColor: c, roleName: d } = e;
    return (
        (t = o
            ? (0, i.jsx)(a.Z, {
                  size: 12,
                  color: c,
                  className: s.linkedRoleColor
              })
            : (0, i.jsx)('div', {
                  className: s.roleColor,
                  style: { backgroundColor: c }
              })),
        (0, i.jsxs)('div', {
            className: r()(n, s.role),
            children: [t, d, l]
        })
    );
}
