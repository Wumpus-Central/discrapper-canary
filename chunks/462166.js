n.d(t, { default: () => h });
var i = n(477900),
    l = n(582128),
    d = n(189213),
    r = n(834730),
    a = n(422653),
    u = n(811091),
    s = n(496092),
    c = n(974930),
    o = n(722260),
    _ = n(383216),
    g = n(792996);
function h(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: h, onClose: p } = e,
        E = (0, o.A)(n, t.id),
        D = (0, c.CI)(n, t),
        S = (0, c.Ri)(D, E),
        [f, x] = l.useState(S),
        [m, { loading: v, error: C }] = (0, a.A)(() => {
            let e = (function (e, t, n, i) {
                let l = (0, c.CI)(t, e),
                    d = (0, c.zD)(l.startDate, n.startDate) ? null : n.startDate,
                    r = (0, c.zD)(l.endDate, n.endDate) ? null : n.endDate;
                if (null != i)
                    if ((0, c.sv)(n, l))
                        return s.default.deleteGuildEventException(e.guild_id, e.id, i.event_exception_id);
                    else
                        return s.default.updateGuildEventException(
                            {
                                scheduled_start_time: d?.toISOString() ?? null,
                                scheduled_end_time: r?.toISOString() ?? null,
                                is_canceled: i.is_canceled,
                            },
                            e.guild_id,
                            e.id,
                            t,
                        );
                {
                    let n = u.default.extractTimestamp(t);
                    return s.default.createGuildEventException(
                        {
                            original_scheduled_start_time: new Date(n).toISOString(),
                            scheduled_start_time: d?.toISOString(),
                            scheduled_end_time: r?.toISOString(),
                            is_canceled: !1,
                        },
                        e.guild_id,
                        e.id,
                    );
                }
            })(t, n, f, E);
            return (null == C && p(), e);
        });
    return (0, i.jsxs)(d.a, {
        transitionState: h,
        title: g.intl.string(g.t.wmVmXN),
        actions: [
            { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: p },
            { variant: "primary", text: g.intl.string(g.t.e5VEcE), onClick: m, loading: v, disabled: (0, c.sv)(f, S) },
        ],
        onClose: p,
        children: [
            (0, i.jsx)(_.A, {
                onScheduleChange: function (e) {
                    let { startDate: t, endDate: n } = e;
                    (null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")),
                        x({ startDate: t, endDate: n }));
                },
                schedule: f,
                showEndDate: null != f.endDate,
                requireEndDate: null != f.endDate,
                guildId: t.guild_id,
                recurrenceRule: t.recurrence_rule,
            }),
            null != C
                ? (0, i.jsx)(r.E, {
                      color: "text-feedback-critical",
                      variant: "body-xs/normal",
                      children: C.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
