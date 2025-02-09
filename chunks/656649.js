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
    i = n(981631),
    a = n(872407);
function s(e) {
    return null != e && Object.values(i.ABu).includes(e) ? e : null;
}
function u(e) {
    let { children: t, platformType: n } = e,
        c = l.Z.get(n);
    return (0, r.jsx)('div', {
        className: a.verifyConnectedAccount,
        children: (0, r.jsxs)('div', {
            children: [(0, r.jsx)(d, { platform: c }), t]
        })
    });
}
function d(e) {
    let { platform: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: o()(a.logos, n),
        children: [
            (0, r.jsx)('div', { className: o()(a.logo, a.logoDiscord) }),
            (0, r.jsx)('div', { className: a.logosDivider }),
            (0, r.jsx)('div', {
                className: a.logo,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') }
            })
        ]
    });
}
