n.d(t, {
    q: () => a,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(500208);

function a(e, t) {
    (0, i.mMO)(
        async () => {
            let { default: i } = await Promise.all([n.e("49862"), n.e("67096")]).then(n.bind(n, 559947));
            return (n) =>
                (0, r.jsx)(
                    i,
                    (function (e) {
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
                    })(
                        {
                            guildId: e,
                            productId: t,
                        },
                        n,
                    ),
                );
        },
        {
            modalKey: l.DG,
        },
    );
}
