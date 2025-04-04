n.d(t, { Z: () => a }), n(653041), n(47120);
var r = n(512722),
    i = n.n(r),
    l = n(90757),
    o = n.n(l),
    u = n(65154);
let s = [u.vA.WINDOW, u.vA.SCREEN];
function a(e, t, n) {
    var r;
    let l = window.DiscordNative;
    i()(null != l, "Can't get desktop sources outside of native app"),
        (t = null != (r = null == t ? void 0 : t.filter((e) => s.includes(e))) ? r : s),
        (n =
            null != n
                ? n
                : {
                      width: 150,
                      height: 150
                  });
    let a = [];
    return (
        t.includes(u.vA.SCREEN) && e.supports(u.AN.SCREEN_PREVIEWS) && (a.push(e.getScreenPreviews(n.width, n.height)), (t = t.filter((e) => e !== u.vA.SCREEN))),
        t.includes(u.vA.WINDOW) && e.supports(u.AN.WINDOW_PREVIEWS) && (a.push(e.getWindowPreviews(n.width, n.height)), (t = t.filter((e) => e !== u.vA.WINDOW))),
        0 !== t.length &&
            a.push(
                l.desktopCapture.getDesktopCaptureSources({
                    types: t,
                    thumbnailSize: n
                })
            ),
        Promise.all(a).then((e) => o()(e))
    );
}
