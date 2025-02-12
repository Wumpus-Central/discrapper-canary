n.d(t, {
    Y: () => l,
    Z: () => c
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(843314),
    l = (function (e) {
        return (e.PREMIUM = 'premium'), (e.LIMITED = 'limited'), e;
    })({});
let u = {
        premium: {
            border: o.premiumFeatureBorder,
            background: o.premiumBackground
        },
        limited: {
            border: o.limitedFeatureBorder,
            background: o.limitedBackground
        }
    },
    c = r.forwardRef(function (e, t) {
        let { children: n, type: r = 'premium', isShown: a, hasBackground: l = !1, className: c, backgroundClassName: d } = e;
        if (!a) return (0, i.jsx)(i.Fragment, { children: n });
        let { border: f, background: _ } = u[r];
        return (0, i.jsx)('div', {
            ref: t,
            className: s()(f, c),
            children: (0, i.jsx)('div', {
                className: s()(l ? _ : o.background, d),
                children: n
            })
        });
    });
