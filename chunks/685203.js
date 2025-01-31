n.d(t, { a: () => l });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(660384);
function l(e) {
    let { children: t, onClick: n, className: r, tooltip: l } = e;
    return (0, i.jsx)(s.ua7, {
        text: l,
        children: (e) => {
            let { onClick: l, ...u } = e;
            return (0, i.jsx)(s.zxk, {
                ...u,
                onClick: (e) => {
                    null == n || n(e), null == l || l();
                },
                innerClassName: o.buttonReset,
                color: a()(o.cta, r),
                size: s.zxk.Sizes.MIN,
                children: t
            });
        }
    });
}
