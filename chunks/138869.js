n.d(t, {
    A: () => d,
    V: () => c,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(486020),
    o = n(371794),
    l = n(544681),
    c = (function (e) {
        return (e[(e.SMALL = 40)] = "SMALL"), (e[(e.MEDIUM = 66)] = "MEDIUM"), (e[(e.LARGE = 128)] = "LARGE"), e;
    })({});
let u = {
        40: l.EX,
        66: l.Y,
        128: l.as,
    },
    d = (e) => {
        let t,
            { application: n, size: i, asset: c, className: d } = e;
        return (
            (t =
                null != c
                    ? (0, o.YE)(n.id, c, i)
                    : s.Ay.getApplicationIconURL({
                          id: n.id,
                          icon: n.icon,
                          size: i,
                      })),
            (0, r.jsx)("img", {
                alt: "",
                src: t,
                className: a()(l.Kk, u[i], d),
            })
        );
    };
