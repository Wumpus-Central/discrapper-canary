var i = n(855986),
    r = n(698441);
function a(e, t) {
    return e?.find((e) => e.event_exception_id === t);
}
n.d(
    t,
    {},
    {
        A: function (e, t) {
            return a(
                (0, i.yK)([r.Ay], () => r.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? []),
                e,
            );
        },
        m: function (e, t) {
            return a(r.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? [], e);
        },
    },
);
