(r.d(t, { Z: () => a }), r(539854), r(388685));
var n = r(512722),
    l = r.n(n),
    i = r(90757),
    o = r.n(i),
    s = r(65154);
let u = [s.vA.WINDOW, s.vA.SCREEN];
function a(e, t, r) {
    var n;
    let i = window.DiscordNative;
    (l()(null != i, "Can't get desktop sources outside of native app"),
        (t = null != (n = null == t ? void 0 : t.filter((e) => u.includes(e))) ? n : u),
        (r =
            null != r
                ? r
                : {
                      width: 150,
                      height: 150
                  }));
    let a = [];
    return (
        t.includes(s.vA.SCREEN) && e.supports(s.AN.SCREEN_PREVIEWS) && (a.push(e.getScreenPreviews(r.width, r.height)), (t = t.filter((e) => e !== s.vA.SCREEN))),
        t.includes(s.vA.WINDOW) && e.supports(s.AN.WINDOW_PREVIEWS) && (a.push(e.getWindowPreviews(r.width, r.height)), (t = t.filter((e) => e !== s.vA.WINDOW))),
        0 !== t.length &&
            a.push(
                i.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: r
                })
            ),
        Promise.all(a).then((e) => o()(e))
    );
}
