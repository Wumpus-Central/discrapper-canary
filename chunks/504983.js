t.d(n, {
    Y: function () {
        return l;
    }
});
var i,
    l,
    r = t(200651),
    s = t(192379),
    a = t(120356),
    c = t.n(a),
    o = t(882880);
((i = l || (l = {})).PREMIUM = 'premium'), (i.LIMITED = 'limited');
let u = {
    premium: {
        border: o.premiumFeatureBorder,
        background: o.premiumBackground
    },
    limited: {
        border: o.limitedFeatureBorder,
        background: o.limitedBackground
    }
};
n.Z = s.forwardRef(function (e, n) {
    let { children: t, type: i = 'premium', isShown: l, hasBackground: s = !1, className: a, backgroundClassName: d } = e;
    if (!l) return (0, r.jsx)(r.Fragment, { children: t });
    let { border: m, background: p } = u[i];
    return (0, r.jsx)('div', {
        ref: n,
        className: c()(m, a),
        children: (0, r.jsx)('div', {
            className: c()(s ? p : o.background, d),
            children: t
        })
    });
});
