e.d(n, { Z: () => c });
var i = e(951288);
e(647438);
var l = e(442837),
    a = e(481060),
    r = e(569471),
    o = e(346479),
    s = e(723170),
    d = e(124368),
    u = e(388032);
function c(t) {
    let n = (0, s.B)(t);
    return (0, l.e7)([r.Z], () => r.Z.hasJoined(t.id))
        ? (0, i.jsx)(a.sNh, {
              id: "thread-notifications",
              label: u.intl.string(u.t.h850Sk),
              children: (0, d.zb)().map((e) => {
                  let { setting: l, label: r } = e;
                  return (0, i.jsx)(
                      a.k5B,
                      {
                          group: "thread-notifications",
                          id: "".concat(l),
                          label: r,
                          action: () => o.Z.setNotificationSettings(t, { flags: l }),
                          checked: l === n,
                      },
                      l,
                  );
              }),
          })
        : (0, i.jsx)(a.sNh, {
              id: "notifications-disabled",
              label: u.intl.string(u.t.h850Sk),
              disabled: !0,
          });
}
