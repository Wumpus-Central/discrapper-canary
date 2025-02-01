n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(565138),
    o = n(457926),
    l = n(696153);
let u = function (e) {
    let { guild: t, children: n } = e,
        r =
            null != t
                ? (0, i.jsx)(s.Z, {
                      guild: t,
                      size: s.Z.Sizes.MEDIUM,
                      className: a()(l.icon, null == t.icon ? l.textIcon : l.imageIcon),
                      active: !0
                  })
                : null;
    return (0, i.jsxs)('span', {
        children: [
            (0, i.jsx)(o.Z, { children: r }),
            (0, i.jsx)('span', {
                className: l.name,
                children: n
            })
        ]
    });
};
