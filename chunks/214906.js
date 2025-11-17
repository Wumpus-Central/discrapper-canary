e.d(n, { Z: () => f }), e(388685);
var i = e(54381);
e(473749);
var a = e(913527),
    l = e.n(a),
    r = e(442837),
    s = e(481060),
    o = e(777861),
    d = e(569471),
    u = e(346479),
    c = e(776568),
    h = e(388032);
function f(t) {
    let [n, e, a] = (0, r.Wu)([d.Z], () => [d.Z.isMuted(t.id), d.Z.getMuteConfig(t.id), d.Z.hasJoined(t.id)]),
        f = (0, o.U)(e);
    function g(n) {
        u.Z.setNotificationSettings(t, { muted: n });
    }
    return a
        ? n
            ? (0, i.jsx)(s.sNh, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? h.intl.string(h.t["0JQfsP"]) : h.intl.string(h.t["Cq/TzF"]),
                  subtext: f,
                  action: () => g(!1),
              })
            : (0, i.jsx)(s.sNh, {
                  id: "mute-channel",
                  label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
                  action: () => g(!0),
                  children: (0, c.k)().map((n) => {
                      let { value: e, label: a } = n;
                      return (0, i.jsx)(
                          s.sNh,
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
        : (0, i.jsx)(s.sNh, {
              id: "mute-disabled",
              label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
              disabled: !0,
          });
}
