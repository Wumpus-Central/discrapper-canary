e.d(n, { Z: () => c });
var i = e(54381);
e(473749);
var a = e(442837),
    l = e(481060),
    r = e(569471),
    s = e(346479),
    o = e(723170),
    d = e(124368),
    u = e(388032);
function c(t) {
    let n = (0, o.B)(t);
    return (0, a.e7)([r.Z], () => r.Z.hasJoined(t.id))
        ? (0, i.jsx)(l.sNh, {
              id: "thread-notifications",
              label: u.intl.string(u.t.h850Ss),
              children: (0, d.zb)().map((e) => {
                  let { setting: a, label: r } = e;
                  return (0, i.jsx)(
                      l.k5B,
                      {
                          group: "thread-notifications",
                          id: "".concat(a),
                          label: r,
                          action: () => s.Z.setNotificationSettings(t, { flags: a }),
                          checked: a === n,
                      },
                      a,
                  );
              }),
          })
        : (0, i.jsx)(l.sNh, {
              id: "notifications-disabled",
              label: u.intl.string(u.t.h850Ss),
              disabled: !0,
          });
}
