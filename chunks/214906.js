n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(913527),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(777861),
    c = n(569471),
    u = n(346479),
    d = n(776568),
    m = n(388032);
function h(e) {
    let [t, n, r] = (0, a.Wu)([c.Z], () => [c.Z.isMuted(e.id), c.Z.getMuteConfig(e.id), c.Z.hasJoined(e.id)]),
        h = (0, s.U)(n);
    function f(t) {
        u.Z.setNotificationSettings(e, { muted: t });
    }
    return r
        ? t
            ? (0, i.jsx)(o.MenuItem, {
                  id: 'unmute-channel',
                  label: e.isForumPost() ? m.intl.string(m.t['0JQfsL']) : m.intl.string(m.t['Cq/TzM']),
                  subtext: h,
                  action: () => f(!1)
              })
            : (0, i.jsx)(o.MenuItem, {
                  id: 'mute-channel',
                  label: e.isForumPost() ? m.intl.string(m.t['nP+YkZ']) : m.intl.string(m.t.bUUd8v),
                  action: () => f(!0),
                  children: (0, d.k)().map((t) => {
                      let { value: n, label: r } = t;
                      return (0, i.jsx)(
                          o.MenuItem,
                          {
                              id: ''.concat(n),
                              label: r,
                              action: () =>
                                  (function (t) {
                                      let n = t > 0 ? l()().add(t, 'second').toISOString() : null;
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
        : (0, i.jsx)(o.MenuItem, {
              id: 'mute-disabled',
              label: e.isForumPost() ? m.intl.string(m.t['nP+YkZ']) : m.intl.string(m.t.bUUd8v),
              disabled: !0
          });
}
