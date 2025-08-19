n.d(t, { Z: () => a });
var i = n(951288);
n(647438);
var r = n(481060),
    s = n(72572);
let a = (e) => {
    let { enablePremiumBrandRefresh: t = !1, text: n } = e;
    return (0, i.jsx)("div", {
        className: t ? s.premiumBrandRefreshOfferPill : s.offerPill,
        children: (0, i.jsx)(r.Text, {
            variant: t ? "text-sm/bold" : "text-xs/bold",
            color: "always-white",
            children: n,
        }),
    });
};
