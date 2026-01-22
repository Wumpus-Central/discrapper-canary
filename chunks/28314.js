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

function y(t, e) {
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
    let { guildEventId: e, guild: f, channel: b, recurrenceId: p, isRecurrenceItem: A } = t,
        { canManageGuildEvent: v } = (0, u.nr)(null != b ? b : f),
        E = (0, r.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(e)),
        O = v(E),
        m = (0, s.A)(),
        j = (0, a.A)(p, null == E ? void 0 : E.id),
        h = (0, c.nh)(e, p);
    if (!O || null == h || null == E) return null;
    let D = null != E.recurrence_rule && !A,
        _ = (t) => {
            (null == p || t) && !A
                ? (0, i.mMO)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("68587"),
                          n.e("28136"),
                          n.e("342"),
                          n.e("29878"),
                      ]).then(n.bind(n, 21653));
                      return (n) =>
                          (0, l.jsx)(
                              t,
                              y(g({}, n), {
                                  guildScheduledEventId: e,
                                  guildId: f.id,
                              }),
                          );
                  }, m)
                : null != p &&
                  (0, i.mMO)(async () => {
                      let { default: t } = await n.e("43940").then(n.bind(n, 271983));
                      return (e) =>
                          (0, l.jsx)(
                              t,
                              y(g({}, e), {
                                  guildEvent: E,
                                  recurrenceId: p,
                              }),
                          );
                  }, m);
        };
    return (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.Rgy2dU),
        label: d.intl.string(d.t.Rgy2dU),
        action: D ? void 0 : () => _(!0),
        children:
            D &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.Drp, {
                        id: d.intl.string(d.t.wmVmXN),
                        label: d.intl.string(d.t.wmVmXN),
                        action: () => _(!1),
                        disabled: (null == j ? void 0 : j.is_canceled) || h.startTime.getTime() < Date.now(),
                    }),
                    (0, l.jsx)(i.Drp, {
                        id: d.intl.string(d.t.BW1Qoh),
                        label: d.intl.string(d.t.BW1Qoh),
                        action: () => _(!0),
                        disabled: new Date(E.scheduled_start_time).getTime() < Date.now(),
                    }),
                ],
            }),
    });
}
