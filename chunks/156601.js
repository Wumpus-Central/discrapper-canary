n.d(t, { A: () => I });
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(17928),
    a = n(462887),
    o = n(289873),
    c = n(834730),
    u = n(534514),
    m = n(736653),
    d = n(97352),
    g = n(428262),
    x = n(202541),
    T = n(378874);
let I = function (e) {
    let {
            subscriptionTier: t,
            interval: n = x.WT.MONTH,
            className: i,
            isGift: I = !1,
            variant: p,
            priceOptions: h,
            isApplicationHome: f,
            enablePremiumBrandRefresh: j,
        } = e,
        A = (0, s.bG)([d.A], () => d.A.isLoadedForSKUs([t])),
        E = (0, a.q)((0, m.Ay)());
    if (!A) return (0, r.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS, className: T.xB });
    let _ = d.A.getForSkuAndInterval((0, g.mH)(t), n),
        P = null != _ ? (0, g.sS)(_, h, !1, I) : null;
    if (j) {
        let e = n === x.WT.YEAR;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : E ? "text-strong" : "always-white",
                    tag: "span",
                    children: (0, r.jsx)("span", { children: P }),
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
        color: f ? "none" : "always-white",
        variant: p ?? "heading-md/medium",
        className: l()(T.SW, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("span", { className: f ? void 0 : T.q9, children: P }), " / ", (0, g.FJ)(n)],
        }),
    });
};
