n.d(t, { default: () => x });
var l = n(627968),
    a = n(64700),
    i = n(189213),
    r = n(834730),
    s = n(645034),
    u = n(935208),
    o = n(496092),
    d = n(974930),
    c = n(722260),
    h = n(979091),
    p = n(985018);
function x(e) {
    let { guildEvent: t, recurrenceId: n, transitionState: x, onClose: m } = e,
        g = (0, c.A)(n, t.id),
        _ = (0, d.CI)(n, t),
        f = (0, d.Ri)(_, g),
        [v, D] = a.useState(f),
        [b, { loading: C, error: j }] = (0, s.A)(() => {
            let e = (function (e, t, n, l) {
                let a = (0, d.CI)(t, e),
                    i = (0, d.zD)(a.startDate, n.startDate) ? null : n.startDate,
                    r = (0, d.zD)(a.endDate, n.endDate) ? null : n.endDate;
                if (null != l)
                    if ((0, d.sv)(n, a)) return o.A.deleteGuildEventException(e.guild_id, e.id, l.event_exception_id);
                    else
                        return o.A.updateGuildEventException(
                            {
                                scheduled_start_time: i?.toISOString(),
                                scheduled_end_time: r?.toISOString(),
                                is_canceled: l.is_canceled,
                            },
                            e.guild_id,
                            e.id,
                            t,
                        );
                {
                    let n = u.default.extractTimestamp(t);
                    return o.A.createGuildEventException(
                        {
                            original_scheduled_start_time: new Date(n).toISOString(),
                            scheduled_start_time: i?.toISOString(),
                            scheduled_end_time: r?.toISOString(),
                            is_canceled: !1,
                        },
                        e.guild_id,
                        e.id,
                    );
                }
            })(t, n, v, g);
            return null == j && m(), e;
        });
    return (0, l.jsxs)(i.Modal, {
        transitionState: x,
        title: p.intl.string(p.t.wmVmXN),
        actions: [
            { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: m },
            { variant: "primary", text: p.intl.string(p.t.e5VEcE), onClick: b, loading: C, disabled: (0, d.sv)(v, f) },
        ],
        onClose: m,
        children: [
            (0, l.jsx)(h.A, {
                onScheduleChange: (e) => {
                    let { startDate: t, endDate: n } = e;
                    null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")),
                        D({ startDate: t, endDate: n });
                },
                schedule: v,
                showEndDate: null != v.endDate,
                requireEndDate: null != v.endDate,
                guildId: t.guild_id,
                recurrenceRule: t.recurrence_rule,
            }),
            null != j
                ? (0, l.jsx)(r.E, {
                      color: "text-feedback-critical",
                      variant: "text-xs/normal",
                      children: j.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
