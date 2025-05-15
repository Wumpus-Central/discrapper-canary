n.d(t, {
    Mt: () => d,
    Sh: () => r.S,
    TO: () => l,
    W$: () => o,
    Yn: () => a.Yn,
    aB: () => i.a,
    jj: () => u,
    zZ: () => s
});
var r = n(839548),
    i = n(946695),
    a = n(65154),
    o = (function (e) {
        return (e.INPUT_DEVICE = 'input_device'), (e.STREAM = 'stream'), e;
    })({}),
    s = (function (e) {
        return (e.NONE = ''), (e.BACKGROUND_BLUR = 'background_blur'), (e.BACKGROUND_REPLACEMENT = 'background_replacement'), e;
    })({}),
    l = (function (e) {
        return (e.CAMERA_BACKGROUND_PREVIEW = 'cameraBackgroundPreview'), (e.CAMERA_BACKGROUND_LIVE = 'cameraBackgroundLive'), e;
    })({});
function c(e) {
    switch (e) {
        case a.AS.NATIVE:
            return n(743426).Z;
        case a.AS.WEBRTC:
            return n(959856).Z;
        case a.AS.DUMMY:
        default:
            return n(135670).Z;
    }
}
function u() {
    var e;
    return null != (e = [a.AS.NATIVE, a.AS.WEBRTC].find((e) => c(e).supported())) ? e : a.AS.DUMMY;
}
function d(e) {
    return new (c(e))();
}
