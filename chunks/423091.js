"use strict";
n.d(t, { A: () => l });
var i = n(827343),
    r = n(439372);
let a = new (n(626584).A)("VideoFilterErrorManager");
class s extends r.A {
    actions = { MEDIA_ENGINE_VIDEO_FILTER_ERROR: (e) => this.handleVideoFilterError(e) };
    handleVideoFilterError = (e) => {
        let { target: t } = e;
        "live" === t &&
            (a.warn("Live video filter failed to initialize; disabling camera to avoid exposing raw video."),
            i.A.setVideoEnabled(!1));
    };
}
let l = new s();
