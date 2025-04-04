n.d(t, {
    KE: () => b,
    KT: () => m,
    ZP: () => y
}),
    n(47120),
    n(773603);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(906732),
    s = n(879892),
    c = n(343649),
    u = n(430824),
    d = n(713081),
    p = n(905128),
    h = n(535396),
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
                case h.Us.LEVEL:
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
                case h.Us.PERK: {
                    let { default: i } = await Promise.all([n.e('55666'), n.e('74529')]).then(n.bind(n, 326055));
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
        { modalKey: h.H2 }
    );
}
function y(e, t) {
    var m;
    let { analyticsLocations: y } = (0, a.ZP)(),
        [_, v] = i.useState(!1),
        [O, j] = i.useState(void 0),
        x = (0, l.e7)([p.Z], () => {
            var t, n;
            return null != (n = null == (t = p.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts) ? n : 0;
        }),
        C = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
        S = Math.max((null != (m = null == C ? void 0 : C.premiumSubscriberCount) ? m : 0) - x, 0),
        P = i.useCallback(
            (n) => {
                let r = n ? d.H6 : d.Th;
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
        I = i.useCallback(
            (e) => {
                if ((e.stopPropagation(), null != C))
                    return S < t.cost
                        ? void (0, s.u)({
                              analyticsLocation: {
                                  page: f.ZY5.GUILD_POWERUPS_OVERVIEW,
                                  section: f.jXE.GUILD_POWERUPS_OVERVIEW_CARD
                              },
                              numberOfBoostsToAdd: t.cost - S,
                              analyticsLocations: y,
                              guild: C,
                              intent: t.type === h.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
                              onSubscribeComplete: () =>
                                  P(!0).then(() => {
                                      (0, o.ZDy)(async () => {
                                          let { default: e } = await n.e('13965').then(n.bind(n, 666083));
                                          return (n) =>
                                              (0, r.jsx)(
                                                  e,
                                                  g(
                                                      {
                                                          guildId: C.id,
                                                          powerup: t
                                                      },
                                                      n
                                                  )
                                              );
                                      });
                                  })
                          })
                        : P(!0).then(() => {
                              (0, o.ZDy)(async () => {
                                  let { default: e } = await n.e('13965').then(n.bind(n, 666083));
                                  return (n) =>
                                      (0, r.jsx)(
                                          e,
                                          g(
                                              {
                                                  guildId: C.id,
                                                  powerup: t
                                              },
                                              n
                                          )
                                      );
                              });
                          });
            },
            [P, t, S, y, C]
        ),
        N = i.useCallback((e) => (e.stopPropagation(), P(!1)), [P]);
    return {
        isLoading: _,
        error: O,
        onActivate: I,
        onDeactivate: N,
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
