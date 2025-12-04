n.d(t, { Z: () => p });
var i = n(54381),
    s = n(913527),
    l = n.n(s),
    r = n(399606),
    a = n(199849),
    o = n(481060),
    d = n(87051),
    c = n(430824),
    u = n(9156),
    h = n(621600),
    g = n(423589),
    m = n(969943),
    x = n(388032);
function p(e) {
    var t, n;
    let { guildId: s } = e,
        p = (0, r.e7)([c.Z], () => c.Z.getGuild(s)),
        j = (0, r.e7)([u.ZP], () => u.ZP.isMuted(s)),
        v = (0, r.e7)([u.ZP], () => u.ZP.getMuteConfig(s));
    return null == p
        ? null
        : (0, i.jsxs)(o.C3N, {
              children: [
                  (0, i.jsx)(o.rsf, {
                      label: x.intl.format(x.t["J+7D9E"], { name: p.name }),
                      description: x.intl.string(x.t.IngcUv),
                      checked: j,
                      onChange: (e) => {
                          d.Z.updateGuildNotificationSettings(s, { muted: e }, h.UE.muted(e));
                      },
                  }),
                  j &&
                      (0, i.jsx)(a.y6, {
                          label: x.intl.string(x.t.Ztu2Yo),
                          description:
                              null == (n = v) || null == n.end_time
                                  ? null
                                  : x.intl.formatToPlainString(x.t.j7h4AJ, {
                                        endTime: new Date(n.end_time).toLocaleString(x.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onChange: (e) => {
                              let t = e > 0 ? l()().add(e, "second").toISOString() : null;
                              d.Z.updateGuildNotificationSettings(
                                  s,
                                  {
                                      mute_config: {
                                          selected_time_window: e,
                                          end_time: t,
                                      },
                                      muted: !0,
                                  },
                                  h.ZB.Muted,
                              );
                          },
                          options: (0, g.W9)(),
                          value: null != (t = null == v ? void 0 : v.selected_time_window) ? t : m.Oe.ALWAYS,
                      }),
              ],
          });
}
