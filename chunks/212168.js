var i,
    a = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(489088),
    o = (((i = {}).PREMIUM = "premium"), (i.LIMITED = "limited"), (i.NEW_UPSELL = "newUpsell"), i);
let d = {
    premium: { border: s.wU, background: s.gI },
    limited: { border: s.rY, background: s.pm },
    newUpsell: { border: s.Ef, background: s.st },
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
                hasBackground: r = !1,
                className: o,
                backgroundClassName: c,
                ref: u,
            } = e;
            if (!i) return t;
            let { border: f, background: m } = d[n];
            return (0, a.jsx)("div", {
                ref: u,
                className: l()(f, o),
                children: (0, a.jsx)("div", { className: l()(r ? m : s.Tp, c), children: t }),
            });
        },
        i: o,
    },
);
