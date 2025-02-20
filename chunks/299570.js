n.d(t, {
    T: () => o,
    t: () => a
});
var r = n(570140),
    i = n(131951);
function o(e) {
    var t, n;
    null === (n = i.Z.getMediaEngine()) || void 0 === n || null === (t = n.presentNativeScreenSharePicker) || void 0 === t || t.call(n, e),
        r.Z.dispatch({
            type: 'NATIVE_SCREEN_SHARE_PICKER_PRESENT',
            style: e
        });
}
function a() {
    var e, t;
    null === (t = i.Z.getMediaEngine()) || void 0 === t || null === (e = t.releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(t), r.Z.dispatch({ type: 'NATIVE_SCREEN_SHARE_PICKER_RELEASE' });
}
