n.d(t, {
    T: () => a,
    t: () => o
});
var r = n(570140),
    i = n(131951);
function a(e) {
    var t, n;
    null == (n = i.Z.getMediaEngine()) || null == (t = n.presentNativeScreenSharePicker) || t.call(n, e),
        r.Z.dispatch({
            type: 'NATIVE_SCREEN_SHARE_PICKER_PRESENT',
            style: e
        });
}
function o() {
    var e, t;
    null == (t = i.Z.getMediaEngine()) || null == (e = t.releaseNativeDesktopVideoSourcePickerStream) || e.call(t), r.Z.dispatch({ type: 'NATIVE_SCREEN_SHARE_PICKER_RELEASE' });
}
