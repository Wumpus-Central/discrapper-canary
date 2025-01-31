n.d(t, {
    Mt: () => d,
    Sh: () => i.S,
    TO: () => l,
    W$: () => s,
    Yn: () => a.Yn,
    aB: () => r.a,
    jj: () => c,
    zZ: () => o
});
var i = n(839548),
    r = n(946695),
    a = n(65154),
    s = (function (e) {
        return (e.INPUT_DEVICE = 'input_device'), (e.STREAM = 'stream'), e;
    })({}),
    o = (function (e) {
        return (e.NONE = ''), (e.BACKGROUND_BLUR = 'background_blur'), (e.BACKGROUND_REPLACEMENT = 'background_replacement'), e;
    })({}),
    l = (function (e) {
        return (e.CAMERA_BACKGROUND_PREVIEW = 'cameraBackgroundPreview'), (e.CAMERA_BACKGROUND_LIVE = 'cameraBackgroundLive'), e;
    })({});
function u(e) {
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
function c() {
    var e;
    return null !== (e = [a.AS.NATIVE, a.AS.WEBRTC].find((e) => u(e).supported())) && void 0 !== e ? e : a.AS.DUMMY;
}
function d(e) {
    return new (u(e))();
}
