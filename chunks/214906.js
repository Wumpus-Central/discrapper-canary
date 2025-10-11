e.d(n, { Z: () => h }), e(388685);
var i = e(951288);
e(647438);
var l = e(913527),
    a = e.n(l),
    r = e(442837),
    o = e(481060),
    s = e(777861),
    d = e(569471),
    u = e(346479),
    c = e(776568),
    f = e(388032);
function h(t) {
    let [n, e, l] = (0, r.Wu)([d.Z], () => [d.Z.isMuted(t.id), d.Z.getMuteConfig(t.id), d.Z.hasJoined(t.id)]),
        h = (0, s.U)(e);
    function g(n) {
        u.Z.setNotificationSettings(t, { muted: n });
    }
    return l
        ? n
            ? (0, i.jsx)(o.sNh, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? f.intl.string(f.t["0JQfsL"]) : f.intl.string(f.t["Cq/TzM"]),
                  subtext: h,
                  action: () => g(!1),
              })
            : (0, i.jsx)(o.sNh, {
                  id: "mute-channel",
                  label: t.isForumPost() ? f.intl.string(f.t["nP+YkZ"]) : f.intl.string(f.t.bUUd8v),
                  action: () => g(!0),
                  children: (0, c.k)().map((n) => {
                      let { value: e, label: l } = n;
                      return (0, i.jsx)(
                          o.sNh,
                          {
                              id: "".concat(e),
                              label: l,
                              action: () =>
                                  (function (n) {
                                      let e = n > 0 ? a()().add(n, "second").toISOString() : null;
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
