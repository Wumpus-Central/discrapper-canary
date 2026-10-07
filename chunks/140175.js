n.d(t, { N: () => a });
var i = n(73153),
    r = n(731854);
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (i.h.dispatch({ type: "PUSH_TO_TALK_STATE_CHANGE", isActive: t, isPriority: n }),
        e.eachConnection((e) => e.setForceAudioInput(t, n, !1), r.x.DEFAULT));
}
