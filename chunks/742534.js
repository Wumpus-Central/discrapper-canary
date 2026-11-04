n.d(t, { A: () => f });
var u = n(582128),
    l = n(855986),
    r = n(192308),
    i = n(688810),
    o = n(987144),
    s = n(71393),
    a = n(403362),
    c = n(645619),
    d = n(864310),
    p = n(568065),
    b = n(181940),
    A = n(477900),
    E = n(652215);
function f(e, t) {
    let { skipActivateModal: f } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { analyticsLocations: h } = (0, i.Ay)(),
        { onToggle: P, isLoading: m, error: L } = (0, b.A)(e, t),
        g = (0, l.bG)([s.A], () => s.A.getGuild(e)),
        G = (function (e, t) {
            let n = (0, l.bG)([s.A], () => s.A.getGuild(e)),
                r = (0, l.bG)([c.A], () => c.A.getStateForGuild(e)),
                { spent: i } = (0, d.A)(e),
                o = u.useMemo(() => {
                    if (null == t || t.type !== p.o9.LEVEL || null == r) return [];
                    let e = p.y7[t.skuId];
                    return null == e
                        ? []
                        : Object.entries(p.wr)
                              .filter((t) => {
                                  let [n, u] = t;
                                  return u === e && null != r.unlockedPowerups[n];
                              })
                              .map((e) => {
                                  let [t] = e;
                                  return r.allPowerups[t];
                              })
                              .filter(a.Vq);
                }, [t, r]),
                b = o?.reduce((e, t) => e + t.cost, 0);
            return Math.max((n?.premiumSubscriberCount ?? 0) - i + (b ?? 0), 0);
        })(e, t);
    return {
        onActivate: u.useCallback(
            function () {
                let u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: l = !0 } = u;
                if (null == g || null == t) return;
                let i = !1;
                function s() {
                    if (!i)
                        return (
                            (i = !0),
                            P(!0)?.then(() => {
                                f ||
                                    (l && (0, r.s7)(),
                                    null != t &&
                                        (0, r.mM)(async () => {
                                            let { default: u } = await Promise.all([
                                                n.e(771137),
                                                n.e(454048),
                                                n.e(87306),
                                                n.e(592028),
                                                n.e(425906),
                                                n.e(123216),
                                                n.e(182408),
                                                n.e(404732),
                                                n.e(669149),
                                                n.e(825903),
                                                n.e(50186),
                                                n.e(488465),
                                            ]).then(n.bind(n, 54952));
                                            return (n) => (0, A.jsx)(u, { guildId: e, powerup: t, ...n });
                                        }));
                            })
                        );
                }
                return G < t.cost
                    ? void (0, o.g)({
                          analyticsLocation: {
                              page: E.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: E.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                          },
                          numberOfBoostsToAdd: t.cost - G,
                          analyticsLocations: h,
                          guild: g,
                          intent: t.type === p.o9.LEVEL ? p.Pn.LEVEL : p.Pn.PERK,
                          onSubscribeComplete: s,
                          handleSubscribeModalClose: (e) => {
                              if (e) return s();
                          },
                      })
                    : s();
            },
            [P, t, G, h, g, e, f],
        ),
        isLoading: m,
        error: L,
    };
}
