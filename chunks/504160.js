n.d(t, {
    L_: () => r,
    _6: () => a,
    ji: () => l
});
var i = n(570140);
function l(e) {
    let { eventId: t, stageId: n } = e;
    (null != t || null != n) &&
        i.Z.dispatch({
            type: 'LIVE_CHANNEL_NOTICE_HIDE',
            eventId: t,
            stageId: n
        });
}
function r(e) {
    i.Z.dispatch({
        type: 'UPCOMING_GUILD_EVENT_NOTICE_HIDE',
        eventId: e
    });
}
function a(e) {
    i.Z.dispatch({
        type: 'UPCOMING_GUILD_EVENT_NOTICE_SEEN',
        guildEventId: e
    });
}
