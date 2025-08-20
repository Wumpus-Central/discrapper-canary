i.d(n, { Z: () => c });
var e = i(951288);
i(647438);
var l = i(442837),
    r = i(481060),
    a = i(569471),
    d = i(346479),
    o = i(723170),
    s = i(124368),
    u = i(388032);
function c(t) {
    let n = (0, o.B)(t);
    return (0, l.e7)([a.Z], () => a.Z.hasJoined(t.id))
        ? (0, e.jsx)(r.sNh, {
              id: "thread-notifications",
              label: u.intl.string(u.t.h850Sk),
              children: (0, s.zb)().map((i) => {
                  let { setting: l, label: a } = i;
                  return (0, e.jsx)(
                      r.k5B,
                      {
                          group: "thread-notifications",
                          id: "".concat(l),
                          label: a,
                          action: () => d.Z.setNotificationSettings(t, { flags: l }),
                          checked: l === n,
                      },
                      l,
                  );
              }),
          })
        : (0, e.jsx)(r.sNh, {
              id: "notifications-disabled",
              label: u.intl.string(u.t.h850Sk),
              disabled: !0,
          });
}
