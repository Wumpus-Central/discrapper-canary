i.d(t, { Z: () => o });
var n = i(192379),
    l = i(512722),
    r = i.n(l),
    s = i(442837),
    u = i(430824),
    a = i(771845),
    d = i(594174);
function o(e) {
    let { isGuildIncluded: t, selectedGuildId: i } = e,
        l = (0, s.e7)([a.ZP], () => a.ZP.getFlattenedGuildIds()),
        o = (0, s.e7)([u.Z], () => u.Z.getGuilds()),
        c = (0, s.e7)([d.default], () => d.default.getCurrentUser());
    return {
        options: n.useMemo(
            () =>
                null == c
                    ? []
                    : (null == t
                          ? l
                          : l.filter((e) => {
                                let i = o[e];
                                return r()(null != i, 'guild should not be null'), t(i, c);
                            })
                      ).map((e) => {
                          let t = o[e];
                          return (
                              r()(null != t, 'guild should not be null'),
                              {
                                  label: t.name,
                                  value: t.id
                              }
                          );
                      }),
            [l, o, c, t]
        ),
        selectedGuild: null == i ? void 0 : o[i]
    };
}
