r.d(t, { A: () => T });
var i = r(627968);
r(64700);
var n = r(503698),
    a = r.n(n),
    s = r(17928),
    l = r(462887),
    o = r(289873),
    c = r(834730),
    d = r(534514),
    u = r(736653),
    m = r(97352),
    g = r(927578),
    x = r(788868),
    p = r(378874);
let T = function (e) {
    let {
            subscriptionTier: t,
            interval: r = x.WT.MONTH,
            className: n,
            isGift: T = !1,
            variant: h,
            priceOptions: I,
            isApplicationHome: f,
            enablePremiumBrandRefresh: j,
        } = e,
        A = (0, s.bG)([m.A], () => m.A.isLoadedForSKUs([t])),
        v = (0, l.q)((0, u.Ay)());
    if (!A) return (0, i.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: p.xB });
    let R = m.A.getForSkuAndInterval((0, g.mH)(t), r),
        _ = null != R ? (0, g.sS)(R, I, !1, T) : null;
    if (j) {
        let e = r === x.WT.YEAR;
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(c.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : v ? "text-strong" : "always-white",
                    tag: "span",
                    children: (0, i.jsx)("span", { children: _ }),
                }),
                (0, i.jsxs)(c.E, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, g.FJ)(r)],
                }),
            ],
        });
    }
    return (0, i.jsx)(d.D, {
        color: f ? "none" : "always-white",
        variant: h ?? "heading-md/medium",
        className: a()(p.SW, n),
        children: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", { className: f ? void 0 : p.q9, children: _ }), " / ", (0, g.FJ)(r)],
        }),
    });
};
