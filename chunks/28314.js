n.d(t, {
    A: () => f,
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    o = n(931991),
    u = n(698441),
    a = n(722260),
    c = n(563312),
    s = n(823508),
    d = n(985018);

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e) {
    let { guildEventId: t, guild: f, channel: A, recurrenceId: y, isRecurrenceItem: p } = e,
        { canManageGuildEvent: b } = (0, o.nr)(null != A ? A : f),
        v = (0, r.bG)([u.Ay], () => u.Ay.getGuildScheduledEvent(t)),
        O = b(v),
        h = (0, s.A)(),
        _ = (0, a.A)(y, null == v ? void 0 : v.id),
        m = (0, c.nh)(t, y);
    if (!O || null == m || null == v) return null;
    let T = null != v.recurrence_rule && !p,
        j = (e) => {
            (null == y || e) && !p
                ? (0, i.mMO)(async () => {
                      let { default: e } = await Promise.all([
                          n.e("28136"),
                          n.e("68587"),
                          n.e("5152"),
                          n.e("342"),
                          n.e("93631"),
                      ]).then(n.bind(n, 21653));
                      return (n) =>
                          (0, l.jsx)(
                              e,
                              E(g({}, n), {
                                  guildScheduledEventId: t,
                                  guildId: f.id,
                              }),
                          );
                  }, h)
                : null != y &&
                  (0, i.mMO)(async () => {
                      let { default: e } = await n.e("43940").then(n.bind(n, 271983));
                      return (t) =>
                          (0, l.jsx)(
                              e,
                              E(g({}, t), {
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
