t.d(l, { A: () => o });
var r = t(477900);
t(582128);
var n = t(866665),
    a = t(408278),
    i = t(597770),
    s = t(375708);
let o = function (e) {
    let { onGift: l, tooltipDelay: t = 250 } = e;
    return (0, r.jsx)(n.m, {
        text: s.intl.string(s.t["JCFN/y"]),
        delay: t,
        children: (0, r.jsx)(a.K, {
            "aria-label": s.intl.string(s.t["JCFN/y"]),
            variant: "primary",
            icon: i.GiftIcon,
            size: "md",
            onClick: l,
        }),
    });
};
