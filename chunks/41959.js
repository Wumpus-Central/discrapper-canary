n.d(t, {
    H: () => u,
    Z: () => d
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(768581),
    o = n(73346),
    l = n(800559),
    u = (function (e) {
        return (e[(e.SMALL = 40)] = 'SMALL'), (e[(e.MEDIUM = 66)] = 'MEDIUM'), e;
    })({});
let c = {
        40: l.small,
        66: l.medium
    },
    d = (e) => {
        let t,
            { application: n, size: r, asset: u, className: d } = e;
        return (
            (t =
                null != u
                    ? (0, o._W)(n.id, u, r)
                    : s.ZP.getApplicationIconURL({
                          id: n.id,
                          icon: n.icon,
                          size: r
                      })),
            (0, i.jsx)('img', {
                alt: '',
                src: t,
                className: a()(l.icon, c[r], d)
            })
        );
    };
