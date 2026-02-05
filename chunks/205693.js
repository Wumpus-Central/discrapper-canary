"use strict";
n.d(t, { Qo: () => s, Tr: () => l, WI: () => c, bg: () => i.b, gO: () => o, hB: () => d, x: () => a.x, yq: () => r.y });
var r = n(904986),
    i = n(651139),
    a = n(731854),
    s = (function (e) {
        return (e.INPUT_DEVICE = "input_device"), (e.STREAM = "stream"), e;
    })({}),
    o = (function (e) {
        return (
            (e.NONE = ""),
            (e.BACKGROUND_BLUR = "background_blur"),
            (e.BACKGROUND_REPLACEMENT = "background_replacement"),
            e
        );
    })({}),
    l = (function (e) {
        return (
            (e.CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview"),
            (e.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"),
            e
        );
    })({});
function u(e) {
    switch (e) {
        case a.Ku.NATIVE:
            return n(531417).A;
        case a.Ku.WEBRTC:
            return n(93507).A;
        case a.Ku.DUMMY:
        default:
            return n(432351).A;
    }
}
function c() {
    return [a.Ku.NATIVE, a.Ku.WEBRTC].find((e) => u(e).supported()) ?? a.Ku.DUMMY;
}
function d(e) {
    return new (u(e))();
}
