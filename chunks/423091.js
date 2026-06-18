"use strict";
n.d(t, { A: () => o });
var i = n(827343),
    r = n(439372);
let s = new (n(626584).A)("VideoFilterErrorManager");
class a extends r.A {
    actions = { MEDIA_ENGINE_VIDEO_FILTER_ERROR: (e) => this.handleVideoFilterError(e) };
    handleVideoFilterError = (e) => {
        let { target: t } = e;
        "live" === t &&
            (s.warn("Live video filter failed to initialize; disabling camera to avoid exposing raw video."),
            i.A.setVideoEnabled(!1));
    };
}
let o = new a();
