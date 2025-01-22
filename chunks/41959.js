r.d(n, {
    H: function () {
        return i;
    }
});
var i,
    a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(768581),
    u = r(73346),
    c = r(134384);
!(function (e) {
    (e[(e.SMALL = 40)] = 'SMALL'), (e[(e.MEDIUM = 66)] = 'MEDIUM');
})(i || (i = {}));
let d = {
        40: c.small,
        66: c.medium
    },
    f = (e) => {
        let n,
            { application: r, size: i, asset: o, className: f } = e;
        return (
            (n =
                null != o
                    ? (0, u._W)(r.id, o, i)
                    : l.ZP.getApplicationIconURL({
                          id: r.id,
                          icon: r.icon,
                          size: i
                      })),
            (0, a.jsx)('img', {
                alt: '',
                src: n,
                className: s()(c.icon, d[i], f)
            })
        );
    };
n.Z = f;
