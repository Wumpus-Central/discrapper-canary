n.d(t, {
    C: () => i,
    U: () => o
});
var r = n(570140);
function i(e, t) {
    r.Z.dispatch({
        type: 'MEDIA_PLAYBACK_RATE_UPDATE',
        rate: e,
        playbackType: t
    });
}
function o(e, t, n) {
    r.Z.dispatch({
        type: 'MEDIA_PLAYBACK_POSITION_UPDATE',
        cacheKey: e,
        position: t,
        duration: n
    });
}
