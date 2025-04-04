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
    var t, n, r, i;
    let l = (0, s.gV)(e, 'getGuildPowerupsBoostCount'),
        c = null != (r = null == (t = o.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount) ? r : 0,
        u = null != (i = null == (n = a.Z.getStateForGuild(e)) ? void 0 : n.appliedBoosts) ? i : 0;
    return l
        ? {
              available: Math.max(0, c - u),
              spent: u,
              total: c
          }
        : {
              available: c,
              spend: 0,
              total: c
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
        c = (0, i.e7)([a.Z], () => {
            var t;
            return null == (t = a.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts;
        });
    return r.useMemo(
        () =>
            n
                ? null == c
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
        [n, l, c]
    );
}
