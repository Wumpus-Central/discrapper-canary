n.d(e, { Z: () => b });
var l = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    u = n(924301),
    c = n(894017),
    a = n(79874),
    s = n(576749),
    d = n(388032);
function g(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    let { guildEventId: e, guild: b, channel: v, recurrenceId: E, isRecurrenceItem: p } = t,
        { canManageGuildEvent: Z } = (0, o.XJ)(null != v ? v : b),
        y = (0, r.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
        O = Z(y),
        h = (0, s.Z)(),
        P = (0, c.Z)(E, null == y ? void 0 : y.id),
        m = (0, a.zI)(e, E);
    if (!O || null == m || null == y) return null;
    let j = null != y.recurrence_rule && !p,
        N = (t) => {
            (null == E || t) && !p
                ? (0, i.ZDy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("49049"),
                          n.e("36599"),
                          n.e("61"),
                          n.e("48399"),
                      ]).then(n.bind(n, 779250));
                      return (n) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, n), {
                                  guildScheduledEventId: e,
                                  guildId: b.id,
                              }),
                          );
                  }, h)
                : null != E &&
                  (0, i.ZDy)(async () => {
                      let { default: t } = await n.e("27919").then(n.bind(n, 379038));
                      return (e) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, e), {
                                  guildEvent: y,
                                  recurrenceId: E,
                              }),
                          );
                  }, h);
        };
    return (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.Rgy2dX),
        label: d.intl.string(d.t.Rgy2dX),
        action: j ? void 0 : () => N(!0),
        children:
            j &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.wmVmXF),
                        label: d.intl.string(d.t.wmVmXF),
                        action: () => N(!1),
                        disabled: (null == P ? void 0 : P.is_canceled) || m.startTime.getTime() < Date.now(),
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.BW1Qoq),
                        label: d.intl.string(d.t.BW1Qoq),
                        action: () => N(!0),
                        disabled: new Date(y.scheduled_start_time).getTime() < Date.now(),
                    }),
                ],
            }),
    });
}
