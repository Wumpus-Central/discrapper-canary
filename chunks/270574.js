l.d(s, { A: () => o, v: () => t.nu });
var i = l(477900);
l(582128);
var a = l(503698),
    n = l.n(a),
    r = l(709066),
    t = l(705751),
    d = l(646810);
let o = function (e) {
    let {
        name: s,
        discriminator: l,
        invertBotTagColor: a,
        nameColor: t,
        className: o,
        botType: u,
        usernameClass: c,
        discriminatorClass: m,
        botClass: p,
        botVerified: y = !1,
        style: N,
        useRemSizes: v = !1,
        usernameIcon: h,
        guildTag: x,
    } = e;
    return (0, i.jsxs)("div", {
        className: n()(o, d.oM),
        style: N,
        children: [
            (0, i.jsxs)("span", {
                className: n()(d.Xh, c),
                style: null != t ? { color: t } : void 0,
                children: [h, s],
            }),
            x,
            null != l ? (0, i.jsxs)("span", { className: m ?? void 0, children: ["#", l] }) : null,
            null != u
                ? (0, i.jsx)(r.A, { type: u, invertColor: a, className: n()(p, d.Od), verified: y, useRemSizes: v })
                : null,
        ],
    });
};
