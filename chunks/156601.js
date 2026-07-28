n.d(t, { A: () => f });
var r = n(477900);
n(582128);
var i = n(503698),
    l = n.n(i),
    s = n(17928),
    a = n(462887),
    o = n(289873),
    c = n(834730),
    u = n(297264),
    d = n(736653),
    m = n(97352),
    g = n(428262),
    x = n(202541),
    T = n(268514);
let f = function (e) {
    let {
            subscriptionTier: t,
            interval: n = x.WT.MONTH,
            className: i,
            isGift: f = !1,
            variant: I,
            priceOptions: h,
            isApplicationHome: p,
            enablePremiumBrandRefresh: E,
        } = e,
        A = (0, s.bG)([m.A], () => m.A.isLoadedForSKUs([t])),
        P = (0, a.q)((0, d.Ay)());
    if (!A) return (0, r.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: T.xB });
    let j = m.A.getForSkuAndInterval((0, g.mH)(t), n),
        v = null != j ? (0, g.sS)(j, h, !1, f) : null;
    if (E) {
        let e = n === x.WT.YEAR;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : P ? "text-strong" : "text-overlay-light",
                    tag: "span",
                    children: (0, r.jsx)("span", { children: v }),
                }),
                (0, r.jsxs)(c.E, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, g.FJ)(n)],
                }),
            ],
        });
    }
    return (0, r.jsx)(u.D, {
        color: p ? "none" : "text-overlay-light",
        variant: I ?? "heading-md/medium",
        className: l()(T.SW, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", { className: p ? void 0 : T.q9, children: v }), " / ", (0, g.FJ)(n)],
        }),
    });
};
