n.d(t, {
    _j: () => i,
    jG: () => o,
    v6: () => a
});
var r = n(570140);
function i(e) {
    r.Z.dispatch({
        type: 'VOICE_FILTER_LOOPBACK_TOGGLE',
        enabled: e
    });
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return r.Z.dispatch({
        type: 'VOICE_FILTER_REQUEST_SWITCH',
        newVoiceFilterId: e,
        analyticsContext: t
    });
}
function o() {
    r.Z.dispatch({ type: 'VOICE_FILTER_PREFETCH' });
}
