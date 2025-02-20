n.d(t, { Z: () => s });
var r = n(709054),
    l = n(482241),
    i = n(854698);
function s(e, t, n, s) {
    let a = (0, i.iA)(t, e),
        c = (0, i.Uq)(a.startDate, n.startDate) ? null : n.startDate,
        o = (0, i.Uq)(a.endDate, n.endDate) ? null : n.endDate;
    if (null != s)
        return (0, i.Y4)(n, a)
            ? l.Z.deleteGuildEventException(e.guild_id, e.id, s.event_exception_id)
            : l.Z.updateGuildEventException(
                  {
                      scheduled_start_time: null == c ? void 0 : c.toISOString(),
                      scheduled_end_time: null == o ? void 0 : o.toISOString(),
                      is_canceled: s.is_canceled
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
                scheduled_start_time: null == c ? void 0 : c.toISOString(),
                scheduled_end_time: null == o ? void 0 : o.toISOString(),
                is_canceled: !1
            },
            e.guild_id,
            e.id
        );
    }
}
