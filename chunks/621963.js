"use strict";
n.d(t, { p: () => i });
let r = (0, n(945810).mj)({
    name: "2026-02-go-live-hdr",
    kind: "user",
    defaultConfig: { hdrCaptureMode: "never" },
    variations: { 1: { hdrCaptureMode: "always" }, 2: { hdrCaptureMode: "permittedDevicesOnly" } },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t });
}
