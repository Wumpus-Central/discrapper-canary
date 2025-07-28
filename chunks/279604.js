(n.d(t, {
    KE: () => _,
    KT: () => b,
    ZP: () => C,
    _C: () => O
}),
    n(388685),
    n(457542));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(906732),
    s = n(879892),
    c = n(343649),
    u = n(430824),
    d = n(823379),
    h = n(713081),
    p = n(905128),
    f = n(535396),
    g = n(981631);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function b(e) {
    i.useEffect(() => {
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
    }, [e]);
}
function _(e, t) {
    (0, o.ZDy)(
        async () => {
            switch (t.type) {
                case f.Us.LEVEL:
                    let { default: i } = await n.e('99014').then(n.bind(n, 271224));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            m(
                                {
                                    guildId: e,
                                    powerup: t
                                },
                                n
                            )
                        );
                case f.Us.PERK: {
                    let { default: i } = await n.e('59256').then(n.bind(n, 326055));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            m(
                                {
                                    guildId: e,
                                    powerup: t
                                },
                                n
                            )
                        );
                }
            }
        },
        { modalKey: f.H2 }
    );
}
function O(e, t) {
    var h;
    let { analyticsLocations: b } = (0, a.ZP)(),
        { onToggle: _ } = y(e, t),
        O = (0, l.e7)([p.Z], () => {
            var t, n;
            return null != (n = null == (t = p.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts) ? n : 0;
        }),
        C = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
        v = (0, l.e7)([p.Z], () => p.Z.getStateForGuild(e)),
        j = i.useMemo(
            () =>
                null != t && t.type === f.Us.LEVEL && null != v
                    ? (function (e, t) {
                          let n = f.T1[e.skuId];
                          return null == n
                              ? []
                              : Object.entries(f.Rx)
                                    .filter((e) => {
                                        let [r, i] = e;
                                        return i === n && null != t.unlockedPowerups[r];
                                    })
                                    .map((e) => {
                                        let [n] = e;
                                        return t.allPowerups[n];
                                    })
                                    .filter(d.lm);
                      })(t, v)
                    : [],
            [t, v]
        ),
        E = null == j ? void 0 : j.reduce((e, t) => e + t.cost, 0),
        S = Math.max((null != (h = null == C ? void 0 : C.premiumSubscriberCount) ? h : 0) - O + E, 0);
    return {
        onActivate: i.useCallback(
            (e) => {
                var i;
                if ((e.stopPropagation(), null != C && null != t))
                    return S < t.cost
                        ? void (0, s.u)({
                              analyticsLocation: {
                                  page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
                                  section: g.jXE.GUILD_POWERUPS_OVERVIEW_CARD
                              },
                              numberOfBoostsToAdd: t.cost - S,
                              analyticsLocations: b,
                              guild: C,
                              intent: t.type === f.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
                              onSubscribeComplete: () => {
                                  var e;
                                  return null == (e = _(!0))
                                      ? void 0
                                      : e.then(() => {
                                            ((0, o.pTH)(),
                                                (0, o.ZDy)(async () => {
                                                    let { default: e } = await n.e('13965').then(n.bind(n, 666083));
                                                    return (n) =>
                                                        (0, r.jsx)(
                                                            e,
                                                            m(
                                                                {
                                                                    guildId: C.id,
                                                                    powerup: t
                                                                },
                                                                n
                                                            )
                                                        );
                                                }));
                                        });
                              }
                          })
                        : null == (i = _(!0))
                          ? void 0
                          : i.then(() => {
                                ((0, o.pTH)(),
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await n.e('13965').then(n.bind(n, 666083));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                m(
                                                    {
                                                        guildId: C.id,
                                                        powerup: t
                                                    },
                                                    n
                                                )
                                            );
                                    }));
                            });
            },
            [_, t, S, b, C]
        )
    };
}
function y(e, t) {
    let [n, r] = i.useState(!1),
        [l, o] = i.useState(void 0);
    return {
        isLoading: n,
        error: l,
        onToggle: i.useCallback(
            (n) => {
                if (null == t) return Promise.resolve();
                let i = n ? h.H6 : h.Th;
                return (
                    r(!0),
                    o(void 0),
                    i(e, t.skuId)
                        .catch((e) => {
                            var t;
                            throw (o(null != (t = e.body.message) ? t : void 0), e);
                        })
                        .finally(() => {
                            r(!1);
                        })
                );
            },
            [e, t]
        )
    };
}
function C(e, t) {
    let { isLoading: l, error: a, onToggle: s } = y(e, t),
        { onActivate: c } = O(e, t),
        u = i.useCallback((e) => (e.stopPropagation(), s(!1)), [s]);
    return {
        isLoading: l,
        error: a,
        onActivate: c,
        onDeactivate: u,
        onShowDeactivate: i.useCallback(
            (i) => {
                (i.stopPropagation(),
                    (0, o.ZDy)(async () => {
                        let { default: i } = await n.e('31924').then(n.bind(n, 625651));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                m(
                                    {
                                        guildId: e,
                                        powerup: t
                                    },
                                    n
                                )
                            );
                    }));
            },
            [e, t]
        ),
        onShowMore: i.useCallback(() => {
            _(e, t);
        }, [e, t])
    };
}
