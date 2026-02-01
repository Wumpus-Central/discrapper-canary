n.d(e, {
    A: () => f,
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(931991),
    o = n(698441),
    a = n(722260),
    c = n(563312),
    s = n(823508),
    d = n(985018);

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

function E(t, e) {
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

function f(t) {
    let { guildEventId: e, guild: f, channel: A, recurrenceId: y, isRecurrenceItem: p } = t,
        { canManageGuildEvent: b } = (0, u.nr)(null != A ? A : f),
        v = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(e)),
        O = b(v),
        h = (0, s.A)(),
        _ = (0, a.A)(y, null == v ? void 0 : v.id),
        m = (0, c.nh)(e, y);
    if (!O || null == m || null == v) return null;
    let T = null != v.recurrence_rule && !p,
        j = (t) => {
            (null == y || t) && !p
                ? (0, i.mMO)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("68587"),
                          n.e("28136"),
                          n.e("342"),
                          n.e("41682"),
                      ]).then(n.bind(n, 21653));
                      return (n) =>
                          (0, l.jsx)(
                              t,
                              E(g({}, n), {
                                  guildScheduledEventId: e,
                                  guildId: f.id,
                              }),
                          );
                  }, h)
                : null != y &&
                  (0, i.mMO)(async () => {
                      let { default: t } = await n.e("43940").then(n.bind(n, 271983));
                      return (e) =>
                          (0, l.jsx)(
                              t,
                              E(g({}, e), {
                                  guildEvent: v,
                                  recurrenceId: y,
                              }),
                          );
                  }, h);
        };
    return (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.Rgy2dU),
        label: d.intl.string(d.t.Rgy2dU),
        action: T ? void 0 : () => j(!0),
        children:
            T &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.Drp, {
                        id: d.intl.string(d.t.wmVmXN),
                        label: d.intl.string(d.t.wmVmXN),
                        action: () => j(!1),
                        disabled: (null == _ ? void 0 : _.is_canceled) || m.startTime.getTime() < Date.now(),
                    }),
                    (0, l.jsx)(i.Drp, {
                        id: d.intl.string(d.t.BW1Qoh),
                        label: d.intl.string(d.t.BW1Qoh),
                        action: () => j(!0),
                        disabled: new Date(v.scheduled_start_time).getTime() < Date.now(),
                    }),
                ],
            }),
    });
}
