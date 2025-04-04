n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(565138),
    s = n(457926),
    l = n(191165);
let c = function (e) {
    let { guild: t, children: n } = e,
        i =
            null != t
                ? (0, r.jsx)(a.Z, {
                      guild: t,
                      size: a.Z.Sizes.MEDIUM,
                      className: o()(l.icon, null == t.icon ? l.textIcon : l.imageIcon),
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
