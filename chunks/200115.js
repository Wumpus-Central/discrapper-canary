n.d(t, {
    Z: function () {
        return S;
    }
});
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
    x = n(401387);
function S(e) {
    var t;
    let { guildId: n } = e,
        s = (0, r.e7)([d.Z], () => d.Z.getGuild(n)),
        S = (0, r.e7)([c.ZP], () => c.ZP.isMuted(n)),
        p = (0, r.e7)([c.ZP], () => c.ZP.getMuteConfig(n));
    return null == s
        ? null
        : (0, i.jsxs)(a.FormItem, {
              children: [
                  (0, i.jsx)(a.FormSwitch, {
                      hideBorder: !0,
                      value: S,
                      onChange: (e) => {
                          o.Z.updateGuildNotificationSettings(n, { muted: e }, u.UE.muted(e));
                      },
                      style: { marginBottom: 0 },
                      note: m.intl.string(m.t.IngcUl),
                      children: m.intl.format(m.t['J+7D9P'], { name: s.name })
                  }),
                  S &&
                      (0, i.jsxs)('div', {
                          className: x.mutedConfig,
                          children: [
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(a.FormTitle, {
                                          tag: 'h3',
                                          children: m.intl.string(m.t.Ztu2Ym)
                                      }),
                                      (0, i.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children: (function (e) {
                                              return null == e || null == e.end_time
                                                  ? null
                                                  : m.intl.formatToPlainString(m.t.j7h4AA, {
                                                        endTime: new Date(e.end_time).toLocaleString(m.intl.currentLocale, {
                                                            month: 'numeric',
                                                            day: 'numeric',
                                                            hour: 'numeric',
                                                            minute: '2-digit'
                                                        })
                                                    });
                                          })(p)
                                      })
                                  ]
                              }),
                              (0, i.jsx)(a.SingleSelect, {
                                  onChange: (e) => {
                                      let t = e > 0 ? l()().add(e, 'second').toISOString() : null;
                                      o.Z.updateGuildNotificationSettings(
                                          n,
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
                                  value: null !== (t = null == p ? void 0 : p.selected_time_window) && void 0 !== t ? t : g.Oe.ALWAYS
                              })
                          ]
                      })
              ]
          });
}
