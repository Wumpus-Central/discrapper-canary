n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(63104),
    s = n(579733);
function o(e) {
    let t,
        { className: n, children: l, verified: o, roleColor: c, roleName: u } = e;
    return (
        (t = o
            ? (0, r.jsx)(a.A, {
                  size: 12,
                  color: c,
                  className: s.TS,
              })
            : (0, r.jsx)("div", {
                  className: s.yY,
                  style: { backgroundColor: c },
              })),
        (0, r.jsxs)("div", {
            className: i()(n, s.JC),
            style: { "--custom-role-label-color": c },
            children: [t, u, l],
        })
    );
}
