n.d(t, { Z: () => s });
var l = n(709054),
    i = n(482241),
    r = n(854698);
function s(e, t, n, s) {
    let d = (0, r.iA)(t, e),
        a = (0, r.Uq)(d.startDate, n.startDate) ? null : n.startDate,
        c = (0, r.Uq)(d.endDate, n.endDate) ? null : n.endDate;
    if (null != s)
        return (0, r.Y4)(n, d)
            ? i.Z.deleteGuildEventException(e.guild_id, e.id, s.event_exception_id)
            : i.Z.updateGuildEventException(
                  {
                      scheduled_start_time: null == a ? void 0 : a.toISOString(),
                      scheduled_end_time: null == c ? void 0 : c.toISOString(),
                      is_canceled: s.is_canceled
                  },
                  e.guild_id,
                  e.id,
                  t
              );
    {
        let n = l.default.extractTimestamp(t);
        return i.Z.createGuildEventException(
            {
                original_scheduled_start_time: new Date(n).toISOString(),
                scheduled_start_time: null == a ? void 0 : a.toISOString(),
                scheduled_end_time: null == c ? void 0 : c.toISOString(),
                is_canceled: !1
            },
            e.guild_id,
            e.id
        );
    }
}
