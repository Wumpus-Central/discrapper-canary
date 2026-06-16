"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(462887),
    l = n(289873),
    u = n(834730),
    c = n(534514),
    d = n(736653),
    _ = n(97352),
    h = n(428262),
    f = n(788868),
    p = n(378874);
let E = function (e) {
    let {
            subscriptionTier: t,
            interval: n = f.WT.MONTH,
            className: r,
            isGift: E = !1,
            variant: m,
            priceOptions: g,
            isApplicationHome: A,
            enablePremiumBrandRefresh: I,
        } = e,
        T = (0, a.bG)([_.A], () => _.A.isLoadedForSKUs([t])),
        S = (0, o.q)((0, d.Ay)());
    if (!T) return (0, i.jsx)(l.y, { type: l.y.Type.PULSING_ELLIPSIS, className: p.xB });
    let y = _.A.getForSkuAndInterval((0, h.mH)(t), n),
        C = null != y ? (0, h.sS)(y, g, !1, E) : null;
    if (I) {
        let e = n === f.WT.YEAR;
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(u.E, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: e ? "text-muted" : S ? "text-strong" : "always-white",
                    tag: "span",
                    children: (0, i.jsx)("span", { children: C }),
                }),
                (0, i.jsxs)(u.E, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, h.FJ)(n)],
                }),
            ],
        });
    }
    return (0, i.jsx)(c.D, {
        color: A ? "none" : "always-white",
        variant: m ?? "heading-md/medium",
        className: s()(p.SW, r),
        children: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("span", { className: A ? void 0 : p.q9, children: C }), " / ", (0, h.FJ)(n)],
        }),
    });
};
