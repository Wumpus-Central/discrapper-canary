n.d(e, {
    A: () => g,
}),
    n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(931991),
    o = n(698441),
    a = n(496092),
    c = n(722260),
    s = n(563312),
    d = n(985018);

function g(t) {
    let { guildEventId: e, recurrenceId: n, guild: g, channel: y } = t,
        f = null != n,
        { canManageGuildEvent: b } = (0, u.nr)(null != y ? y : g),
        [p, A] = (0, r.yK)([o.Ay], () => [o.Ay.isActive(e), o.Ay.getGuildScheduledEvent(e)]),
        v = (0, c.A)(n, null == A ? void 0 : A.id),
        E = null != A && b(A),
        O = (null == A ? void 0 : A.recurrence_rule) != null && !f,
        m = (0, s.nh)(e, n);
    if (!E || (p && !O && !f) || (f && !f) || null == A || null == m) return null;
    let { startTime: j } = m;
    if (p && f) {
        var h;
        if (null == j) return null;
        let t = new Date(null != (h = null == v ? void 0 : v.scheduled_start_time) ? h : j);
        if (new Date() > t) return null;
    }
    let D = (t) => {
        (0, i.qfG)((r) => {
            var u, o;
            return (0, l.jsxs)(
                i.VoidConfirmModal,
                ((u = (function (t) {
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
                })({}, r)),
                (o = o =
                    {
                        header: d.intl.string(d.t.R5bpin),
                        confirmText: O || t ? d.intl.string(d.t["8ZsNv5"]) : d.intl.string(d.t.B9sJLX),
                        cancelText: d.intl.string(d.t.oEAioF),
                        onConfirm: () =>
                            f && !t ? a.A.deleteRecurrence(g.id, e, n, v) : a.A.deleteGuildEvent(e, g.id),
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: d.intl.string(d.t.v2GWNQ),
                            }),
                            (0, l.jsx)("br", {}),
                            (O || t) &&
                                (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: d.intl.format(d.t.ZcpcyO, {}),
                                }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(o))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(o)).forEach(function (t) {
                          Object.defineProperty(u, t, Object.getOwnPropertyDescriptor(o, t));
                      }),
                u),
            );
        });
    };
    return (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.B9sJLX),
        label: d.intl.string(d.t.B9sJLX),
        action: f ? void 0 : () => D(),
        color: "danger",
        children:
            f &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.Drp, {
                        id: d.intl.string(d.t.tqClly),
                        label: d.intl.string(d.t.tqClly),
                        action: () => D(),
                        disabled: null == v ? void 0 : v.is_canceled,
                        color: "danger",
                    }),
                    (0, l.jsx)(i.Drp, {
                        id: d.intl.string(d.t.wr33rW),
                        label: d.intl.string(d.t.wr33rW),
                        action: () => D(!0),
                        color: "danger",
                    }),
                ],
            }),
    });
}
