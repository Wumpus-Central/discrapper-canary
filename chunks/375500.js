i.d(n, { A: () => c });
var e = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    a = i(152007),
    s = i(867455),
    d = i(607508),
    o = i(37411),
    u = i(985018);
function c(t) {
    let n = (0, d.X)(t);
    return (0, l.bG)([a.A], () => a.A.hasJoined(t.id))
        ? (0, e.jsx)(r.Dr, {
              id: "thread-notifications",
              label: u.intl.string(u.t.h850Ss),
              children: (0, o.EU)().map((i) => {
                  let { setting: l, label: a } = i;
                  return (0, e.jsx)(
                      r.iD,
                      {
                          group: "thread-notifications",
                          id: `${l}`,
                          label: a,
                          action: () => s.A.setNotificationSettings(t, { flags: l }),
                          checked: l === n,
                      },
                      l,
                  );
              }),
          })
        : (0, e.jsx)(r.Dr, { id: "notifications-disabled", label: u.intl.string(u.t.h850Ss), disabled: !0 });
}
