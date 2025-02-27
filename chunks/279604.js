t.d(n, {
    K: () => l,
    Z: () => d
}),
    t(47120),
    t(773603);
var i = t(200651),
    r = t(192379),
    o = t(481060),
    a = t(713081),
    s = t(535396);
function c(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function l(e) {
    r.useEffect(() => {
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
    }, [e]);
}
function d(e, n) {
    let [l, d] = r.useState(!1),
        [u, x] = r.useState(void 0),
        v = r.useCallback(
            (t) => {
                let i = t ? a.H6 : a.Th;
                return (
                    d(!0),
                    x(void 0),
                    i(e, n.skuId)
                        .catch((e) => {
                            var n;
                            throw (x(null !== (n = e.body.message) && void 0 !== n ? n : void 0), e);
                        })
                        .finally(() => {
                            d(!1);
                        })
                );
            },
            [e, n.skuId]
        ),
        p = r.useCallback(
            (e) => (
                e.stopPropagation(),
                v(!0).then(() => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await t.e('13965').then(t.bind(t, 666083));
                        return (t) => (0, i.jsx)(e, c({ powerup: n }, t));
                    });
                })
            ),
            [v, n]
        ),
        b = r.useCallback((e) => (e.stopPropagation(), v(!1)), [v]);
    return {
        isLoading: l,
        error: u,
        onActivate: p,
        onDeactivate: b,
        onShowDeactivate: r.useCallback(
            (r) => {
                r.stopPropagation(),
                    (0, o.ZDy)(async () => {
                        let { default: r } = await t.e('31924').then(t.bind(t, 625651));
                        return (t) =>
                            (0, i.jsx)(
                                r,
                                c(
                                    {
                                        guildId: e,
                                        powerup: n
                                    },
                                    t
                                )
                            );
                    });
            },
            [e, n]
        ),
        onShowMore: r.useCallback(() => {
            (0, o.ZDy)(async () => {
                switch (n.type) {
                    case s.U.LEVEL:
                        let { default: r } = await t.e('99014').then(t.bind(t, 271224));
                        return (t) =>
                            (0, i.jsx)(
                                r,
                                c(
                                    {
                                        guildId: e,
                                        powerup: n
                                    },
                                    t
                                )
                            );
                    case s.U.PERK: {
                        let { default: r } = await t.e('78718').then(t.bind(t, 640139));
                        return (t) =>
                            (0, i.jsx)(
                                r,
                                c(
                                    {
                                        guildId: e,
                                        powerup: n
                                    },
                                    t
                                )
                            );
                    }
                }
            });
        }, [e, n])
    };
}
