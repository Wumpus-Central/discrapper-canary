r.d(t, { A: () => f });
var n = r(477900);
r(582128);
var i = r(503698),
    l = r.n(i),
    a = r(17928),
    s = r(462887),
    o = r(289873),
    u = r(834730),
    c = r(297264),
    d = r(736653),
    m = r(97352),
    x = r(158045),
    p = r(202541),
    h = r(658859);
let f = function (e) {
    let {
            subscriptionTier: t,
            interval: r = p.WT.MONTH,
            className: i,
            isGift: f = !1,
            variant: g,
            priceOptions: A,
            isApplicationHome: j,
            enablePremiumBrandRefresh: E,
        } = e,
        T = (0, a.bG)([m.A], () => m.A.isLoadedForSKUs([t])),
        I = (0, s.q)((0, d.Ay)());
    if (!T) return (0, n.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: h.xB });
    let v = m.A.getForSkuAndInterval((0, x.mH)(t), r),
        R = null != v ? (0, x.sS)(v, A, !1, f) : null;
    if (E) {
        let e = r === p.WT.YEAR;
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(u.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : I ? "text-strong" : "text-overlay-light",
                    tag: "span",
                    children: (0, n.jsx)("span", { children: R }),
                }),
                (0, n.jsxs)(u.E, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, x.FJ)(r)],
                }),
            ],
        });
    }
    return (0, n.jsx)(c.D, {
        color: j ? "none" : "text-overlay-light",
        variant: g ?? "heading-md/medium",
        className: l()(h.SW, i),
        children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("span", { className: j ? void 0 : h.q9, children: R }), " / ", (0, x.FJ)(r)],
        }),
    });
};
