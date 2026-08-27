i.d(t, { A: () => _, v: () => l.nu });
var E = i(477900);
i(582128);
var s = i(503698),
    n = i.n(s),
    r = i(709066),
    l = i(705751),
    a = i(646810);
let _ = function (e) {
    let {
        name: t,
        discriminator: i,
        invertBotTagColor: s,
        nameColor: l,
        className: _,
        botType: S,
        usernameClass: A,
        discriminatorClass: c,
        botClass: o,
        botVerified: T = !1,
        style: I,
        useRemSizes: d = !1,
        usernameIcon: R,
        guildTag: N,
    } = e;
    return (0, E.jsxs)("div", {
        className: n()(_, a.oM),
        style: I,
        children: [
            (0, E.jsxs)("span", {
                className: n()(a.Xh, A),
                style: null != l ? { color: l } : void 0,
                children: [R, t],
            }),
            N,
            null != i ? (0, E.jsxs)("span", { className: c ?? void 0, children: ["#", i] }) : null,
            null != S
                ? (0, E.jsx)(r.A, { type: S, invertColor: s, className: n()(o, a.Od), verified: T, useRemSizes: d })
                : null,
        ],
    });
};
