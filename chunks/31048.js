n.d(t, { l: () => r, p: () => a });
var i = n(999926);
function r() {
    return i.Ay.getMediaEngine().getSystemSteadyClockNowMs() ?? Date.now();
}
function a(e) {
    return Math.round(Date.now() + (e ?? 0) - r());
}
