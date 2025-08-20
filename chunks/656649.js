o.d(t, {
    KJ: () => u,
    UV: () => d,
    vJ: () => c,
});
var r = o(951288);
o(647438);
var n = o(120356),
    a = o.n(n),
    l = o(726542),
    i = o(981631),
    s = o(698706);
function c(e) {
    return null != e && Object.values(i.ABu).includes(e) ? e : null;
}
function d(e) {
    let { children: t, platformType: o } = e,
        n = l.Z.get(o);
    return (0, r.jsx)("div", {
        className: s.verifyConnectedAccount,
        children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(u, { platform: n }), t],
        }),
    });
}
function u(e) {
    let { platform: t, className: o } = e;
    return (0, r.jsxs)("div", {
        className: a()(s.logos, o),
        children: [
            (0, r.jsx)("div", { className: a()(s.logo, s.logoDiscord) }),
            (0, r.jsx)("div", { className: s.logosDivider }),
            (0, r.jsx)("div", {
                className: s.logo,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') },
            }),
        ],
    });
}
