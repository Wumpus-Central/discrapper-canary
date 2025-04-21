n.d(t, { Z: () => p });
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
function p(e) {
    var t, n;
    let { guildId: s } = e,
        p = (0, r.e7)([d.Z], () => d.Z.getGuild(s)),
        v = (0, r.e7)([c.ZP], () => c.ZP.isMuted(s)),
        j = (0, r.e7)([c.ZP], () => c.ZP.getMuteConfig(s));
    return null == p
        ? null
        : (0, i.jsxs)(a.xJW, {
              children: [
                  (0, i.jsx)(a.j7V, {
                      hideBorder: !0,
                      value: v,
                      onChange: (e) => {
                          o.Z.updateGuildNotificationSettings(s, { muted: e }, u.UE.muted(e));
                      },
                      style: { marginBottom: 0 },
                      note: m.intl.string(m.t.IngcUl),
                      children: m.intl.format(m.t['J+7D9P'], { name: p.name })
                  }),
                  v &&
                      (0, i.jsxs)('div', {
                          className: x.mutedConfig,
                          children: [
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(a.vwX, {
                                          tag: 'h3',
                                          children: m.intl.string(m.t.Ztu2Ym)
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children:
                                              null == (n = j) || null == n.end_time
                                                  ? null
                                                  : m.intl.formatToPlainString(m.t.j7h4AA, {
                                                        endTime: new Date(n.end_time).toLocaleString(m.intl.currentLocale, {
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
                                  value: null != (t = null == j ? void 0 : j.selected_time_window) ? t : g.Oe.ALWAYS
                              })
                          ]
                      })
              ]
          });
}
