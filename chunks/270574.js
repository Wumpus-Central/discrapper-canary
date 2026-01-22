n.d(t, {
    A: () => c,
    v: () => o.nu,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(709066),
    o = n(705751),
    l = n(174616);
let c = (e) => {
    let {
        name: t,
        discriminator: n,
        invertBotTagColor: i,
        nameColor: o,
        className: c,
        botType: u,
        usernameClass: d,
        discriminatorClass: f,
        botClass: p,
        botVerified: _ = !1,
        style: h,
        useRemSizes: m = !1,
        usernameIcon: g,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(c, l.oM),
        style: h,
        children: [
            (0, r.jsxs)("span", {
                className: a()(l.Xh, d),
                style: null != o ? { color: o } : void 0,
                children: [g, t],
            }),
            null != n
                ? (0, r.jsxs)("span", {
                      className: null != f ? f : void 0,
                      children: ["#", n],
                  })
                : null,
            null != u
                ? (0, r.jsx)(s.A, {
                      type: u,
                      invertColor: i,
                      className: a()(p, l.Od),
                      verified: _,
                      useRemSizes: m,
                  })
                : null,
        ],
    });
};
