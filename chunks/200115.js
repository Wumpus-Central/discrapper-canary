n.d(t, { Z: () => x });
var i = n(54381),
    s = n(913527),
    l = n.n(s),
    r = n(399606),
    a = n(481060),
    o = n(87051),
    d = n(430824),
    c = n(9156),
    u = n(621600),
    h = n(423589),
    g = n(969943),
    m = n(388032);
function x(e) {
    var t, n;
    let { guildId: s } = e,
        x = (0, r.e7)([d.Z], () => d.Z.getGuild(s)),
        p = (0, r.e7)([c.ZP], () => c.ZP.isMuted(s)),
        v = (0, r.e7)([c.ZP], () => c.ZP.getMuteConfig(s));
    return null == x
        ? null
        : (0, i.jsxs)(a.C3N, {
              children: [
                  (0, i.jsx)(a.rsf, {
                      label: m.intl.format(m.t["J+7D9E"], { name: x.name }),
                      description: m.intl.string(m.t.IngcUv),
                      checked: p,
                      onChange: (e) => {
                          o.Z.updateGuildNotificationSettings(s, { muted: e }, u.UE.muted(e));
                      },
                  }),
                  p &&
                      (0, i.jsx)(a.q4e, {
                          label: m.intl.string(m.t.Ztu2Yo),
                          description:
                              null == (n = v) || null == n.end_time
                                  ? null
                                  : m.intl.formatToPlainString(m.t.j7h4AJ, {
                                        endTime: new Date(n.end_time).toLocaleString(m.intl.currentLocale, {
                                            month: "numeric",
                                            day: "numeric",
                                            hour: "numeric",
                                            minute: "2-digit",
                                        }),
                                    }),
                          onChange: (e) => {
                              let t = e > 0 ? l()().add(e, "second").toISOString() : null;
                              o.Z.updateGuildNotificationSettings(
                                  s,
                                  {
                                      mute_config: {
                                          selected_time_window: e,
                                          end_time: t,
                                      },
                                      muted: !0,
                                  },
                                  u.ZB.Muted,
                              );
                          },
                          options: (0, h.W9)(),
                          value: null != (t = null == v ? void 0 : v.selected_time_window) ? t : g.Oe.ALWAYS,
                      }),
              ],
          });
}
