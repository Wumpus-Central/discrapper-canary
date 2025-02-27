t.d(n, {
    K: () => c,
    Z: () => l
}),
    t(47120),
    t(773603);
var i = t(200651),
    r = t(192379),
    o = t(481060),
    a = t(713081);
function s(e) {
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
function c(e) {
    r.useEffect(() => {
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
    }, [e]);
}
function l(e, n) {
    let [c, l] = r.useState(!1),
        [d, u] = r.useState(void 0),
        x = r.useCallback(
            (t) => {
                let i = t ? a.H6 : a.Th;
                return (
                    l(!0),
                    u(void 0),
                    i(e, n.skuId)
                        .catch((e) => {
                            var n;
                            throw (u(null !== (n = e.body.message) && void 0 !== n ? n : void 0), e);
                        })
                        .finally(() => {
                            l(!1);
                        })
                );
            },
            [e, n.skuId]
        ),
        v = r.useCallback(
            (e) => (
                e.stopPropagation(),
                x(!0).then(() => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await t.e('13965').then(t.bind(t, 666083));
                        return (t) => (0, i.jsx)(e, s({ powerup: n }, t));
                    });
                })
            ),
            [x, n]
        ),
        p = r.useCallback((e) => (e.stopPropagation(), x(!1)), [x]);
    return {
        isLoading: c,
        error: d,
        onActivate: v,
        onDeactivate: p,
        onShowDeactivate: r.useCallback(
            (r) => {
                r.stopPropagation(),
                    (0, o.ZDy)(async () => {
                        let { default: r } = await t.e('31924').then(t.bind(t, 625651));
                        return (t) =>
                            (0, i.jsx)(
                                r,
                                s(
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
                let { default: r } = await t.e('78718').then(t.bind(t, 640139));
                return (t) =>
                    (0, i.jsx)(
                        r,
                        s(
                            {
                                guildId: e,
                                powerup: n
                            },
                            t
                        )
                    );
            });
        }, [e, n])
    };
}
