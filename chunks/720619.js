i.d(t, { A: () => u });
var n = i(64700),
    l = i(284009),
    a = i.n(l),
    s = i(311907),
    r = i(71393),
    d = i(711014),
    o = i(287809);
function u(e) {
    let { isGuildIncluded: t, selectedGuildId: i } = e,
        l = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        u = (0, s.bG)([r.A], () => r.A.getGuilds()),
        c = (0, s.bG)([o.default], () => o.default.getCurrentUser());
    return {
        options: n.useMemo(
            () =>
                null == c
                    ? []
                    : (null == t
                          ? l
                          : l.filter((e) => {
                                let i = u[e];
                                return a()(null != i, "guild should not be null"), t(i, c);
                            })
                      ).map((e) => {
                          let t = u[e];
                          return a()(null != t, "guild should not be null"), { id: e, label: t.name, value: t.id };
                      }),
            [l, u, c, t],
        ),
        selectedGuild: null == i ? void 0 : u[i],
    };
}
