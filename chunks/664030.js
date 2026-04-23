n.d(t, { A: () => r });
var l = n(661191),
    a = n(496092),
    i = n(974930);
function r(e, t, n, r) {
    let s = (0, i.CI)(t, e),
        u = (0, i.zD)(s.startDate, n.startDate) ? null : n.startDate,
        d = (0, i.zD)(s.endDate, n.endDate) ? null : n.endDate;
    if (null != r)
        if ((0, i.sv)(n, s)) return a.A.deleteGuildEventException(e.guild_id, e.id, r.event_exception_id);
        else
            return a.A.updateGuildEventException(
                {
                    scheduled_start_time: u?.toISOString(),
                    scheduled_end_time: d?.toISOString(),
                    is_canceled: r.is_canceled,
                },
                e.guild_id,
                e.id,
                t,
            );
    {
        let n = l.default.extractTimestamp(t);
        return a.A.createGuildEventException(
            {
                original_scheduled_start_time: new Date(n).toISOString(),
                scheduled_start_time: u?.toISOString(),
                scheduled_end_time: d?.toISOString(),
                is_canceled: !1,
            },
            e.guild_id,
            e.id,
        );
    }
}
