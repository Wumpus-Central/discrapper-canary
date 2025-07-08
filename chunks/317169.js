n.d(t, {
    I: () => s,
    Z: () => l
});
var r = n(73800),
    i = n(442837),
    a = n(430824),
    o = n(905128);
function s(e) {
    var t, n, r;
    let i = null != (r = null == (t = a.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount) ? r : 0,
        s = null == (n = o.Z.getStateForGuild(e)) ? void 0 : n.appliedBoosts;
    return null == s
        ? {
              available: 0,
              spend: 0,
              total: i
          }
        : {
              available: Math.max(0, i - s),
              spent: s,
              total: i
          };
}
function l(e) {
    var t;
    let n =
            null !=
            (t = (0, i.e7)([a.Z], () => {
                var t;
                return null == (t = a.Z.getGuild(e)) ? void 0 : t.premiumSubscriberCount;
            }))
                ? t
                : 0,
        s = (0, i.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getStateForGuild(e)) ? void 0 : t.appliedBoosts;
        });
    return r.useMemo(
        () =>
            null == s
                ? {
                      available: 0,
                      spent: 0,
                      total: n
                  }
                : {
                      available: Math.max(0, n - s),
                      spent: s,
                      total: n
                  },
        [n, s]
    );
}
