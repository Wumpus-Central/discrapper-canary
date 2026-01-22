n.d(t, {
    KM: () => i,
    OR: () => a,
    tB: () => s,
});
var r = n(73153);

function i(e) {
    r.h.dispatch({
        type: "VOICE_FILTER_LOOPBACK_TOGGLE",
        enabled: e,
    });
}

function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return r.h.dispatch({
        type: "VOICE_FILTER_REQUEST_SWITCH",
        newVoiceFilterId: e,
        analyticsContext: t,
    });
}

function s() {
    r.h.dispatch({
        type: "VOICE_FILTER_PREFETCH",
    });
}
