n.d(e, { A: () => g });
var i = n(627968);
n(64700);
var r = n(989349),
    l = n.n(r),
    a = n(311907),
    s = n(397927),
    d = n(392567),
    o = n(152007),
    u = n(867455),
    c = n(995102),
    A = n(985018);
function g(t) {
    let [e, n, r] = (0, a.yK)([o.A], () => [o.A.isMuted(t.id), o.A.getMuteConfig(t.id), o.A.hasJoined(t.id)]),
        g = (0, d.M)(n);
    function f(e) {
        u.A.setNotificationSettings(t, { muted: e });
    }
    return r
        ? e
            ? (0, i.jsx)(s.Drp, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? A.intl.string(A.t["0JQfsP"]) : A.intl.string(A.t["Cq/TzF"]),
                  subtext: g,
                  action: () => f(!1),
              })
            : (0, i.jsx)(s.Drp, {
                  id: "mute-channel",
                  label: t.isForumPost() ? A.intl.string(A.t["nP+Ykd"]) : A.intl.string(A.t.bUUd8q),
                  action: () => f(!0),
                  children: (0, c.gv)().map((e) => {
                      let { value: n, label: r } = e;
                      return (0, i.jsx)(
                          s.Drp,
                          {
                              id: `${n}`,
                              label: r,
                              action: () => {
                                  let e;
                                  return (
                                      (e = n > 0 ? l()().add(n, "second").toISOString() : null),
                                      void u.A.setNotificationSettings(t, {
                                          muted: !0,
                                          mute_config: { selected_time_window: n, end_time: e },
                                      })
                                  );
                              },
                          },
                          n,
                      );
                  }),
              })
        : (0, i.jsx)(s.Drp, {
              id: "mute-disabled",
              label: t.isForumPost() ? A.intl.string(A.t["nP+Ykd"]) : A.intl.string(A.t.bUUd8q),
              disabled: !0,
          });
}
