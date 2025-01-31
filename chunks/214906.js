n.d(t, { Z: () => h }), n(47120);
var i = n(200651);
n(192379);
var l = n(913527),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(777861),
    c = n(569471),
    d = n(346479),
    u = n(776568),
    m = n(388032);
function h(e) {
    let [t, n, l] = (0, r.Wu)([c.Z], () => [c.Z.isMuted(e.id), c.Z.getMuteConfig(e.id), c.Z.hasJoined(e.id)]),
        h = (0, o.U)(n);
    function _(t) {
        d.Z.setNotificationSettings(e, { muted: t });
    }
    return l
        ? t
            ? (0, i.jsx)(s.sNh, {
                  id: 'unmute-channel',
                  label: e.isForumPost() ? m.intl.string(m.t['0JQfsL']) : m.intl.string(m.t['Cq/TzM']),
                  subtext: h,
                  action: () => _(!1)
              })
            : (0, i.jsx)(s.sNh, {
                  id: 'mute-channel',
                  label: e.isForumPost() ? m.intl.string(m.t['nP+YkZ']) : m.intl.string(m.t.bUUd8v),
                  action: () => _(!0),
                  children: (0, u.k)().map((t) => {
                      let { value: n, label: l } = t;
                      return (0, i.jsx)(
                          s.sNh,
                          {
                              id: ''.concat(n),
                              label: l,
                              action: () =>
                                  (function (t) {
                                      let n = t > 0 ? a()().add(t, 'second').toISOString() : null;
                                      d.Z.setNotificationSettings(e, {
                                          muted: !0,
                                          mute_config: {
                                              selected_time_window: t,
                                              end_time: n
                                          }
                                      });
                                  })(n)
                          },
                          n
                      );
                  })
              })
        : (0, i.jsx)(s.sNh, {
              id: 'mute-disabled',
              label: e.isForumPost() ? m.intl.string(m.t['nP+YkZ']) : m.intl.string(m.t.bUUd8v),
              disabled: !0
          });
}
