i.d(t, { A: () => u });
var n = i(64700),
    l = i(284009),
    r = i.n(l),
    a = i(311907),
    s = i(71393),
    d = i(711014),
    o = i(287809);
function u(e) {
    let { isGuildIncluded: t, selectedGuildId: i } = e,
        l = (0, a.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        u = (0, a.bG)([s.A], () => s.A.getGuilds()),
        c = (0, a.bG)([o.default], () => o.default.getCurrentUser());
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
