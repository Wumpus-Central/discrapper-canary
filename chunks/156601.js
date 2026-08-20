n.d(t, { A: () => I });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    a = n(17928),
    s = n(462887),
    o = n(289873),
    c = n(834730),
    u = n(297264),
    d = n(736653),
    m = n(97352),
    g = n(158045),
    x = n(202541),
    T = n(658859);
let I = function (e) {
    let {
            subscriptionTier: t,
            interval: n = x.WT.MONTH,
            className: l,
            isGift: I = !1,
            variant: h,
            priceOptions: f,
            isApplicationHome: p,
            enablePremiumBrandRefresh: E,
        } = e,
        P = (0, a.bG)([m.A], () => m.A.isLoadedForSKUs([t])),
        j = (0, s.q)((0, d.Ay)());
    if (!P) return (0, r.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: T.xB });
    let v = m.A.getForSkuAndInterval((0, g.mH)(t), n),
        A = null != v ? (0, g.sS)(v, f, !1, I) : null;
    if (E) {
        let e = n === x.WT.YEAR;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : j ? "text-strong" : "text-overlay-light",
                    tag: "span",
                    children: (0, r.jsx)("span", { children: A }),
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
        variant: h ?? "heading-md/medium",
        className: i()(T.SW, l),
        children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", { className: p ? void 0 : T.q9, children: A }), " / ", (0, g.FJ)(n)],
        }),
    });
};
