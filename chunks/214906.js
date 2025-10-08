e.d(n, { Z: () => h }), e(388685);
var i = e(951288);
e(647438);
var a = e(913527),
    l = e.n(a),
    r = e(442837),
    o = e(481060),
    s = e(777861),
    d = e(569471),
    u = e(346479),
    c = e(776568),
    f = e(388032);
function h(t) {
    let [n, e, a] = (0, r.Wu)([d.Z], () => [d.Z.isMuted(t.id), d.Z.getMuteConfig(t.id), d.Z.hasJoined(t.id)]),
        h = (0, s.U)(e);
    function v(n) {
        u.Z.setNotificationSettings(t, { muted: n });
    }
    return a
        ? n
            ? (0, i.jsx)(o.sNh, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? f.intl.string(f.t["0JQfsL"]) : f.intl.string(f.t["Cq/TzM"]),
                  subtext: h,
                  action: () => v(!1),
              })
            : (0, i.jsx)(o.sNh, {
                  id: "mute-channel",
                  label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
                  action: () => v(!0),
                  children: (0, c.k)().map((n) => {
                      let { value: e, label: a } = n;
                      return (0, i.jsx)(
                          o.sNh,
                          {
                              id: "".concat(e),
                              label: a,
                              action: () =>
                                  (function (n) {
                                      let e = n > 0 ? l()().add(n, "second").toISOString() : null;
                                      u.Z.setNotificationSettings(t, {
                                          muted: !0,
                                          mute_config: {
                                              selected_time_window: n,
                                              end_time: e,
                                          },
                                      });
                                  })(e),
                          },
                          e,
                      );
                  }),
              })
        : (0, i.jsx)(o.sNh, {
              id: "mute-disabled",
              label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
              disabled: !0,
          });
}
