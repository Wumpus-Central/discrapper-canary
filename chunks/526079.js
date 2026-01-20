i.d(t, { Z: () => u });
var n = i(473749),
    l = i(512722),
    r = i.n(l),
    a = i(442837),
    o = i(430824),
    s = i(771845),
    d = i(594174);
function u(e) {
    let { isGuildIncluded: t, selectedGuildId: i } = e,
        l = (0, a.e7)([s.ZP], () => s.ZP.getFlattenedGuildIds()),
        u = (0, a.e7)([o.Z], () => o.Z.getGuilds()),
        c = (0, a.e7)([d.default], () => d.default.getCurrentUser());
    return {
        options: n.useMemo(
            () =>
                null == c
                    ? []
                    : (null == t
                          ? l
                          : l.filter((e) => {
                                let i = u[e];
                                return r()(null != i, "guild should not be null"), t(i, c);
                            })
                      ).map((e) => {
                          let t = u[e];
                          return (
                              r()(null != t, "guild should not be null"),
                              {
                                  id: e,
                                  label: t.name,
                                  value: t.id,
                              }
                          );
                      }),
            [l, u, c, t],
        ),
        selectedGuild: null == i ? void 0 : u[i],
    };
}
