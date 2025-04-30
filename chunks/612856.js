e.d(t, { Z: () => c });
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    a = e(569471),
    o = e(346479),
    s = e(723170),
    d = e(124368),
    u = e(388032);
function c(n) {
    let t = (0, s.B)(n);
    return (0, l.e7)([a.Z], () => a.Z.hasJoined(n.id))
        ? (0, i.jsx)(r.sNh, {
              id: 'thread-notifications',
              label: u.intl.string(u.t.h850Sk),
              children: (0, d.zb)().map((e) => {
                  let { setting: l, label: a } = e;
                  return (0, i.jsx)(
                      r.k5B,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(l),
                          label: a,
                          action: () => o.Z.setNotificationSettings(n, { flags: l }),
                          checked: l === t
                      },
                      l
                  );
              })
          })
        : (0, i.jsx)(r.sNh, {
              id: 'notifications-disabled',
              label: u.intl.string(u.t.h850Sk),
              disabled: !0
          });
}
