var i,
    r,
    a,
    s = n(904986),
    l = n(651139),
    o = n(731854),
    d = (((i = {}).INPUT_DEVICE = "input_device"), (i.STREAM = "stream"), i),
    c =
        (((r = {}).NONE = ""),
        (r.BACKGROUND_BLUR = "background_blur"),
        (r.BACKGROUND_REPLACEMENT = "background_replacement"),
        r),
    u =
        (((a = {}).CAMERA_BACKGROUND_PREVIEW = "cameraBackgroundPreview"),
        (a.CAMERA_BACKGROUND_LIVE = "cameraBackgroundLive"),
        a);
function _(e) {
    switch (e) {
        case o.Ku.NATIVE:
            return n(31595).A;
        case o.Ku.WEBRTC:
            return n(510098).A;
        case o.Ku.DUMMY:
        default:
            return n(432351).A;
    }
}
n.d(
    t,
    { bg: () => l.b, x: () => o.x, yq: () => s.y },
    {
        Qo: d,
        Tr: u,
        WI: function () {
            return [o.Ku.NATIVE, o.Ku.WEBRTC].find((e) => _(e).supported()) ?? o.Ku.DUMMY;
        },
        gO: c,
        hB: function (e) {
            return new (_(e))();
        },
    },
);
