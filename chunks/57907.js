i.d(n, { A: () => g });
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(392567),
    s = i(152007),
    d = i(867455),
    o = i(812141),
    u = i(995102),
    c = i(985018);
function g(t) {
    let [n, i, g] = (0, l.yK)([s.A], () => [s.A.isMuted(t.id), s.A.getMuteConfig(t.id), s.A.hasJoined(t.id)]),
        A = (0, a.M)(i);
    function h(n) {
        d.A.setNotificationSettings(t, { muted: n });
    }
    return g
        ? n
            ? (0, e.jsx)(r.Drp, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? c.intl.string(c.t["0JQfsP"]) : c.intl.string(c.t["Cq/TzF"]),
                  subtext: A,
                  action: () => h(!1),
              })
            : (0, e.jsx)(r.Drp, {
                  id: "mute-channel",
                  label: t.isForumPost() ? c.intl.string(c.t["nP+Ykd"]) : c.intl.string(c.t.bUUd8q),
                  action: () => h(!0),
                  children: (0, u.g)().map((n) => {
                      let { value: i, label: l } = n;
                      return (0, e.jsx)(
                          r.Drp,
                          {
                              id: `${i}`,
                              label: l,
                              action: () => {
                                  let n;
                                  return (n = o.p(i)), void d.A.setNotificationSettings(t, n);
                              },
                          },
                          i,
                      );
                  }),
              })
        : (0, e.jsx)(r.Drp, {
              id: "mute-disabled",
              label: t.isForumPost() ? c.intl.string(c.t["nP+Ykd"]) : c.intl.string(c.t.bUUd8q),
              disabled: !0,
          });
}
