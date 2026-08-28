i.d(t, { A: () => o, v: () => a.nu });
var s = i(477900);
i(582128);
var n = i(503698),
    r = i.n(n),
    l = i(709066),
    a = i(705751),
    c = i(646810);
let o = function (e) {
    let {
        name: t,
        discriminator: i,
        invertBotTagColor: n,
        nameColor: a,
        className: o,
        botType: d,
        usernameClass: u,
        discriminatorClass: h,
        botClass: j,
        botVerified: x = !1,
        style: v,
        useRemSizes: m = !1,
        usernameIcon: f,
        guildTag: N,
    } = e;
    return (0, s.jsxs)("div", {
        className: r()(o, c.oM),
        style: v,
        children: [
            (0, s.jsxs)("span", {
                className: r()(c.Xh, u),
                style: null != a ? { color: a } : void 0,
                children: [f, t],
            }),
            N,
            null != i ? (0, s.jsxs)("span", { className: h ?? void 0, children: ["#", i] }) : null,
            null != d
                ? (0, s.jsx)(l.A, { type: d, invertColor: n, className: r()(j, c.Od), verified: x, useRemSizes: m })
                : null,
        ],
    });
};
