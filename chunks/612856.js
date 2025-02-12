n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(569471),
    s = n(346479),
    o = n(723170),
    c = n(124368),
    d = n(388032);
function u(e) {
    let t = (0, o.B)(e);
    return (0, l.e7)([r.Z], () => r.Z.hasJoined(e.id))
        ? (0, i.jsx)(a.sNh, {
              id: 'thread-notifications',
              label: d.intl.string(d.t.h850Sk),
              children: (0, c.zb)().map((n) => {
                  let { setting: l, label: r } = n;
                  return (0, i.jsx)(
                      a.k5B,
                      {
                          group: 'thread-notifications',
                          id: ''.concat(l),
                          label: r,
                          action: () => s.Z.setNotificationSettings(e, { flags: l }),
                          checked: l === t
                      },
                      l
                  );
              })
          })
        : (0, i.jsx)(a.sNh, {
              id: 'notifications-disabled',
              label: d.intl.string(d.t.h850Sk),
              disabled: !0
          });
}
