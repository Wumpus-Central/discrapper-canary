n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(924301),
    a = n(894017),
    u = n(79874),
    s = n(576749),
    d = n(388032);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { guildEventId: t, guild: b, channel: p, recurrenceId: v, isRecurrenceItem: h } = e,
        { canManageGuildEvent: y } = (0, o.XJ)(null != p ? p : b),
        O = (0, l.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(t)),
        N = y(O),
        j = (0, s.Z)(),
        E = (0, a.Z)(v, null == O ? void 0 : O.id),
        m = (0, u.zI)(t, v);
    if (!N || null == m || null == O) return null;
    let P = null != O.recurrence_rule && !h,
        _ = (e) => {
            (null == v || e) && !h
                ? (0, i.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('49049'), n.e('82758'), n.e('58023'), n.e('71874')]).then(n.bind(n, 779250));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              f(g({}, n), {
                                  guildScheduledEventId: t,
                                  guildId: b.id
                              })
                          );
                  }, j)
                : null != v &&
                  (0, i.ZDy)(async () => {
                      let { default: e } = await n.e('27919').then(n.bind(n, 379038));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              f(g({}, t), {
                                  guildEvent: O,
                                  recurrenceId: v
                              })
                          );
                  }, j);
        };
    return (0, r.jsx)(i.sNh, {
        id: d.NW.string(d.t.Rgy2dX),
        label: d.NW.string(d.t.Rgy2dX),
        action: P ? void 0 : () => _(!0),
        children:
            P &&
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.sNh, {
                        id: d.NW.string(d.t.wmVmXF),
                        label: d.NW.string(d.t.wmVmXF),
                        action: () => _(!1),
                        disabled: (null == E ? void 0 : E.is_canceled) || m.startTime.getTime() < Date.now()
                    }),
                    (0, r.jsx)(i.sNh, {
                        id: d.NW.string(d.t.BW1Qoq),
                        label: d.NW.string(d.t.BW1Qoq),
                        action: () => _(!0),
                        disabled: new Date(O.scheduled_start_time).getTime() < Date.now()
                    })
                ]
            })
    });
}
