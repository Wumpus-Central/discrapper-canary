n.d(t, {
    A: () => a,
    m: () => s,
});
var r = n(311907),
    i = n(698441);
function a(e, t) {
    return o(
        (0, r.yK)([i.Ay], () => {
            var e, n;
            return null !=
                (e = null == (n = i.Ay.getGuildScheduledEvent(t)) ? void 0 : n.guild_scheduled_event_exceptions)
                ? e
                : [];
        }),
        e,
    );
}
function s(e, t) {
    var n, r;
    return o(
        null != (n = null == (r = i.Ay.getGuildScheduledEvent(t)) ? void 0 : r.guild_scheduled_event_exceptions)
            ? n
            : [],
        e,
    );
}
function o(e, t) {
    return null == e ? void 0 : e.find((e) => e.event_exception_id === t);
}
