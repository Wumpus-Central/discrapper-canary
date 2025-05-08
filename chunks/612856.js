e.d(t, { Z: () => c });
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    a = e(569471),
    o = e(346479),
    s = e(723170),
    d = e(124368),
    u = e(388032);
function c(n) {
    let t = (0, s.B)(n);
    return (0, r.e7)([a.Z], () => a.Z.hasJoined(n.id))
        ? (0, i.jsx)(l.sNh, {
              id: 'thread-notifications',
              label: u.intl.string(u.t.h850Sk),
              children: (0, d.zb)().map((e) => {
                  let { setting: r, label: a } = e;
                  return (0, i.jsx)(
                      l.k5B,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(r),
                          label: a,
                          action: () => o.Z.setNotificationSettings(n, { flags: r }),
                          checked: r === t
                      },
                      r
                  );
              })
          })
        : (0, i.jsx)(l.sNh, {
              id: 'notifications-disabled',
              label: u.intl.string(u.t.h850Sk),
              disabled: !0
          });
}
