e.d(n, { Z: () => u });
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    a = e(569471),
    s = e(346479),
    o = e(723170),
    d = e(124368),
    c = e(388032);
function u(t) {
    let n = (0, o.B)(t);
    return (0, r.e7)([a.Z], () => a.Z.hasJoined(t.id))
        ? (0, i.jsx)(l.sNh, {
              id: 'thread-notifications',
              label: c.intl.string(c.t.h850Sk),
              children: (0, d.zb)().map((e) => {
                  let { setting: r, label: a } = e;
                  return (0, i.jsx)(
                      l.k5B,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(r),
                          label: a,
                          action: () => s.Z.setNotificationSettings(t, { flags: r }),
                          checked: r === n
                      },
                      r
                  );
              })
          })
        : (0, i.jsx)(l.sNh, {
              id: 'notifications-disabled',
              label: c.intl.string(c.t.h850Sk),
              disabled: !0
          });
}
