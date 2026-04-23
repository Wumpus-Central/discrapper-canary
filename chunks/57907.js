i.d(n, { A: () => A });
var e = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    a = i(145408),
    s = i(152007),
    d = i(867455),
    o = i(812141),
    u = i(995102),
    c = i(985018);
function A(t) {
    let [n, i, A] = (0, l.yK)([s.A], () => [s.A.isMuted(t.id), s.A.getMuteConfig(t.id), s.A.hasJoined(t.id)]),
        h = (0, a.M)(i);
    function g(n) {
        d.A.setNotificationSettings(t, { muted: n });
    }
    return A
        ? n
            ? (0, e.jsx)(r.Dr, {
                  id: "unmute-channel",
                  label: t.isForumPost() ? c.intl.string(c.t["0JQfsP"]) : c.intl.string(c.t["Cq/TzF"]),
                  subtext: h,
                  action: () => g(!1),
              })
            : (0, e.jsx)(r.Dr, {
                  id: "mute-channel",
                  label: t.isForumPost() ? c.intl.string(c.t["nP+Ykd"]) : c.intl.string(c.t.bUUd8q),
                  action: () => g(!0),
                  children: (0, u.g)().map((n) => {
                      let { value: i, label: l } = n;
                      return (0, e.jsx)(
                          r.Dr,
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
        : (0, e.jsx)(r.Dr, {
              id: "mute-disabled",
              label: t.isForumPost() ? c.intl.string(c.t["nP+Ykd"]) : c.intl.string(c.t.bUUd8q),
              disabled: !0,
          });
}
