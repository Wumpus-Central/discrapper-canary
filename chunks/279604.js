n.d(t, {
    KE: () => b,
    KT: () => m,
    ZP: () => y
}),
    n(388685),
    n(457542);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(906732),
    a = n(879892),
    c = n(343649),
    u = n(430824),
    d = n(713081),
    h = n(905128),
    p = n(535396),
    f = n(981631);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e) {
    i.useEffect(() => {
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
    }, [e]);
}
function b(e, t) {
    (0, o.ZDy)(
        async () => {
            switch (t.type) {
                case p.Us.LEVEL:
                    let { default: i } = await n.e('99014').then(n.bind(n, 271224));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            g(
                                {
                                    guildId: e,
                                    powerup: t
                                },
                                n
                            )
                        );
                case p.Us.PERK: {
                    let { default: i } = await Promise.all([n.e('32652'), n.e('21487')]).then(n.bind(n, 326055));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            g(
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
        { modalKey: p.H2 }
    );
}
function y(e, t) {
    var m;
    let { analyticsLocations: y } = (0, s.ZP)(),
        [_, O] = i.useState(!1),
        [v, C] = i.useState(void 0),
        j = (0, l.e7)([h.Z], () => {
            var t, n;
            return null != (n = null == (t = h.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts) ? n : 0;
        }),
        S = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
        x = Math.max((null != (m = null == S ? void 0 : S.premiumSubscriberCount) ? m : 0) - j, 0),
        E = i.useCallback(
            (n) => {
                let r = n ? d.H6 : d.Th;
                return (
                    O(!0),
                    C(void 0),
                    r(e, t.skuId)
                        .catch((e) => {
                            var t;
                            throw (C(null != (t = e.body.message) ? t : void 0), e);
                        })
                        .finally(() => {
                            O(!1);
                        })
                );
            },
            [e, t.skuId]
        ),
        I = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), null != S))
                    return x < t.cost
                        ? void (0, a.u)({
                              analyticsLocation: {
                                  page: f.ZY5.GUILD_POWERUPS_OVERVIEW,
                                  section: f.jXE.GUILD_POWERUPS_OVERVIEW_CARD
                              },
                              numberOfBoostsToAdd: t.cost - x,
                              analyticsLocations: y,
                              guild: S,
                              intent: t.type === p.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
                              onSubscribeComplete: () =>
                                  E(!0).then(() => {
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await n.e('13965').then(n.bind(n, 666083));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  g(
                                                      {
                                                          guildId: S.id,
                                                          powerup: t
                                                      },
                                                      n
                                                  )
                                              );
                                      });
                                  })
                          })
                        : E(!0).then(() => {
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await n.e('13965').then(n.bind(n, 666083));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          g(
                                              {
                                                  guildId: S.id,
                                                  powerup: t
                                              },
                                              n
                                          )
                                      );
                              });
                          });
            },
            [E, t, x, y, S]
        ),
        P = i.useCallback((e) => (e.stopPropagation(), E(!1)), [E]);
    return {
        isLoading: _,
        error: v,
        onActivate: I,
        onDeactivate: P,
        onShowDeactivate: i.useCallback(
            (i) => {
                i.stopPropagation(),
                    (0, o.ZDy)(async () => {
                        let { default: i } = await n.e('31924').then(n.bind(n, 625651));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                g(
                                    {
                                        guildId: e,
                                        powerup: t
                                    },
                                    n
                                )
                            );
                    });
            },
            [e, t]
        ),
        onShowMore: i.useCallback(() => {
            b(e, t);
        }, [e, t])
    };
}
