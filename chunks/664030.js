n.d(t, { A: () => a });
var l = n(661191),
    r = n(496092),
    i = n(974930);
function a(e, t, n, a) {
    let s = (0, i.CI)(t, e),
        d = (0, i.zD)(s.startDate, n.startDate) ? null : n.startDate,
        u = (0, i.zD)(s.endDate, n.endDate) ? null : n.endDate;
    if (null != a)
        if ((0, i.sv)(n, s)) return r.A.deleteGuildEventException(e.guild_id, e.id, a.event_exception_id);
        else
            return r.A.updateGuildEventException(
                {
                    scheduled_start_time: null == d ? void 0 : d.toISOString(),
                    scheduled_end_time: null == u ? void 0 : u.toISOString(),
                    is_canceled: a.is_canceled,
                },
                e.guild_id,
                e.id,
                t,
            );
    {
        let n = l.default.extractTimestamp(t);
        return r.A.createGuildEventException(
            {
                original_scheduled_start_time: new Date(n).toISOString(),
                scheduled_start_time: null == d ? void 0 : d.toISOString(),
                scheduled_end_time: null == u ? void 0 : u.toISOString(),
                is_canceled: !1,
            },
            e.guild_id,
            e.id,
        );
    }
}
