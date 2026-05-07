"use strict";
n.d(t, { N: () => a });
var i = n(228366),
    r = n(235058),
    s = n(731854);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    i.h.dispatch({ type: "PUSH_TO_TALK_STATE_CHANGE", isActive: e, isPriority: t }),
        r.Ay.getMediaEngine().eachConnection((n) => n.setForceAudioInput(e, t, !1), s.x.DEFAULT);
}
