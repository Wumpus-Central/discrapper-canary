n.d(t, {
    H: () => c,
    Z: () => d
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(768581),
    s = n(73346),
    l = n(700307),
    c = (function (e) {
        return (e[(e.SMALL = 40)] = 'SMALL'), (e[(e.MEDIUM = 66)] = 'MEDIUM'), e;
    })({});
let u = {
        40: l.small,
        66: l.medium
    },
    d = (e) => {
        let t,
            { application: n, size: i, asset: c, className: d } = e;
        return (
            (t =
                null != c
                    ? (0, s._W)(n.id, c, i)
                    : a.ZP.getApplicationIconURL({
                          id: n.id,
                          icon: n.icon,
                          size: i
                      })),
            (0, r.jsx)('img', {
                alt: '',
                src: t,
                className: o()(l.icon, u[i], d)
            })
        );
    };
