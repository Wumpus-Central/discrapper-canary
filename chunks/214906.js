e.d(t, {
    Z: function () {
        return h;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var l = e(913527),
    r = e.n(l),
    u = e(442837),
    a = e(481060),
    d = e(777861),
    o = e(569471),
    s = e(346479),
    c = e(776568),
    f = e(388032);
function h(n) {
    let [t, e, l] = (0, u.Wu)([o.Z], () => [o.Z.isMuted(n.id), o.Z.getMuteConfig(n.id), o.Z.hasJoined(n.id)]),
        h = (0, d.U)(e);
    function Z(t) {
        s.Z.setNotificationSettings(n, { muted: t });
    }
    return l
        ? t
            ? (0, i.jsx)(a.MenuItem, {
                  id: 'unmute-channel',
                  label: n.isForumPost() ? f.intl.string(f.t['0JQfsL']) : f.intl.string(f.t['Cq/TzM']),
                  subtext: h,
                  action: () => Z(!1)
              })
            : (0, i.jsx)(a.MenuItem, {
                  id: 'mute-channel',
                  label: n.isForumPost() ? f.intl.string(f.t['nP+YkZ']) : f.intl.string(f.t.bUUd8v),
                  action: () => Z(!0),
                  children: (0, c.k)().map((t) => {
                      let { value: e, label: l } = t;
                      return (0, i.jsx)(
                          a.MenuItem,
                          {
                              id: ''.concat(e),
                              label: l,
                              action: () =>
                                  (function (t) {
                                      let e = t > 0 ? r()().add(t, 'second').toISOString() : null;
                                      s.Z.setNotificationSettings(n, {
                                          muted: !0,
                                          mute_config: {
                                              selected_time_window: t,
                                              end_time: e
                                          }
                                      });
                                  })(e)
                          },
                          e
                      );
                  })
              })
        : (0, i.jsx)(a.MenuItem, {
              id: 'mute-disabled',
              label: n.isForumPost() ? f.intl.string(f.t['nP+YkZ']) : f.intl.string(f.t.bUUd8v),
              disabled: !0
          });
}
