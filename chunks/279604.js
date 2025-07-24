(n.d(t, {
    KE: () => _,
    KT: () => b,
    ZP: () => O
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
                    let { default: i } = await Promise.all([n.e('67649'), n.e('6397')]).then(n.bind(n, 326055));
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
    var b;
    let { analyticsLocations: O } = (0, a.ZP)(),
        [y, v] = i.useState(!1),
        [C, j] = i.useState(void 0),
        E = (0, l.e7)([p.Z], () => {
            var t, n;
            return null != (n = null == (t = p.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts) ? n : 0;
        }),
        x = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
        S = (0, l.e7)([p.Z], () => p.Z.getStateForGuild(e)),
        I = i.useMemo(
            () =>
                t.type === f.Us.LEVEL && null != S
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
                      })(t, S)
                    : [],
            [t, S]
        ),
        P = Math.max((null != (b = null == x ? void 0 : x.premiumSubscriberCount) ? b : 0) - E, 0),
        N = i.useCallback(
            (n) => {
                let r = n ? h.H6 : h.Th;
                return (
                    v(!0),
                    j(void 0),
                    r(e, t.skuId)
                        .catch((e) => {
                            var t;
                            throw (j(null != (t = e.body.message) ? t : void 0), e);
                        })
                        .finally(() => {
                            v(!1);
                        })
                );
            },
            [e, t.skuId]
        ),
        w = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), null != x))
                    return P < t.cost
                        ? void (0, s.u)({
                              analyticsLocation: {
                                  page: g.ZY5.GUILD_POWERUPS_OVERVIEW,
                                  section: g.jXE.GUILD_POWERUPS_OVERVIEW_CARD
                              },
                              numberOfBoostsToAdd: t.cost - P,
                              analyticsLocations: O,
                              guild: x,
                              intent: t.type === f.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
                              onSubscribeComplete: () =>
                                  N(!0).then(() => {
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await n.e('13965').then(n.bind(n, 666083));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  m(
                                                      {
                                                          guildId: x.id,
                                                          powerup: t,
                                                          refundablePowerups: I
                                                      },
                                                      n
                                                  )
                                              );
                                      });
                                  })
                          })
                        : N(!0).then(() => {
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await n.e('13965').then(n.bind(n, 666083));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          m(
                                              {
                                                  guildId: x.id,
                                                  powerup: t,
                                                  refundablePowerups: I
                                              },
                                              n
                                          )
                                      );
                              });
                          });
            },
            [N, t, P, O, x, I]
        ),
        Z = i.useCallback((e) => (e.stopPropagation(), N(!1)), [N]);
    return {
        isLoading: y,
        error: C,
        onActivate: w,
        onDeactivate: Z,
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
