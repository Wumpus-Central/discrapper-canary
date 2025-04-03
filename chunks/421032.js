n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(239091),
    u = n(592125),
    a = n(430824),
    d = n(924301),
    p = n(894017),
    b = n(854698),
    g = n(390966),
    x = n(765305),
    f = n(388032),
    j = n(909846);
function m(e) {
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
}
function h(e) {
    let { recurrenceId: t, originalScheduledStartTime: l, guildEventId: h, onClick: O, isActive: k } = e,
        v = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(h)),
        N = (0, p.Z)(t, null == v ? void 0 : v.id),
        y = (0, s.e7)([a.Z], () => a.Z.getGuild(null == v ? void 0 : v.guild_id)),
        z = (0, s.e7)([u.Z], () => u.Z.getChannel(null == v ? void 0 : v.channel_id));
    if (null == v) return null;
    let { is_canceled: C = !1 } = null != N ? N : {},
        P = (null == N ? void 0 : N.scheduled_start_time) != null ? new Date(null == N ? void 0 : N.scheduled_start_time) : l,
        S = (0, b.DK)(v),
        E = C ? x.p1.CANCELED : x.p1.SCHEDULED;
    S === t && (E = v.status);
    let w = (null == v ? void 0 : v.scheduled_start_time) != null ? (0, b.lh)(N, P, new Date(null == v ? void 0 : v.scheduled_start_time)) : null,
        L = (e) => {
            e.stopPropagation(),
                null != y &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('99272'), n.e('42743'), n.e('10472'), n.e('62318')]).then(n.bind(n, 215269));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                m(
                                    {
                                        guildEventId: v.id,
                                        recurrenceId: t,
                                        channel: z,
                                        guild: y,
                                        isRecurrenceItem: !0
                                    },
                                    n
                                )
                            );
                    });
        };
    return (0, r.jsxs)(o.kL8, {
        className: i()(j.container, {
            [j.canceled]: C,
            [j.clickable]: null != O,
            [j.active]: k
        }),
        onClick: (e) => {
            e.stopPropagation(), C || null == O || O(t);
        },
        onContextMenu: L,
        'aria-label': '',
        children: [
            (0, r.jsx)(g.z, {
                startTime: P.toISOString(),
                status: null != w ? w : E,
                eventType: v.entity_type,
                guildEventId: v.id,
                recurrenceId: t,
                className: j.timeStatus
            }),
            C &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/semibold',
                    color: 'text-danger',
                    className: j.canceledStatus,
                    children: f.NW.string(f.t.fyBVRk)
                }),
            (0, r.jsx)(o.ua7, {
                text: f.NW.string(f.t.UKOtz8),
                position: 'top',
                'aria-label': f.NW.string(f.t.bt75u7),
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        o.P3F,
                        ((t = m({}, e)),
                        (n = n =
                            {
                                onClick: L,
                                className: j.iconButton,
                                children: (0, r.jsx)(o.xhG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: j.icon
                                })
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(n)).forEach(function (e) {
                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                              }),
                        t)
                    );
                }
            })
        ]
    });
}
