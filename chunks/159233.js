n.d(e, { Z: () => b });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(924301),
    a = n(894017),
    u = n(79874),
    s = n(576749),
    d = n(388032);
function g(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
function f(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function b(t) {
    let { guildEventId: e, guild: b, channel: p, recurrenceId: v, isRecurrenceItem: h } = t,
        { canManageGuildEvent: y } = (0, o.XJ)(null != p ? p : b),
        O = (0, r.e7)([c.ZP], () => c.ZP.getGuildScheduledEvent(e)),
        j = y(O),
        E = (0, s.Z)(),
        m = (0, a.Z)(v, null == O ? void 0 : O.id),
        P = (0, u.zI)(e, v);
    if (!j || null == P || null == O) return null;
    let _ = null != O.recurrence_rule && !h,
        w = (t) => {
            (null == v || t) && !h
                ? (0, i.ZDy)(async () => {
                      let { default: t } = await Promise.all([n.e('49049'), n.e('82758'), n.e('58023'), n.e('71874')]).then(n.bind(n, 779250));
                      return (n) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, n), {
                                  guildScheduledEventId: e,
                                  guildId: b.id
                              })
                          );
                  }, E)
                : null != v &&
                  (0, i.ZDy)(async () => {
                      let { default: t } = await n.e('27919').then(n.bind(n, 379038));
                      return (e) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, e), {
                                  guildEvent: O,
                                  recurrenceId: v
                              })
                          );
                  }, E);
        };
    return (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.Rgy2dX),
        label: d.intl.string(d.t.Rgy2dX),
        action: _ ? void 0 : () => w(!0),
        children:
            _ &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.wmVmXF),
                        label: d.intl.string(d.t.wmVmXF),
                        action: () => w(!1),
                        disabled: (null == m ? void 0 : m.is_canceled) || P.startTime.getTime() < Date.now()
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.BW1Qoq),
                        label: d.intl.string(d.t.BW1Qoq),
                        action: () => w(!0),
                        disabled: new Date(O.scheduled_start_time).getTime() < Date.now()
                    })
                ]
            })
    });
}
