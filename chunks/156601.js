n.d(t, { A: () => p });
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
    h = n(658859);
let p = function (e) {
    let {
            subscriptionTier: t,
            interval: n = x.WT.MONTH,
            className: l,
            isGift: p = !1,
            variant: I,
            priceOptions: f,
            isApplicationHome: T,
            enablePremiumBrandRefresh: E,
        } = e,
        j = (0, a.bG)([m.A], () => m.A.isLoadedForSKUs([t])),
        A = (0, s.q)((0, d.Ay)());
    if (!j) return (0, r.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: h.xB });
    let v = m.A.getForSkuAndInterval((0, g.mH)(t), n),
        N = null != v ? (0, g.sS)(v, f, !1, p) : null;
    if (E) {
        let e = n === x.WT.YEAR;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : A ? "text-strong" : "text-overlay-light",
                    tag: "span",
                    children: (0, r.jsx)("span", { children: N }),
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
        color: T ? "none" : "text-overlay-light",
        variant: I ?? "heading-md/medium",
        className: i()(h.SW, l),
        children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", { className: T ? void 0 : h.q9, children: N }), " / ", (0, g.FJ)(n)],
        }),
    });
};
