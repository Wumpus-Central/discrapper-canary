n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(582754),
    l = n(397927),
    c = n(736653),
    u = n(97352),
    d = n(927578),
    f = n(788868),
    p = n(696389);
let _ = function (e) {
    let {
            subscriptionTier: t,
            interval: n = f.WT.MONTH,
            className: i,
            isGift: _ = !1,
            variant: h,
            priceOptions: m,
            isApplicationHome: g,
            enablePremiumBrandRefresh: E,
        } = e,
        b = (0, s.bG)([u.A], () => u.A.isLoadedForSKUs([t])),
        y = (0, o.qB)((0, c.Ay)());
    if (!b)
        return (0, r.jsx)(l.y$y, {
            type: l.y$y.Type.PULSING_ELLIPSIS,
            className: p.xB,
        });
    let O = u.A.getForSkuAndInterval((0, d.mH)(t), n),
        A = null != O ? (0, d.sS)(O, m, !1, _) : null;
    if (E) {
        let e = n === f.WT.YEAR,
            t = e ? "text-muted" : y ? "text-strong" : "always-white";
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.Text, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: t,
                    tag: "span",
                    children: (0, r.jsx)("span", { children: A }),
                }),
                (0, r.jsxs)(l.Text, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, d.FJ)(n)],
                }),
            ],
        });
    }
    return (0, r.jsx)(l.Heading, {
        color: g ? "none" : "always-white",
        variant: null != h ? h : "heading-md/medium",
        className: a()(p.SW, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("span", {
                    className: g ? void 0 : p.q9,
                    children: A,
                }),
                " / ",
                (0, d.FJ)(n),
            ],
        }),
    });
};
