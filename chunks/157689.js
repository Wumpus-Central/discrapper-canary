n.d(t, { Z: () => a });
var r = n(709054),
    l = n(482241),
    i = n(854698);
function a(e, t, n, a) {
    let u = (0, i.iA)(t, e),
        s = (0, i.Uq)(u.startDate, n.startDate) ? null : n.startDate,
        d = (0, i.Uq)(u.endDate, n.endDate) ? null : n.endDate;
    if (null != a)
        if ((0, i.Y4)(n, u)) return l.Z.deleteGuildEventException(e.guild_id, e.id, a.event_exception_id);
        else
            return l.Z.updateGuildEventException(
                {
                    scheduled_start_time: null == s ? void 0 : s.toISOString(),
                    scheduled_end_time: null == d ? void 0 : d.toISOString(),
                    is_canceled: a.is_canceled,
                },
                e.guild_id,
                e.id,
                t,
            );
    {
        let n = r.default.extractTimestamp(t);
        return l.Z.createGuildEventException(
            {
                original_scheduled_start_time: new Date(n).toISOString(),
                scheduled_start_time: null == s ? void 0 : s.toISOString(),
                scheduled_end_time: null == d ? void 0 : d.toISOString(),
                is_canceled: !1,
            },
            e.guild_id,
            e.id,
        );
    }
}
