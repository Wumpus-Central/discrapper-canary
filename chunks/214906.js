n.d(t, { Z: () => m }), n(388685);
var r = n(200651);
n(192379);
var i = n(913527),
    a = n.n(i),
    l = n(442837),
    o = n(481060),
    s = n(777861),
    c = n(569471),
    u = n(346479),
    d = n(776568),
    p = n(388032);
function m(e) {
    let [t, n, i] = (0, l.Wu)([c.Z], () => [c.Z.isMuted(e.id), c.Z.getMuteConfig(e.id), c.Z.hasJoined(e.id)]),
        m = (0, s.U)(n);
    function f(t) {
        u.Z.setNotificationSettings(e, { muted: t });
    }
    return i
        ? t
            ? (0, r.jsx)(o.sNh, {
                  id: 'unmute-channel',
                  label: e.isForumPost() ? p.NW.string(p.t['0JQfsL']) : p.NW.string(p.t['Cq/TzM']),
                  subtext: m,
                  action: () => f(!1)
              })
            : (0, r.jsx)(o.sNh, {
                  id: 'mute-channel',
                  label: e.isForumPost() ? p.NW.string(p.t['nP+YkZ']) : p.NW.string(p.t.bUUd8v),
                  action: () => f(!0),
                  children: (0, d.k)().map((t) => {
                      let { value: n, label: i } = t;
                      return (0, r.jsx)(
                          o.sNh,
                          {
                              id: ''.concat(n),
                              label: i,
                              action: () =>
                                  (function (t) {
                                      let n = t > 0 ? a()().add(t, 'second').toISOString() : null;
                                      u.Z.setNotificationSettings(e, {
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
        : (0, r.jsx)(o.sNh, {
              id: 'mute-disabled',
              label: e.isForumPost() ? p.NW.string(p.t['nP+YkZ']) : p.NW.string(p.t.bUUd8v),
              disabled: !0
          });
}
