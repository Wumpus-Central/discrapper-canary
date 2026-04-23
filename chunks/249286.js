n.d(t, { A: () => p });
var i = n(64700),
    l = n(17928),
    s = n(192308),
    r = n(688810),
    a = n(987144),
    o = n(71393),
    d = n(403362),
    c = n(645619),
    u = n(864310),
    h = n(568065),
    A = n(181940),
    _ = n(627968),
    g = n(652215);
function m(e, t, i) {
    i && (0, s.closeAllModals)(),
        null != t &&
            (0, s.openModalLazy)(async () => {
                let { default: i } = await Promise.all([n.e("35016"), n.e("11530")]).then(n.bind(n, 843214));
                return (n) => (0, _.jsx)(i, { guildId: e, powerup: t, ...n });
            });
}
function p(e, t) {
    let { analyticsLocations: n } = (0, r.Ay)(),
        { onToggle: s, isLoading: _, error: p } = (0, A.A)(e, t),
        f = (0, l.bG)([o.A], () => o.A.getGuild(e)),
        E = (function (e, t) {
            let n = (0, l.bG)([o.A], () => o.A.getGuild(e)),
                s = (0, l.bG)([c.A], () => c.A.getStateForGuild(e)),
                { spent: r } = (0, u.A)(e),
                a = i.useMemo(() => {
                    if (null == t || t.type !== h.o9.LEVEL || null == s) return [];
                    let e = h.y7[t.skuId];
                    return null == e
                        ? []
                        : Object.entries(h.wr)
                              .filter((t) => {
                                  let [n, i] = t;
                                  return i === e && null != s.unlockedPowerups[n];
                              })
                              .map((e) => {
                                  let [t] = e;
                                  return s.allPowerups[t];
                              })
                              .filter(d.Vq);
                }, [t, s]),
                A = a?.reduce((e, t) => e + t.cost, 0);
            return Math.max((n?.premiumSubscriberCount ?? 0) - r + (A ?? 0), 0);
        })(e, t);
    return {
        onActivate: i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: i = !0 } = e;
                if (null != f && null != t)
                    return E < t.cost
                        ? void (0, a.g)({
                              analyticsLocation: {
                                  page: g.liQ.GUILD_POWERUPS_OVERVIEW,
                                  section: g.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - E,
                              analyticsLocations: n,
                              guild: f,
                              intent: t.type === h.o9.LEVEL ? h.Pn.LEVEL : h.Pn.PERK,
                              onSubscribeComplete: () =>
                                  s(!0)?.then(() => {
                                      m(f.id, t, i);
                                  }),
                          })
                        : s(!0)?.then(() => {
                              m(f.id, t, i);
                          });
            },
            [s, t, E, n, f],
        ),
        isLoading: _,
        error: p,
    };
}
