o.d(t, {
    KJ: () => u,
    UV: () => d,
    vJ: () => c
});
var n = o(200651);
o(192379);
var r = o(120356),
    a = o.n(r),
    l = o(726542),
    s = o(981631),
    i = o(64684);
function c(e) {
    return null != e && Object.values(s.ABu).includes(e) ? e : null;
}
function d(e) {
    let { children: t, platformType: o } = e,
        r = l.Z.get(o);
    return (0, n.jsx)('div', {
        className: i.verifyConnectedAccount,
        children: (0, n.jsxs)('div', {
            children: [(0, n.jsx)(u, { platform: r }), t]
        })
    });
}
function u(e) {
    let { platform: t, className: o } = e;
    return (0, n.jsxs)('div', {
        className: a()(i.logos, o),
        children: [
            (0, n.jsx)('div', { className: a()(i.logo, i.logoDiscord) }),
            (0, n.jsx)('div', { className: i.logosDivider }),
            (0, n.jsx)('div', {
                className: i.logo,
                style: { backgroundImage: 'url("'.concat(t.icon.whiteSVG, '")') }
            })
        ]
    });
}
