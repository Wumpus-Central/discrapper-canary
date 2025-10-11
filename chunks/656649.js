o.d(t, {
    KJ: () => u,
    UV: () => d,
    vJ: () => c,
});
var n = o(951288);
o(647438);
var r = o(120356),
    a = o.n(r),
    l = o(726542),
    i = o(981631),
    s = o(698706);
function c(e) {
    return null != e && Object.values(i.ABu).includes(e) ? e : null;
}
function d(e) {
    let { children: t, platformType: o } = e,
        r = l.Z.get(o);
    return (0, n.jsx)("div", {
        className: s.verifyConnectedAccount,
        children: (0, n.jsxs)("div", {
            children: [(0, n.jsx)(u, { platform: r }), t],
        }),
    });
}
function u(e) {
    let { platform: t, className: o } = e;
    return (0, n.jsxs)("div", {
        className: a()(s.logos, o),
        children: [
            (0, n.jsx)("div", { className: a()(s.logo, s.logoDiscord) }),
            (0, n.jsx)("div", { className: s.logosDivider }),
            (0, n.jsx)("div", {
                className: s.logo,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') },
            }),
        ],
    });
}
