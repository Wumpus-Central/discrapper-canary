n.d(t, {
    KJ: () => f,
    UV: () => u,
    vJ: () => s
});
var r = n(200651);
n(192379);
var o = n(120356),
    c = n.n(o),
    l = n(726542),
    i = n(981631),
    a = n(471507);
function s(e) {
    return null != e && Object.values(i.ABu).includes(e) ? e : null;
}
function u(e) {
    let { children: t, platformType: n } = e,
        o = l.Z.get(n);
    return (0, r.jsx)('div', {
        className: a.verifyConnectedAccount,
        children: (0, r.jsxs)('div', {
            children: [(0, r.jsx)(f, { platform: o }), t]
        })
    });
}
function f(e) {
    let { platform: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: c()(a.logos, n),
        children: [
            (0, r.jsx)('div', { className: c()(a.logo, a.logoDiscord) }),
            (0, r.jsx)('div', { className: a.logosDivider }),
            (0, r.jsx)('div', {
                className: a.logo,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') }
            })
        ]
    });
}
