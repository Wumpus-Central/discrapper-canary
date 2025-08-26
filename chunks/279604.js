n.d(t, {
    KE: () => O,
    KT: () => b,
    ZP: () => v,
    _C: () => y,
}),
    n(388685),
    n(457542);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(906732),
    s = n(879892),
    c = n(343649),
    u = n(430824),
    d = n(823379),
    p = n(713081),
    h = n(905128),
    f = n(535396),
    g = n(981631);
function m(e) {
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
function b(e) {
    i.useEffect(() => {
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
    }, [e]);
}
function O(e, t) {
    (0, o.ZDy)(
        async () => {
            switch (t.type) {
                case f.Us.LEVEL:
                    let { default: i } = await n.e("99014").then(n.bind(n, 271224));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            m(
                                {
                                    guildId: e,
                                    powerup: t,
                                },
                                n,
                            ),
                        );
                case f.Us.PERK: {
                    let { default: i } = await Promise.all([
                        n.e("55616"),
                        n.e("42926"),
                        n.e("97844"),
                        n.e("93704"),
                    ]).then(n.bind(n, 326055));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            m(
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
        { modalKey: f.H2 },
    );
}
function y(e, t) {
    var p;
    let { analyticsLocations: b } = (0, a.ZP)(),
        { onToggle: O } = _(e, t),
        y = (0, l.e7)([h.Z], () => {
            var t, n;
            return null != (n = null == (t = h.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts) ? n : 0;
        }),
        v = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
        j = (0, l.e7)([h.Z], () => h.Z.getStateForGuild(e)),
        x = i.useMemo(
            () =>
                null != t && t.type === f.Us.LEVEL && null != j
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
                      })(t, j)
                    : [],
            [t, j],
        ),
        C = null == x ? void 0 : x.reduce((e, t) => e + t.cost, 0),
        S = Math.max((null != (p = null == v ? void 0 : v.premiumSubscriberCount) ? p : 0) - y + C, 0);
    return {
        onActivate: i.useCallback(
            function (e) {
                var i;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.stopPropagation();
                let { shouldCloseAllModals: a = !0 } = l;
                if (null != v && null != t)
                    return S < t.cost
                        ? void (0, s.u)({
                              analyticsLocation: {
                                  page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
                                  section: g.jXE.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - S,
                              analyticsLocations: b,
                              guild: v,
                              intent: t.type === f.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
                              onSubscribeComplete: () => {
                                  var e;
                                  return null == (e = O(!0))
                                      ? void 0
                                      : e.then(() => {
                                            a && (0, o.pTH)(),
                                                (0, o.ZDy)(async () => {
                                                    let { default: e } = await Promise.all([
                                                        n.e("97844"),
                                                        n.e("68203"),
                                                    ]).then(n.bind(n, 666083));
                                                    return (n) =>
                                                        (0, r.jsx)(
                                                            e,
                                                            m(
                                                                {
                                                                    guildId: v.id,
                                                                    powerup: t,
                                                                },
                                                                n,
                                                            ),
                                                        );
                                                });
                                        });
                              },
                          })
                        : null == (i = O(!0))
                          ? void 0
                          : i.then(() => {
                                a && (0, o.pTH)(),
                                    (0, o.ZDy)(async () => {
                                        let { default: e } = await Promise.all([n.e("97844"), n.e("68203")]).then(
                                            n.bind(n, 666083),
                                        );
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                m(
                                                    {
                                                        guildId: v.id,
                                                        powerup: t,
                                                    },
                                                    n,
                                                ),
                                            );
                                    });
                            });
            },
            [O, t, S, b, v],
        ),
    };
}
function _(e, t) {
    let [n, r] = i.useState(!1),
        [l, o] = i.useState(void 0);
    return {
        isLoading: n,
        error: l,
        onToggle: i.useCallback(
            (n) => {
                if (null == t) return Promise.resolve();
                let i = n ? p.H6 : p.Th;
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
            [e, t],
        ),
    };
}
function v(e, t) {
    let { isLoading: l, error: a, onToggle: s } = _(e, t),
        { onActivate: c } = y(e, t),
        u = i.useCallback((e) => (e.stopPropagation(), s(!1)), [s]);
    return {
        isLoading: l,
        error: a,
        onActivate: c,
        onDeactivate: u,
        onShowDeactivate: i.useCallback(
            (i) => {
                i.stopPropagation(),
                    (0, o.ZDy)(async () => {
                        let { default: i } = await n.e("31924").then(n.bind(n, 625651));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                m(
                                    {
                                        guildId: e,
                                        powerup: t,
                                    },
                                    n,
                                ),
                            );
                    });
            },
            [e, t],
        ),
        onShowMore: i.useCallback(() => {
            O(e, t);
        }, [e, t]),
    };
}
