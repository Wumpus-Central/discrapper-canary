n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(509545),
    d = n(74538),
    f = n(474936),
    p = n(274065);
let _ = function (e) {
    let {
            subscriptionTier: t,
            interval: n = f.rV.MONTH,
            className: i,
            isGift: _ = !1,
            variant: m,
            priceOptions: h,
            isApplicationHome: g,
            enablePremiumBrandRefresh: E,
        } = e,
        b = (0, o.e7)([u.Z], () => u.Z.isLoadedForSKUs([t])),
        y = (0, s.ap)((0, c.ZP)());
    if (!b)
        return (0, r.jsx)(l.$jN, {
            type: l.$jN.Type.PULSING_ELLIPSIS,
            className: p.priceSpinner,
        });
    let O = u.Z.getForSkuAndInterval((0, d.Wz)(t), n),
        v = null != O ? (0, d.gy)(O, h, !1, _) : null;
    if (E) {
        let e = n === f.rV.YEAR,
            t = e ? "text-muted" : y ? "header-primary" : "always-white";
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(l.Text, {
                    variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
                    color: t,
                    tag: "span",
                    children: (0, r.jsx)("span", { children: v }),
                }),
                (0, r.jsxs)(l.Text, {
                    variant: "text-xs/medium",
                    tag: "span",
                    color: "text-muted",
                    children: ["/", (0, d.eP)(n)],
                }),
            ],
        });
    }
    return (0, r.jsx)(l.Heading, {
        color: g ? "none" : "always-white",
        variant: null != m ? m : "heading-md/medium",
        className: a()(p.pricePerInterval, i),
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("span", {
                    className: g ? void 0 : p.price,
                    children: v,
                }),
                " / ",
                (0, d.eP)(n),
            ],
        }),
    });
};
