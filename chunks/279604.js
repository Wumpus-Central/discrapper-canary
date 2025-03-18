t.d(n, {
    KE: () => v,
    KT: () => b,
    ZP: () => f
}),
    t(47120),
    t(773603);
var r = t(200651),
    i = t(192379),
    o = t(442837),
    s = t(481060),
    a = t(906732),
    l = t(879892),
    c = t(343649),
    d = t(430824),
    u = t(713081),
    p = t(905128),
    _ = t(535396),
    x = t(981631);
function m(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function b(e) {
    i.useEffect(() => {
        null != e && (0, s.showToast)((0, s.createToast)(e, s.ToastType.FAILURE));
    }, [e]);
}
function v(e, n) {
    (0, s.ZDy)(async () => {
        switch (n.type) {
            case _.Us.LEVEL:
                let { default: i } = await t.e('99014').then(t.bind(t, 271224));
                return (t) =>
                    (0, r.jsx)(
                        i,
                        m(
                            {
                                guildId: e,
                                powerup: n
                            },
                            t
                        )
                    );
            case _.Us.PERK: {
                let { default: i } = await t.e('78718').then(t.bind(t, 640139));
                return (t) =>
                    (0, r.jsx)(
                        i,
                        m(
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
}
function f(e, n) {
    var b;
    let { analyticsLocations: f } = (0, a.ZP)(),
        [g, h] = i.useState(!1),
        [j, Z] = i.useState(void 0),
        C = (0, o.e7)([p.Z], () => {
            var n, t;
            return null !== (t = null === (n = p.Z.getStateForGuild(e)) || void 0 === n ? void 0 : n.appliedBoosts) && void 0 !== t ? t : 0;
        }),
        N = (0, o.e7)([d.Z], () => d.Z.getGuild(e)),
        w = Math.max((null !== (b = null == N ? void 0 : N.premiumSubscriberCount) && void 0 !== b ? b : 0) - C, 0),
        I = i.useCallback(
            (t) => {
                let r = t ? u.H6 : u.Th;
                return (
                    h(!0),
                    Z(void 0),
                    r(e, n.skuId)
                        .catch((e) => {
                            var n;
                            throw (Z(null !== (n = e.body.message) && void 0 !== n ? n : void 0), e);
                        })
                        .finally(() => {
                            h(!1);
                        })
                );
            },
            [e, n.skuId]
        ),
        E = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), null != N)) {
                    if (w < n.cost) {
                        (0, l.u)({
                            analyticsLocation: {
                                page: x.ZY5.GUILD_POWERUPS_OVERVIEW,
                                section: x.jXE.GUILD_POWERUPS_OVERVIEW_CARD
                            },
                            numberOfBoostsToAdd: n.cost - w,
                            analyticsLocations: f,
                            guild: N,
                            intent: n.type === _.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
                            onSubscribeComplete: () =>
                                I(!0).then(() => {
                                    (0, s.ZDy)(async () => {
                                        let { default: e } = await t.e('13965').then(t.bind(t, 666083));
                                        return (t) => (0, r.jsx)(e, m({ powerup: n }, t));
                                    });
                                })
                        });
                        return;
                    }
                    return I(!0).then(() => {
                        (0, s.ZDy)(async () => {
                            let { default: e } = await t.e('13965').then(t.bind(t, 666083));
                            return (t) => (0, r.jsx)(e, m({ powerup: n }, t));
                        });
                    });
                }
            },
            [I, n, w, f, N]
        ),
        y = i.useCallback((e) => (e.stopPropagation(), I(!1)), [I]);
    return {
        isLoading: g,
        error: j,
        onActivate: E,
        onDeactivate: y,
        onShowDeactivate: i.useCallback(
            (i) => {
                i.stopPropagation(),
                    (0, s.ZDy)(async () => {
                        let { default: i } = await t.e('71415').then(t.bind(t, 625651));
                        return (t) =>
                            (0, r.jsx)(
                                i,
                                m(
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
        onShowMore: i.useCallback(() => {
            v(e, n);
        }, [e, n])
    };
}
