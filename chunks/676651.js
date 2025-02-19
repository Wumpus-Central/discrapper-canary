n.d(t, { h: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(302463);
function o(e, t) {
    (0, r.ZDy)(
        async () => {
            let { default: r } = await n.e('73628').then(n.bind(n, 458961));
            return (n) =>
                (0, i.jsx)(
                    r,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })(
                        {
                            guildId: e,
                            productId: t
                        },
                        n
                    )
                );
        },
        { modalKey: l.Yz }
    );
}
