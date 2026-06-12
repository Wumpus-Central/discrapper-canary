s.d(t, { A: () => h });
var a = s(627968);
s(64700);
var n = s(17928),
    e = s(477782),
    d = s(152007),
    r = s(867455),
    c = s(607508),
    l = s(37411),
    o = s(375708);
function h(i) {
    let t = (0, c.X)(i);
    return (0, n.bG)([d.A], () => d.A.hasJoined(i.id))
        ? (0, a.jsx)(e.Dr, {
              id: "thread-notifications",
              label: o.intl.string(o.t.h850Ss),
              children: (0, l.EU)().map((s) => {
                  let { setting: n, label: d } = s;
                  return (0, a.jsx)(
                      e.iD,
                      {
                          group: "thread-notifications",
                          id: `${n}`,
                          label: d,
                          action: () => r.A.setNotificationSettings(i, { flags: n }),
                          checked: n === t,
                      },
                      n,
                  );
              }),
          })
        : (0, a.jsx)(e.Dr, { id: "notifications-disabled", label: o.intl.string(o.t.h850Ss), disabled: !0 });
}
