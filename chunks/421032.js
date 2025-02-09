l.d(n, { Z: () => C });
var e = l(200651);
l(192379);
var i = l(120356),
    s = l.n(i),
    r = l(442837),
    o = l(481060),
    a = l(239091),
    u = l(592125),
    c = l(430824),
    d = l(924301),
    x = l(894017),
    k = l(854698),
    h = l(390966),
    m = l(765305),
    z = l(388032),
    g = l(172374);
function C(t) {
    let { recurrenceId: n, originalScheduledStartTime: i, guildEventId: C, onClick: v, isActive: j } = t,
        N = (0, r.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(C)),
        p = (0, x.Z)(n, null == N ? void 0 : N.id),
        L = (0, r.e7)([c.Z], () => c.Z.getGuild(null == N ? void 0 : N.guild_id)),
        _ = (0, r.e7)([u.Z], () => u.Z.getChannel(null == N ? void 0 : N.channel_id));
    if (null == N) return null;
    let { is_canceled: E = !1 } = null != p ? p : {},
        S = (null == p ? void 0 : p.scheduled_start_time) != null ? new Date(null == p ? void 0 : p.scheduled_start_time) : i,
        f = (0, k.DK)(N),
        b = E ? m.p1.CANCELED : m.p1.SCHEDULED;
    f === n && (b = N.status);
    let Z = (null == N ? void 0 : N.scheduled_start_time) != null ? (0, k.lh)(p, S, new Date(null == N ? void 0 : N.scheduled_start_time)) : null,
        P = (t) => {
            t.stopPropagation(),
                null != L &&
                    (0, a.jW)(t, async () => {
                        let { default: t } = await Promise.all([l.e('99272'), l.e('10472'), l.e('62318')]).then(l.bind(l, 215269));
                        return (l) =>
                            (0, e.jsx)(t, {
                                guildEventId: N.id,
                                recurrenceId: n,
                                channel: _,
                                guild: L,
                                isRecurrenceItem: !0,
                                ...l
                            });
                    });
        };
    return (0, e.jsxs)(o.kL8, {
        className: s()(g.container, {
            [g.canceled]: E,
            [g.clickable]: null != v,
            [g.active]: j
        }),
        onClick: (t) => {
            t.stopPropagation(), E || null == v || v(n);
        },
        onContextMenu: P,
        'aria-label': '',
        children: [
            (0, e.jsx)(h.z, {
                startTime: S.toISOString(),
                status: null != Z ? Z : b,
                eventType: N.entity_type,
                guildEventId: N.id,
                recurrenceId: n,
                className: g.timeStatus
            }),
            E &&
                (0, e.jsx)(o.Text, {
                    variant: 'text-sm/semibold',
                    color: 'text-danger',
                    className: g.canceledStatus,
                    children: z.intl.string(z.t.fyBVRk)
                }),
            (0, e.jsx)(o.ua7, {
                text: z.intl.string(z.t.UKOtz8),
                position: 'top',
                'aria-label': z.intl.string(z.t.bt75u7),
                children: (t) =>
                    (0, e.jsx)(o.P3F, {
                        ...t,
                        onClick: P,
                        className: g.iconButton,
                        children: (0, e.jsx)(o.xhG, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20,
                            className: g.icon
                        })
                    })
            })
        ]
    });
}
