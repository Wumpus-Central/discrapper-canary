var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(565138),
    l = r(457926),
    u = r(696153);
function c(e) {
    let { guild: n, children: r } = e,
        a =
            null != n
                ? (0, i.jsx)(o.Z, {
                      guild: n,
                      size: o.Z.Sizes.MEDIUM,
                      className: s()(u.icon, null == n.icon ? u.textIcon : u.imageIcon),
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
