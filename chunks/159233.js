e.d(n, { Z: () => b });
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(357156),
    a = e(924301),
    c = e(894017),
    u = e(79874),
    s = e(576749),
    d = e(388032);
function g(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(e);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                ((l = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[n] = l));
            }));
    }
    return t;
}
function f(t, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (t, n) {
                  var e = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(t);
                      e.push.apply(e, l);
                  }
                  return e;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t
    );
}
function b(t) {
    let { guildEventId: n, guild: b, channel: p, recurrenceId: v, isRecurrenceItem: h } = t,
        { canManageGuildEvent: y } = (0, o.XJ)(null != p ? p : b),
        E = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(n)),
        O = y(E),
        j = (0, s.Z)(),
        m = (0, c.Z)(v, null == E ? void 0 : E.id),
        _ = (0, u.zI)(n, v);
    if (!O || null == _ || null == E) return null;
    let P = null != E.recurrence_rule && !h,
        Z = (t) => {
            (null == v || t) && !h
                ? (0, r.ZDy)(async () => {
                      let { default: t } = await Promise.all([e.e('71418'), e.e('49049'), e.e('82758'), e.e('61'), e.e('71874')]).then(e.bind(e, 779250));
                      return (e) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, e), {
                                  guildScheduledEventId: n,
                                  guildId: b.id
                              })
                          );
                  }, j)
                : null != v &&
                  (0, r.ZDy)(async () => {
                      let { default: t } = await e.e('27919').then(e.bind(e, 379038));
                      return (n) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, n), {
                                  guildEvent: E,
                                  recurrenceId: v
                              })
                          );
                  }, j);
        };
    return (0, l.jsx)(r.sNh, {
        id: d.intl.string(d.t.Rgy2dX),
        label: d.intl.string(d.t.Rgy2dX),
        action: P ? void 0 : () => Z(!0),
        children:
            P &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.sNh, {
                        id: d.intl.string(d.t.wmVmXF),
                        label: d.intl.string(d.t.wmVmXF),
                        action: () => Z(!1),
                        disabled: (null == m ? void 0 : m.is_canceled) || _.startTime.getTime() < Date.now()
                    }),
                    (0, l.jsx)(r.sNh, {
                        id: d.intl.string(d.t.BW1Qoq),
                        label: d.intl.string(d.t.BW1Qoq),
                        action: () => Z(!0),
                        disabled: new Date(E.scheduled_start_time).getTime() < Date.now()
                    })
                ]
            })
    });
}
