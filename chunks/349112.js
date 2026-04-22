n.d(e, { A: () => y });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(311907),
    a = n(990078),
    u = n(890856),
    c = n(834730),
    d = n(939249),
    o = n(365199),
    h = n(442433),
    g = n(734057),
    m = n(71393),
    v = n(698441),
    x = n(722260),
    f = n(974930),
    p = n(103355),
    A = n(988794),
    j = n(985018),
    E = n(209291);
function y(t) {
    let { recurrenceId: e, originalScheduledStartTime: i, guildEventId: y, onClick: _, isActive: C } = t,
        T = (0, s.bG)([v.Ay], () => v.Ay.getGuildScheduledEvent(y)),
        k = (0, x.A)(e, T?.id),
        D = (0, s.bG)([m.A], () => m.A.getGuild(T?.guild_id)),
        N = (0, s.bG)([g.A], () => g.A.getChannel(T?.channel_id));
    if (null == T) return null;
    let { is_canceled: w = !1 } = k ?? {},
        b = k?.scheduled_start_time != null ? new Date(k?.scheduled_start_time) : i,
        G = (0, f.G3)(T),
        S = w ? A.XG.CANCELED : A.XG.SCHEDULED;
    G === e && (S = T.status);
    let M = T?.scheduled_start_time != null ? (0, f.j)(k, b, new Date(T?.scheduled_start_time)) : null,
        O = (t) => {
            t.stopPropagation(),
                null != D &&
                    (0, h.L3)(t, async () => {
                        let { default: t } = await Promise.all([
                            n.e("77371"),
                            n.e("92493"),
                            n.e("93103"),
                            n.e("32054"),
                        ]).then(n.bind(n, 406406));
                        return (n) =>
                            (0, l.jsx)(t, {
                                guildEventId: T.id,
                                recurrenceId: e,
                                channel: N,
                                guild: D,
                                isRecurrenceItem: !0,
                                ...n,
                            });
                    });
        };
    return (0, l.jsxs)(u.s, {
        className: r()(E.kL, { [E.aD]: w, [E.vk]: null != _, [E.vu]: C }),
        onClick: (t) => {
            t.stopPropagation(), w || _?.(e);
        },
        onContextMenu: O,
        "aria-label": "",
        children: [
            (0, l.jsx)(p.L, {
                startTime: b.toISOString(),
                status: M ?? S,
                eventType: T.entity_type,
                guildEventId: T.id,
                recurrenceId: e,
                className: E.q$,
            }),
            w &&
                (0, l.jsx)(c.E, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: E.a6,
                    children: j.intl.string(j.t.fyBVRm),
                }),
            (0, l.jsx)(a.m, {
                text: j.intl.string(j.t["UKOtz+"]),
                position: "top",
                "aria-label": j.intl.string(j.t.bt75uw),
                children: (0, l.jsx)(d.D, {
                    onClick: O,
                    className: E.gb,
                    children: (0, l.jsx)(o.j, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: E.Kk,
                    }),
                }),
            }),
        ],
    });
}
