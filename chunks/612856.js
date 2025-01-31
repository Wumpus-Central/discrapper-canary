e.d(t, { Z: () => c });
var i = e(200651);
e(192379);
var a = e(442837),
    l = e(481060),
    r = e(569471),
    o = e(346479),
    d = e(723170),
    s = e(124368),
    u = e(388032);
function c(n) {
    let t = (0, d.B)(n);
    return (0, a.e7)([r.Z], () => r.Z.hasJoined(n.id))
        ? (0, i.jsx)(l.sNh, {
              id: 'thread-notifications',
              label: u.intl.string(u.t.h850Sk),
              children: (0, s.zb)().map((e) => {
                  let { setting: a, label: r } = e;
                  return (0, i.jsx)(
                      l.k5B,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(a),
                          label: r,
                          action: () => o.Z.setNotificationSettings(n, { flags: a }),
                          checked: a === t
                      },
                      a
                  );
              })
          })
        : (0, i.jsx)(l.sNh, {
              id: 'notifications-disabled',
              label: u.intl.string(u.t.h850Sk),
              disabled: !0
          });
}
