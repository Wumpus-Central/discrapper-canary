"use strict";
n.d(t, { A: () => s, m: () => a });
var r = n(311907),
    i = n(698441);
function s(e, t) {
    return o(
        (0, r.yK)([i.Ay], () => i.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? []),
        e,
    );
}
function a(e, t) {
    return o(i.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? [], e);
}
function o(e, t) {
    return e?.find((e) => e.event_exception_id === t);
}
