i.d(t, { A: () => C });
var r = i(627968);
i(64700);
var n = i(503698),
    s = i.n(n),
    a = i(311907),
    l = i(582754),
    o = i(397927),
    c = i(736653),
    d = i(97352),
    m = i(927578),
    u = i(788868),
    x = i(696389);
let C = function (e) {
    let {
            subscriptionTier: t,
            interval: i = u.WT.MONTH,
            className: n,
            isGift: C = !1,
            variant: g,
            priceOptions: p,
            isApplicationHome: T,
            enablePremiumBrandRefresh: h,
        } = e,
        I = (0, a.bG)([d.A], () => d.A.isLoadedForSKUs([t])),
        f = (0, l.qB)((0, c.Ay)());
    if (!I) return (0, r.jsx)(o.y$y, { type: o.y$y.Type.PULSING_ELLIPSIS, className: x.xB });
    let j = d.A.getForSkuAndInterval((0, m.mH)(t), i),
        A = null != j ? (0, m.sS)(j, p, !1, C) : null;
    if (h) {
        let e = i === u.WT.YEAR;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(o.Text, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : f ? "text-strong" : "always-white",
                    tag: "span",
                    children: (0, r.jsx)("span", { children: A }),
                }),
                (0, r.jsxs)(o.Text, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, m.FJ)(i)],
                }),
            ],
        });
    }
    return (0, r.jsx)(o.Heading, {
        color: T ? "none" : "always-white",
        variant: g ?? "heading-md/medium",
        className: s()(x.SW, n),
        children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", { className: T ? void 0 : x.q9, children: A }), " / ", (0, m.FJ)(i)],
        }),
    });
};
