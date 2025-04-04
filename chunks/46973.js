n.d(t, {
    Mt: () => d,
    Sh: () => r.S,
    TO: () => l,
    W$: () => a,
    Yn: () => o.Yn,
    aB: () => i.a,
    jj: () => u,
    zZ: () => s
});
var r = n(839548),
    i = n(946695),
    o = n(65154),
    a = (function (e) {
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
        case o.AS.NATIVE:
            return n(743426).Z;
        case o.AS.WEBRTC:
            return n(959856).Z;
        case o.AS.DUMMY:
        default:
            return n(135670).Z;
    }
}
function u() {
    var e;
    return null != (e = [o.AS.NATIVE, o.AS.WEBRTC].find((e) => c(e).supported())) ? e : o.AS.DUMMY;
}
function d(e) {
    return new (c(e))();
}
