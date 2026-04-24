"use strict";
n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var i = n(990078),
    l = n(408278),
    r = n(597770),
    s = n(985018);
let c = (e) => {
    let { onGift: t, tooltipDelay: n = 250 } = e;
    return (0, a.jsx)(i.m, {
        text: s.intl.string(s.t["JCFN/y"]),
        delay: n,
        children: (0, a.jsx)(l.K, {
            "aria-label": s.intl.string(s.t["JCFN/y"]),
            variant: "primary",
            icon: r.o,
            size: "md",
            onClick: t,
        }),
    });
};
