n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(535396);
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function o(e, t) {
    (0, i.ZDy)(
        async () => {
            switch (t.type) {
                case l.Us.LEVEL:
                    let { default: i } = await n.e("99014").then(n.bind(n, 271224));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            a(
                                {
                                    guildId: e,
                                    powerup: t,
                                },
                                n,
                            ),
                        );
                case l.Us.PERK: {
                    let { default: i } = await Promise.all([n.e("76692"), n.e("17185")]).then(n.bind(n, 326055));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            a(
                                {
                                    guildId: e,
                                    powerup: t,
                                },
                                n,
                            ),
                        );
                }
            }
        },
        { modalKey: l.H2 },
    );
}
