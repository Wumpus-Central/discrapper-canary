var i = l(477900);
l(582128);
var n = l(503698),
    a = l.n(n),
    r = l(709066),
    t = l(705751),
    o = l(646810);
l.d(
    s,
    { v: () => t.nu },
    {
        A: function (e) {
            let {
                name: s,
                discriminator: l,
                invertBotTagColor: n,
                nameColor: t,
                className: d,
                botType: u,
                usernameClass: c,
                discriminatorClass: m,
                botClass: p,
                botVerified: y = !1,
                style: h,
                useRemSizes: v = !1,
                usernameIcon: x,
                guildTag: N,
            } = e;
            return (0, i.jsxs)("div", {
                className: a()(d, o.oM),
                style: h,
                children: [
                    (0, i.jsxs)("span", {
                        className: a()(o.Xh, c),
                        style: null != t ? { color: t } : void 0,
                        children: [x, s],
                    }),
                    N,
                    null != l ? (0, i.jsxs)("span", { className: m ?? void 0, children: ["#", l] }) : null,
                    null != u
                        ? (0, i.jsx)(r.A, {
                              type: u,
                              invertColor: n,
                              className: a()(p, o.Od),
                              verified: y,
                              useRemSizes: v,
                          })
                        : null,
                ],
            });
        },
    },
);
