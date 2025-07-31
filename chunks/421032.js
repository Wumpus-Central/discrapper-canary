n.d(e, { Z: () => O });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(442837),
    c = n(481060),
    o = n(239091),
    a = n(592125),
    u = n(430824),
    d = n(924301),
    p = n(894017),
    g = n(854698),
    b = n(390966),
    f = n(765305),
    m = n(388032),
    j = n(909846);
function v(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                ((r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r));
            }));
    }
    return t;
}
function O(t) {
    let { recurrenceId: e, originalScheduledStartTime: l, guildEventId: O, onClick: h, isActive: y } = t,
        x = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(O)),
        P = (0, p.Z)(e, null == x ? void 0 : x.id),
        k = (0, s.e7)([u.Z], () => u.Z.getGuild(null == x ? void 0 : x.guild_id)),
        w = (0, s.e7)([a.Z], () => a.Z.getChannel(null == x ? void 0 : x.channel_id));
    if (null == x) return null;
    let { is_canceled: C = !1 } = null != P ? P : {},
        S = (null == P ? void 0 : P.scheduled_start_time) != null ? new Date(null == P ? void 0 : P.scheduled_start_time) : l,
        E = (0, g.DK)(x),
        D = C ? f.p1.CANCELED : f.p1.SCHEDULED;
    E === e && (D = x.status);
    let z = (null == x ? void 0 : x.scheduled_start_time) != null ? (0, g.lh)(P, S, new Date(null == x ? void 0 : x.scheduled_start_time)) : null,
        Z = (t) => {
            (t.stopPropagation(),
                null != k &&
                    (0, o.jW)(t, async () => {
                        let { default: t } = await Promise.all([n.e('34261'), n.e('70274'), n.e('42743'), n.e('27434'), n.e('62318')]).then(n.bind(n, 215269));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                v(
                                    {
                                        guildEventId: x.id,
                                        recurrenceId: e,
                                        channel: w,
                                        guild: k,
                                        isRecurrenceItem: !0
                                    },
                                    n
                                )
                            );
                    }));
        };
    return (0, r.jsxs)(c.kL8, {
        className: i()(j.container, {
            [j.canceled]: C,
            [j.clickable]: null != h,
            [j.active]: y
        }),
        onClick: (t) => {
            (t.stopPropagation(), C || null == h || h(e));
        },
        onContextMenu: Z,
        'aria-label': '',
        children: [
            (0, r.jsx)(b.z, {
                startTime: S.toISOString(),
                status: null != z ? z : D,
                eventType: x.entity_type,
                guildEventId: x.id,
                recurrenceId: e,
                className: j.timeStatus
            }),
            C &&
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/semibold',
                    color: 'text-danger',
                    className: j.canceledStatus,
                    children: m.intl.string(m.t.fyBVRk)
                }),
            (0, r.jsx)(c.ua7, {
                text: m.intl.string(m.t.UKOtz8),
                position: 'top',
                'aria-label': m.intl.string(m.t.bt75u7),
                children: (t) => {
                    var e, n;
                    return (0, r.jsx)(
                        c.P3F,
                        ((e = v({}, t)),
                        (n = n =
                            {
                                onClick: Z,
                                className: j.iconButton,
                                children: (0, r.jsx)(c.xhG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: j.icon
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : (function (t, e) {
                                  var n = Object.keys(t);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(t);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (t) {
                                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                              }),
                        e)
                    );
                }
            })
        ]
    });
}
