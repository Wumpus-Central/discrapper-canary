"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(301679),
    s = n(518477),
    a = n(985018);
function o(e) {
    let { children: t, targetElementRef: n, delay: o, badgeIcon: l, premiumGuildSince: u } = e,
        c = (0, s.L7)(l),
        d = a.intl.string(a.t.OAq2KW).toLocaleUpperCase(),
        _ = a.intl.formatToPlainString(a.t.rTUArF, { date: u });
    return (0, r.jsx)(i.A, {
        targetElementRef: n,
        estimatedTooltipHeight: 220,
        delay: o,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: c, aspectRatio: "6/4" },
        title: d,
        body: _,
        children: t,
    });
}
