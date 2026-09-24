n.d(t, { l: () => r, p: () => a });
var i = n(25578);
function r() {
    return i.Ay.getMediaEngine().getSystemSteadyClockNowMs() ?? Date.now();
}
function a(e) {
    return Date.now() + (e ?? 0) - r();
}
