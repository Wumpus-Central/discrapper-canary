i.d(t, { Z: () => d });
var n = i(473749),
    l = i(512722),
    r = i.n(l),
    a = i(442837),
    o = i(430824),
    s = i(771845),
    u = i(594174);
function d(e) {
    let { isGuildIncluded: t, selectedGuildId: i } = e,
        l = (0, a.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()),
        d = (0, a.e7)([o.Z], () => o.Z.getGuilds()),
        c = (0, a.e7)([u.default], () => u.default.getCurrentUser());
    return {
        options: n.useMemo(
            () =>
                null == c
                    ? []
                    : (null == t
                          ? l
                          : l.filter((e) => {
                                let i = d[e];
                                return r()(null != i, "guild should not be null"), t(i, c);
                            })
                      ).map((e) => {
                          let t = d[e];
                          return (
                              r()(null != t, "guild should not be null"),
                              {
                                  label: t.name,
                                  value: t.id,
                              }
                          );
                      }),
            [l, d, c, t],
        ),
        selectedGuild: null == i ? void 0 : d[i],
    };
}
