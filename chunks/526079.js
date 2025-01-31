t.d(i, { Z: () => o });
var n = t(192379),
    l = t(512722),
    s = t.n(l),
    d = t(442837),
    r = t(430824),
    u = t(771845),
    a = t(594174);
function o(e) {
    let { isGuildIncluded: i, selectedGuildId: t } = e,
        l = (0, d.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        o = (0, d.e7)([r.Z], () => r.Z.getGuilds()),
        c = (0, d.e7)([a.default], () => a.default.getCurrentUser());
    return {
        options: n.useMemo(
            () =>
                null == c
                    ? []
                    : (null == i
                          ? l
                          : l.filter((e) => {
                                let t = o[e];
                                return s()(null != t, 'guild should not be null'), i(t, c);
                            })
                      ).map((e) => {
                          let i = o[e];
                          return (
                              s()(null != i, 'guild should not be null'),
                              {
                                  label: i.name,
                                  value: i.id
                              }
                          );
                      }),
            [l, o, c, i]
        ),
        selectedGuild: null == t ? void 0 : o[t]
    };
}
