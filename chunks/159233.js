n.d(e, { Z: () => b });
var l = n(54381);
n(473749);
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
    let { guildEventId: e, guild: b, channel: p, recurrenceId: v, isRecurrenceItem: E } = t,
        { canManageGuildEvent: y } = (0, o.XJ)(null != p ? p : b),
        O = (0, r.e7)([u.ZP], () => u.ZP.getGuildScheduledEvent(e)),
        P = y(O),
        Z = (0, s.Z)(),
        h = (0, c.Z)(v, null == O ? void 0 : O.id),
        j = (0, a.zI)(e, v);
    if (!P || null == j || null == O) return null;
    let m = null != O.recurrence_rule && !E,
        N = (t) => {
            (null == v || t) && !E
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
                  }, Z)
                : null != v &&
                  (0, i.ZDy)(async () => {
                      let { default: t } = await n.e("27919").then(n.bind(n, 379038));
                      return (e) =>
                          (0, l.jsx)(
                              t,
                              f(g({}, e), {
                                  guildEvent: O,
                                  recurrenceId: v,
                              }),
                          );
                  }, Z);
        };
    return (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.Rgy2dU),
        label: d.intl.string(d.t.Rgy2dU),
        action: m ? void 0 : () => N(!0),
        children:
            m &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.wmVmXN),
                        label: d.intl.string(d.t.wmVmXN),
                        action: () => N(!1),
                        disabled: (null == h ? void 0 : h.is_canceled) || j.startTime.getTime() < Date.now(),
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.BW1Qoh),
                        label: d.intl.string(d.t.BW1Qoh),
                        action: () => N(!0),
                        disabled: new Date(O.scheduled_start_time).getTime() < Date.now(),
                    }),
                ],
            }),
    });
}
