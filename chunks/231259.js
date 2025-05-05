n.d(e, { Z: () => g }), n(388685);
var l = n(255367);
n(73800);
var r = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(924301),
    a = n(482241),
    u = n(894017),
    s = n(79874),
    d = n(388032);
function g(t) {
    let { guildEventId: e, recurrenceId: n, guild: g, channel: f } = t,
        b = null != n,
        { canManageGuildEvent: p } = (0, o.XJ)(null != f ? f : g),
        [v, h] = (0, r.Wu)([c.ZP], () => [c.ZP.isActive(e), c.ZP.getGuildScheduledEvent(e)]),
        y = (0, u.Z)(n, null == h ? void 0 : h.id),
        O = null != h && p(h),
        j = (null == h ? void 0 : h.recurrence_rule) != null && !b,
        E = (0, s.zI)(e, n);
    if (!O || (v && !j && !b) || (b && !b) || null == h || null == E) return null;
    let { startTime: m } = E;
    if (v && b) {
        var P;
        if (null == m) return null;
        let t = new Date(null != (P = null == y ? void 0 : y.scheduled_start_time) ? P : m);
        if (new Date() > t) return null;
    }
    let _ = (t) => {
        (0, i.h7j)((r) => {
            var o, c;
            return (0, l.jsxs)(
                i.ConfirmModal,
                ((o = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            l.forEach(function (e) {
                                var l;
                                (l = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = l);
                            });
                    }
                    return t;
                })({}, r)),
                (c = c =
                    {
                        header: d.intl.string(d.t.R5bpio),
                        confirmText: j || t ? d.intl.string(d.t['8ZsNv7']) : d.intl.string(d.t.B9sJLS),
                        cancelText: d.intl.string(d.t.oEAioK),
                        onConfirm: () => (b && !t ? a.Z.deleteRecurrence(g.id, e, n, y) : a.Z.deleteGuildEvent(e, g.id)),
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: d.intl.string(d.t.v2GWNT)
                            }),
                            (0, l.jsx)('br', {}),
                            (j || t) &&
                                (0, l.jsx)(i.Text, {
                                    variant: 'text-md/normal',
                                    children: d.intl.format(d.t.ZcpcyM, {})
                                })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(c)).forEach(function (t) {
                          Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
                      }),
                o)
            );
        });
    };
    return (0, l.jsx)(i.sNh, {
        id: d.intl.string(d.t.B9sJLS),
        label: d.intl.string(d.t.B9sJLS),
        action: b ? void 0 : () => _(),
        color: 'danger',
        children:
            b &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.tqCll5),
                        label: d.intl.string(d.t.tqCll5),
                        action: () => _(),
                        disabled: null == y ? void 0 : y.is_canceled,
                        color: 'danger'
                    }),
                    (0, l.jsx)(i.sNh, {
                        id: d.intl.string(d.t.wr33ra),
                        label: d.intl.string(d.t.wr33ra),
                        action: () => _(!0),
                        color: 'danger'
                    })
                ]
            })
    });
}
