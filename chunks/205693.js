"use strict";
n.d(t, { Qo: () => u, Tr: () => c, WI: () => f, bg: () => o.b, gO: () => d, hB: () => E, x: () => l.x, yq: () => a.y });
var r,
    i,
    s,
    a = n(904986),
    o = n(651139),
    l = n(731854),
    u = (((r = {}).INPUT_DEVICE = "input_device"), (r.STREAM = "stream"), r),
    d =
        (((i = {}).NONE = ""),
        (i.BACKGROUND_BLUR = "background_blur"),
        (i.BACKGROUND_REPLACEMENT = "background_replacement"),
        i),
    c =
        (((s = {}).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview"),
        (s.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"),
        s);
function _(e) {
    switch (e) {
        case l.Ku.NATIVE:
            return n(531417).A;
        case l.Ku.WEBRTC:
            return n(93507).A;
        case l.Ku.DUMMY:
        default:
            return n(432351).A;
    }
}
function f() {
    return [l.Ku.NATIVE, l.Ku.WEBRTC].find((e) => _(e).supported()) ?? l.Ku.DUMMY;
}
function E(e) {
    return new (_(e))();
}
