var i,
    a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    o = n(489088),
    s = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), (i.NEW_UPSELL = "newUpsell"), i);
let d = {
    premium: { border: o.wU, background: o.gI },
    limited: { border: o.rY, background: o.pm },
    newUpsell: { border: o.Ef, background: o.st },
};
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                children: t,
                type: n = "premium",
                isShown: i,
                hasBackground: l = !1,
                className: s,
                backgroundClassName: c,
                ref: u,
            } = e;
            if (!i) return t;
            let { border: f, background: m } = d[n];
            return (0, a.jsx)("div", {
                ref: u,
                className: r()(f, s),
                children: (0, a.jsx)("div", { className: r()(l ? m : o.Tp, c), children: t }),
            });
        },
        i: s,
    },
);
