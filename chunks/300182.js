l.d(t, { A: () => o });
var r = l(477900);
l(582128);
var n = l(866665),
    a = l(408278),
    i = l(597770),
    s = l(375708);
let o = function (e) {
    let { onGift: t, tooltipDelay: l = 250 } = e;
    return (0, r.jsx)(n.m, {
        text: s.intl.string(s.t["JCFN/y"]),
        delay: l,
        children: (0, r.jsx)(a.K, {
            "aria-label": s.intl.string(s.t["JCFN/y"]),
            variant: "primary",
            icon: i.GiftIcon,
            size: "md",
            onClick: t,
        }),
    });
};
