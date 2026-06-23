n.d(t, { A: () => f });
var l = n(64700),
    u = n(17928),
    i = n(192308),
    o = n(688810),
    r = n(987144),
    s = n(71393),
    a = n(403362),
    c = n(645619),
    d = n(864310),
    p = n(568065),
    A = n(181940),
    b = n(627968),
    E = n(652215);
function h(e, t, l) {
    l && (0, i.closeAllModals)(),
        null != t &&
            (0, i.openModalLazy)(async () => {
                let { default: l } = await Promise.all([
                    n.e("97158"),
                    n.e("98508"),
                    n.e("49526"),
                    n.e("22455"),
                    n.e("48317"),
                    n.e("6350"),
                    n.e("69149"),
                    n.e("49379"),
                    n.e("45046"),
                    n.e("35016"),
                    n.e("80565"),
                    n.e("957"),
                    n.e("50186"),
                    n.e("42592"),
                ]).then(n.bind(n, 843214));
                return (n) => (0, b.jsx)(l, { guildId: e, powerup: t, ...n });
            });
}
function f(e, t) {
    let { skipActivateModal: n } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { analyticsLocations: i } = (0, o.Ay)(),
        { onToggle: b, isLoading: f, error: L } = (0, A.A)(e, t),
        P = (0, u.bG)([s.A], () => s.A.getGuild(e)),
        g = (function (e, t) {
            let n = (0, u.bG)([s.A], () => s.A.getGuild(e)),
                i = (0, u.bG)([c.A], () => c.A.getStateForGuild(e)),
                { spent: o } = (0, d.A)(e),
                r = l.useMemo(() => {
                    if (null == t || t.type !== p.o9.LEVEL || null == i) return [];
                    let e = p.y7[t.skuId];
                    return null == e
                        ? []
                        : Object.entries(p.wr)
                              .filter((t) => {
                                  let [n, l] = t;
                                  return l === e && null != i.unlockedPowerups[n];
                              })
                              .map((e) => {
                                  let [t] = e;
                                  return i.allPowerups[t];
                              })
                              .filter(a.Vq);
                }, [t, i]),
                A = r?.reduce((e, t) => e + t.cost, 0);
            return Math.max((n?.premiumSubscriberCount ?? 0) - o + (A ?? 0), 0);
        })(e, t);
    return {
        onActivate: l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: l = !0 } = e;
                if (null != P && null != t)
                    return g < t.cost
                        ? void (0, r.g)({
                              analyticsLocation: {
                                  page: E.liQ.GUILD_POWERUPS_OVERVIEW,
                                  section: E.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - g,
                              analyticsLocations: i,
                              guild: P,
                              intent: t.type === p.o9.LEVEL ? p.Pn.LEVEL : p.Pn.PERK,
                              onSubscribeComplete: () =>
                                  b(!0)?.then(() => {
                                      n || h(P.id, t, l);
                                  }),
                          })
                        : b(!0)?.then(() => {
                              n || h(P.id, t, l);
                          });
            },
            [b, t, g, i, P, n],
        ),
        isLoading: f,
        error: L,
    };
}
