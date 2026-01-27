r.d(t, {
    A: () => g,
});
var n = r(627968);
r(64700);
var i = r(503698),
    l = r.n(i),
    a = r(311907),
    s = r(582754),
    o = r(397927),
    c = r(736653),
    u = r(97352),
    d = r(927578),
    m = r(788868),
    p = r(696389);
let g = function (e) {
    let {
            subscriptionTier: t,
            interval: r = m.WT.MONTH,
            className: i,
            isGift: g = !1,
            variant: x,
            priceOptions: C,
            isApplicationHome: f,
            enablePremiumBrandRefresh: T,
        } = e,
        h = (0, a.bG)([u.A], () => u.A.isLoadedForSKUs([t])),
        v = (0, s.qB)((0, c.Ay)());
    if (!h)
        return (0, n.jsx)(o.y$y, {
            type: o.y$y.Type.PULSING_ELLIPSIS,
            className: p.xB,
        });
    let j = u.A.getForSkuAndInterval((0, d.mH)(t), r),
        I = null != j ? (0, d.sS)(j, C, !1, g) : null;
    if (T) {
        let e = r === m.WT.YEAR;
        return (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(o.Text, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : v ? "text-strong" : "always-white",
                    tag: "span",
                    children: (0, n.jsx)("span", {
                        children: I,
                    }),
                }),
                (0, n.jsxs)(o.Text, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, d.FJ)(r)],
                }),
            ],
        });
    }
    return (0, n.jsx)(o.Heading, {
        color: f ? "none" : "always-white",
        variant: null != x ? x : "heading-md/medium",
        className: l()(p.SW, i),
        children: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("span", {
                    className: f ? void 0 : p.q9,
                    children: I,
                }),
                " / ",
                (0, d.FJ)(r),
            ],
        }),
    });
};
