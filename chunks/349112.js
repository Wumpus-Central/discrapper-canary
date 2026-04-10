n.d(e, { A: () => A });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    s = n(311907),
    a = n(990078),
    u = n(397927),
    c = n(442433),
    d = n(734057),
    o = n(71393),
    h = n(698441),
    m = n(722260),
    g = n(974930),
    x = n(103355),
    v = n(988794),
    f = n(985018),
    p = n(602363);
function A(t) {
    let { recurrenceId: e, originalScheduledStartTime: i, guildEventId: A, onClick: j, isActive: y } = t,
        E = (0, s.bG)([h.Ay], () => h.Ay.getGuildScheduledEvent(A)),
        _ = (0, m.A)(e, E?.id),
        C = (0, s.bG)([o.A], () => o.A.getGuild(E?.guild_id)),
        T = (0, s.bG)([d.A], () => d.A.getChannel(E?.channel_id));
    if (null == E) return null;
    let { is_canceled: k = !1 } = _ ?? {},
        b = _?.scheduled_start_time != null ? new Date(_?.scheduled_start_time) : i,
        D = (0, g.G3)(E),
        N = k ? v.XG.CANCELED : v.XG.SCHEDULED;
    D === e && (N = E.status);
    let G = E?.scheduled_start_time != null ? (0, g.j)(_, b, new Date(E?.scheduled_start_time)) : null,
        S = (t) => {
            t.stopPropagation(),
                null != C &&
                    (0, c.L3)(t, async () => {
                        let { default: t } = await Promise.all([n.e("77371"), n.e("3795"), n.e("97580")]).then(
                            n.bind(n, 406406),
                        );
                        return (n) =>
                            (0, l.jsx)(t, {
                                guildEventId: E.id,
                                recurrenceId: e,
                                channel: T,
                                guild: C,
                                isRecurrenceItem: !0,
                                ...n,
                            });
                    });
        };
    return (0, l.jsxs)(u.sqX, {
        className: r()(p.kL, { [p.aD]: k, [p.vk]: null != j, [p.vu]: y }),
        onClick: (t) => {
            t.stopPropagation(), k || j?.(e);
        },
        onContextMenu: S,
        "aria-label": "",
        children: [
            (0, l.jsx)(x.L, {
                startTime: b.toISOString(),
                status: G ?? N,
                eventType: E.entity_type,
                guildEventId: E.id,
                recurrenceId: e,
                className: p.q$,
            }),
            k &&
                (0, l.jsx)(u.Text, {
                    variant: "text-sm/semibold",
                    color: "text-feedback-critical",
                    className: p.a6,
                    children: f.intl.string(f.t.fyBVRm),
                }),
            (0, l.jsx)(a.m, {
                text: f.intl.string(f.t["UKOtz+"]),
                position: "top",
                "aria-label": f.intl.string(f.t.bt75uw),
                children: (0, l.jsx)(u.DUT, {
                    onClick: S,
                    className: p.gb,
                    children: (0, l.jsx)(u.jNK, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: p.Kk,
                    }),
                }),
            }),
        ],
    });
}
