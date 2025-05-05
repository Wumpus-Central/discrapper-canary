n.d(t, {
    KJ: () => d,
    UV: () => u,
    vJ: () => s
});
var r = n(200651);
n(192379);
var c = n(120356),
    o = n.n(c),
    l = n(726542),
    a = n(981631),
    i = n(64684);
function s(e) {
    return null != e && Object.values(a.ABu).includes(e) ? e : null;
}
function u(e) {
    let { children: t, platformType: n } = e,
        c = l.Z.get(n);
    return (0, r.jsx)('div', {
        className: i.verifyConnectedAccount,
        children: (0, r.jsxs)('div', {
            children: [(0, r.jsx)(d, { platform: c }), t]
        })
    });
}
function d(e) {
    let { platform: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(i.logos, n),
        children: [
            (0, r.jsx)('div', { className: o()(i.logo, i.logoDiscord) }),
            (0, r.jsx)('div', { className: i.logosDivider }),
            (0, r.jsx)('div', {
                className: i.logo,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') }
            })
        ]
    });
}
