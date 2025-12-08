n.d(t, { Z: () => a });
var l = n(709054),
    r = n(482241),
    i = n(854698);
function a(e, t, n, a) {
    let u = (0, i.iA)(t, e),
        s = (0, i.Uq)(u.startDate, n.startDate) ? null : n.startDate,
        d = (0, i.Uq)(u.endDate, n.endDate) ? null : n.endDate;
    if (null != a)
        if ((0, i.Y4)(n, u)) return r.Z.deleteGuildEventException(e.guild_id, e.id, a.event_exception_id);
        else
            return r.Z.updateGuildEventException(
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
        let n = l.default.extractTimestamp(t);
        return r.Z.createGuildEventException(
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
