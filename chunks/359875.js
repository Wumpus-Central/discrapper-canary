n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(565138),
    s = n(457926),
    l = n(191165);
let c = function (e) {
    let { guild: t, children: n } = e,
        i =
            null != t
                ? (0, r.jsx)(o.Z, {
                      guild: t,
                      size: o.Z.Sizes.MEDIUM,
                      className: a()(l.icon, null == t.icon ? l.textIcon : l.imageIcon),
                      active: !0
                  })
                : null;
    return (0, r.jsxs)('span', {
        children: [
            (0, r.jsx)(s.Z, { children: i }),
            (0, r.jsx)('span', {
                className: l.name,
                children: n
            })
        ]
    });
};
