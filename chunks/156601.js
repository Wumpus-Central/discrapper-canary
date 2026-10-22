t.d(r, { A: () => A });
var n = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    a = t(17928),
    s = t(462887),
    c = t(289873),
    u = t(834730),
    o = t(297264),
    d = t(736653),
    m = t(97352),
    p = t(158045),
    x = t(202541),
    h = t(658859);
let A = function (e) {
    let {
            subscriptionTier: r,
            interval: t = x.WT.MONTH,
            className: l,
            isGift: A = !1,
            variant: T,
            priceOptions: I,
            isApplicationHome: E,
            enablePremiumBrandRefresh: f,
        } = e,
        g = (0, a.bG)([m.A], () => m.A.isLoadedForSKUs([r])),
        R = (0, s.q)((0, d.Ay)());
    if (!g) return (0, n.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS, className: h.xB });
    let _ = m.A.getForSkuAndInterval((0, p.mH)(r), t),
        j = null != _ ? (0, p.sS)(_, I, !1, A) : null;
    if (f) {
        let e = t === x.WT.YEAR;
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(u.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : R ? "text-strong" : "text-overlay-light",
                    tag: "span",
                    children: (0, n.jsx)("span", { children: j }),
                }),
                (0, n.jsxs)(u.E, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, p.FJ)(t)],
                }),
            ],
        });
    }
    return (0, n.jsx)(o.D, {
        color: E ? "none" : "text-overlay-light",
        variant: T ?? "heading-md/medium",
        className: i()(h.SW, l),
        children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("span", { className: E ? void 0 : h.q9, children: j }), " / ", (0, p.FJ)(t)],
        }),
    });
};
