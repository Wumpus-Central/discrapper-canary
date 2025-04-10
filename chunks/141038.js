r.d(t, { Z: () => s }), r(539854), r(388685);
var n = r(512722),
    l = r.n(n),
    o = r(90757),
    i = r.n(o),
    u = r(65154);
let a = [u.vA.WINDOW, u.vA.SCREEN];
function s(e, t, r) {
    var n;
    let o = window.DiscordNative;
    l()(null != o, "Can't get desktop sources outside of native app"),
        (t = null != (n = null == t ? void 0 : t.filter((e) => a.includes(e))) ? n : a),
        (r =
            null != r
                ? r
                : {
                      width: 150,
                      height: 150
                  });
    let s = [];
    return (
        t.includes(u.vA.SCREEN) && e.supports(u.AN.SCREEN_PREVIEWS) && (s.push(e.getScreenPreviews(r.width, r.height)), (t = t.filter((e) => e !== u.vA.SCREEN))),
        t.includes(u.vA.WINDOW) && e.supports(u.AN.WINDOW_PREVIEWS) && (s.push(e.getWindowPreviews(r.width, r.height)), (t = t.filter((e) => e !== u.vA.WINDOW))),
        0 !== t.length &&
            s.push(
                o.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: r
                })
            ),
        Promise.all(s).then((e) => i()(e))
    );
}
