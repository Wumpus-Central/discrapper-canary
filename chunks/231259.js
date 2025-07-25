(e.d(n, { Z: () => g }), e(388685));
var l = e(255367);
e(73800);
var i = e(442837),
    r = e(481060),
    o = e(357156),
    a = e(924301),
    c = e(482241),
    u = e(894017),
    s = e(79874),
    d = e(388032);
function g(t) {
    let { guildEventId: n, recurrenceId: e, guild: g, channel: f } = t,
        b = null != e,
        { canManageGuildEvent: p } = (0, o.XJ)(null != f ? f : g),
        [v, h] = (0, i.Wu)([a.ZP], () => [a.ZP.isActive(n), a.ZP.getGuildScheduledEvent(n)]),
        y = (0, u.Z)(e, null == h ? void 0 : h.id),
        E = null != h && p(h),
        O = (null == h ? void 0 : h.recurrence_rule) != null && !b,
        j = (0, s.zI)(n, e);
    if (!E || (v && !O && !b) || (b && !b) || null == h || null == j) return null;
    let { startTime: m } = j;
    if (v && b) {
        var _;
        if (null == m) return null;
        let t = new Date(null != (_ = null == y ? void 0 : y.scheduled_start_time) ? _ : m);
        if (new Date() > t) return null;
    }
    let P = (t) => {
        (0, r.h7j)((i) => {
            var o, a;
            return (0, l.jsxs)(
                r.ConfirmModal,
                ((o = (function (t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {},
                            l = Object.keys(e);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(e).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                })
                            )),
                            l.forEach(function (n) {
                                var l;
                                ((l = e[n]),
                                    n in t
                                        ? Object.defineProperty(t, n, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[n] = l));
                            }));
                    }
                    return t;
                })({}, i)),
                (a = a =
                    {
                        header: d.intl.string(d.t.R5bpio),
                        confirmText: O || t ? d.intl.string(d.t['8ZsNv7']) : d.intl.string(d.t.B9sJLS),
                        cancelText: d.intl.string(d.t.oEAioK),
                        onConfirm: () => (b && !t ? c.Z.deleteRecurrence(g.id, n, e, y) : c.Z.deleteGuildEvent(n, g.id)),
                        children: [
                            (0, l.jsx)(r.Text, {
                                variant: 'text-md/normal',
                                children: d.intl.string(d.t.v2GWNT)
                            }),
                            (0, l.jsx)('br', {}),
                            (O || t) &&
                                (0, l.jsx)(r.Text, {
                                    variant: 'text-md/normal',
                                    children: d.intl.format(d.t.ZcpcyM, {})
                                })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                    : (function (t, n) {
                          var e = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(t);
                              e.push.apply(e, l);
                          }
                          return e;
                      })(Object(a)).forEach(function (t) {
                          Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(a, t));
                      }),
                o)
            );
        });
    };
    return (0, l.jsx)(r.sNh, {
        id: d.intl.string(d.t.B9sJLS),
        label: d.intl.string(d.t.B9sJLS),
        action: b ? void 0 : () => P(),
        color: 'danger',
        children:
            b &&
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.sNh, {
                        id: d.intl.string(d.t.tqCll5),
                        label: d.intl.string(d.t.tqCll5),
                        action: () => P(),
                        disabled: null == y ? void 0 : y.is_canceled,
                        color: 'danger'
                    }),
                    (0, l.jsx)(r.sNh, {
                        id: d.intl.string(d.t.wr33ra),
                        label: d.intl.string(d.t.wr33ra),
                        action: () => P(!0),
                        color: 'danger'
                    })
                ]
            })
    });
}
