t.d(e, { Z: () => c });
var i = t(255367);
t(73800);
var r = t(442837),
    a = t(481060),
    l = t(569471),
    o = t(346479),
    s = t(723170),
    d = t(124368),
    u = t(388032);
function c(n) {
    let e = (0, s.B)(n);
    return (0, r.e7)([l.Z], () => l.Z.hasJoined(n.id))
        ? (0, i.jsx)(a.sNh, {
              id: 'thread-notifications',
              label: u.intl.string(u.t.h850Sk),
              children: (0, d.zb)().map((t) => {
                  let { setting: r, label: l } = t;
                  return (0, i.jsx)(
                      a.k5B,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(r),
                          label: l,
                          action: () => o.Z.setNotificationSettings(n, { flags: r }),
                          checked: r === e
                      },
                      r
                  );
              })
          })
        : (0, i.jsx)(a.sNh, {
              id: 'notifications-disabled',
              label: u.intl.string(u.t.h850Sk),
              disabled: !0
          });
}
