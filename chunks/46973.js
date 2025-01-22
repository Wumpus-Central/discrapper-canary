r.d(n, {
    Mt: function () {
        return f;
    },
    Sh: function () {
        return s.S;
    },
    TO: function () {
        return o;
    },
    W$: function () {
        return i;
    },
    Yn: function () {
        return u.Yn;
    },
    aB: function () {
        return l.a;
    },
    jj: function () {
        return d;
    },
    zZ: function () {
        return a;
    }
});
var i,
    a,
    o,
    s = r(839548),
    l = r(946695),
    u = r(65154);
function c(e) {
    switch (e) {
        case u.AS.NATIVE:
            return r(743426).Z;
        case u.AS.WEBRTC:
            return r(959856).Z;
        case u.AS.DUMMY:
        default:
            return r(135670).Z;
    }
}
function d() {
    var e;
    return null !== (e = [u.AS.NATIVE, u.AS.WEBRTC].find((e) => c(e).supported())) && void 0 !== e ? e : u.AS.DUMMY;
}
function f(e) {
    return new (c(e))();
}
!(function (e) {
    (e.INPUT_DEVICE = 'input_device'), (e.STREAM = 'stream');
})(i || (i = {})),
    !(function (e) {
        (e.NONE = ''), (e.BACKGROUND_BLUR = 'background_blur'), (e.BACKGROUND_REPLACEMENT = 'background_replacement');
    })(a || (a = {})),
    !(function (e) {
        (e.CAMERA_BACKGROUND_PREVIEW = 'cameraBackgroundPreview'), (e.CAMERA_BACKGROUND_LIVE = 'cameraBackgroundLive');
    })(o || (o = {}));
