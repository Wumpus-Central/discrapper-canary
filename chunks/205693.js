"use strict";
n.d(t, { Qo: () => _, Tr: () => u, WI: () => E, bg: () => o.b, gO: () => d, hB: () => h, x: () => l.x, yq: () => a.y });
var i,
    r,
    s,
    a = n(904986),
    o = n(651139),
    l = n(731854),
    _ = (((i = {}).INPUT_DEVICE = "input_device"), (i.STREAM = "stream"), i),
    d =
        (((r = {}).NONE = ""),
        (r.BACKGROUND_BLUR = "background_blur"),
        (r.BACKGROUND_REPLACEMENT = "background_replacement"),
        r),
    u =
        (((s = {}).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview"),
        (s.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"),
        s);
function c(e) {
    switch (e) {
        case l.Ku.NATIVE:
            return n(206959).A;
        case l.Ku.WEBRTC:
            return n(214911).A;
        case l.Ku.DUMMY:
        default:
            return n(432351).A;
    }
}
function E() {
    return [l.Ku.NATIVE, l.Ku.WEBRTC].find((e) => c(e).supported()) ?? l.Ku.DUMMY;
}
function h(e) {
    return new (c(e))();
}
