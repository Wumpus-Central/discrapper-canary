"use strict";
n.d(t, { A: () => d, v: () => l.nu });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(709066),
    l = n(705751),
    o = n(786627);
let d = function (e) {
    let {
        name: t,
        discriminator: n,
        invertBotTagColor: r,
        nameColor: l,
        className: d,
        botType: c,
        usernameClass: u,
        discriminatorClass: _,
        botClass: E,
        botVerified: A = !1,
        style: h,
        useRemSizes: I = !1,
        usernameIcon: f,
        guildTag: p,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(d, o.oM),
        style: h,
        children: [
            (0, i.jsxs)("span", {
                className: a()(o.Xh, u),
                style: null != l ? { color: l } : void 0,
                children: [f, t],
            }),
            p,
            null != n ? (0, i.jsxs)("span", { className: _ ?? void 0, children: ["#", n] }) : null,
            null != c
                ? (0, i.jsx)(s.A, { type: c, invertColor: r, className: a()(E, o.Od), verified: A, useRemSizes: I })
                : null,
        ],
    });
};
