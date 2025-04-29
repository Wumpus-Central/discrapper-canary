n.d(t, {
    Y: () => l,
    Z: () => u
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(933282),
    l = (function (e) {
        return (e.PREMIUM = 'premium'), (e.LIMITED = 'limited'), e;
    })({});
let c = {
        premium: {
            border: s.premiumFeatureBorder,
            background: s.premiumBackground
        },
        limited: {
            border: s.limitedFeatureBorder,
            background: s.limitedBackground
        }
    },
    u = i.forwardRef(function (e, t) {
        let { children: n, type: i = 'premium', isShown: o, hasBackground: l = !1, className: u, backgroundClassName: d } = e;
        if (!o) return n;
        let { border: f, background: _ } = c[i];
        return (0, r.jsx)('div', {
            ref: t,
            className: a()(f, u),
            children: (0, r.jsx)('div', {
                className: a()(l ? _ : s.background, d),
                children: n
            })
        });
    });
