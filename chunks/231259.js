n.d(t, { Z: () => g }), n(47120);
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    o = n(357156),
    c = n(924301),
    a = n(482241),
    u = n(894017),
    s = n(79874),
    d = n(388032);
function g(e) {
    let { guildEventId: t, recurrenceId: n, guild: g, channel: f } = e,
        b = null != n,
        { canManageGuildEvent: p } = (0, o.XJ)(null != f ? f : g),
        [v, h] = (0, l.Wu)([c.ZP], () => [c.ZP.isActive(t), c.ZP.getGuildScheduledEvent(t)]),
        y = (0, u.Z)(n, null == h ? void 0 : h.id),
        O = null != h && p(h),
        N = (null == h ? void 0 : h.recurrence_rule) != null && !b,
        j = (0, s.zI)(t, n);
    if (!O || (v && !N && !b) || (b && !b) || null == h || null == j) return null;
    let { startTime: E } = j;
    if (v && b) {
        var m;
        if (null == E) return null;
        let e = new Date(null != (m = null == y ? void 0 : y.scheduled_start_time) ? m : E);
        if (new Date() > e) return null;
    }
    let P = (e) => {
        (0, i.h7j)((l) => {
            var o, c;
            return (0, r.jsxs)(
                i.ConfirmModal,
                ((o = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, l)),
                (c = c =
                    {
                        header: d.NW.string(d.t.R5bpio),
                        confirmText: N || e ? d.NW.string(d.t['8ZsNv7']) : d.NW.string(d.t.B9sJLS),
                        cancelText: d.NW.string(d.t.oEAioK),
                        onConfirm: () => (b && !e ? a.Z.deleteRecurrence(g.id, t, n, y) : a.Z.deleteGuildEvent(t, g.id)),
                        children: [
                            (0, r.jsx)(i.Text, {
                                variant: 'text-md/normal',
                                children: d.NW.string(d.t.v2GWNT)
                            }),
                            (0, r.jsx)('br', {}),
                            (N || e) &&
                                (0, r.jsx)(i.Text, {
                                    variant: 'text-md/normal',
                                    children: d.NW.format(d.t.ZcpcyM, {})
                                })
                        ]
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(c)).forEach(function (e) {
                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                      }),
                o)
            );
        });
    };
    return (0, r.jsx)(i.sNh, {
        id: d.NW.string(d.t.B9sJLS),
        label: d.NW.string(d.t.B9sJLS),
        action: b ? void 0 : () => P(),
        color: 'danger',
        children:
            b &&
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.sNh, {
                        id: d.NW.string(d.t.tqCll5),
                        label: d.NW.string(d.t.tqCll5),
                        action: () => P(),
                        disabled: null == y ? void 0 : y.is_canceled,
                        color: 'danger'
                    }),
                    (0, r.jsx)(i.sNh, {
                        id: d.NW.string(d.t.wr33ra),
                        label: d.NW.string(d.t.wr33ra),
                        action: () => P(!0),
                        color: 'danger'
                    })
                ]
            })
    });
}
