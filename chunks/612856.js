n.d(e, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    l = n(569471),
    s = n(346479),
    o = n(723170),
    d = n(124368),
    c = n(388032);
function u(t) {
    let e = (0, o.B)(t);
    return (0, r.e7)([l.Z], () => l.Z.hasJoined(t.id))
        ? (0, i.jsx)(a.sNh, {
              id: 'thread-notifications',
              label: c.NW.string(c.t.h850Sk),
              children: (0, d.zb)().map((n) => {
                  let { setting: r, label: l } = n;
                  return (0, i.jsx)(
                      a.k5B,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(r),
                          label: l,
                          action: () => s.Z.setNotificationSettings(t, { flags: r }),
                          checked: r === e
                      },
                      r
                  );
              })
          })
        : (0, i.jsx)(a.sNh, {
              id: 'notifications-disabled',
              label: c.NW.string(c.t.h850Sk),
              disabled: !0
          });
}
