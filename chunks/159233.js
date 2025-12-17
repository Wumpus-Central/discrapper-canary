n.d(e, { Z: () => b });
var l = n(54381);
n(473749);
var r = n(442837),
    i = n(481060),
    u = n(357156),
    o = n(924301),
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
        { canManageGuildEvent: Z } = (0, u.XJ)(null != v ? v : b),
        h = (0, r.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(e)),
        y = Z(h),
        P = (0, s.Z)(),
        O = (0, c.Z)(E, null == h ? void 0 : h.id),
        m = (0, a.zI)(e, E);
    if (!y || null == m || null == h) return null;
    let j = null != h.recurrence_rule && !p,
        N = (t) => {
            (null == E || t) && !p
                ? (0, i.ZDy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("49049"),
                          n.e("36599"),
                          n.e("61"),
                          n.e("50341"),
                      ]).then(n.bind(n, 779250));
                      return (n) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, n), {
                                  guildScheduledEventId: e,
                                  guildId: b.id,
                              }),
                          );
                  }, P)
                : null != E &&
                  (0, i.ZDy)(async () => {
                      let { default: t } = await n.e("27919").then(n.bind(n, 379038));
                      return (e) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, e), {
                                  guildEvent: h,
                                  recurrenceId: E,
                              }),
                          );
                  }, P);
        };
    return (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.Rgy2dU),
        label: d.intl.string(d.t.Rgy2dU),
        action: j ? void 0 : () => N(!0),
        children:
            j &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.wmVmXN),
                        label: d.intl.string(d.t.wmVmXN),
                        action: () => N(!1),
                        disabled: (null == O ? void 0 : O.is_canceled) || m.startTime.getTime() < Date.now(),
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.BW1Qoh),
                        label: d.intl.string(d.t.BW1Qoh),
                        action: () => N(!0),
                        disabled: new Date(h.scheduled_start_time).getTime() < Date.now(),
                    }),
                ],
            }),
    });
}
