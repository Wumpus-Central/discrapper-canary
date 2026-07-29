"use strict";
n.d(t, { l: () => r, p: () => a });
var i = n(293246);
function r() {
    return i.Ay.getMediaEngine().getSystemSteadyClockNowMs() ?? Date.now();
}
function a() {
    return Date.now() - r();
}
