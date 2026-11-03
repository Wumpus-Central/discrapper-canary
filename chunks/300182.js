t.d(l, { A: () => s });
var n = t(477900);
t(582128);
var r = t(866665),
    a = t(408278),
    i = t(597770),
    o = t(105292);
let s = function (e) {
    let { onGift: l, tooltipDelay: t = 250, tooltipAriaHidden: s = !1, tabIndex: c } = e;
    return (0, n.jsx)(r.m, {
        text: o.intl.string(o.t["JCFN/y"]),
        delay: t,
        ariaHidden: s,
        children: (0, n.jsx)(a.K, {
            "aria-label": o.intl.string(o.t["JCFN/y"]),
            variant: "primary",
            icon: i.GiftIcon,
            size: "md",
            onClick: l,
            tabIndex: c,
        }),
    });
};
