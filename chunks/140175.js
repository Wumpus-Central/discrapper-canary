"use strict";
n.d(t, { N: () => a });
var r = n(73153),
    i = n(430452),
    s = n(731854);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    r.h.dispatch({ type: "PUSH_TO_TALK_STATE_CHANGE", isActive: e, isPriority: t }),
        i.Ay.getMediaEngine().eachConnection((n) => n.setForceAudioInput(e, t, !1), s.x.DEFAULT);
}
