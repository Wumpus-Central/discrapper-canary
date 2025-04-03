n.d(t, { Z: () => h }), n(47120);
var i = n(200651);
n(192379);
var r = n(913527),
    a = n.n(r),
    l = n(442837),
    o = n(481060),
    d = n(777861),
    u = n(569471),
    s = n(346479),
    c = n(776568),
    f = n(388032);
function h(e) {
    let [t, n, r] = (0, l.Wu)([u.Z], () => [u.Z.isMuted(e.id), u.Z.getMuteConfig(e.id), u.Z.hasJoined(e.id)]),
        h = (0, d.U)(n);
    function v(t) {
        s.Z.setNotificationSettings(e, { muted: t });
    }
    return r
        ? t
            ? (0, i.jsx)(o.sNh, {
                  id: 'unmute-channel',
                  label: e.isForumPost() ? f.NW.string(f.t['0JQfsL']) : f.NW.string(f.t['Cq/TzM']),
                  subtext: h,
                  action: () => v(!1)
              })
            : (0, i.jsx)(o.sNh, {
                  id: 'mute-channel',
                  label: e.isForumPost() ? f.NW.string(f.t['nP+YkZ']) : f.NW.string(f.t.bUUd8v),
                  action: () => v(!0),
                  children: (0, c.k)().map((t) => {
                      let { value: n, label: r } = t;
                      return (0, i.jsx)(
                          o.sNh,
                          {
                              id: ''.concat(n),
                              label: r,
                              action: () =>
                                  (function (t) {
                                      let n = t > 0 ? a()().add(t, 'second').toISOString() : null;
                                      s.Z.setNotificationSettings(e, {
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
        : (0, i.jsx)(o.sNh, {
              id: 'mute-disabled',
              label: e.isForumPost() ? f.NW.string(f.t['nP+YkZ']) : f.NW.string(f.t.bUUd8v),
              disabled: !0
          });
}
