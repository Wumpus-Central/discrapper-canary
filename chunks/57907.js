i.d(n, {
    A: () => A,
}),
    i(896048);
var e = i(627968);
i(64700);
var r = i(989349),
    l = i.n(r),
    a = i(311907),
    d = i(397927),
    s = i(392567),
    o = i(152007),
    u = i(867455),
    c = i(995102),
    h = i(985018);

function A(t) {
    let [n, i, r] = (0, a.yK)([o.A], () => [o.A.isMuted(t.id), o.A.getMuteConfig(t.id), o.A.hasJoined(t.id)]),
        A = (0, s.M)(i);

    function g(n) {
        u.A.setNotificationSettings(t, {
            muted: n,
        });
    }
    return r
        ? n
            ? (0, e.jsx)(d.Drp, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? h.intl.string(h.t["0JQfsP"]) : h.intl.string(h.t["Cq/TzF"]),
                  subtext: A,
                  action: () => g(!1),
              })
            : (0, e.jsx)(d.Drp, {
                  id: "mute-channel",
                  label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
                  action: () => g(!0),
                  children: (0, c.gv)().map((n) => {
                      let { value: i, label: r } = n;
                      return (0, e.jsx)(
                          d.Drp,
                          {
                              id: "".concat(i),
                              label: r,
                              action: () => {
                                  let n;
                                  return (
                                      (n = i > 0 ? l()().add(i, "second").toISOString() : null),
                                      void u.A.setNotificationSettings(t, {
                                          muted: !0,
                                          mute_config: {
                                              selected_time_window: i,
                                              end_time: n,
                                          },
                                      })
                                  );
                              },
                          },
                          i,
                      );
                  }),
              })
        : (0, e.jsx)(d.Drp, {
              id: "mute-disabled",
              label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
              disabled: !0,
          });
}
