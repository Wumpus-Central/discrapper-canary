n.d(t, { Z: () => N });
var i = n(200651);
n(192379);
var s = n(913527),
    l = n.n(s),
    r = n(399606),
    a = n(481060),
    o = n(87051),
    d = n(430824),
    c = n(9156),
    u = n(621600),
    h = n(423589),
    g = n(969943),
    m = n(388032),
    x = n(246511);
function N(e) {
    var t, n;
    let { guildId: s } = e,
        N = (0, r.e7)([d.Z], () => d.Z.getGuild(s)),
        p = (0, r.e7)([c.ZP], () => c.ZP.isMuted(s)),
        v = (0, r.e7)([c.ZP], () => c.ZP.getMuteConfig(s));
    return null == N
        ? null
        : (0, i.jsxs)(a.xJW, {
              children: [
                  (0, i.jsx)(a.j7V, {
                      hideBorder: !0,
                      value: p,
                      onChange: (e) => {
                          o.Z.updateGuildNotificationSettings(s, { muted: e }, u.UE.muted(e));
                      },
                      style: { marginBottom: 0 },
                      note: m.NW.string(m.t.IngcUl),
                      children: m.NW.format(m.t['J+7D9P'], { name: N.name })
                  }),
                  p &&
                      (0, i.jsxs)('div', {
                          className: x.mutedConfig,
                          children: [
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(a.vwX, {
                                          tag: 'h3',
                                          children: m.NW.string(m.t.Ztu2Ym)
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children:
                                              null == (n = v) || null == n.end_time
                                                  ? null
                                                  : m.NW.formatToPlainString(m.t.j7h4AA, {
                                                        endTime: new Date(n.end_time).toLocaleString(m.NW.currentLocale, {
                                                            month: 'numeric',
                                                            day: 'numeric',
                                                            hour: 'numeric',
                                                            minute: '2-digit'
                                                        })
                                                    })
                                      })
                                  ]
                              }),
                              (0, i.jsx)(a.q4e, {
                                  onChange: (e) => {
                                      let t = e > 0 ? l()().add(e, 'second').toISOString() : null;
                                      o.Z.updateGuildNotificationSettings(
                                          s,
                                          {
                                              mute_config: {
                                                  selected_time_window: e,
                                                  end_time: t
                                              },
                                              muted: !0
                                          },
                                          u.ZB.Muted
                                      );
                                  },
                                  options: (0, h.W9)(),
                                  value: null != (t = null == v ? void 0 : v.selected_time_window) ? t : g.Oe.ALWAYS
                              })
                          ]
                      })
              ]
          });
}
