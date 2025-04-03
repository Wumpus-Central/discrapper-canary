n.d(t, {
    L_: () => l,
    _6: () => a,
    ji: () => i
});
var r = n(570140);
function i(e) {
    let { eventId: t, stageId: n } = e;
    (null != t || null != n) &&
        r.Z.dispatch({
            type: 'LIVE_CHANNEL_NOTICE_HIDE',
            eventId: t,
            stageId: n
        });
}
function l(e) {
    r.Z.dispatch({
        type: 'UPCOMING_GUILD_EVENT_NOTICE_HIDE',
        eventId: e
    });
}
function a(e) {
    r.Z.dispatch({
        type: 'UPCOMING_GUILD_EVENT_NOTICE_SEEN',
        guildEventId: e
    });
}
