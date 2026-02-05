"use strict";
n.d(t, { N: () => l });
var r = n(73153),
    i = n(555444),
    a = n(430452),
    s = n(652215),
    o = n(731854);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.h.dispatch({ type: "PUSH_TO_TALK_STATE_CHANGE", isActive: e, isPriority: t, isLatched: n });
    let l = a.A.getMode() === s.TBI.PUSH_TO_TALK,
        u =
            (0, i.H)({ location: "doPTT", autoTrackExposure: !1 }).enableLatching &&
            !0 === a.A.getModeOptions().pttLatchingEnabled;
    a.A.getMediaEngine().eachConnection((r) => r.setForceAudioInput(e, t, l && u && !n && !e), o.x.DEFAULT);
}
