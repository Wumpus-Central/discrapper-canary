n.d(e, { A: () => c });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(152007),
    s = n(867455),
    d = n(607508),
    o = n(37411),
    u = n(985018);
function c(t) {
    let e = (0, d.X)(t);
    return (0, r.bG)([a.A], () => a.A.hasJoined(t.id))
        ? (0, i.jsx)(l.Drp, {
              id: "thread-notifications",
              label: u.intl.string(u.t.h850Ss),
              children: (0, o.EU)().map((n) => {
                  let { setting: r, label: a } = n;
                  return (0, i.jsx)(
                      l.iDA,
                      {
                          group: "thread-notifications",
                          id: `${r}`,
                          label: a,
                          action: () => s.A.setNotificationSettings(t, { flags: r }),
                          checked: r === e,
                      },
                      r,
                  );
              }),
          })
        : (0, i.jsx)(l.Drp, { id: "notifications-disabled", label: u.intl.string(u.t.h850Ss), disabled: !0 });
}
