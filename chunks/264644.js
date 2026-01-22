n.d(t, {
    A: () => a,
});
var r = n(73153),
    i = n(731854);

function a(e, t) {
    r.h.wait(() => {
        r.h.dispatch({
            type: "AUDIO_SET_LOCAL_VIDEO_DISABLED",
            context: i.x.DEFAULT,
            userId: e,
            videoToggleState: t,
            persist: !1,
            isAutomatic: !0,
        });
    });
}
