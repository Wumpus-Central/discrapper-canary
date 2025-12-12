n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(481060),
    o = n(72572);
let a = (e) => {
    let { enablePremiumBrandRefresh: t = !1, text: n } = e;
    return (0, r.jsx)("div", {
        className: t ? o.premiumBrandRefreshOfferPill : o.offerPill,
        children: (0, r.jsx)(i.Text, {
            variant: t ? "text-sm/bold" : "text-xs/bold",
            color: "always-white",
            children: n,
        }),
    });
};
