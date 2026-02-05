n.d(t, { A: () => r });
var l = n(661191),
    i = n(496092),
    a = n(974930);
function r(e, t, n, r) {
    let d = (0, a.CI)(t, e),
        s = (0, a.zD)(d.startDate, n.startDate) ? null : n.startDate,
        u = (0, a.zD)(d.endDate, n.endDate) ? null : n.endDate;
    if (null != r)
        if ((0, a.sv)(n, d)) return i.A.deleteGuildEventException(e.guild_id, e.id, r.event_exception_id);
        else
            return i.A.updateGuildEventException(
                {
                    scheduled_start_time: s?.toISOString(),
                    scheduled_end_time: u?.toISOString(),
                    is_canceled: r.is_canceled,
                },
                e.guild_id,
                e.id,
                t,
            );
    {
        let n = l.default.extractTimestamp(t);
        return i.A.createGuildEventException(
            {
                original_scheduled_start_time: new Date(n).toISOString(),
                scheduled_start_time: s?.toISOString(),
                scheduled_end_time: u?.toISOString(),
                is_canceled: !1,
            },
            e.guild_id,
            e.id,
        );
    }
}
