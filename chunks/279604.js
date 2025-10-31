n.d(t, {
    KE: () => O,
    KT: () => y,
    Td: () => v,
    ZP: () => x,
    _C: () => j,
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
    f = n(317169),
    g = n(278646),
    m = n(535396),
    b = n(981631);
function _(e) {
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
function y(e) {
    i.useEffect(() => {
        null != e && (0, o.showToast)((0, o.createToast)(e, o.ToastType.FAILURE));
    }, [e]);
}
function O(e, t) {
    (0, o.ZDy)(
        async () => {
            switch (t.type) {
                case m.Us.LEVEL:
                    let { default: i } = await n.e("99014").then(n.bind(n, 271224));
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            _(
                                {
                                    guildId: e,
                                    powerup: t,
                                },
                                n,
                            ),
                        );
                case m.Us.PERK: {
                    let { default: i } = await Promise.all([n.e("76692"), n.e("30378"), n.e("47285")]).then(
                        n.bind(n, 326055),
                    );
                    return (n) =>
                        (0, r.jsx)(
                            i,
                            _(
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
        { modalKey: m.H2 },
    );
}
function v(e, t) {
    var n;
    let r = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
        o = (0, l.e7)([h.Z], () => h.Z.getStateForGuild(e)),
        { spent: a } = (0, f.Z)(e),
        s = i.useMemo(() => {
            if (null == t || t.type !== m.Us.LEVEL || null == o) return [];
            let e = m.T1[t.skuId];
            return null == e
                ? []
                : Object.entries(m.Rx)
                      .filter((t) => {
                          let [n, r] = t;
                          return r === e && null != o.unlockedPowerups[n];
                      })
                      .map((e) => {
                          let [t] = e;
                          return o.allPowerups[t];
                      })
                      .filter(d.lm);
        }, [t, o]),
        c = null == s ? void 0 : s.reduce((e, t) => e + t.cost, 0);
    return Math.max((null != (n = null == r ? void 0 : r.premiumSubscriberCount) ? n : 0) - a + (null != c ? c : 0), 0);
}
function j(e, t) {
    let { analyticsLocations: n } = (0, a.ZP)(),
        { onToggle: r } = C(e, t),
        d = (0, l.e7)([u.Z], () => u.Z.getGuild(e)),
        p = v(e, t);
    return {
        onActivate: i.useCallback(
            function (e) {
                var i;
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e.stopPropagation();
                let { shouldCloseAllModals: a = !0 } = l;
                if (null != d && null != t)
                    return p < t.cost
                        ? void (0, s.u)({
                              analyticsLocation: {
                                  page: b.ZY5.GUILD_POWERUPS_OVERVIEW,
                                  section: b.jXE.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - p,
                              analyticsLocations: n,
                              guild: d,
                              intent: t.type === m.Us.LEVEL ? c.P.LEVEL : c.P.PERK,
                              onSubscribeComplete: () => {
                                  var e;
                                  return null == (e = r(!0))
                                      ? void 0
                                      : e.then(() => {
                                            a && (0, o.pTH)(), (0, g.h)(d.id, t);
                                        });
                              },
                          })
                        : null == (i = r(!0))
                          ? void 0
                          : i.then(() => {
                                a && (0, o.pTH)(), (0, g.h)(d.id, t);
                            });
            },
            [r, t, p, n, d],
        ),
    };
}
function C(e, t) {
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
function x(e, t) {
    let { isLoading: l, error: a, onToggle: s } = C(e, t),
        { onActivate: c } = j(e, t),
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
                                _(
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
