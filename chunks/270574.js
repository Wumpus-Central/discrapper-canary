l.d(s, { A: () => o, v: () => t.nu });
var i = l(477900);
l(582128);
var n = l(503698),
    a = l.n(n),
    r = l(709066),
    t = l(705751),
    d = l(646810);
let o = function (e) {
    let {
        name: s,
        discriminator: l,
        invertBotTagColor: n,
        nameColor: t,
        className: o,
        botType: u,
        usernameClass: c,
        discriminatorClass: m,
        botClass: p,
        botVerified: y = !1,
        style: f,
        useRemSizes: v = !1,
        usernameIcon: N,
        guildTag: j,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(o, d.oM),
        style: f,
        children: [
            (0, i.jsxs)("span", {
                className: a()(d.Xh, c),
                style: null != t ? { color: t } : void 0,
                children: [N, s],
            }),
            j,
            null != l ? (0, i.jsxs)("span", { className: m ?? void 0, children: ["#", l] }) : null,
            null != u
                ? (0, i.jsx)(r.A, { type: u, invertColor: n, className: a()(p, d.Od), verified: y, useRemSizes: v })
                : null,
        ],
    });
};
