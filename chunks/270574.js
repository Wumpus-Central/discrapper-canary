l.d(s, { A: () => d, v: () => t.nu });
var n = l(477900);
l(582128);
var i = l(503698),
    a = l.n(i),
    r = l(709066),
    t = l(705751),
    o = l(646810);
let d = function (e) {
    let {
        name: s,
        discriminator: l,
        invertBotTagColor: i,
        nameColor: t,
        className: d,
        botType: u,
        usernameClass: c,
        discriminatorClass: m,
        botClass: p,
        botVerified: y = !1,
        style: f,
        useRemSizes: h = !1,
        usernameIcon: v,
        guildTag: j,
    } = e;
    return (0, n.jsxs)("div", {
        className: a()(d, o.oM),
        style: f,
        children: [
            (0, n.jsxs)("span", {
                className: a()(o.Xh, c),
                style: null != t ? { color: t } : void 0,
                children: [v, s],
            }),
            j,
            null != l ? (0, n.jsxs)("span", { className: m ?? void 0, children: ["#", l] }) : null,
            null != u
                ? (0, n.jsx)(r.A, { type: u, invertColor: i, className: a()(p, o.Od), verified: y, useRemSizes: h })
                : null,
        ],
    });
};
