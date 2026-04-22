t.d(n, { A: () => s });
var l = t(627968);
t(64700);
var r = t(301679),
    i = t(518477),
    a = t(985018);
function s(e) {
    let { children: n, targetElementRef: t, delay: s, badgeIcon: o, premiumGuildSince: d } = e,
        u = (0, i.L7)(o),
        c = a.intl.string(a.t.OAq2KW).toLocaleUpperCase(),
        m = a.intl.formatToPlainString(a.t.rTUArF, { date: d });
    return (0, l.jsx)(r.A, {
        targetElementRef: t,
        estimatedTooltipHeight: 220,
        delay: s,
        gradientColor: "purple",
        size: "lg",
        graphic: { type: "image", src: u, aspectRatio: "6/4" },
        title: c,
        body: m,
        children: n,
    });
}
