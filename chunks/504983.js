r.d(n, {
    Y: function () {
        return i;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(882880);
!(function (e) {
    (e.PREMIUM = 'premium'), (e.LIMITED = 'limited');
})(i || (i = {}));
let c = {
    premium: {
        border: u.premiumFeatureBorder,
        background: u.premiumBackground
    },
    limited: {
        border: u.limitedFeatureBorder,
        background: u.limitedBackground
    }
};
n.Z = o.forwardRef(function (e, n) {
    let { children: r, type: i = 'premium', isShown: o, hasBackground: s = !1, className: d, backgroundClassName: f } = e;
    if (!o) return (0, a.jsx)(a.Fragment, { children: r });
    let { border: p, background: h } = c[i];
    return (0, a.jsx)('div', {
        ref: n,
        className: l()(p, d),
        children: (0, a.jsx)('div', {
            className: l()(s ? h : u.background, f),
            children: r
        })
    });
});
