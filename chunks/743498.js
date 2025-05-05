n.d(t, {
    J_: () => i,
    _j: () => o,
    v6: () => a
});
var r = n(570140);
function i() {
    r.Z.dispatch({ type: 'VOICE_FILTER_LOAD_MODULE' });
}
function o(e) {
    r.Z.dispatch({
        type: 'VOICE_FILTER_LOOPBACK_TOGGLE',
        enabled: e
    });
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    r.Z.dispatch({
        type: 'VOICE_FILTER_REQUEST_SWITCH',
        newVoiceFilterId: e,
        analyticsContext: t
    });
}
