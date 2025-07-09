n.d(t, { Z: () => a });
var r = n(709054),
    l = n(482241),
    i = n(854698);
function a(e, t, n, a) {
    let s = (0, i.iA)(t, e),
        d = (0, i.Uq)(s.startDate, n.startDate) ? null : n.startDate,
        c = (0, i.Uq)(s.endDate, n.endDate) ? null : n.endDate;
    if (null != a)
        if ((0, i.Y4)(n, s)) return l.Z.deleteGuildEventException(e.guild_id, e.id, a.event_exception_id);
        else
            return l.Z.updateGuildEventException(
                {
                    scheduled_start_time: null == d ? void 0 : d.toISOString(),
                    scheduled_end_time: null == c ? void 0 : c.toISOString(),
                    is_canceled: a.is_canceled
                },
                e.guild_id,
                e.id,
                t
            );
    {
        let n = r.default.extractTimestamp(t);
        return l.Z.createGuildEventException(
            {
                original_scheduled_start_time: new Date(n).toISOString(),
                scheduled_start_time: null == d ? void 0 : d.toISOString(),
                scheduled_end_time: null == c ? void 0 : c.toISOString(),
                is_canceled: !1
            },
            e.guild_id,
            e.id
        );
    }
}
