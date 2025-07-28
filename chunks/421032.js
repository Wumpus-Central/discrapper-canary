n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
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
    j = n(388032),
    f = n(909846);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function h(e) {
    let { recurrenceId: t, originalScheduledStartTime: l, guildEventId: h, onClick: O, isActive: v } = e,
        y = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(h)),
        z = (0, p.Z)(t, null == y ? void 0 : y.id),
        C = (0, s.e7)([a.Z], () => a.Z.getGuild(null == y ? void 0 : y.guild_id)),
        P = (0, s.e7)([u.Z], () => u.Z.getChannel(null == y ? void 0 : y.channel_id));
    if (null == y) return null;
    let { is_canceled: k = !1 } = null != z ? z : {},
        S = (null == z ? void 0 : z.scheduled_start_time) != null ? new Date(null == z ? void 0 : z.scheduled_start_time) : l,
        N = (0, b.DK)(y),
        w = k ? x.p1.CANCELED : x.p1.SCHEDULED;
    N === t && (w = y.status);
    let E = (null == y ? void 0 : y.scheduled_start_time) != null ? (0, b.lh)(z, S, new Date(null == y ? void 0 : y.scheduled_start_time)) : null,
        _ = (e) => {
            (e.stopPropagation(),
                null != C &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('34261'), n.e('70274'), n.e('42743'), n.e('27434'), n.e('62318')]).then(n.bind(n, 215269));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                m(
                                    {
                                        guildEventId: y.id,
                                        recurrenceId: t,
                                        channel: P,
                                        guild: C,
                                        isRecurrenceItem: !0
                                    },
                                    n
                                )
                            );
                    }));
        };
    return (0, r.jsxs)(o.kL8, {
        className: i()(f.container, {
            [f.canceled]: k,
            [f.clickable]: null != O,
            [f.active]: v
        }),
        onClick: (e) => {
            (e.stopPropagation(), k || null == O || O(t));
        },
        onContextMenu: _,
        'aria-label': '',
        children: [
            (0, r.jsx)(g.z, {
                startTime: S.toISOString(),
                status: null != E ? E : w,
                eventType: y.entity_type,
                guildEventId: y.id,
                recurrenceId: t,
                className: f.timeStatus
            }),
            k &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/semibold',
                    color: 'text-danger',
                    className: f.canceledStatus,
                    children: j.intl.string(j.t.fyBVRk)
                }),
            (0, r.jsx)(o.ua7, {
                text: j.intl.string(j.t.UKOtz8),
                position: 'top',
                'aria-label': j.intl.string(j.t.bt75u7),
                children: (e) => {
                    var t, n;
                    return (0, r.jsx)(
                        o.P3F,
                        ((t = m({}, e)),
                        (n = n =
                            {
                                onClick: _,
                                className: f.iconButton,
                                children: (0, r.jsx)(o.xhG, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: f.icon
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
