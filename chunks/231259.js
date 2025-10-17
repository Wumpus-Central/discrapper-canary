n.d(e, { Z: () => g }), n(388685);
var l = n(951288);
n(647438);
var r = n(442837),
    i = n(481060),
    u = n(357156),
    o = n(924301),
    c = n(482241),
    a = n(894017),
    s = n(79874),
    d = n(388032);
function g(t) {
    let { guildEventId: e, recurrenceId: n, guild: g, channel: f } = t,
        b = null != n,
        { canManageGuildEvent: v } = (0, u.XJ)(null != f ? f : g),
        [E, p] = (0, r.Wu)([o.ZP], () => [o.ZP.isActive(e), o.ZP.getGuildScheduledEvent(e)]),
        Z = (0, a.Z)(n, null == p ? void 0 : p.id),
        y = null != p && v(p),
        O = (null == p ? void 0 : p.recurrence_rule) != null && !b,
        h = (0, s.zI)(e, n);
    if (!y || (E && !O && !b) || (b && !b) || null == p || null == h) return null;
    let { startTime: P } = h;
    if (E && b) {
        var m;
        if (null == P) return null;
        let t = new Date(null != (m = null == Z ? void 0 : Z.scheduled_start_time) ? m : P);
        if (new Date() > t) return null;
    }
    let j = (t) => {
        (0, i.h7j)((r) => {
            var u, o;
            return (0, l.jsxs)(
                i.ConfirmModal,
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
                        header: d.intl.string(d.t.R5bpio),
                        confirmText: O || t ? d.intl.string(d.t["8ZsNv7"]) : d.intl.string(d.t.B9sJLS),
                        cancelText: d.intl.string(d.t.oEAioK),
                        onConfirm: () =>
                            b && !t ? c.Z.deleteRecurrence(g.id, e, n, Z) : c.Z.deleteGuildEvent(e, g.id),
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: "text-md/normal",
                                children: d.intl.string(d.t.v2GWNT),
                            }),
                            (0, l.jsx)("br", {}),
                            (O || t) &&
                                (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    children: d.intl.format(d.t.ZcpcyM, {}),
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
    return (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.B9sJLS),
        label: d.intl.string(d.t.B9sJLS),
        action: b ? void 0 : () => j(),
        color: "danger",
        children:
            b &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.tqCll5),
                        label: d.intl.string(d.t.tqCll5),
                        action: () => j(),
                        disabled: null == Z ? void 0 : Z.is_canceled,
                        color: "danger",
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.wr33ra),
                        label: d.intl.string(d.t.wr33ra),
                        action: () => j(!0),
                        color: "danger",
                    }),
                ],
            }),
    });
}
