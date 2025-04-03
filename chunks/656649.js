o.d(t, {
    KJ: () => u,
    UV: () => d,
    vJ: () => c
});
var r = o(200651);
o(192379);
var n = o(120356),
    a = o.n(n),
    s = o(726542),
    l = o(981631),
    i = o(64684);
function c(e) {
    return null != e && Object.values(l.ABu).includes(e) ? e : null;
}
function d(e) {
    let { children: t, platformType: o } = e,
        n = s.Z.get(o);
    return (0, r.jsx)('div', {
        className: i.verifyConnectedAccount,
        children: (0, r.jsxs)('div', {
            children: [(0, r.jsx)(u, { platform: n }), t]
        })
    });
}
function u(e) {
    let { platform: t, className: o } = e;
    return (0, r.jsxs)('div', {
        className: a()(i.logos, o),
        children: [
            (0, r.jsx)('div', { className: a()(i.logo, i.logoDiscord) }),
            (0, r.jsx)('div', { className: i.logosDivider }),
            (0, r.jsx)('div', {
                className: i.logo,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') }
            })
        ]
    });
}
