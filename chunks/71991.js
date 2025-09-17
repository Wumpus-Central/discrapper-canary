i.d(n, { Z: () => Z }), i(388685);
var e = i(951288);
i(647438);
var l = i(913527),
    r = i.n(l),
    a = i(442837),
    d = i(481060),
    o = i(777861),
    s = i(569471),
    u = i(346479),
    c = i(776568),
    h = i(388032);
function Z(t) {
    let [n, i, l] = (0, a.Wu)([s.Z], () => [s.Z.isMuted(t.id), s.Z.getMuteConfig(t.id), s.Z.hasJoined(t.id)]),
        Z = (0, o.U)(i);
    function v(n) {
        u.Z.setNotificationSettings(t, { muted: n });
    }
    return l
        ? n
            ? (0, e.jsx)(d.sNh, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? h.intl.string(h.t["0JQfsL"]) : h.intl.string(h.t["Cq/TzM"]),
                  subtext: Z,
                  action: () => v(!1),
              })
            : (0, e.jsx)(d.sNh, {
                  id: "mute-channel",
                  label: t.isForumPost() ? h.intl.string(h.t["nP+YkZ"]) : h.intl.string(h.t.bUUd8v),
                  action: () => v(!0),
                  children: (0, c.k)().map((n) => {
                      let { value: i, label: l } = n;
                      return (0, e.jsx)(
                          d.sNh,
                          {
                              id: "".concat(i),
                              label: l,
                              action: () =>
                                  (function (n) {
                                      let i = n > 0 ? r()().add(n, "second").toISOString() : null;
                                      u.Z.setNotificationSettings(t, {
                                          muted: !0,
                                          mute_config: {
                                              selected_time_window: n,
                                              end_time: i,
                                          },
                                      });
                                  })(i),
                          },
                          i,
                      );
                  }),
              })
        : (0, e.jsx)(d.sNh, {
              id: "mute-disabled",
              label: t.isForumPost() ? h.intl.string(h.t["nP+YkZ"]) : h.intl.string(h.t.bUUd8v),
              disabled: !0,
          });
}
