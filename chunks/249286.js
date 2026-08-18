l.d(t, { A: () => E });
var n = l(582128),
    u = l(17928),
    o = l(192308),
    r = l(688810),
    i = l(987144),
    s = l(71393),
    a = l(403362),
    d = l(645619),
    c = l(864310),
    p = l(568065),
    b = l(181940),
    A = l(477900),
    h = l(652215);
function f(e, t, n) {
    n && (0, o.closeAllModals)(),
        null != t &&
            (0, o.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                    l.e("697106"),
                    l.e("558295"),
                    l.e("334654"),
                    l.e("364827"),
                    l.e("784569"),
                    l.e("322455"),
                    l.e("770698"),
                    l.e("706350"),
                    l.e("652038"),
                    l.e("669149"),
                    l.e("51763"),
                    l.e("135016"),
                    l.e("980565"),
                    l.e("200957"),
                    l.e("50186"),
                    l.e("542592"),
                ]).then(l.bind(l, 843214));
                return (l) => (0, A.jsx)(n, { guildId: e, powerup: t, ...l });
            });
}
function E(e, t) {
    let { skipActivateModal: l } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { analyticsLocations: o } = (0, r.Ay)(),
        { onToggle: A, isLoading: E, error: g } = (0, b.A)(e, t),
        P = (0, u.bG)([s.A], () => s.A.getGuild(e)),
        m = (function (e, t) {
            let l = (0, u.bG)([s.A], () => s.A.getGuild(e)),
                o = (0, u.bG)([d.A], () => d.A.getStateForGuild(e)),
                { spent: r } = (0, c.A)(e),
                i = n.useMemo(() => {
                    if (null == t || t.type !== p.o9.LEVEL || null == o) return [];
                    let e = p.y7[t.skuId];
                    return null == e
                        ? []
                        : Object.entries(p.wr)
                              .filter((t) => {
                                  let [l, n] = t;
                                  return n === e && null != o.unlockedPowerups[l];
                              })
                              .map((e) => {
                                  let [t] = e;
                                  return o.allPowerups[t];
                              })
                              .filter(a.Vq);
                }, [t, o]),
                b = i?.reduce((e, t) => e + t.cost, 0);
            return Math.max((l?.premiumSubscriberCount ?? 0) - r + (b ?? 0), 0);
        })(e, t);
    return {
        onActivate: n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: n = !0 } = e;
                if (null != P && null != t)
                    return m < t.cost
                        ? void (0, i.g)({
                              analyticsLocation: {
                                  page: h.liQ.GUILD_POWERUPS_OVERVIEW,
                                  section: h.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                              },
                              numberOfBoostsToAdd: t.cost - m,
                              analyticsLocations: o,
                              guild: P,
                              intent: t.type === p.o9.LEVEL ? p.Pn.LEVEL : p.Pn.PERK,
                              onSubscribeComplete: () =>
                                  A(!0)?.then(() => {
                                      l || f(P.id, t, n);
                                  }),
                          })
                        : A(!0)?.then(() => {
                              l || f(P.id, t, n);
                          });
            },
            [A, t, m, o, P, l],
        ),
        isLoading: E,
        error: g,
    };
}
