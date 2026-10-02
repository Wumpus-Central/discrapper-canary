t.d(r, { A: () => g });
var n = t(477900);
t(582128);
var i = t(503698),
    l = t.n(i),
    a = t(17928),
    s = t(462887),
    o = t(289873),
    c = t(834730),
    d = t(297264),
    u = t(736653),
    m = t(97352),
    x = t(158045),
    p = t(202541),
    h = t(658859);
let g = function (e) {
    let {
            subscriptionTier: r,
            interval: t = p.WT.MONTH,
            className: i,
            isGift: g = !1,
            variant: j,
            priceOptions: f,
            isApplicationHome: T,
            enablePremiumBrandRefresh: I,
        } = e,
        A = (0, a.bG)([m.A], () => m.A.isLoadedForSKUs([r])),
        E = (0, s.q)((0, u.Ay)());
    if (!A) return (0, n.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: h.xB });
    let N = m.A.getForSkuAndInterval((0, x.mH)(r), t),
        R = null != N ? (0, x.sS)(N, f, !1, g) : null;
    if (I) {
        let e = t === p.WT.YEAR;
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(c.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : E ? "text-strong" : "text-overlay-light",
                    tag: "span",
                    children: (0, n.jsx)("span", { children: R }),
                }),
                (0, n.jsxs)(c.E, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, x.FJ)(t)],
                }),
            ],
        });
    }
    return (0, n.jsx)(d.D, {
        color: T ? "none" : "text-overlay-light",
        variant: j ?? "heading-md/medium",
        className: l()(h.SW, i),
        children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("span", { className: T ? void 0 : h.q9, children: R }), " / ", (0, x.FJ)(t)],
        }),
    });
};
