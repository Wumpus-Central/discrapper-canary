n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(569471),
    o = n(346479),
    s = n(723170),
    c = n(124368),
    u = n(388032);
function d(e) {
    let t = (0, s.B)(e);
    return (0, i.e7)([a.Z], () => a.Z.hasJoined(e.id))
        ? (0, r.jsx)(l.sNh, {
              id: 'thread-notifications',
              label: u.intl.string(u.t.h850Sk),
              children: (0, c.zb)().map((n) => {
                  let { setting: i, label: a } = n;
                  return (0, r.jsx)(
                      l.k5B,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(i),
                          label: a,
                          action: () => o.Z.setNotificationSettings(e, { flags: i }),
                          checked: i === t
                      },
                      i
                  );
              })
          })
        : (0, r.jsx)(l.sNh, {
              id: 'notifications-disabled',
              label: u.intl.string(u.t.h850Sk),
              disabled: !0
          });
}
