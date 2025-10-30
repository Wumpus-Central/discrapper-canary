n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(641777);
let o = (e) => {
    let { enablePremiumBrandRefresh: t = !1, text: n } = e;
    return (0, r.jsx)("div", {
        className: t ? a.premiumBrandRefreshOfferPill : a.offerPill,
        children: (0, r.jsx)(i.Text, {
            variant: t ? "text-sm/bold" : "text-xs/bold",
            color: "always-white",
            children: n,
        }),
    });
};
