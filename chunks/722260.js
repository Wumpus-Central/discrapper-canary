n.d(t, { A: () => a, m: () => s });
var i = n(17928),
    r = n(698441);
function a(e, t) {
    return l(
        (0, i.yK)([r.Ay], () => r.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? []),
        e,
    );
}
function s(e, t) {
    return l(r.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? [], e);
}
function l(e, t) {
    return e?.find((e) => e.event_exception_id === t);
}
