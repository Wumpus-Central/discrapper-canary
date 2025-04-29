n.d(t, {
    I: () => l,
    Z: () => c
});
var r = n(192379),
    i = n(442837),
    o = n(430824),
    a = n(905128),
    s = n(50101);
function l(e) {
    var t, n, r;
    let i = (0, s.gV)(e, 'getGuildPowerupsBoostCount'),
        l = null != (r = null == (t = o.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount) ? r : 0,
        c = null == (n = a.Z.getStateForGuild(e)) ? void 0 : n.appliedBoosts,
        u = !a.Z.hasFetchedUnlockedPowerups(e);
    return i
        ? u || null == c
            ? {
                  available: 0,
                  spend: 0,
                  total: l
              }
            : {
                  available: Math.max(0, l - c),
                  spent: c,
                  total: l
              }
        : {
              available: l,
              spend: 0,
              total: l
          };
}
function c(e) {
    var t;
    let n = (0, s.Ek)(e, 'useGuildPowerupsBoostCount'),
        l =
            null !=
            (t = (0, i.e7)([o.Z], () => {
                var t;
                return null == (t = o.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount;
            }))
                ? t
                : 0,
        { spent: c, loading: u } = (0, i.cj)([a.Z], () => {
            var t;
            return {
                spent: null == (t = a.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts,
                loading: !a.Z.hasFetchedUnlockedPowerups(e)
            };
        });
    return r.useMemo(
        () =>
            n
                ? u || null == c
                    ? {
                          available: 0,
                          spent: 0,
                          total: l
                      }
                    : {
                          available: Math.max(0, l - c),
                          spent: c,
                          total: l
                      }
                : {
                      available: l,
                      spent: 0,
                      total: l
                  },
        [n, l, u, c]
    );
}
