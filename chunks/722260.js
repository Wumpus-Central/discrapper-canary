"use strict";
n.d(t, { A: () => s, m: () => a });
var i = n(17928),
    r = n(698441);
function s(e, t) {
    return o(
        (0, i.yK)([r.Ay], () => r.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? []),
        e,
    );
}
function a(e, t) {
    return o(r.Ay.getGuildScheduledEvent(t)?.guild_scheduled_event_exceptions ?? [], e);
}
function o(e, t) {
    return e?.find((e) => e.event_exception_id === t);
}
