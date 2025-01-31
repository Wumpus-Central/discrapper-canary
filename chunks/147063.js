n.d(t, { Z: () => a });
var i = n(570140),
    r = n(65154);
function a(e, t) {
    i.Z.wait(() => {
        i.Z.dispatch({
            type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
            context: r.Yn.DEFAULT,
            userId: e,
            videoToggleState: t,
            persist: !1,
            isAutomatic: !0
        });
    });
}
