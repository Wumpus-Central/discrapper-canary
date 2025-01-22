var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(565138),
    l = r(457926),
    u = r(696153);
function c(e) {
    let { guild: n, children: r } = e,
        a =
            null != n
                ? (0, i.jsx)(s.Z, {
                      guild: n,
                      size: s.Z.Sizes.MEDIUM,
                      className: o()(u.icon, null == n.icon ? u.textIcon : u.imageIcon),
                      active: !0
                  })
                : null;
    return (0, i.jsxs)('span', {
        children: [
            (0, i.jsx)(l.Z, { children: a }),
            (0, i.jsx)('span', {
                className: u.name,
                children: r
            })
        ]
    });
}
n.Z = c;
