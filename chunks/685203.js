n.d(t, { a: () => c });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(755721),
    l = n(877757);
function c(e) {
    let { children: t, onClick: n, className: i, tooltip: c } = e;
    return (0, r.jsx)(o.u, {
        text: c,
        children: (0, r.jsx)(s.zx, {
            onClick: (e) => {
                null == n || n(e);
            },
            innerClassName: l.buttonReset,
            color: a()(l.cta, i),
            size: s.zx.Sizes.MIN,
            children: t,
        }),
    });
}
