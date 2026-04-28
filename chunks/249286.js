n.d(t, { A: () => S });
var l = n(64700),
    u = n(17928),
    r = n(192308),
    i = n(688810),
    o = n(987144),
    s = n(71393),
    E = n(403362),
    _ = n(645619),
    A = n(864310),
    a = n(568065),
    d = n(181940),
    G = n(627968),
    R = n(652215);
function I(e, t, l) {
    l && (0, r.closeAllModals)(),
        null != t &&
            (0, r.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    n.e("17764"),
                    n.e("67567"),
                    n.e("64827"),
                    n.e("84569"),
                    n.e("22455"),
                    n.e("70698"),
                    n.e("82926"),
                    n.e("69149"),
                    n.e("49379"),
                    n.e("35016"),
                    n.e("957"),
                    n.e("50186"),
                    n.e("2211"),
                ]).then(n.bind(n, 843214));
                return (n) => (0, G.jsx)(l, { guildId: e, powerup: t, ...n });
            });
}
function S(e, t) {
    let { analyticsLocations: n } = (0, i.Ay)(),
        { onToggle: r, isLoading: G, error: S } = (0, d.A)(e, t),
        P = (0, u.bG)([s.A], () => s.A.getGuild(e)),
        O = (function (e, t) {
            let n = (0, u.bG)([s.A], () => s.A.getGuild(e)),
                r = (0, u.bG)([_.A], () => _.A.getStateForGuild(e)),
                { spent: i } = (0, A.A)(e),
                o = l.useMemo(() => {
                    if (null == t || t.type !== a.o9.LEVEL || null == r) return [];
                    let e = a.y7[t.skuId];
                    return null == e
                        ? []
                        : Object.entries(a.wr)
                              .filter((t) => {
                                  let [n, l] = t;
                                  return l === e && null != r.unlockedPowerups[n];
                              })
                              .map((e) => {
                                  let [t] = e;
                                  return r.allPowerups[t];
                              })
                              .filter(E.Vq);
                }, [t, r]),
                d = o?.reduce((e, t) => e + t.cost, 0);
            return Math.max((n?.premiumSubscriberCount ?? 0) - i + (d ?? 0), 0);
        })(e, t);
    return {
        onActivate: l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: l = !0 } = e;
                if (null != P && null != t)
                    return O < t.cost
                        ? void (0, o.g)({
                              analyticsLocation: {
                                  page: R.liQ.GUILD_POWERUPS_OVERVIEW,
                                  section: R.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - O,
                              analyticsLocations: n,
                              guild: P,
                              intent: t.type === a.o9.LEVEL ? a.Pn.LEVEL : a.Pn.PERK,
                              onSubscribeComplete: () =>
                                  r(!0)?.then(() => {
                                      I(P.id, t, l);
                                  }),
                          })
                        : r(!0)?.then(() => {
                              I(P.id, t, l);
                          });
            },
            [r, t, O, n, P],
        ),
        isLoading: G,
        error: S,
    };
}
