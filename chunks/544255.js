n.d(e, {
    A: () => E,
}),
    n(896048);
var l = n(627968);
n(64700);
var r = n(158954),
    i = n(311907),
    u = n(397927),
    o = n(931991),
    a = n(698441),
    c = n(496092),
    s = n(722260),
    d = n(563312),
    g = n(985018);

function E(t) {
    let { guildEventId: e, recurrenceId: n, guild: E, channel: f } = t,
        A = null != n,
        { canManageGuildEvent: y } = (0, o.nr)(null != f ? f : E),
        [p, b] = (0, i.yK)([a.Ay], () => [a.Ay.isActive(e), a.Ay.getGuildScheduledEvent(e)]),
        v = (0, s.A)(n, null == b ? void 0 : b.id),
        O = null != b && y(b),
        h = (null == b ? void 0 : b.recurrence_rule) != null && !A,
        _ = (0, d.nh)(e, n);
    if (!O || (p && !h && !A) || (A && !A) || null == b || null == _) return null;
    let { startTime: m } = _;
    if (p && A) {
        var T;
        if (null == m) return null;
        let t = new Date(null != (T = null == v ? void 0 : v.scheduled_start_time) ? T : m);
        if (new Date() > t) return null;
    }
    let j = (t) => {
        (0, u.qfG)((i) => {
            var o, a;
            return (0, l.jsx)(
                r.ConfirmModal,
                ((o = (function (t) {
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
                })({}, i)),
                (a = a =
                    {
                        title: g.intl.string(g.t.R5bpin),
                        subtitle: g.intl.string(g.t.v2GWNQ),
                        confirmText: h || t ? g.intl.string(g.t["8ZsNv5"]) : g.intl.string(g.t.B9sJLX),
                        cancelText: g.intl.string(g.t.oEAioF),
                        onConfirm: () =>
                            A && !t ? c.A.deleteRecurrence(E.id, e, n, v) : c.A.deleteGuildEvent(e, E.id),
                        children:
                            (h || t) &&
                            (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: g.intl.format(g.t.ZcpcyO, {}),
                            }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(a)).forEach(function (t) {
                          Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(a, t));
                      }),
                o),
            );
        });
    };
    return (0, l.jsx)(u.Drp, {
        id: g.intl.string(g.t.B9sJLX),
        label: g.intl.string(g.t.B9sJLX),
        action: A ? void 0 : () => j(),
        color: "danger",
        children:
            A &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(u.Drp, {
                        id: g.intl.string(g.t.tqClly),
                        label: g.intl.string(g.t.tqClly),
                        action: () => j(),
                        disabled: null == v ? void 0 : v.is_canceled,
                        color: "danger",
                    }),
                    (0, l.jsx)(u.Drp, {
                        id: g.intl.string(g.t.wr33rW),
                        label: g.intl.string(g.t.wr33rW),
                        action: () => j(!0),
                        color: "danger",
                    }),
                ],
            }),
    });
}
