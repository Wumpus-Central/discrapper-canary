n.d(t, {
    Y: () => l,
    Z: () => u,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(665100),
    l = (function (e) {
        return (e.PREMIUM = "premium"), (e.LIMITED = "limited"), e;
    })({});
let c = {
        premium: {
            border: s.premiumFeatureBorder,
            background: s.premiumBackground,
        },
        limited: {
            border: s.limitedFeatureBorder,
            background: s.limitedBackground,
        },
    },
    u = i.forwardRef(function (e, t) {
        let {
            children: n,
            type: i = "premium",
            isShown: a,
            hasBackground: l = !1,
            className: u,
            backgroundClassName: d,
        } = e;
        if (!a) return n;
        let { border: f, background: p } = c[i];
        return (0, r.jsx)("div", {
            ref: t,
            className: o()(f, u),
            children: (0, r.jsx)("div", {
                className: o()(l ? p : s.background, d),
                children: n,
            }),
        });
    });
