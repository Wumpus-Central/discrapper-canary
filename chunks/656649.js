n.d(t, {
    KJ: () => d,
    UV: () => s,
    vJ: () => u,
});
var r = n(54381);
n(473749);
var c = n(120356),
    o = n.n(c),
    l = n(726542),
    a = n(981631),
    i = n(734013);
function u(e) {
    return null != e && Object.values(a.ABu).includes(e) ? e : null;
}
function s(e) {
    let { children: t, platformType: n } = e,
        c = l.Z.get(n);
    return (0, r.jsx)("div", {
        className: i.verifyConnectedAccount,
        children: (0, r.jsxs)("div", {
            children: [(0, r.jsx)(d, { platform: c }), t],
        }),
    });
}
function d(e) {
    let { platform: t, className: n } = e;
    return (0, r.jsxs)("div", {
        className: o()(i.logos, n),
        children: [
            (0, r.jsx)("div", { className: o()(i.logo, i.logoDiscord) }),
            (0, r.jsx)("div", { className: i.logosDivider }),
            (0, r.jsx)("div", {
                className: i.logo,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') },
            }),
        ],
    });
}
