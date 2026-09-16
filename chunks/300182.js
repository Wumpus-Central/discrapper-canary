l.d(t, { A: () => o });
var n = l(477900);
l(582128);
var r = l(866665),
    i = l(408278),
    a = l(597770),
    s = l(375708);
let o = function (e) {
    let { onGift: t, tooltipDelay: l = 250 } = e;
    return (0, n.jsx)(r.m, {
        text: s.intl.string(s.t["JCFN/y"]),
        delay: l,
        children: (0, n.jsx)(i.K, {
            "aria-label": s.intl.string(s.t["JCFN/y"]),
            variant: "primary",
            icon: a.GiftIcon,
            size: "md",
            onClick: t,
        }),
    });
};
