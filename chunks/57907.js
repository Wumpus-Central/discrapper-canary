i.d(n, { A: () => A });
var e = i(627968);
i(64700);
var l = i(989349),
    r = i.n(l),
    a = i(311907),
    s = i(397927),
    d = i(392567),
    o = i(152007),
    u = i(867455),
    c = i(995102),
    g = i(985018);
function A(t) {
    let [n, i, l] = (0, a.yK)([o.A], () => [o.A.isMuted(t.id), o.A.getMuteConfig(t.id), o.A.hasJoined(t.id)]),
        A = (0, d.M)(i);
    function h(n) {
        u.A.setNotificationSettings(t, { muted: n });
    }
    return l
        ? n
            ? (0, e.jsx)(s.Drp, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? g.intl.string(g.t["0JQfsP"]) : g.intl.string(g.t["Cq/TzF"]),
                  subtext: A,
                  action: () => h(!1),
              })
            : (0, e.jsx)(s.Drp, {
                  id: "mute-channel",
                  label: t.isForumPost() ? g.intl.string(g.t["nP+Ykd"]) : g.intl.string(g.t.bUUd8q),
                  action: () => h(!0),
                  children: (0, c.gv)().map((n) => {
                      let { value: i, label: l } = n;
                      return (0, e.jsx)(
                          s.Drp,
                          {
                              id: `${i}`,
                              label: l,
                              action: () => {
                                  let n;
                                  return (
                                      (n = i > 0 ? r()().add(i, "second").toISOString() : null),
                                      void u.A.setNotificationSettings(t, {
                                          muted: !0,
                                          mute_config: { selected_time_window: i, end_time: n },
                                      })
                                  );
                              },
                          },
                          i,
                      );
                  }),
              })
        : (0, e.jsx)(s.Drp, {
              id: "mute-disabled",
              label: t.isForumPost() ? g.intl.string(g.t["nP+Ykd"]) : g.intl.string(g.t.bUUd8q),
              disabled: !0,
          });
}
