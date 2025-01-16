t.d(n, {
    KJ: function () {
        return f;
    },
    UV: function () {
        return s;
    },
    vJ: function () {
        return u;
    }
});
var r = t(200651);
t(192379);
var c = t(120356),
    o = t.n(c),
    i = t(726542),
    l = t(981631),
    a = t(978994);
function u(e) {
    return null != e && Object.values(l.ABu).includes(e) ? e : null;
}
function s(e) {
    let { children: n, platformType: t } = e,
        c = i.Z.get(t);
    return (0, r.jsx)('div', {
        className: a.verifyConnectedAccount,
        children: (0, r.jsxs)('div', {
            children: [(0, r.jsx)(f, { platform: c }), n]
        })
    });
}
function f(e) {
    let { platform: n, className: t } = e;
    return (0, r.jsxs)('div', {
        className: o()(a.logos, t),
        children: [
            (0, r.jsx)('div', { className: o()(a.logo, a.logoDiscord) }),
            (0, r.jsx)('div', { className: a.logosDivider }),
            (0, r.jsx)('div', {
                className: a.logo,
                style: { backgroundImage: 'url("'.concat(n.icon.whiteSVG, '")') }
            })
        ]
    });
}
