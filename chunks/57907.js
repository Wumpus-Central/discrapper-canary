n.d(t, { A: () => c });
var s = n(477900);
n(582128);
var e = n(17928),
    l = n(477782),
    r = n(145408),
    d = n(152007),
    a = n(867455),
    u = n(812141),
    o = n(995102),
    g = n(105292);
function c(i) {
    let [t, n, c] = (0, e.yK)([d.A], () => [d.A.isMuted(i.id), d.A.getMuteConfig(i.id), d.A.hasJoined(i.id)]),
        A = (0, r.M)(n);
    function b(t) {
        a.A.setNotificationSettings(i, { muted: t });
    }
    return c
        ? t
            ? (0, s.jsx)(l.Dr, {
                  id: "unmute-channel",
                  label: i.isForumPost() ? g.intl.string(g.t["0JQfsP"]) : g.intl.string(g.t["Cq/TzF"]),
                  subtext: A,
                  action: () => b(!1),
              })
            : (0, s.jsx)(l.Dr, {
                  id: "mute-channel",
                  label: i.isForumPost() ? g.intl.string(g.t["nP+Ykd"]) : g.intl.string(g.t.bUUd8q),
                  action: () => b(!0),
                  children: (0, o.g)().map((t) => {
                      let { value: n, label: e } = t;
                      return (0, s.jsx)(
                          l.Dr,
                          {
                              id: `${n}`,
                              label: e,
                              action: () => {
                                  let t;
                                  return ((t = u.p(n)), void a.A.setNotificationSettings(i, t));
                              },
                          },
                          n,
                      );
                  }),
              })
        : (0, s.jsx)(l.Dr, {
              id: "mute-disabled",
              label: i.isForumPost() ? g.intl.string(g.t["nP+Ykd"]) : g.intl.string(g.t.bUUd8q),
              disabled: !0,
          });
}
