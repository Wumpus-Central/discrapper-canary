n.d(s, {
    KJ: () => u,
    UV: () => d,
    vJ: () => c,
});
var l = n(54381);
n(473749);
var r = n(120356),
    t = n.n(r),
    a = n(726542),
    i = n(981631),
    o = n(655860);
function c(e) {
    return null != e && Object.values(i.ABu).includes(e) ? e : null;
}
function d(e) {
    let { children: s, platformType: n } = e,
        r = a.Z.get(n);
    return (0, l.jsx)("div", {
        className: o.verifyConnectedAccount,
        children: (0, l.jsxs)("div", {
            children: [(0, l.jsx)(u, { platform: r }), s],
        }),
    });
}
function u(e) {
    let { platform: s, className: n } = e;
    return (0, l.jsxs)("div", {
        className: t()(o.logos, n),
        children: [
            (0, l.jsx)("div", { className: t()(o.logo, o.logoDiscord) }),
            (0, l.jsx)("div", { className: o.logosDivider }),
            (0, l.jsx)("div", {
                className: o.logo,
                style: { backgroundImage: 'url("'.concat(s.icon.whiteSVG, '")') },
            }),
        ],
    });
}
