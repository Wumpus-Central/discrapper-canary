n.d(t, { A: () => f });
var l = n(582128),
    u = n(17928),
    r = n(192308),
    o = n(688810),
    i = n(987144),
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
        { analyticsLocations: h } = (0, o.Ay)(),
        { onToggle: L, isLoading: P, error: g } = (0, b.A)(e, t),
        m = (0, u.bG)([s.A], () => s.A.getGuild(e)),
        y = (function (e, t) {
            let n = (0, u.bG)([s.A], () => s.A.getGuild(e)),
                r = (0, u.bG)([c.A], () => c.A.getStateForGuild(e)),
                { spent: o } = (0, d.A)(e),
                i = l.useMemo(() => {
                    if (null == t || t.type !== p.o9.LEVEL || null == r) return [];
                    let e = p.y7[t.skuId];
                    return null == e
                        ? []
                        : Object.entries(p.wr)
                              .filter((t) => {
                                  let [n, l] = t;
                                  return l === e && null != r.unlockedPowerups[n];
                              })
                              .map((e) => {
                                  let [t] = e;
                                  return r.allPowerups[t];
                              })
                              .filter(a.Vq);
                }, [t, r]),
                b = i?.reduce((e, t) => e + t.cost, 0);
            return Math.max((n?.premiumSubscriberCount ?? 0) - o + (b ?? 0), 0);
        })(e, t);
    return {
        onActivate: l.useCallback(
            function () {
                let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { shouldCloseAllModals: u = !0 } = l;
                if (null == m || null == t) return;
                let o = !1;
                function s() {
                    if (!o)
                        return (
                            (o = !0),
                            L(!0)?.then(() => {
                                f ||
                                    (u && (0, r.closeAllModals)(),
                                    null != t &&
                                        (0, r.openModalLazy)(async () => {
                                            let { default: l } = await Promise.all([
                                                n.e("414522"),
                                                n.e("522052"),
                                                n.e("514024"),
                                                n.e("645499"),
                                                n.e("454048"),
                                                n.e("364827"),
                                                n.e("784569"),
                                                n.e("147786"),
                                                n.e("87306"),
                                                n.e("123216"),
                                                n.e("784041"),
                                                n.e("843719"),
                                                n.e("322455"),
                                                n.e("504045"),
                                                n.e("770698"),
                                                n.e("706350"),
                                                n.e("149379"),
                                                n.e("445046"),
                                                n.e("669149"),
                                                n.e("980565"),
                                                n.e("135016"),
                                                n.e("200957"),
                                                n.e("979541"),
                                                n.e("486032"),
                                                n.e("50186"),
                                                n.e("302211"),
                                            ]).then(n.bind(n, 843214));
                                            return (n) => (0, A.jsx)(l, { guildId: e, powerup: t, ...n });
                                        }));
                            })
                        );
                }
                return y < t.cost
                    ? void (0, i.g)({
                          analyticsLocation: {
                              page: E.liQ.GUILD_POWERUPS_OVERVIEW,
                              section: E.JJy.GUILD_POWERUPS_OVERVIEW_CARD,
                          },
                          numberOfBoostsToAdd: t.cost - y,
                          analyticsLocations: h,
                          guild: m,
                          intent: t.type === p.o9.LEVEL ? p.Pn.LEVEL : p.Pn.PERK,
                          onSubscribeComplete: s,
                          handleSubscribeModalClose: (e) => {
                              if (e) return s();
                          },
                      })
                    : s();
            },
            [L, t, y, h, m, e, f],
        ),
        isLoading: P,
        error: g,
    };
}
