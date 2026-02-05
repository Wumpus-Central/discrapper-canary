"use strict";
n.d(t, {
    A5: () => c,
    H2: () => s,
    Mq: () => o,
    NL: () => a,
    T2: () => l,
    Tv: () => d,
    Z8: () => u,
    jP: () => f,
    qr: () => _,
    tZ: () => i,
});
var r = n(73153);
function i(e) {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_OFFERED", voiceDare: e });
}
function a(e) {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_ACCEPT_OFFER", voiceDare: e });
}
function s(e) {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_DECLINE_OFFER", voiceDare: e });
}
function o(e) {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_COMPLETE", voiceDare: e });
}
function l(e) {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_CHICKEN_OUT", voiceDare: e });
}
function u(e) {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_REQUEST_COMPLETE", voiceDare: e });
}
function c(e) {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_REQUEST_CANCEL", voiceDare: e });
}
function d(e) {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_CANCEL_OFFER", dareId: e });
}
function _() {
    r.h.dispatch({ type: "VOICE_DARES_LOCAL_CLEARED" });
}
function f(e, t) {
    r.h.dispatch({ type: "VOICE_DARES_TRACKING_TICK", nowMs: e, activeElapsedMsByTargetId: t });
}
n(997752);
