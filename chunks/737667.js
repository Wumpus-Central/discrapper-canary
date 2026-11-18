var r = n(582128),
    d = n(855986),
    a = n(682618),
    s = n(257339);
let i = n(988341).sC;
function c(e) {
    return i.has(e);
}
n.d(
    t,
    {},
    {
        Ce: c,
        G5: function (e) {
            let { badgeId: t, enabled: n } = e;
            r.useEffect(() => {
                null != t && n && c(t) && (0, a.PV)(t);
            }, [t, n]);
        },
        Vv: function (e) {
            let { badges: t, enabled: n } = e,
                a = (0, d.bG)([s.A], () => s.A.getSeenBadgeIndicators());
            return {
                badgeIndicatorIds: r.useMemo(
                    () =>
                        n
                            ? new Set(
                                  t
                                      .filter((e) => {
                                          let { badge_id: t } = e;
                                          return c(t) && !a.has(t);
                                      })
                                      .map((e) => {
                                          let { badge_id: t } = e;
                                          return t;
                                      }),
                              )
                            : new Set(),
                    [t, n, a],
                ),
            };
        },
    },
);
