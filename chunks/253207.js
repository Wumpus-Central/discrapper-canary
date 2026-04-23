n.d(t, { z: () => c });
var i = n(311907),
    s = n(926919),
    l = n(419954),
    a = n(111162),
    r = n(253932),
    o = n(780964),
    d = n(698723),
    u = n(985018);
let c = (0, l.zD)(o.X.VOICE_AND_VIDEO_STREAM_INFO_OVERLAY, {
    useTitle: () => u.intl.string(u.t["0CEP6e"]),
    useSubtitle: () => u.intl.string(u.t["kBXuW+"]),
    useValue: function () {
        return (0, i.bG)([a.default], () => a.default.isStreamInfoOverlayEnabled);
    },
    setValue: function (e) {
        let t = a.default.isStreamInfoOverlayEnabled;
        (0, d.A)("stream_info_overlay_enabled", e, t), (0, s.x)({ isStreamInfoOverlayEnabled: e });
    },
    usePredicate: function () {
        return r.Q_.useSetting();
    },
});
