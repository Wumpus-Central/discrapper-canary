"use strict";
n.d(t, { A: () => u, v: () => o.nu });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(709066),
    o = n(705751),
    l = n(174616);
let u = (e) => {
    let {
        name: t,
        discriminator: n,
        invertBotTagColor: i,
        nameColor: o,
        className: u,
        botType: c,
        usernameClass: d,
        discriminatorClass: _,
        botClass: f,
        botVerified: p = !1,
        style: h,
        useRemSizes: m = !1,
        usernameIcon: g,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(u, l.oM),
        style: h,
        children: [
            (0, r.jsxs)("span", {
                className: a()(l.Xh, d),
                style: null != o ? { color: o } : void 0,
                children: [g, t],
            }),
            null != n ? (0, r.jsxs)("span", { className: _ ?? void 0, children: ["#", n] }) : null,
            null != c
                ? (0, r.jsx)(s.A, { type: c, invertColor: i, className: a()(f, l.Od), verified: p, useRemSizes: m })
                : null,
        ],
    });
};
