n.d(t, {
    J_: () => r,
    _j: () => a,
    v6: () => s
});
var i = n(570140);
function r() {
    i.Z.dispatch({ type: 'VOICE_FILTER_LOAD_MODULE' });
}
function a(e) {
    i.Z.dispatch({
        type: 'VOICE_FILTER_LOOPBACK_TOGGLE',
        enabled: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'VOICE_FILTER_REQUEST_SWITCH',
        newVoiceFilterId: e
    });
}
