n.d(t, { Z: () => s });
var l = n(709054),
    r = n(482241),
    i = n(854698);
function s(e, t, n, s) {
    let a = (0, i.iA)(t, e),
        c = (0, i.Uq)(a.startDate, n.startDate) ? null : n.startDate,
        d = (0, i.Uq)(a.endDate, n.endDate) ? null : n.endDate;
    if (null != s)
        if ((0, i.Y4)(n, a)) return r.Z.deleteGuildEventException(e.guild_id, e.id, s.event_exception_id);
        else
            return r.Z.updateGuildEventException(
                {
                    scheduled_start_time: null == c ? void 0 : c.toISOString(),
                    scheduled_end_time: null == d ? void 0 : d.toISOString(),
                    is_canceled: s.is_canceled
                },
                e.guild_id,
                e.id,
                t
            );
    {
        let n = l.default.extractTimestamp(t);
        return r.Z.createGuildEventException(
            {
                original_scheduled_start_time: new Date(n).toISOString(),
                scheduled_start_time: null == c ? void 0 : c.toISOString(),
                scheduled_end_time: null == d ? void 0 : d.toISOString(),
                is_canceled: !1
            },
            e.guild_id,
            e.id
        );
    }
}
