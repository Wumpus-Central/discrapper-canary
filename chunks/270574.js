n.d(t, { A: () => o, v: () => r.nu });
var i = n(477900);
n(582128);
var s = n(503698),
    a = n.n(s),
    l = n(709066),
    r = n(705751),
    E = n(931531);
let o = function (e) {
    let {
        name: t,
        discriminator: n,
        invertBotTagColor: s,
        nameColor: r,
        className: o,
        botType: c,
        usernameClass: d,
        discriminatorClass: _,
        botClass: S,
        botVerified: u = !1,
        style: A,
        useRemSizes: I = !1,
        usernameIcon: h,
        guildTag: T,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(o, E.oM),
        style: A,
        children: [
            (0, i.jsxs)("span", {
                className: a()(E.Xh, d),
                style: null != r ? { color: r } : void 0,
                children: [h, t],
            }),
            T,
            null != n ? (0, i.jsxs)("span", { className: _ ?? void 0, children: ["#", n] }) : null,
            null != c
                ? (0, i.jsx)(l.A, { type: c, invertColor: s, className: a()(S, E.Od), verified: u, useRemSizes: I })
                : null,
        ],
    });
};
