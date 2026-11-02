t.d(l, { A: () => o });
var n = t(477900);
t(582128);
var r = t(866665),
    a = t(408278),
    i = t(597770),
    s = t(105292);
let o = function (e) {
    let { onGift: l, tooltipDelay: t = 250, tooltipAriaHidden: o = !1, tabIndex: c } = e;
    return (0, n.jsx)(r.m, {
        text: s.intl.string(s.t["JCFN/y"]),
        delay: t,
        ariaHidden: o,
        children: (0, n.jsx)(a.K, {
            "aria-label": s.intl.string(s.t["JCFN/y"]),
            variant: "primary",
            icon: i.GiftIcon,
            size: "md",
            onClick: l,
            tabIndex: c,
        }),
    });
};
