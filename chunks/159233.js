e.d(n, { Z: () => b });
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(357156),
    a = e(924301),
    c = e(894017),
    s = e(79874),
    u = e(576749),
    d = e(388032);
function g(t) {
    for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(e);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(e).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = e[n]),
                    n in t
                        ? Object.defineProperty(t, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[n] = l);
            });
    }
    return t;
}
function v(t, n) {
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
    let { guildEventId: n, guild: b, channel: f, recurrenceId: p, isRecurrenceItem: j } = t,
        { canManageGuildEvent: h } = (0, o.XJ)(null != f ? f : b),
        y = (0, i.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(n)),
        Z = h(y),
        m = (0, u.Z)(),
        O = (0, c.Z)(p, null == y ? void 0 : y.id),
        P = (0, s.zI)(n, p);
    if (!Z || null == P || null == y) return null;
    let w = null != y.recurrence_rule && !j,
        x = (t) => {
            (null == p || t) && !j
                ? (0, r.ZDy)(async () => {
                      let { default: t } = await Promise.all([
                          e.e("49049"),
                          e.e("82758"),
                          e.e("58023"),
                          e.e("82107"),
                      ]).then(e.bind(e, 779250));
                      return (e) =>
                          (0, l.jsx)(
                              t,
                              v(g({}, e), {
                                  guildScheduledEventId: n,
                                  guildId: b.id,
                              }),
                          );
                  }, m)
                : null != p &&
                  (0, r.ZDy)(async () => {
                      let { default: t } = await e.e("27919").then(e.bind(e, 379038));
                      return (n) =>
                          (0, l.jsx)(
                              t,
                              v(g({}, n), {
                                  guildEvent: y,
                                  recurrenceId: p,
                              }),
                          );
                  }, m);
        };
    return (0, l.jsx)(r.sNh, {
        id: d.intl.string(d.t.Rgy2dX),
        label: d.intl.string(d.t.Rgy2dX),
        action: w ? void 0 : () => x(!0),
        children:
            w &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.sNh, {
                        id: d.intl.string(d.t.wmVmXF),
                        label: d.intl.string(d.t.wmVmXF),
                        action: () => x(!1),
                        disabled: (null == O ? void 0 : O.is_canceled) || P.startTime.getTime() < Date.now(),
                    }),
                    (0, l.jsx)(r.sNh, {
                        id: d.intl.string(d.t.BW1Qoq),
                        label: d.intl.string(d.t.BW1Qoq),
                        action: () => x(!0),
                        disabled: new Date(y.scheduled_start_time).getTime() < Date.now(),
                    }),
                ],
            }),
    });
}
